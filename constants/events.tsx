import { Event } from "@/types/events";

const events: Event []= [{
  id: 1,
  title: 'Sample Event Title',
  description: 'This is a sample event description.',
  excerpt:"",
  category: 'Conference',
  slug: 'sample-event',
  image: 'https://www.syedalinaqihasni.com/sample-event?.webp',
  date: '2024-07-01T18:00:00Z',
  location: '123 Main St, City, Country',
  virtual: false,
  tags:['Event','Sample'],
  content: `<div >
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
greet("World");
</code></pre>

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
}];

export {events}