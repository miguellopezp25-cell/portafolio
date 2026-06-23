import { type ReactNode } from "react"
import { render, type RenderOptions } from "@testing-library/react"
import { LanguageProvider } from "@/components/common/LanguageProvider"
import { ThemeProvider } from "@/components/theme/ThemeProvider"

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}

function renderWithProviders(
  ui: ReactNode,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export { renderWithProviders }
