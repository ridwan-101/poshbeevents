import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
  }));
  const articles = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...articles];
}
