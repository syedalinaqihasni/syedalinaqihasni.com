export const SERVICES = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
    icon: '🎨',
    features: [
      'React & Next.js Development',
      'Responsive Design',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Modern UI/UX Implementation',
      'Progressive Web Apps (PWA)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    startingPrice: '$2,500',
    deliveryTime: '2-4 weeks',
    category: 'development'
  },
  {
    id: 2,
    title: 'WordPress Development',
    description: 'Custom WordPress websites, themes, and plugins tailored to your business needs.',
    icon: '📝',
    features: [
      'Custom Theme Development',
      'Plugin Development',
      'WooCommerce Integration',
      'SEO Optimization',
      'Performance Optimization',
      'Maintenance & Support'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'ACF'],
    startingPrice: '$1,500',
    deliveryTime: '1-3 weeks',
    category: 'development'
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with secure payment processing and inventory management.',
    icon: '🛒',
    features: [
      'Shopify Store Setup',
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing System',
      'Mobile-first Design'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'React'],
    startingPrice: '$3,000',
    deliveryTime: '3-6 weeks',
    category: 'ecommerce'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and drive conversions.',
    icon: '🎯',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design System Creation',
      'Usability Testing',
      'Responsive Design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    startingPrice: '$1,200',
    deliveryTime: '1-2 weeks',
    category: 'design'
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your website\'s visibility and search rankings.',
    icon: '📈',
    features: [
      'Technical SEO Audit',
      'Keyword Research',
      'On-page Optimization',
      'Content Strategy',
      'Performance Optimization',
      'Analytics Setup'
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    startingPrice: '$800',
    deliveryTime: '2-3 weeks',
    category: 'marketing'
  },
  {
    id: 6,
    title: 'Website Maintenance',
    description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally.',
    icon: '🔧',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Backup Management',
      'Performance Monitoring',
      'Bug Fixes',
      '24/7 Support'
    ],
    technologies: ['WordPress', 'React', 'Next.js', 'Monitoring Tools'],
    startingPrice: '$300/month',
    deliveryTime: 'Ongoing',
    category: 'support'
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Services' },
  { id: 'development', name: 'Development' },
  { id: 'design', name: 'Design' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'support', name: 'Support' }
];

export const SERVICES_PAGE_CONSTANT = {
  title: 'My Services',
  description: 'Professional web development and design services to help your business grow online.',
  cta: {
    title: 'Ready to Start Your Project?',
    description: 'Let\'s discuss your requirements and create something amazing together.',
    buttonText: 'Get Started',
    buttonLink: '/contact'
  }
};

export const FEATURED_SERVICES = SERVICES.slice(0, 3);