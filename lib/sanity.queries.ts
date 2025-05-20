import groq from 'groq';

// Projects queries
export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  technologies,
  githubUrl,
  liveUrl,
  featured,
  publishedAt
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  description,
  "image": image.asset->url,
  technologies,
  githubUrl,
  liveUrl
}`;

// Blog queries
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  publishedAt,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  content,
  publishedAt,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180)
}`;

// Events queries
export const eventsQuery = groq`*[_type == "event"] | order(date desc) {
  _id,
  title,
  slug,
  type,
  description,
  date,
  location,
  virtual,
  "image": image.asset->url
}`;

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  type,
  description,
  date,
  location,
  virtual,
  "image": image.asset->url,
  content
}`;

// Skills queries
export const skillsQuery = groq`*[_type == "skill"] | order(order asc) {
  _id,
  name,
  category,
  level,
  "logo": logo.asset->url,
  description
}`;

// Experience queries
export const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  jobTitle,
  company,
  "companyLogo": companyLogo.asset->url,
  location,
  remote,
  startDate,
  endDate,
  current,
  description,
  skills
}`;

// Gallery queries
export const galleryQuery = groq`*[_type == "gallery"] | order(date desc) {
  _id,
  title,
  description,
  "images": images[]{
    "url": asset->url,
    caption,
    alt
  },
  tags,
  date
}`;

// Social links queries
export const socialLinksQuery = groq`*[_type == "social"] | order(order asc) {
  _id,
  platform,
  title,
  url,
  displayOnHeader,
  displayOnFooter,
  displayOnHomepage,
  displayOnLinkTree
}`;