// Mock data - in a real app, this would come from Sanity
export const PROJECT = {
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

// Mock data - in a real app, this would come from Sanity
export const FEATURED_PROJECTS = [
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
  
