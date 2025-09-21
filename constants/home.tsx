import { Github, Briefcase, FileText } from "lucide-react";

const CONTENT = {
  hero: {
    name: "Syed Hasni",
    title: "Frontend Web Designer",
    description:
      "I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.",
    imageSrc: "/images/home-syed-ali-naqi-hasni.webp",
    imageAlt: "Syed Ali Naqi Hasni - Web Developer",
  },
  buttons: {
    projects: {
      label: "View Projects",
      href: "/projects",
    },
    hireMe: {
      label: "Hire Me",
      href: "/contact",
    },
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/syedalinaqihasni",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/syedalinaqihasni",
      icon: Briefcase,
    },
    {
      label: "Resume",
      href: "/resume-syed-ali-naqi-hasni.pdf",
      icon: FileText,
      isExternal: true,
    },
  ],
  sections: {
    featuredProjects: {
      title: "Featured Projects",
      viewAllLabel: "View All",
      viewAllHref: "/projects",
    },
    skills: {
      title: "Skills & Expertise",
      seeAllLabel: "See All Skills",
      seeAllHref: "/skills",
    },
    contact: {
      title: "Get In Touch",
      description:
        "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Let's make something great together.",
    },
  },
};
export { CONTENT };
