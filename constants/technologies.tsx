export const TECHNOLOGIES = [
  // Development – Frontend
  { slug: "react", title: "React", category: "development" },
  { slug: "next.js", title: "Next.js", category: "development" },
  { slug: "typescript", title: "TypeScript", category: "development" },
  { slug: "tailwind-css", title: "Tailwind CSS", category: "development" },
  { slug: "framer-motion", title: "Framer Motion", category: "development" },

  // Development – Backend & DevOps
  { slug: "node.js", title: "Node.js", category: "development" },
  { slug: "express", title: "Express.js", category: "development" },
  { slug: "mongodb", title: "MongoDB", category: "development" },
  { slug: "postgresql", title: "PostgreSQL", category: "development" },
  { slug: "docker", title: "Docker", category: "development" },

  // WordPress / PHP (Development + E-commerce)
  { slug: "wordpress", title: "WordPress", category: "development" },
  { slug: "php", title: "PHP", category: "development" },
  { slug: "mysql", title: "MySQL", category: "development" },
  { slug: "woocommerce", title: "WooCommerce", category: "ecommerce" },
  {
    slug: "acf",
    title: "Advanced Custom Fields (ACF)",
    category: "development",
  },

  // E-commerce platforms
  { slug: "shopify", title: "Shopify", category: "ecommerce" },
  { slug: "stripe", title: "Stripe", category: "ecommerce" },
  { slug: "paypal", title: "PayPal", category: "ecommerce" },

  // Design tools
  { slug: "figma", title: "Figma", category: "design" },
  { slug: "adobe-xd", title: "Adobe XD", category: "design" },
  { slug: "sketch", title: "Sketch", category: "design" },
  { slug: "invision", title: "InVision", category: "design" },
  { slug: "principle", title: "Principle", category: "design" },

  // Marketing / SEO / Analytics
  {
    slug: "google-analytics",
    title: "Google Analytics",
    category: "marketing",
  },
  {
    slug: "search-console",
    title: "Google Search Console",
    category: "marketing",
  },
  { slug: "semrush", title: "SEMrush", category: "marketing" },
  { slug: "ahrefs", title: "Ahrefs", category: "marketing" },

  // Support / Monitoring
  { slug: "monitoring-tools", title: "Monitoring Tools", category: "support" },
];

export const TECHNOLOGY_CATEGORIES = [
  { id: "all", name: "All Technologies" },
  { id: "development", name: "Development" },
  { id: "design", name: "Design" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "marketing", name: "Marketing" },
  { id: "support", name: "Support" },
];

export const TECHNOLOGIES_PAGE_CONSTANT = {
  title: "My Technologies",
  description:
    "Professional web development and design technologies to help your business grow online.",
  cta: {
    title: "Ready to Start Your Project?",
    description:
      "Let's discuss your requirements and create something amazing together.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  },
};
