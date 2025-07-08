import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

export const CONSTANT = {
  brandName: "Syed Ali Naqi Hasni",
  description:
    "I'm a passionate developer dedicated to crafting seamless, accessible, and visually stunning digital experiences. With expertise across front-end and back-end technologies.",
  description2:
    "Always eager to learn and collaborate, I thrive on turning challenges into innovative solutions. Let's build something exceptional together!",
  quickLinksHeading: "Quick Links",
  connectHeading: "Connect",
  NewsHeading: "Subscribe to Our Newsletter ",
  copyright: `© ${new Date().getFullYear()} Syed Hasni | All rights reserved.`,
};

export const CONTACT_INFO = [
  {
    label: "Phone",
    value: "+92 (3**) ****948",
    link: "tel:+923162265948",
    icon: Phone,
  },
  // {
  //   label: "Phone",
  //   value: "+92 (3**) ****366",
  //   link: "tel:+923092734366",
  //   icon: Phone,
  // },
  {
    label: "Email",
    value: "engr***********@gmail.com",
    link: "mailto:engr.syedalinaqihasni@gmail.com",
    icon: Mail,
  },
  // {
  //   label: "Email",
  //   value: "syed***********@gmail.com",
  //   link: "mailto:syedhasni151214@gmail.com",
  //   icon: Mail,
  // },
  {
    label: "Address",
    value: "Saeedabad, Baldia Town, Karachi, Pakistan",
    link: "https://g.co/kgs/wpXTGaH",
    icon: MapPin,
  },
  // {
  //   label: "Address",
  //   value: "BLock 1, Gulistn e Johr, Karachi, Pakistan",
  //   link: "https://g.co/kgs/j2Uu9sd",
  //   icon: MapPin,
  // },
];

export const LINKS_GROUPS = [
  [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Links", path: "/links" },
    { name: "Socials", path: "/socials" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ],
  [
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Archive", path: "/archive" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Sitemap", path: "/sitemap" },
  ],
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com",
    label: "GitHub of Syed Ali Naqi Hasni",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com",
    label: "LinkedIn of Syed Ali Naqi Hasni",
  },
  {
    icon: Twitter,
    url: "https://twitter.com",
    label: "Twitter of Syed Ali Naqi Hasni",
  },
  {
    icon: Instagram,
    url: "https://instagram.com",
    label: "Instagram of Syed Ali Naqi Hasni",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@syedalinaqihasni",
    label: "Youtube of Syed Ali Naqi Hasni",
  },
  {
    icon: Mail,
    url: "mailto:engr.syedalinaqihasni@gmail.com",
    label: "Email of Syed Ali Naqi Hasni",
  },
];
