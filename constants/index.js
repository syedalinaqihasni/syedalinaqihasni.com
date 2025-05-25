import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';

const TOOLS = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Django', 'PostgreSQL'],
  },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
];

const JOURNEY = [
  {
    year: '2018',
    title: 'Started Programming',
    description:
      'Began my journey with web development, learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2019',
    title: 'First Developer Role',
    description:
      'Joined a startup as a junior frontend developer, working with React.',
  },
  {
    year: '2020',
    title: 'Front EndDevelopment',
    description:
      'Expanded my skills to include backend development with Node.js and databases.',
  },
  {
    year: '2021',
    title: 'Senior Developer',
    description:
      'Promoted to senior developer, leading team projects and mentoring juniors.',
  },
  {
    year: '2022',
    title: 'Tech Lead',
    description:
      'Became a tech lead, architecting solutions and managing development teams.',
  },
  {
    year: '2023',
    title: 'Independent Consultant',
    description:
      'Started working as an independent consultant, helping businesses scale their tech.',
  },
];
const ARCHIVE = {
  medium: [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      excerpt:
        'Learn how to structure and scale your React applications for better maintainability.',
      date: '2024-02-15',
      url: 'https://medium.com/@SyedAliNaqiHasni/building-scalable-react-applications-947b6d5c6b0c',
      tags: ['React', 'Architecture', 'JavaScript'],
      readTime: '8 min read',
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns',
      excerpt:
        'Exploring advanced TypeScript patterns and best practices for large applications.',
      date: '2024-01-20',
      url: 'https://medium.com/@SyedAliNaqiHasni/advanced-typescript-patterns-0a06c03204f3',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      readTime: '12 min read',
    },
  ],
  devto: [
    {
      id: '1',
      title: 'Getting Started with Next.js 14',
      excerpt:
        'A comprehensive guide to building applications with Next.js 14.',
      date: '2024-02-10',
      url: 'https://dev.to/syedalinaqihasni/getting-started-with-nextjs-14-4de3',
      tags: ['Next.js', 'React', 'Web Development'],
      readTime: '10 min read',
    },
    {
      id: '2',
      title: 'CSS Grid Mastery',
      excerpt: 'Master CSS Grid layout with practical examples and tips.',
      date: '2024-01-15',
      url: 'https://dev.to/syedalinaqihasni/css-grid-mastery-with-practical-examples-1n3k',
      tags: ['CSS', 'Web Design', 'Frontend'],
      readTime: '6 min read',
    },
  ],
  reddit: [
    {
      id: '1',
      title: 'Optimizing React Performance',
      excerpt: 'Tips and tricks for improving React application performance.',
      date: '2024-02-05',
      url: 'https://www.reddit.com/r/reactjs/comments/1ah3n2r/optimizing_react_performance_what_are_you_missing/',
      tags: ['React', 'Performance', 'JavaScript'],
      upvotes: 245,
    },
    {
      id: '2',
      title: 'Modern CSS Features',
      excerpt:
        'Discussion about the latest CSS features and their browser support.',
      date: '2024-01-10',
      url: 'https://www.reddit.com/r/webdev/comments/1a8zjla/modern_css_features_you_should_start_using_today/',
      tags: ['CSS', 'Web Development', 'Frontend'],
      upvotes: 189,
    },
  ],
};

const CONTACT_CARDS = [
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: 'Email',
    details: 'syedhasni151214@gmail.com',
    link: 'mailto:syedhasni151214@gmail.com',
  },
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: 'Phone',
    details: '+92 (316) 226-5948',
    link: 'tel:+923162265948',
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Location',
    details: 'Karachi, Pakistan',
    link: 'https://maps.app.goo.gl/k8qxWFM5yjc22daZ8',
  },
];
const EXPERIENCES = [
  {
    id: '1',
    role: 'Sr. Web Developer',
    company: 'eSpark Consulting Group',
    logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg',
    period: 'Sep 2018 - Present',
    location: 'Karachi, Pakistan (Remote)',
    type: 'Full-time',
    description: [
      'Leading a team of developers on web and SaaS projects using React.js and Next.js',
      'Collaborating with clients to define requirements and deliverables',
      'Improving code quality through reviews and implementation of best practices',
      'Managing project timelines and sprint planning',
    ],
    skills: ['React.js', 'Next.js', 'REST APIs', 'Team Leadership'],
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Royal Apps',
    logo: 'https://images.pexels.com/photos/1337381/pexels-photo-1337381.jpeg',
    period: '2022 - 2023',
    location: 'Remote (UK-based)',
    type: 'Contract',
    description: [
      'Developed responsive and scalable UIs using Next.js and Tailwind CSS',
      'Integrated Shopify storefronts and customized themes',
      'Worked closely with backend teams and clients on delivery',
      'Focused on performance optimizations and UX consistency',
    ],
    skills: ['Next.js', 'React.js', 'Shopify', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: '3',
    role: 'WordPress Developer',
    company: 'Seek Social Ltd',
    logo: 'https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg',
    period: '2020 - 2022',
    location: 'Remote (UK-based)',
    type: 'Full-time',
    description: [
      'Built custom WordPress websites and WooCommerce stores',
      'Optimized SEO, schema markup, and page load times',
      'Handled maintenance, staging, and plugin customizations',
      'Communicated with clients for revisions and updates',
    ],
    skills: ['WordPress', 'PHP', 'WooCommerce', 'SEO', 'JavaScript'],
  },
  {
    id: '4',
    role: 'Freelance Web Developer',
    company: 'Hasni Developers',
    logo: 'https://images.pexels.com/photos/1337383/pexels-photo-1337383.jpeg',
    period: '2018 - Present',
    location: 'Karachi, Pakistan',
    type: 'Freelance',
    description: [
      'Delivered client projects using modern stacks (React, WordPress, Shopify)',
      'Created reusable components and full-stack solutions',
      'Worked on performance, accessibility, and cross-browser compatibility',
      'Built tools including npm packages and CLI generators',
    ],
    skills: ['React', 'Next.js', 'WordPress', 'Shopify', 'SEO'],
  },
];

const IMAGES = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
    alt: 'Coding on a laptop',
    caption: 'Working on a new project',
    album: 'work',
    tags: ['coding', 'webdev'],
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    alt: 'Conference presentation',
    caption: 'Speaking at ReactConf 2023',
    album: 'events',
    tags: ['conference', 'speaking'],
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg',
    alt: 'Design mockup',
    caption: 'UI design for a new application',
    album: 'work',
    tags: ['design', 'ui/ux'],
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg',
    alt: 'Team meeting',
    caption: 'Brainstorming session with the team',
    album: 'work',
    tags: ['team', 'collaboration'],
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    alt: 'Coding setup',
    caption: 'My workspace setup',
    album: 'personal',
    tags: ['workspace', 'setup'],
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
    alt: 'Workshop',
    caption: 'Leading a workshop on Next.js',
    album: 'events',
    tags: ['workshop', 'teaching'],
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg',
    alt: 'Laptop with code',
    caption: 'Late night coding session',
    album: 'work',
    tags: ['coding', 'webdev'],
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg',
    alt: 'Conference audience',
    caption: 'Full house at my last talk',
    album: 'events',
    tags: ['conference', 'audience'],
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg',
    alt: 'Vacation photo',
    caption: 'Taking a break in nature',
    album: 'personal',
    tags: ['travel', 'nature'],
  },
];

const ALBUMS = [
  { id: 'all', name: 'All Photos' },
  { id: 'work', name: 'Work' },
  { id: 'events', name: 'Events' },
  { id: 'personal', name: 'Personal' },
];

// Mock data - in a real app, this would come from Sanity
const FEATURED_PROJECTS = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Syed Ali Naqi Hasni',
    description:
      'A beautiful portfolio website showcasing projects and skills.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

// Mock data - in a real app, this would come from Sanity
const SKILLS = {
  frontend: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 92 },
    { name: 'Next.js', level: 88 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
  ],
  other: [
    { name: 'UI/UX Design', level: 88 },
    { name: 'Git/GitHub', level: 92 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
  ],
};

// Mock data - in a real app, this would come from Sanity
const SKILLS_PAGE = {
  frontend: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 92 },
    { name: 'Next.js', level: 88 },
    { name: 'Vue.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'GraphQL', level: 78 },
    { name: 'REST API', level: 90 },
  ],
  devops: [
    { name: 'Git/GitHub', level: 92 },
    { name: 'Docker', level: 70 },
    { name: 'CI/CD', level: 75 },
    { name: 'AWS', level: 65 },
    { name: 'Vercel', level: 88 },
    { name: 'Netlify', level: 85 },
  ],
  design: [
    { name: 'UI/UX Design', level: 88 },
    { name: 'Figma', level: 85 },
    { name: 'Adobe XD', level: 75 },
    { name: 'Responsive Design', level: 92 },
    { name: 'Design Systems', level: 80 },
  ],
  soft: [
    { name: 'Communication', level: 95 },
    { name: 'Teamwork', level: 90 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Time Management', level: 85 },
    { name: 'Adaptability', level: 90 },
  ],
};

// Mock data - in a real app, this would come from Sanity
const LINKS = [
  {
    id: '1',
    title: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="h-5 w-5" />,
    color: 'bg-[#333] hover:bg-[#222]',
  },
  {
    id: '2',
    title: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="h-5 w-5" />,
    color: 'bg-[#0077B5] hover:bg-[#005885]',
  },
  {
    id: '3',
    title: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter className="h-5 w-5" />,
    color: 'bg-[#1DA1F2] hover:bg-[#0c85d0]',
  },
  {
    id: '4',
    title: 'YouTube',
    url: 'https://youtube.com',
    icon: <Youtube className="h-5 w-5" />,
    color: 'bg-[#FF0000] hover:bg-[#cc0000]',
  },
  {
    id: '5',
    title: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className="h-5 w-5" />,
    color:
      'bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#C13584] hover:from-[#3951cc] hover:via-[#762ea1] hover:to-[#aa3174]',
  },
  {
    id: '6',
    title: 'Facebook',
    url: 'https://facebook.com',
    icon: <Facebook className="h-5 w-5" />,
    color: 'bg-[#1877F2] hover:bg-[#0a60d1]',
  },
  {
    id: '7',
    title: 'Contact Me',
    url: '/contact',
    icon: <MessageSquare className="h-5 w-5" />,
    color: 'bg-primary hover:bg-primary/90',
  },
];

// Mock data - in a real app, this would come from Sanity
const PROJECT = {
  title: 'E-Commerce Platform',
  slug: 'e-commerce-platform',
  description:
    'A full-featured e-commerce platform with cart, checkout, and payment integration.',
  longDescription: `
    <h2>Project Overview</h2>
    <p>This e-commerce platform provides a complete solution for online stores, featuring a modern UI, secure payment processing, and comprehensive order management.</p>
    
    <h2>Key Features</h2>
    <ul>
      <li>User authentication and profile management</li>
      <li>Product catalog with categories and search</li>
      <li>Shopping cart and wishlist functionality</li>
      <li>Secure checkout with Stripe integration</li>
      <li>Order tracking and history</li>
      <li>Admin dashboard for inventory management</li>
    </ul>
    
    <h2>Technical Details</h2>
    <p>The application is built using modern web technologies and follows best practices for security and performance:</p>
    
    <ul>
      <li>React for the frontend with Next.js for SSR</li>
      <li>Node.js and Express for the backend API</li>
      <li>MongoDB for the database</li>
      <li>Stripe for payment processing</li>
      <li>AWS S3 for image storage</li>
    </ul>
    
    <h2>Development Process</h2>
    <p>The project was developed over three months, following an agile methodology with weekly sprints. Key challenges included:</p>
    
    <ul>
      <li>Implementing real-time inventory updates</li>
      <li>Optimizing performance for large product catalogs</li>
      <li>Ensuring secure payment processing</li>
      <li>Building a responsive design for all devices</li>
    </ul>
  `,
  image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
  gallery: [
    'https://images.pexels.com/photos/6956904/pexels-photo-6956904.jpeg',
    'https://images.pexels.com/photos/6956905/pexels-photo-6956905.jpeg',
    'https://images.pexels.com/photos/6956906/pexels-photo-6956906.jpeg',
  ],
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
  githubUrl: 'https://github.com',
  liveUrl: 'https://example.com',
  publishedAt: '2024-01-15',
  stats: {
    users: '10,000+',
    orders: '50,000+',
    revenue: '$1M+',
  },
  relatedProjects: [
    {
      id: '2',
      title: 'Task Management App',
      slug: 'task-management-app',
      description:
        'A collaborative task management application with real-time updates.',
      image:
        'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: '3',
      title: 'Syed Ali Naqi Hasni',
      slug: 'portfolio-website',
      description:
        'A beautiful portfolio website showcasing projects and skills.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
  ],
};

export {
  TOOLS,
  JOURNEY,
  ARCHIVE,
  CONTACT_CARDS,
  EXPERIENCES,
  IMAGES,
  ALBUMS,
  FEATURED_PROJECTS,
  SKILLS,
  SKILLS_PAGE,
  LINKS,
  PROJECT,
};
