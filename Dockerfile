FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile

# ========================================================
# ¡AQUÍ ES DONDE SUCEDE LA MAGIA! (Etapa de Builder)
# ========================================================
FROM base AS builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 1. Le decimos a Docker que espere esta variable desde Railway durante el Build
ARG NEXT_PUBLIC_GO_API_URL
# 2. La asignamos como variable de entorno para que Next.js la pueda leer al compilar
ENV NEXT_PUBLIC_GO_API_URL=$NEXT_PUBLIC_GO_API_URL

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile --offline && \
  pnpm build
# ========================================================

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://0.0.0.0:3000/ || exit 1

CMD ["node", "server.js"]