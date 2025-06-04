import { Post } from "@/types/blogs";

const CONSTANT = {
  pageTitle: 'My Blog',
  pageDescription:
    'Thoughts, tutorials, and insights about web development, design, and technology.',searchPlaceholder: 'Search articles...',shareButton: 'Share Article',
  blogTitleSuffix: ' | Blog',
  readUnit: 'min read',
};

// Static fallback blog post data
const posts:Post[]= [
    {
      id: '1',
      title: 'Getting Started with Next.js and Tailwind',
      excerpt:
        'Learn how to set up a new Next.js project with Tailwind CSS for rapid development.',
      slug: 'getting-started-nextjs-tailwind',
      publishedAt: '2023-05-15',
      readingTime: '5 min read',
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
      categories: ['Next.js', 'Tailwind CSS', 'Web Development'],
      content:` <div >
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
`
    },
    {
      id: '2',
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt:
        'Explore techniques for creating fully responsive user interfaces using Tailwind CSS.',
      slug: 'responsive-ui-tailwind',
      publishedAt: '2023-06-10',
      readingTime: '7 min read',
      image: 'https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg',
      categories: ['CSS', 'Tailwind CSS', 'Responsive Design'],content:` <div >
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
`
    },
    {
      id: '3',
      title: 'State Management in React Applications',
      excerpt:
        'An overview of different state management approaches in modern React applications.',
      slug: 'state-management-react',
      publishedAt: '2023-07-22',
      readingTime: '10 min read',
      image:
        'https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg',
      categories: ['React', 'State Management', 'JavaScript'],content:` <div >
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
`
    },
    {
      id: '4',
      title: 'Creating Animations with Framer Motion',
      excerpt:
        'Learn how to add beautiful animations to your React applications using Framer Motion.',
      slug: 'framer-motion-animations',
      publishedAt: '2023-08-05',
      readingTime: '8 min read',
      image:
        'https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg',
      categories: ['React', 'Animation', 'Framer Motion'],content:` <div >
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
`
    },
    {
      id: '5',
      title: 'Serverless Functions with Next.js API Routes',
      excerpt:
        'Explore how to use Next.js API routes to create serverless functions for your applications.',
      slug: 'nextjs-api-routes',
      publishedAt: '2023-09-18',
      readingTime: '6 min read',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      categories: ['Next.js', 'Serverless', 'API'],content:` <div >
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
`
    },
  ];

export {
    CONSTANT,posts
}