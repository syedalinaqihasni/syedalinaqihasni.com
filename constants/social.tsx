import { SocialPosts } from "@/types/social";

const CONSTANT={
    title:'Social Media',
    description:'Stay updated with my latest posts and activities across social media platforms.'
}

const TAB_TITLES = {
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
};

const socialPosts: SocialPosts = {
  twitter: [
    {
      id: 1,
      content:
        'Just launched a new React component library! Check it out on GitHub 🚀',
      date: '2024-02-15T10:30:00Z',
      likes: 42,
      retweets: 12,
    },
    {
      id: 2,
      content:
        'Working on an exciting new project with Next.js 14 and Tailwind CSS. Stay tuned! 👨‍💻',
      date: '2024-02-14T15:45:00Z',
      likes: 38,
      retweets: 8,
    },
  ],
  linkedin: [
    {
      id: 1,
      title: 'New Blogs Post: Building Scalable Web Applications',
      content:
        'Excited to share my latest blog post about building scalable web applications using modern technologies...',
      date: '2024-02-13T09:15:00Z',
      likes: 156,
      comments: 23,
    },
    {
      id: 2,
      title: 'Speaking at TechConf 2024',
      content:
        'Looking forward to speaking about frontend architecture at TechConf 2024 next month...',
      date: '2024-02-12T14:20:00Z',
      likes: 234,
      comments: 45,
    },
  ],
  instagram: [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      caption: 'Another day at the office! #coding #developer #tech',
      date: '2024-02-11T11:30:00Z',
      likes: 89,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      caption:
        'Team lunch after shipping a major feature! 🎉 #teamwork #success',
      date: '2024-02-10T13:45:00Z',
      likes: 124,
    },
  ],
};

const SOCIALS_TITLE = 'Social Media';
const SOCIALS_DESCRIPTION =
  'Stay updated with my latest posts and activities across social media platforms.';

export {
    socialPosts,TAB_TITLES,CONSTANT,SOCIALS_TITLE,SOCIALS_DESCRIPTION
}