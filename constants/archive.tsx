export const ARCHIVE = {
  medium: [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      excerpt:
        'Learn how to structure and scale your React applications for better maintainability.',
      date: '2024-02-15',
      url: 'https://medium.com/@SyedAliNaqiHasni/building-scalable-react-applications-947b6d5c6b0c',
      tags: ['React', 'Architecture', 'JavaScript'],
      readTime: '8 min read',
    },
    {
      id: '2',
      title: 'Advanced TypeScript Patterns',
      excerpt:
        'Exploring advanced TypeScript patterns and best practices for large applications.',
      date: '2024-01-20',
      url: 'https://medium.com/@SyedAliNaqiHasni/advanced-typescript-patterns-0a06c03204f3',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      readTime: '12 min read',
    },
  ],
  devto: [
    {
      id: '1',
      title: 'Getting Started with Next.js 14',
      excerpt:
        'A comprehensive guide to building applications with Next.js 14.',
      date: '2024-02-10',
      url: 'https://dev.to/syedalinaqihasni/getting-started-with-nextjs-14-4de3',
      tags: ['Next.js', 'React', 'Web Development'],
      readTime: '10 min read',
    },
    {
      id: '2',
      title: 'CSS Grid Mastery',
      excerpt: 'Master CSS Grid layout with practical examples and tips.',
      date: '2024-01-15',
      url: 'https://dev.to/syedalinaqihasni/css-grid-mastery-with-practical-examples-1n3k',
      tags: ['CSS', 'Web Design', 'Frontend'],
      readTime: '6 min read',
    },
  ],
  reddit: [
    {
      id: '1',
      title: 'Optimizing React Performance',
      excerpt: 'Tips and tricks for improving React application performance.',
      date: '2024-02-05',
      url: 'https://www.reddit.com/r/reactjs/comments/1ah3n2r/optimizing_react_performance_what_are_you_missing/',
      tags: ['React', 'Performance', 'JavaScript'],
      upvotes: 245,
    },
    {
      id: '2',
      title: 'Modern CSS Features',
      excerpt:
        'Discussion about the latest CSS features and their browser support.',
      date: '2024-01-10',
      url: 'https://www.reddit.com/r/webdev/comments/1a8zjla/modern_css_features_you_should_start_using_today/',
      tags: ['CSS', 'Web Development', 'Frontend'],
      upvotes: 189,
    },
  ],
};

const archivePosts = {
  medium: [
    {
      id: '1',
      title: 'Optimizing React Apps with useMemo',
      excerpt:
        'Understand when and how to use useMemo to avoid unnecessary re-renders.',
      tags: ['React', 'Performance'],
      url: 'https://medium.com/example',
      readTime: '4 min read',
      date: '2024-01-12T00:00:00Z',
    },
  ],
  devto: [
    {
      id: '2',
      title: 'Demystifying Server Components in Next.js',
      excerpt:
        'Server components are here. Let’s unpack what they really mean.',
      tags: ['Next.js', 'React'],
      url: 'https://dev.to/example',
      readTime: '6 min read',
      date: '2024-02-03T00:00:00Z',
    },
  ],
  reddit: [
    {
      id: '3',
      title: 'I built my portfolio using Next.js 14. Feedback appreciated!',
      excerpt: 'Check it out and let me know your thoughts.',
      tags: ['Next.js', 'Portfolio'],
      url: 'https://reddit.com/example',
      upvotes: 230,
      date: '2024-03-18T00:00:00Z',
    },
  ],
};

const socialPosts = {
  twitter: [
    {
      id: '1',
      content:
        'Just launched a new React component library! Check it out on GitHub 🚀',
      date: '2024-02-15T10:30:00Z',
      likes: 42,
      retweets: 12,
    },
  ],
  linkedin: [
    {
      id: '1',
      title: 'New Blogs Post: Building Scalable Web Applications',
      content:
        'Excited to share my latest blog post about building scalable web applications using modern technologies...',
      date: '2024-02-13T09:15:00Z',
      likes: 156,
      comments: 23,
    },
  ],
  instagram: [
    {
      id: '1',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      caption: 'Another day at the office! #coding #developer #tech',
      date: '2024-02-11T11:30:00Z',
      likes: 89,
    },
  ],
};

const TAB_TITLES = {
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
};

const SOCIALS_TITLE = 'Social Media';
const SOCIALS_DESCRIPTION =
  'Stay updated with my latest posts and activities across social media platforms.';

export const PAGE_TITLE = 'Development Archive';
export const PAGE_SUBTITLE =
  'A collection of my articles, discussions, and contributions across various platforms.';
export const MEDIUM = 'Medium';
export const DEVTO = 'Dev.to';
export const REDDIT = 'Reddit';

export {
  socialPosts,archivePosts,
  TAB_TITLES,
  SOCIALS_TITLE,
  SOCIALS_DESCRIPTION,
}
