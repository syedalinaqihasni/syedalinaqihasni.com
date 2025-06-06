const RESUME = {
  profile: {
    name: 'Syed Ali Naqi Hasni',
    title: 'Senior Full Stack Developer',
    email: 'syedhasni151214@gmail.com',
    phone: '+92 316 2265948',
    location: 'Karachi, Pakistan',
  },
  summary:
    'Senior Full Stack Developer with over 5 years of experience delivering high-quality web solutions. Specialized in React.js, Next.js, Node.js, and WordPress development. Proven track record working with remote teams, scaling web applications, and staying current with emerging technologies. Founder of Hasni Developers and author of the "next-route-schemas" NPM package.',
  education: [
    {
      degree: 'Associate Degree in Computer Information Technology',
      period: '2012 - 2014',
      institution: 'Sindh Board of Technical Education, Karachi',
    },
    {
      degree: 'AI, Metaverse & Web 3.0 Developer & Solopreneur (In Progress)',
      period: '2023 - Present',
      institution:
        'PIAIC – Presidential Initiative for Artificial Intelligence & Computing',
    },
  ],
  experiences: [
    {
      role: 'Team Lead / Full Stack Developer',
      period: '2021 - Present',
      company: 'eSpark Talent / Hasni Developers (Remote)',
      details: [
        'Led frontend and backend architecture design using Next.js and Node.js',
        'Built dynamic APIs with App Router and TypeScript for scalable SaaS apps',
        'Published open-source tools and internal npm packages for SEO and route automation',
        'Managed client projects across WordPress, Shopify, and custom React stacks',
      ],
    },
    {
      role: 'Frontend Developer (Contract)',
      period: '2019 - 2021',
      company: 'Seek Social Ltd / Royal Apps / DevSol Pakistan (Remote)',
      details: [
        'Delivered pixel-perfect UIs using React.js, Vue.js, and Tailwind CSS',
        'Integrated REST APIs and enhanced performance with lazy loading and caching',
        'Worked on international e-commerce and CMS projects with multi-language support',
      ],
    },
    {
      role: 'WordPress Developer',
      period: '2017 - 2019',
      company: 'Freelance / Ruby Designers',
      details: [
        'Developed custom WordPress themes and WooCommerce stores',
        'Optimized SEO performance, site speed, and mobile responsiveness',
        'Implemented staging environments and version control using Git',
      ],
    },
  ],
  skills: {
    frontend: [
      'React.js',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'WordPress',
    ],
    backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'PHP'],
    tools: [
      'Git',
      'Docker',
      'Vercel',
      'Netlify',
      'CI/CD',
      'Jest',
      'Webpack',
      'Figma',
    ],
  },
  certifications: [
    'Microsoft Office Specialist Master Certification (2018)',
    'WordPress Development – DigiSkills.pk (2019)',
    'Freelancing – DigiSkills.pk (2019)',
    'LinkedIn: WordPress Essential Training (2022)',
    'LinkedIn: Technical SEO, REST API, Accessibility, SEO Keyword Strategy',
    'HTML, CSS, JavaScript for Web Developers – 10Pearls University',
    'Typing & CIT – The Learning Zone',
  ],
};

const SECTION_TITLES = {
  summary: 'Professional Summary',
  experience: 'Work Experience',
  education: 'Education',
  skills: 'Skills',
  certifications: 'Certifications',
};

const SKILL_CATEGORIES = ['frontend', 'backend', 'tools'] as const;
export { RESUME , SECTION_TITLES, SKILL_CATEGORIES };
