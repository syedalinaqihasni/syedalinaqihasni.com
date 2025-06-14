import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const metas = [
  {
    id: 1,
    src: `/gallery/blogs-placeholder.jpg`,
    alt: 'blogs-placeholder.jpg',
    caption: 'Generic blog placeholder image.',
    link: '#',
    album: 'badges',
    tags: ['placeholder', 'generic']
  },
  {
    id: 2,
    src: `/gallery/content-management-for-pwas-embrace-the-headless-cms-approach.png`,
    alt: "Headless CMS for PWAs",
    caption: "Managing content for PWAs using a headless CMS approach.",
    link: '#',
    album: "professional",
    tags: ["pwa", "headless cms", "content management"]
  },
  {
    id: 3,
    src: `/gallery/essential-apps-every-shopify-store-must-have.png`,
    alt: "Shopify essential apps",
    caption: "Top apps every Shopify store should have.",
    link: '#',
    album: "professional",
    tags: ["shopify", "apps", "ecommerce"]
  },
  {
    id: 4,
    src: `/gallery/exploring-github-cli-a-comprehensive-guide-to-streamlining-your-workflow-using-cli.png`,
    alt: "GitHub CLI Guide",
    caption: "Streamline your workflow using GitHub CLI.",
    link: '#',
    album: "badges",
    tags: ["cli", "github", "workflow", "tools"]
  },
  {
    id: 5,
    src: `/gallery/headless-wordpress-and-content-management-systems.webp`,
    alt: "Headless WordPress CMS",
    caption: "Benefits of using WordPress in a headless architecture.",
    link: '#',
    album: "professional",
    tags: ["wordpress", "cms", "headless"]
  },
  {
    id: 6,
    src: `/gallery/how-small-shopify-app-development-skills-can-boost-your-career.webp`,
    alt: "Shopify App Dev Career Boost",
    caption: "Using Shopify app dev to grow your career.",
    link: '#',
    album: "professional",
    tags: ["shopify", "career", "app development"]
  },
  {
    id: 7,
    src: `/gallery/how-to-optimize-your-commits-for-efficient-project-management.jpg`,
    alt: "Optimizing Commits",
    caption: "Write meaningful commits for better project management.",
    link: '#',
    album: "badges",
    tags: ["git", "commits", "project management"]
  },
  {
    id: 8,
    src: `/gallery/integrating-nodemailer-with-nextjs-a-comprehensive-guide.jpg`,
    alt: "Nodemailer + Next.js",
    caption: "Integrating Nodemailer with Next.js.",
    link: '#',
    album: "professional",
    tags: ["nextjs", "nodemailer", "email"]
  },
  {
    id: 9,
    src: `/gallery/reactpress-a-seamless-react-app-workflow-with-wordpress-cms.png`,
    alt: "ReactPress Workflow",
    caption: "Seamless React app integration with WordPress CMS.",
    link: '#',
    album: "professional",
    tags: ["react", "wordpress", "integration"]
  },
  {
    id: 10,
    src: `/gallery/solid-principles-of-object-oriented-design-a-quick-guide-to-enhance-your-development-standards.jpg`,
    alt: "SOLID Principles Guide",
    caption: "Quick guide to SOLID principles for better OOP design.",
    link: '#',
    album: "academic",
    tags: ["solid", "oop", "design patterns"]
  },
  {
    id: 11,
    src: `/gallery/stay-ahead-of-vulnerabilities-a-guide-to-github-dependabot-and-codeql.jpg`,
    alt: "Dependabot & CodeQL Guide",
    caption: "Improve security with GitHub Dependabot and CodeQL.",
    link: '#',
    album: "badges",
    tags: ["security", "github", "dependabot", "codeql"]
  },
  {
    id: 12,
    src: `/gallery/the-beginners-guide-to-seo.jpg`,
    alt: "Beginner's SEO Guide",
    caption: "A beginner-friendly guide to understanding SEO.",
    link: '#',
    album: "academic",
    tags: ["seo", "beginner", "search engine optimization"]
  },
  {
    id: 13,
    src: `/gallery/the-synergy-of-individuality-and-team-skills-unleashing-the-full-potential-of-collaboration.png`,
    alt: "Team Collaboration Synergy",
    caption: "Balance individuality and teamwork for maximum impact.",
    link: '#',
    album: "academic",
    tags: ["teamwork", "collaboration", "soft skills"]
  },
  {
    id: 14,
    src: `/gallery/top-wordpress-push-notification-plugins-for-web-android-ios.webp`,
    alt: "WordPress Push Plugins",
    caption: "Top push notification plugins for WordPress.",
    link: '#',
    album: "professional",
    tags: ["wordpress", "push notifications", "plugins"]
  },
  {
    id: 15,
    src: `/gallery/unveiling-the-power-of-structured-data-markup-script-elevating-your-websites-seo.png`,
    alt: "Structured Data SEO",
    caption: "Boost SEO with structured data markup.",
    link: '#',
    album: "academic",
    tags: ["seo", "structured data", "schema.org"]
  },
  {
    id: 16,
    src: `/gallery/what-is-an-erp-solution-how-to-choose-the-best-one-for-your-wordpress.webp`,
    alt: "ERP for WordPress",
    caption: "Choosing the best ERP system for WordPress.",
    link: '#',
    album: "professional",
    tags: ["wordpress", "erp", "business"]
  },
  {
    id: 17,
    src: `/gallery/why-im-moving-from-shortcodes-to-custom-blocks-in-wordpress-and-you-should-too.webp`,
    alt: "Shortcodes to Custom Blocks",
    caption: "Why switch from shortcodes to blocks in WordPress.",
    link: '#',
    album: "professional",
    tags: ["wordpress", "blocks", "gutenberg", "shortcodes"]
  }
];

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'gallery');

    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(galleryPath);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];

    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const images = imageFiles.map((file, index) => {
      const filePath = `/gallery/${file}`;
      const meta = metas.find(m => m.src === filePath);

      return {
        id: meta?.id ?? index + 1,
        src: filePath,
        alt: meta?.alt ?? file,
        caption: meta?.caption ?? 'No caption available',
        album: meta?.album ?? 'default',
        tags: meta?.tags ?? [],
        link: meta?.link ?? '#',
      };
    });

    return NextResponse.json(images);
  } catch (error) {
    // console.error('Error reading gallery directory:', error);
    return NextResponse.json([]);
  }
}
