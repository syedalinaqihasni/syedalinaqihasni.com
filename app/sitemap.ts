import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.syedalinaqihasni.com";

  return [
    {
      url: `${baseUrl}/sitemap/pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/blogs-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/tags-blogs-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/catgories-blogs-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/projects-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/services-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/related-services-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/jobs-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap/technalogies-sitemap.xml`,
      lastModified: new Date(),
    },
  ];
}
