import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://readynest.com";

  const staticPages = [
    "/",
    "/how-we-help",
    "/buy",
    "/sell-upgrade",
    "/express",
    "/areas",
    "/areas/san-diego-county",
    "/areas/orange-county",
    "/areas/los-angeles-county",
    "/resources",
    "/faq",
    "/get-started",
    "/privacy",
    "/terms",
    "/disclosures",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/areas/") ? 0.8 : 0.7,
  }));
}

