import type { MetadataRoute } from 'next';
import { posts } from '@/constants/blogs';
import { projects } from '@/constants/projects';
import { events } from '@/constants/events';
import { LINKS_GROUPS } from '@/constants/footer';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.syedalinaqihasni.com';

  const linkRoutes: MetadataRoute.Sitemap = LINKS_GROUPS.flat().map((link) => ({
    url: `${baseUrl}${link.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.path === '/' ? 1 : 0.6,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...linkRoutes, ...postRoutes, ...projectRoutes, ...eventRoutes];
}
