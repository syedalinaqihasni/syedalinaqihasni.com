import { Event } from "@/types/events";

const events: Event []= [{
  id: '1',
  title: 'Sample Event Title',
  description: 'This is a sample event description.',
  excerpt:"",
  type: 'Conference',
  slug: 'sample-event',
  image: '/sample-event.jpg',
  date: '2024-07-01T18:00:00Z',
  location: '123 Main St, City, Country',
  virtual: false,
  content: '<h1> asdasd</h1>'
}];

export {events}