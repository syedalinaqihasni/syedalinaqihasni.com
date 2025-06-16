import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const CONSTANT = {
  brandName: 'Syed Ali Naqi Hasni',
  description:
    "I'm a passionate developer dedicated to crafting seamless, accessible, and visually stunning digital experiences. With expertise across front-end and back-end technologies.",
  description2:
    "Always eager to learn and collaborate, I thrive on turning challenges into innovative solutions. Let's build something exceptional together!",
  quickLinksHeading: 'Quick Links',
  connectHeading: 'Connect',
  copyright: `© ${new Date().getFullYear()} Syed Hasni | All rights reserved.`,
};

export const CONTACT_INFO = [ 
  {
    label: 'Email',
    value: 'syedhasni151214@gmail.com',
    link: 'mailto:syedhasni151214@gmail.com',
    icon: Mail,
  },
  {
    label: 'Email',
    value: 'engr.syedalinaqihasni@gmail.com',
    link: 'mailto:engr.syedalinaqihasni@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+92 (316) 226-5948',
    link: 'tel:923162265948',
    icon: Phone,
  },
  {
    label: 'Phone',
    value: '+92 (309) 273-4366',
    link: 'tel:923092734366',
    icon: Phone,
  },
  {
    label: 'Address',
    value: 'Saeedabad, Baldia Town, Karachi, Pakistan',
   link:'#',
    icon: MapPin,
  },
  {
    label: 'Address',
    value: 'Gulistn e Johr, Baldia Town, Karachi, Pakistan',
    link:'#',
    icon: MapPin,
  },
];


export const LINKS_GROUPS = [
  [ 
    { name: 'About', path: 'https://www.syedalinaqihasni.com/about' },
    { name: 'Experience', path: 'https://www.syedalinaqihasni.com/experience' },
    { name: 'Skills', path: 'https://www.syedalinaqihasni.com/skills' },
    { name: 'Resume', path: 'https://www.syedalinaqihasni.com/resume' },
    { name: 'Links', path: 'https://www.syedalinaqihasni.com/links'  },
    { name: 'Socials', path: 'https://www.syedalinaqihasni.com/socials' },
    { name: 'Contact', path: 'https://www.syedalinaqihasni.com/contact' },
    { name: 'Gallery', path: 'https://www.syedalinaqihasni.com/gallery' },
  ],
  [
    { name: 'Services', path: 'https://www.syedalinaqihasni.com/services' },
    { name: 'Pricing', path: 'https://www.syedalinaqihasni.com/pricing' },
    { name: 'Archive', path: 'https://www.syedalinaqihasni.com/archive' },
    { name: 'Projects', path: 'https://www.syedalinaqihasni.com/projects' },
    { name: 'Certificates', path: 'https://www.syedalinaqihasni.com/certificates' },
    { name: 'Blogs', path: 'https://www.syedalinaqihasni.com/blogs' },
    { name: 'Events', path: 'https://www.syedalinaqihasni.com/events' },
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