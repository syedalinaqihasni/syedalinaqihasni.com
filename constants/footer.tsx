import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

// Static content
const CONSTANT = {
  brandName: "Syed Ali Naqi Hasni",
  description:
    "Showcasing my work, skills, and journey as a developer. Feel free to reach out for collaboration or opportunities. I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.",
  quickLinksHeading: "Quick Links",
  connectHeading: "Connect",
  copyright: `© ${new Date().getFullYear()} Syed Hasni | All rights reserved.`,
};

const CONTACT_INFO = [
  { label: "Email", value: "email@example.com" },
  { label: "Email", value: "email@example.com" },
  { label: "Phone", value: "+92 (555) 123-4567" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  { label: "Address", value: "1234 Main St, Hometown, Country" },
];

const LINKS_GROUPS = [
  [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ],
  [
    { name: "Links", path: "/links" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Gallery", path: "/gallery" },
    { name: "Archive", path: "/archive" },
    { name: "Events", path: "/events" },
  ],
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    url: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Instagram,
    url: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Mail,
    url: "mailto:syedhasni151214@gmail.com",
    label: "Email",
  },
];
export { LINKS_GROUPS, SOCIAL_LINKS, CONSTANT, CONTACT_INFO };
