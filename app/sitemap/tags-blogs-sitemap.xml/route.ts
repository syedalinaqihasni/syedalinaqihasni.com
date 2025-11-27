import { allTags } from "@/constants/blogs";
import { properCaseToDash } from "@/lib/utils";

export async function GET() {
  const baseUrl = "https://www.syedalinaqihasni.com";

  const urls = allTags
    .map((post) => {
      return `
        <url>
          <loc>${baseUrl}/blogs/tag/${properCaseToDash(post)}</loc>
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
