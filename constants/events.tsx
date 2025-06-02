import {Event} from "@/types/event";
const events: Event[] = [
  {
    id: '1',
    slug: 'react-workshop',
    image: '/images/react-workshop.jpg',
    title: 'React Workshop',
    description: 'A hands-on workshop on React fundamentals.',
    type: 'Workshop',
    date: '2024-07-15T10:00:00',
    location: 'New York, NY',
    virtual: false,
  },
  {
    id: '2',
    slug: 'webinar-ai',
    image: '/images/webinar-ai.jpg',
    title: 'AI in Web Development',
    description: 'Exploring AI tools for modern web development.',
    type: 'Webinar',
    date: '2024-08-01T18:00:00',
    location: 'Online',
    virtual: true,
  },
];

export {
    events,
}