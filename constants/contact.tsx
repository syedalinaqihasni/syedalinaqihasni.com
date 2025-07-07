import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export const CONTACT_CARDS = [
  {
    icon: <Mail className={'h-10 w-10 text-primary'} />,
    title: 'Email',
    details: 'engr****************@gmail.com',
    link: 'mailto:engr.syedalinaqihasni@gmail.com',
  },
  {
    icon: <Phone className={'h-10 w-10 text-primary'} />,
    title: 'Phone',
    details: '+92 (3**) *****948',
    link: 'tel:00923162265948',
  },
  {
    icon: <MapPin className={'h-10 w-10 text-primary'} />,
    title: 'Location',
    details: 'Karachi, Pakistan',
    link: 'https://maps.app.goo.gl/k8qxWFM5yjc22daZ8',
  },
];

export  const CONSTANT = {
  pageTitle: 'Get In Touch',
  pageDescription: `Have a project in mind or want to discuss potential opportunities? 
I'd love to hear from you. Let's make something great together.`,
  sendMessageTitle: 'Send a Message',
};



