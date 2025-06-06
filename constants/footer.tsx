
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export const CONSTANT = {
  brandName: 'Syed Ali Naqi Hasni',
  description:
    "Showcasing my work, skills, and journey as a developer. Feel free to reach out for collaboration or opportunities. I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.",
  quickLinksHeading: 'Quick Links',
  connectHeading: 'Connect',
  copyright: `© ${new Date().getFullYear()} Syed Hasni | All rights reserved.`,
};

export const CONTACT_INFO = [
  { label: 'Email', value: 'email@example.com' },
  { label: 'Email', value: 'email@example.com' },
  { label: 'Phone', value: '+92 (555) 123-4567' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
  { label: 'Address', value: '1234 Main St, Hometown, Country' },
];

export const LINKS_GROUPS = [
  [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Resume', path: '/resume' },
    { name: 'Links', path: '/links'  },
    { name: 'Socials', path: '/socials' },
    { name: 'Contact', path: '/contact' },
  ],
  [
    { name: 'Skills', path: '/skills' },
    { name: 'Archive', path: '/archive' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
  ],
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    url: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: Mail,
    url: 'mailto:syedhasni151214@gmail.com',
    label: 'Email',
  },
];