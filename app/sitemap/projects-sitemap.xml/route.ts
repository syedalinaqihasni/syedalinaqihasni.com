import { posts } from "@/constants/blogs";
import { projects } from "@/constants/projects";
import { MetadataRoute } from "next";

export async function GET() {
  const baseUrl = "https://www.syedalinaqihasni.com/projects";

  const urls = projects
    .map((post) => {
      return `
        <url>
          <loc>${baseUrl}/${post.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    })
    .join("");

  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
