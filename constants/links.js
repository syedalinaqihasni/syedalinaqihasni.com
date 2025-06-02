import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react'; 

// Mock data - in a real app, this would come from Sanity
export const LINKS = [
  {
    id: '1',
    title: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="h-5 w-5" />,
    color: 'bg-[#333] hover:bg-[#222]',
  },
  {
    id: '2',
    title: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="h-5 w-5" />,
    color: 'bg-[#0077B5] hover:bg-[#005885]',
  },
  {
    id: '3',
    title: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter className="h-5 w-5" />,
    color: 'bg-[#1DA1F2] hover:bg-[#0c85d0]',
  },
  {
    id: '4',
    title: 'YouTube',
    url: 'https://youtube.com',
    icon: <Youtube className="h-5 w-5" />,
    color: 'bg-[#FF0000] hover:bg-[#cc0000]',
  },
  {
    id: '5',
    title: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className="h-5 w-5" />,
    color:
      'bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#C13584] hover:from-[#3951cc] hover:via-[#762ea1] hover:to-[#aa3174]',
  },
  {
    id: '6',
    title: 'Facebook',
    url: 'https://facebook.com',
    icon: <Facebook className="h-5 w-5" />,
    color: 'bg-[#1877F2] hover:bg-[#0a60d1]',
  },
  {
    id: '7',
    title: 'Contact Me',
    url: '/contact',
    icon: <MessageSquare className="h-5 w-5" />,
    color: 'bg-primary hover:bg-primary/90',
  },
];
