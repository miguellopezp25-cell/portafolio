import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://miguellopez.dev";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/my-services", priority: 0.8 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/cotizar", priority: 0.5 },
    { path: "/contacto", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
