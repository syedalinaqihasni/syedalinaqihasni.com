export const aboutMe = {
    "@type": "Person",
    name: "Syed Ali Naqi Hasni",
    alternateName: "Ali Naqi",
    description:
        "Full-stack developer, freelancer, and tech content creator specializing in web technologies, freelancing, and developer humor.",
    url: "https://www.syedalinaqihasni.com",
    image: "https://www.syedalinaqihasni.com/images/syed-ali-naqi-hasni.jpg",
    jobTitle: "Full-Stack Developer",
    worksFor: {
        "@type": "Organization",
        name: "Self-employed",
        url: "https://www.syedalinaqihasni.com",
        sameAs: [
            "https://github.com/syedalinaqihasni",
            "https://linkedin.com/in/SyedAliNaqiHasni"
        ]
    },
    birthDate: "1997-05-22",
    birthPlace: {
        "@type": "Place",
        name: "Karachi, Pakistan",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Karachi",
            addressCountry: "PK"
        }
    },
    nationality: "Pakistani",
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "NED University of Engineering & Technology",
        sameAs: "https://www.neduet.edu.pk/",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Karachi",
            addressCountry: "PK"
        }
    },
    email: "mailto:syedalinaqihasni@gmail.com",
    gender: "Male",
    knowsLanguage: ["English", "Urdu"],
    knowsAbout: [
        "Next.js",
        "JavaScript",
        "Freelancing",
        "Web Development",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "APIs",
        "UI/UX Design",
        "Open Source",
        "Content Creation"
    ],
    hasOccupation: [
        {
            "@type": "Occupation",
            name: "Software Engineer",
            description: "Develops and maintains web applications.",
            skills: [
                "Frontend Development",
                "Backend Development",
                "API Integration",
                "Testing",
                "Deployment"
            ]
        },
        {
            "@type": "Occupation",
            name: "Content Creator",
            description: "Creates technical content for developers.",
            skills: [
                "Technical Writing",
                "Video Production",
                "Public Speaking"
            ]
        },
        {
            "@type": "Occupation",
            name: "Freelancer",
            description: "Provides freelance web development services."
        }
    ],
    award: [
        "Top Rated Freelancer on Upwork",
        "GitHub Open Source Contributor"
    ],
    memberOf: [
        {
            "@type": "Organization",
            name: "GitHub",
            url: "https://github.com"
        },
        {
            "@type": "Organization",
            name: "Stack Overflow",
            url: "https://stackoverflow.com/users/your-profile"
        }
    ],
    sameAs: [
        "https://www.syedalinaqihasni.com",
        "https://api.whatsapp.com/send?phone=923162265948",
        "https://discord.com/invite/SyedAliNaqiHasni",
        "https://etsy.com/shop/SyedAliNaqiHasni",
        "https://facebook.com/SyedAliNaqiHasni",
        "https://github.com/syedalinaqihasni",
        "https://instagram.com/SyedAliNaqiHasni",
        "https://LinkedIn.com/in/SyedAliNaqiHasni",
        "https://linktr.ee/?utm_source=linktree&utm_medium=profile&utm_campaign=footer_logo_cta&utm_content=SyedAliNaqiHasni",
        "https://open.spotify.com/artist/SyedAliNaqiHasni",
        "https://patreon.com/SyedAliNaqiHasni",
        "https://paypal.com/SyedAliNaqiHasni",
        "https://Pinterest.com/SyedAliNaqiHasni",
        "https://signal.group/SyedAliNaqiHasni",
        "https://Snapchat.com/add/SyedAliNaqiHasni",
        "https://SoundCloud.com/SyedAliNaqiHasni",
        "https://t.me/SyedAliNaqiHasni",
        "https://tiktok.com/@syedalinaqihasni",
        "https://twitch.me/SyedAliNaqiHasni",
        "https://x.com/SyedHasni1997",
        "https://YouTube.com/channel/@SyedAliNaqiHasni"
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK"
    },
    telephone: "+92-316-2265948"
};
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Syed Ali Naqi Hasni",
  "jobTitle": "Full Stack Developer",
  "url": "https://www.syedalinaqihasni.com",
  "email": "mailto:syedhasni151214@gmail.com",
  "telephone": "+923162265948",
  "image": "https://www.syedalinaqihasni.com/images/hasni.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://github.com/yourhandle",
    "https://linkedin.com/in/yourhandle",
    "https://twitter.com/yourhandle"
  ],
  "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "DevOps"]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Syed Hasni Portfolio",
  "url": "https://www.syedalinaqihasni.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.syedalinaqihasni.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Syed Hasni – Full Stack Developer Portfolio",
  "url": "https://www.syedalinaqihasni.com",
  "description": "Explore projects, services, blogs, and contact information for Syed Ali Naqi Hasni."
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Syed Hasni Digital",
  "url": "https://www.syedalinaqihasni.com",
  "logo": "https://www.syedalinaqihasni.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourhandle",
    "https://linkedin.com/in/yourhandle"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923162265948",
    "contactType": "Customer Service"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Web Development",
  "serviceType": "Web Design & Development",
  "provider": {
    "@type": "Person",
    "name": "Syed Ali Naqi Hasni"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.syedalinaqihasni.com/services"
  }
};

export const certificateSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "credentialCategory": "Certificate",
  "name": "Advanced React",
  "recognizedBy": {
    "@type": "Organization",
    "name": "Frontend Masters"
  },
  "validFor": "Permanently"
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Mastering React & Next.js",
  "description": "Comprehensive Next.js course.",
  "provider": {
    "@type": "Organization",
    "name": "Syed Hasni Academy",
    "sameAs": "https://www.syedalinaqihasni.com/courses"
  }
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Next.js Masterclass",
  "startDate": "2025-07-15T18:00:00+05:00",
  "endDate": "2025-07-15T20:00:00+05:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.syedalinaqihasni.com/events/nextjs-masterclass"
  },
  "organizer": {
    "@type": "Person",
    "name": "Syed Ali Naqi Hasni"
  }
};

export const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Resume of Syed Ali Naqi Hasni",
  "url": "https://www.syedalinaqihasni.com/resume.pdf",
  "author": {
    "@type": "Person",
    "name": "Syed Ali Naqi Hasni"
  },
  "fileFormat": "application/pdf"
};

export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Portfolio Screenshots",
  "url": "https://www.syedalinaqihasni.com/gallery",
  "image": [
    "https://www.syedalinaqihasni.com/images/project1.png",
    "https://www.syedalinaqihasni.com/images/project2.png"
  ]
};

export const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "AI-Powered Resume Analyzer",
  "description": "Tool that analyzes resumes using GPT.",
  "author": {
    "@type": "Person",
    "name": "Syed Ali Naqi Hasni"
  },
  "url": "https://www.syedalinaqihasni.com/projects/resume-analyzer"
};

export const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why I Use Next.js App Router for Everything",
  "author": {
    "@type": "Person",
    "name": "Syed Ali Naqi Hasni"
  },
  "datePublished": "2025-06-08",
  "image": "https://www.syedalinaqihasni.com/images/nextjs-cover.png",
  "url": "https://www.syedalinaqihasni.com/blog/nextjs-everything"
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Next.js Portfolio Template",
  "description": "Modern portfolio starter with Tailwind & App Router.",
  "image": "https://www.syedalinaqihasni.com/images/portfolio-template.png",
  "brand": "Syed Hasni Digital",
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD",
    "url": "https://www.syedalinaqihasni.com/products/nextjs-template"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.syedalinaqihasni.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://www.syedalinaqihasni.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI Resume Tool",
      "item": "https://www.syedalinaqihasni.com/projects/ai-resume-tool"
    }
  ]
};
