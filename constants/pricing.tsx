export const FRONTEND_DEVELOPMENT_PLANS = [
  {
    id: 1,
    name: 'Starter Frontend',
    description: 'Frontend development for small businesses and personal projects',
    pricing: '$1,500',
    period: 'one-time',
    popular: false,
    features: [
      'Responsive UI Implementation',
      'Up to 5 Pages',
      'Accessibility Best Practices',
      'Cross-browser Compatibility',
      'Basic Animations',
      '30 Days Support',
      'Performance Optimization'
    ],
    limitations: [
      'No backend integration',
      'Limited customization',
      'Basic hosting recommendations'
    ],
    buttonText: 'Get Started',
    category: 'frontend'
  },
  {
    id: 2,
    name: 'Professional Frontend',
    description: 'Advanced frontend solutions for growing businesses',
    pricing: '$3,500',
    period: 'one-time',
    popular: true,
    features: [
      'Custom UI/UX Development',
      'Up to 15 Pages',
      'Advanced Animations',
      'State Management Integration',
      'API Integration (Frontend only)',
      '90 Days Support',
      'Performance Optimization',
      'SEO Best Practices',
      'Component Library Setup',
      'Responsive & Mobile-first Design'
    ],
    limitations: [
      'Backend/API development not included',
      'Complex integrations extra'
    ],
    buttonText: 'Most Popular',
    category: 'frontend'
  },
  {
    id: 3,
    name: 'Enterprise Frontend',
    description: 'Comprehensive frontend solutions for large-scale projects',
    pricing: '$7,500',
    period: 'one-time',
    popular: false,
    features: [
      'Enterprise-grade Frontend Architecture',
      'Unlimited Pages/Components',
      'Custom Animations & Interactions',
      'Integration with APIs & Third-party Services',
      'Performance Monitoring',
      '6 Months Support',
      'Accessibility Audits',
      'Design System Implementation',
      'Multi-language Support',
      'Priority Support'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'frontend'
  }
];
export const WEBSITE_MAINTENANCE_PLANS = [
  {
    id: 1,
    name: 'Basic Care',
    description: 'Essential maintenance for small websites',
    pricing: '$150',
    period: 'per month',
    popular: false,
    features: [
      'Monthly Updates',
      'Security Monitoring',
      'Basic Backup',
      'Uptime Monitoring',
      'Email Support',
      '2 Hours of Changes'
    ],
    buttonText: 'Choose Plan',
    category: 'maintenance'
  },
  {
    id: 2,
    name: 'Professional Care',
    description: 'Comprehensive maintenance for business websites',
    pricing: '$300',
    period: 'per month',
    popular: true,
    features: [
      'Weekly Updates',
      'Advanced Security',
      'Daily Backups',
      'Performance Monitoring',
      'Priority Support',
      '5 Hours of Changes',
      'SEO Monitoring',
      'Analytics Reports'
    ],
    buttonText: 'Most Popular',
    category: 'maintenance'
  },
  {
    id: 3,
    name: 'Enterprise Care',
    description: 'Premium maintenance for mission-critical websites',
    pricing: '$600',
    period: 'per month',
    popular: false,
    features: [
      'Real-time Updates',
      'Enterprise Security',
      'Hourly Backups',
      'Advanced Monitoring',
      '24/7 Support',
      '10 Hours of Changes',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Performance Optimization',
      'Emergency Response'
    ],
    buttonText: 'Contact Us',
    category: 'maintenance'
  }
];
export const SEO_PLANS = [
  {
    id: 1,
    name: 'Starter SEO',
    description: 'Essential SEO services for small websites and startups',
    pricing: '$300',
    period: 'per month',
    popular: false,
    features: [
      'Keyword Research (Up to 10 keywords)',
      'On-page Optimization',
      'Meta Tags & Descriptions',
      'Google Analytics Setup',
      'Monthly Performance Report',
      'Basic Technical SEO Audit',
      '1 Blog Post Optimization'
    ],
    limitations: [
      'No backlink building',
      'Limited to 1 website',
      'No local SEO'
    ],
    buttonText: 'Choose Plan',
    category: 'seo'
  },
  {
    id: 2,
    name: 'Professional SEO',
    description: 'Comprehensive SEO for growing businesses',
    pricing: '$700',
    period: 'per month',
    popular: true,
    features: [
      'Keyword Research (Up to 30 keywords)',
      'Advanced On-page Optimization',
      'Technical SEO Fixes',
      'Content Strategy & Optimization',
      'Local SEO Setup',
      'Monthly Performance & Recommendations',
      'Backlink Analysis',
      '2 Blog Posts Optimization',
      'Competitor Analysis'
    ],
    limitations: [
      'Backlink outreach not included',
      'Limited to 2 websites'
    ],
    buttonText: 'Most Popular',
    category: 'seo'
  },
  {
    id: 3,
    name: 'Enterprise SEO',
    description: 'Advanced SEO for large and complex websites',
    pricing: '$1,500',
    period: 'per month',
    popular: false,
    features: [
      'Unlimited Keyword Targeting',
      'Full Technical SEO Audit & Fixes',
      'Content Creation & Optimization',
      'Backlink Strategy & Monitoring',
      'Conversion Rate Optimization',
      'E-commerce SEO',
      'International/Multilingual SEO',
      'Monthly Strategy Calls',
      'Custom Reporting Dashboard',
      'Competitor & Market Analysis',
      'Priority Support'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'seo'
  }
];
export const WEB_APPLICATION_PLANS = [
  {
    id: 1,
    name: 'Starter App',
    description: 'Basic web application for MVPs and small projects',
    pricing: '$2,500',
    period: 'one-time',
    popular: false,
    features: [
      'Custom Frontend & Backend',
      'Up to 3 Core Features/Modules',
      'User Authentication',
      'Basic Database Integration',
      'API Endpoints (CRUD)',
      'Responsive Design',
      '30 Days Support',
      'Basic Deployment'
    ],
    limitations: [
      'Limited scalability',
      'No third-party integrations',
      'Basic analytics only'
    ],
    buttonText: 'Get Started',
    category: 'webapp'
  },
  {
    id: 2,
    name: 'Professional App',
    description: 'Advanced web application for growing businesses',
    pricing: '$6,000',
    period: 'one-time',
    popular: true,
    features: [
      'Custom Frontend & Backend',
      'Up to 10 Features/Modules',
      'Role-based Access Control',
      'Advanced Database Design',
      'API Integrations (3rd Party)',
      'Admin Dashboard',
      'Performance Optimization',
      '90 Days Support',
      'Automated Testing',
      'Deployment & CI/CD Setup'
    ],
    limitations: [
      'Complex integrations extra',
      'Mobile app not included'
    ],
    buttonText: 'Most Popular',
    category: 'webapp'
  },
  {
    id: 3,
    name: 'Enterprise App',
    description: 'Full-scale, scalable web applications for enterprises',
    pricing: '$15,000+',
    period: 'one-time',
    popular: false,
    features: [
      'Enterprise Architecture',
      'Unlimited Features/Modules',
      'Microservices or Monolith',
      'Custom Integrations',
      'API Gateway & Security',
      'Multi-tenant Support',
      'Performance Monitoring',
      '6 Months Priority Support',
      'DevOps & Cloud Setup',
      'Custom Analytics & Reporting',
      'Ongoing Maintenance Options'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'webapp'
  }
];
export const WORDPRESS_DEVELOPMENT_PLANS = [
  {
    id: 1,
    name: 'Starter WP',
    description: 'WordPress site for blogs and small businesses',
    pricing: '$900',
    period: 'one-time',
    popular: false,
    features: [
      'Premium Theme Setup',
      'Up to 5 Pages',
      'Basic SEO Setup',
      'Contact Form',
      'Mobile Responsive',
      'Essential Plugins',
      '30 Days Support',
      'Basic Security Hardening'
    ],
    limitations: [
      'No custom plugin development',
      'Limited design customization',
      'No e-commerce'
    ],
    buttonText: 'Get Started',
    category: 'wordpress'
  },
  {
    id: 2,
    name: 'Professional WP',
    description: 'Custom WordPress solutions for business websites',
    pricing: '$2,200',
    period: 'one-time',
    popular: true,
    features: [
      'Custom Theme or Child Theme',
      'Up to 15 Pages',
      'Advanced SEO Optimization',
      'E-commerce Ready (WooCommerce)',
      'Custom Post Types',
      'Performance Optimization',
      '90 Days Support',
      'Security & Backup Setup',
      'Blog Setup',
      'Social Media Integration'
    ],
    limitations: [
      'Complex plugin integrations extra',
      'Custom plugin development additional'
    ],
    buttonText: 'Most Popular',
    category: 'wordpress'
  },
  {
    id: 3,
    name: 'Enterprise WP',
    description: 'Enterprise-grade WordPress for high-traffic and complex needs',
    pricing: '$5,000+',
    period: 'one-time',
    popular: false,
    features: [
      'Custom Theme & Plugins',
      'Unlimited Pages',
      'Advanced WooCommerce',
      'API Integrations',
      'Multisite/Multilingual',
      'Performance & Security Audits',
      '6 Months Priority Support',
      'Custom Admin Workflows',
      'Ongoing Maintenance Options',
      'Staging & CI/CD Setup'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'wordpress'
  }
];
export const UI_UX_DESIGN_PLANS = [
  {
    id: 1,
    name: 'Starter UI/UX',
    description: 'UI/UX design for small businesses and personal projects',
    pricing: '$1,200',
    period: 'one-time',
    popular: false,
    features: [
      'User Research & Persona Creation',
      'Wireframes for Up to 5 Screens',
      'Mobile & Desktop Layouts',
      'Basic Interactive Prototype',
      'Brand Color & Typography Guide',
      '2 Rounds of Revisions',
      'Delivery in Figma or XD'
    ],
    limitations: [
      'No development included',
      'Limited to 1 project',
      'Stock images not included'
    ],
    buttonText: 'Get Started',
    category: 'uiux'
  },
  {
    id: 2,
    name: 'Professional UI/UX',
    description: 'Comprehensive UI/UX for growing businesses',
    pricing: '$2,800',
    period: 'one-time',
    popular: true,
    features: [
      'In-depth User Research',
      'User Flows & Journey Mapping',
      'Wireframes for Up to 15 Screens',
      'High-fidelity UI Design',
      'Interactive Prototypes',
      'Design System Basics',
      'Accessibility Considerations',
      '3 Rounds of Revisions',
      'Handoff for Developers'
    ],
    limitations: [
      'Development not included',
      'Complex animations extra'
    ],
    buttonText: 'Most Popular',
    category: 'uiux'
  },
  {
    id: 3,
    name: 'Enterprise UI/UX',
    description: 'End-to-end UI/UX solutions for large-scale projects',
    pricing: '$6,000',
    period: 'one-time',
    popular: false,
    features: [
      'Full-scale Research & Workshops',
      'Personas, Flows, and Journey Maps',
      'Unlimited Screens/Components',
      'Design System Creation',
      'Advanced Prototyping & Animations',
      'Usability Testing',
      'Accessibility Audits',
      'Brand Guidelines',
      'Priority Support',
      'Handoff & Collaboration with Dev Team'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'uiux'
  }
];
export const ECOMMERCE_PLANS = [
  {
    id: 1,
    name: 'Basic Store',
    description: 'Essential features for launching your online shop',
    pricing: '$2,000',
    period: 'one-time',
    popular: false,
    features: [
      'Responsive E-commerce Website',
      'Up to 20 Products',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Basic SEO Setup',
      'Order Management',
      'Mobile Optimization',
      '30 Days Support',
      'Basic Analytics'
    ],
    limitations: [
      'Limited product variations',
      'No advanced shipping options',
      'Basic design customization'
    ],
    buttonText: 'Get Started',
    category: 'ecommerce'
  },
  {
    id: 2,
    name: 'Growth Store',
    description: 'Advanced tools for growing online businesses',
    pricing: '$4,500',
    period: 'one-time',
    popular: true,
    features: [
      'Custom E-commerce Design',
      'Up to 100 Products',
      'Advanced Product Variations',
      'Discount Codes & Coupons',
      'Abandoned Cart Recovery',
      'Integrated Blog',
      'Advanced SEO Optimization',
      'Multiple Payment Gateways',
      'Shipping & Tax Configuration',
      'Inventory Management',
      '90 Days Support',
      'Advanced Analytics',
      'Social Media Integration'
    ],
    limitations: [
      'Custom integrations extra',
      'Marketplace sync additional'
    ],
    buttonText: 'Most Popular',
    category: 'ecommerce'
  },
  {
    id: 3,
    name: 'Enterprise Store',
    description: 'Complete solution for high-volume and complex stores',
    pricing: '$10,000',
    period: 'one-time',
    popular: false,
    features: [
      'Unlimited Products',
      'Multi-store Support',
      'Custom Integrations',
      'API Access',
      'Subscription & Memberships',
      'Wholesale/B2B Features',
      'Advanced Security',
      'Performance Monitoring',
      'Custom Admin Panel',
      'Multi-language & Multi-currency',
      'Priority Support (6 Months)',
      'Advanced Analytics & Reporting',
      'Dedicated Account Manager'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'ecommerce'
  }
];
export const PRICING_TABS = [
  {
    id: 'frontend-development',
    label: 'Frontend',
    plans: FRONTEND_DEVELOPMENT_PLANS,
  },
  {
    id: 'web-application',
    label: 'Web Application',
    plans: WEB_APPLICATION_PLANS,
  },
  {
    id: 'wordpress-development',
    label: 'WordPress ',
    plans: WORDPRESS_DEVELOPMENT_PLANS,
  },
  {
    id:'ui-ux-design',
    label: 'UI/UX ',
    plans: UI_UX_DESIGN_PLANS,
  },
  {
    id:'e-commerce',
    label: 'E-commerce',
    plans: ECOMMERCE_PLANS,
  },
  {
    id: 'seo',
    label: 'SEO',
    plans: SEO_PLANS,
  },
  {
    id: 'website-maintenance',
    label: 'Maintenance',
    plans: WEBSITE_MAINTENANCE_PLANS,
  },
  
];


export const PRICING_PAGE_CONSTANT = {
  title: 'Transparent Pricing',
  description: 'Choose the perfect plan for your project. No hidden fees, no surprises.',
  // tabs: {
  //   development: 'Development',
  //   maintenance: 'Maintenance',
  //   seo: 'Seo Optimization'
  // },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What\'s included in the support period?',
        answer: 'Support includes bug fixes, minor content updates, technical assistance, and guidance on using your website. Major feature additions are quoted separately.'
      },
      {
        question: 'Do you offer custom packages?',
        answer: 'Yes! Every project is unique. These are starting prices, and I can create a custom package based on your specific requirements.'
      },
      {
        question: 'What about hosting and domain?',
        answer: 'Hosting and domain costs are separate. I can recommend the best hosting solutions for your needs and help with setup.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Timeline depends on project complexity. Simple websites take 1-2 weeks, while complex applications can take 6-12 weeks.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, I offer various maintenance plans to keep your website updated, secure, and performing optimally.'
      }
    ]
  },
  cta: {
    title: 'Ready to Get Started?',
    description: 'Let\'s discuss your project and find the perfect solution for your needs.',
    buttonText: 'Contact Me',
    buttonLink: 'https://www.syedalinaqihasni.com/contact'
  }
};

export const FEATURED_PRICING = FRONTEND_DEVELOPMENT_PLANS.slice(0, 3);