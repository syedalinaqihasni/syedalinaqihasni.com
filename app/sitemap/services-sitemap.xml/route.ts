import { services } from "@/constants/area-services";
import { posts } from "@/constants/blogs";
import { countries } from "@/constants/countries";
import { JOBS } from "@/constants/jobs";
import { MetadataRoute } from "next";

export async function GET() {
  const baseUrl = "https://www.syedalinaqihasni.com/services";
const paths = [
  ...services,
  ...countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.flatMap(area => [
        // Paths combining service with country, city, and area
        ...services.map(service => `${service}/${country.slug}`),
        ...services.map(service => `${service}/${country.slug}/${city.slug}`),
        ...services.map(service => `${service}/${country.slug}/${city.slug}/${area.slug}`),
      ])
    )
  ),
];

  const urls = paths
    .map((post) => {
      return `
        <url>
          <loc>${baseUrl}/${post}</loc>
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
