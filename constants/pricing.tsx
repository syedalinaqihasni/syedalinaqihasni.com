export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small businesses and personal projects',
    price: '$1,500',
    period: 'one-time',
    popular: false,
    features: [
      'Responsive Website Design',
      'Up to 5 Pages',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Mobile Optimization',
      '30 Days Support',
      'Basic Analytics Setup'
    ],
    limitations: [
      'No E-commerce functionality',
      'Limited customization',
      'Basic hosting recommendations'
    ],
    buttonText: 'Get Started',
    category: 'website'
  },
  {
    id: 2,
    name: 'Professional',
    description: 'Ideal for growing businesses with advanced needs',
    price: '$3,500',
    period: 'one-time',
    popular: true,
    features: [
      'Custom Website Development',
      'Up to 15 Pages',
      'Advanced SEO Optimization',
      'CMS Integration',
      'E-commerce Ready',
      '90 Days Support',
      'Advanced Analytics',
      'Performance Optimization',
      'Social Media Integration',
      'Blog Setup'
    ],
    limitations: [
      'Advanced integrations extra',
      'Custom animations additional'
    ],
    buttonText: 'Most Popular',
    category: 'website'
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'Comprehensive solution for large-scale projects',
    price: '$7,500',
    period: 'one-time',
    popular: false,
    features: [
      'Full-scale Web Application',
      'Unlimited Pages',
      'Advanced E-commerce',
      'Custom Integrations',
      'API Development',
      '6 Months Support',
      'Advanced Security',
      'Performance Monitoring',
      'Custom Admin Panel',
      'Multi-language Support',
      'Advanced Analytics',
      'Priority Support'
    ],
    limitations: [],
    buttonText: 'Contact Us',
    category: 'application'
  }
];

export const MAINTENANCE_PLANS = [
  {
    id: 1,
    name: 'Basic Care',
    description: 'Essential maintenance for small websites',
    price: '$150',
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
    price: '$300',
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
    price: '$600',
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

export const PRICING_PAGE_CONSTANT = {
  title: 'Transparent Pricing',
  description: 'Choose the perfect plan for your project. No hidden fees, no surprises.',
  tabs: {
    development: 'Development',
    maintenance: 'Maintenance'
  },
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
    buttonLink: '/contact'
  }
};

export const FEATURED_PRICING = PRICING_PLANS.slice(0, 3);