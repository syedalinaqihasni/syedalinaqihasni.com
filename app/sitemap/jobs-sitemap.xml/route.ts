
import { countries } from "@/constants/countries";
import { JOBS } from "@/constants/jobs";

export async function GET() {
  const baseUrl = "https://www.syedalinaqihasni.com/jobs";
  const paths = [
  // Base paths for jobs without location
  ...JOBS.map(job => job.slug),
  // Paths with country, city, and area
  ...countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.flatMap(area => 
        JOBS.flatMap(job => [
          `${job.slug}/${country.slug}`,
          `${job.slug}/${country.slug}/${city.slug}`,
          `${job.slug}/${country.slug}/${city.slug}/${area.slug}`,
        ])
      )
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
