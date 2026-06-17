import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cotizar"],
    },
    sitemap: "https://miguellopez.dev/sitemap.xml",
  };
}
