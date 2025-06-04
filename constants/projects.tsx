// Mock data - in a real app, this would come from Sanity
export const projects = [
  {
    id:'1',
  title: 'E-Commerce Platform',
  slug: 'e-commerce-platform',
  description:
    'A full-featured e-commerce platform with cart, checkout, and payment integration.',
  longDescription: `
      <div >
  <h1>Project Title</h1>
  <h2>Overview</h2>
  <p>This project demonstrates the use of various <a href="#">HTML elements</a> within a styled container.</p>

  <h3>Features</h3>
  <ul>
    <li>Clean typography</li>
    <li>Responsive images</li>
    <li>Syntax-highlighted code blocks with copy button</li>
    <li>Styled tables and buttons</li>
  </ul>

  <h4>Steps to Run</h4>
  <ol>
    <li>Clone the repo</li>
    <li>Install dependencies</li>
    <li>Run the development server</li>
  </ol>
<div>
  <p>
    This is <strong>bold</strong>, <em>italic</em>, <u>underlined</u>, <s>strikethrough</s>, and <mark>highlighted</mark> text. You can also have
    <small>small text</small>, <sub>subscript</sub>, and <sup>superscript</sup> in the same sentence.
  </p>
</div>

  <h2>Image Preview</h2>
  <img src="https://via.placeholder.com/600x300" alt="Sample Image" />

  <h2>Inline Code</h2>
  <p>Use <code>npm run dev</code> to start the server.</p>

  <h2>Block Code</h2>
  <pre><code>function greet(name) {
  console.log("Hello, " + name);
}
greet("World");</code></pre>

  <h2>Blockquote</h2>
  <blockquote>
    "First, solve the problem. Then, write the code." – John Johnson
  </blockquote>

  <h2>Table Example</h2>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Responsive Layout</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dark Mode</td>
        <td>🚧</td>
      </tr>
    </tbody>
  </table>

  <h2>Action Button</h2>
  <a href="#" class="button">Visit Live Demo</a>

  <hr />

  <h2>Conclusion</h2>
  <p>This sample covers all key HTML tags with scoped styles under <code>.single-project</code>. Modify as needed to match your project’s branding.</p>
</div>

    `,
  image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
  gallery: [
    'https://images.pexels.com/photos/6956904/pexels-photo-6956904.jpeg',
    'https://images.pexels.com/photos/6956905/pexels-photo-6956905.jpeg',
    'https://images.pexels.com/photos/6956906/pexels-photo-6956906.jpeg',
  ],
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  categories:  'React', 
  githubUrl: 'https://github.com',
  liveUrl: 'https://example.com',
  publishedAt: '2024-01-15',
  stats: {
    users: '10,000+',
    orders: '50,000+',
    revenue: '$1M+',
  },
  relatedProjects: [
    {
      id: '2',
      title: 'Task Management App',
      slug: 'task-management-app',
      description:
        'A collaborative task management application with real-time updates.',
      image:
        'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: '3',
      title: 'Syed Ali Naqi Hasni',
      slug: 'portfolio-website',
      description:
        'A beautiful portfolio website showcasing projects and skills.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
  ],
}];

// Mock data - in a real app, this would come from Sanity
export const FEATURED_PROJECTS = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with cart, checkout, and payment integration.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Syed Ali Naqi Hasni',
      description:
        'A beautiful portfolio website showcasing projects and skills.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];
 export  const CONSTANT ={
  title:'My Projects',
  description:"Here's a selection of my best work across web development, design, and software engineering.",
}
  
