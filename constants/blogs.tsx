import { Post } from '@/types/blogs';

export const CONSTANT = {
  pageTitle: 'My Blog',
  pageDescription:
    'Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.',
  readUnit: 'read',
  shareButton: 'Share Article',
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications with Next.js',
    excerpt:
      'Learn how to structure and scale your React applications using Next.js for better performance and maintainability.',
    slug: 'building-scalable-react-applications-nextjs',
    publishedAt: '2024-02-15T00:00:00Z',
    readingTime: '8 min',
    image: '/images/blogs/reactpress-a-seamless-react-app-workflow-with-wordpress-cms.png',
    categories: ['React', 'Next.js', 'JavaScript', 'Web Development'],
    content: `
      <div>
        <h2>Introduction</h2>
        <p>Building scalable React applications is crucial for long-term success. In this comprehensive guide, we'll explore how Next.js can help you create maintainable and performant applications.</p>
        
        <h2>Why Next.js for Scalable Applications?</h2>
        <p>Next.js provides several features that make it ideal for building scalable React applications:</p>
        
        <ul>
          <li><strong>Server-Side Rendering (SSR)</strong> - Improves initial page load times and SEO</li>
          <li><strong>Static Site Generation (SSG)</strong> - Pre-renders pages at build time for optimal performance</li>
          <li><strong>API Routes</strong> - Build full-stack applications with built-in API endpoints</li>
          <li><strong>Automatic Code Splitting</strong> - Only loads the JavaScript needed for each page</li>
          <li><strong>Built-in CSS Support</strong> - Supports CSS Modules, Sass, and CSS-in-JS solutions</li>
        </ul>
        
        <h2>Project Structure Best Practices</h2>
        <p>A well-organized project structure is essential for scalability. Here's a recommended structure:</p>
        
        <pre><code>src/
├── components/
│   ├── ui/
│   ├── forms/
│   └── layout/
├── pages/
├── hooks/
├── utils/
├── types/
├── styles/
└── lib/</code></pre>
        
        <h2>Component Architecture</h2>
        <p>Follow these principles for scalable component architecture:</p>
        
        <h3>1. Single Responsibility Principle</h3>
        <p>Each component should have a single, well-defined purpose. This makes components easier to test, maintain, and reuse.</p>
        
        <h3>2. Composition over Inheritance</h3>
        <p>Use composition to build complex components from simpler ones. This approach is more flexible and easier to understand.</p>
        
        <h3>3. Props Interface Design</h3>
        <p>Design clear and consistent props interfaces. Use TypeScript to enforce type safety and improve developer experience.</p>
        
        <pre><code>interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}</code></pre>
        
        <h2>State Management Strategies</h2>
        <p>Choose the right state management solution based on your application's complexity:</p>
        
        <ul>
          <li><strong>Local State</strong> - Use useState for component-specific state</li>
          <li><strong>Context API</strong> - For sharing state across multiple components</li>
          <li><strong>Zustand/Redux</strong> - For complex global state management</li>
          <li><strong>React Query</strong> - For server state management</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>Implement these performance optimization techniques:</p>
        
        <h3>Code Splitting</h3>
        <p>Use dynamic imports to split your code and reduce initial bundle size:</p>
        
        <pre><code>const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});</code></pre>
        
        <h3>Image Optimization</h3>
        <p>Use Next.js Image component for automatic image optimization:</p>
        
        <pre><code>import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority
/></code></pre>
        
        <h2>Testing Strategy</h2>
        <p>Implement a comprehensive testing strategy:</p>
        
        <ul>
          <li><strong>Unit Tests</strong> - Test individual components and functions</li>
          <li><strong>Integration Tests</strong> - Test component interactions</li>
          <li><strong>E2E Tests</strong> - Test complete user workflows</li>
        </ul>
        
        <h2>Deployment and Monitoring</h2>
        <p>Set up proper deployment and monitoring:</p>
        
        <ul>
          <li>Use Vercel for seamless Next.js deployment</li>
          <li>Implement error tracking with Sentry</li>
          <li>Monitor performance with Web Vitals</li>
          <li>Set up analytics to track user behavior</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications with Next.js requires careful planning and adherence to best practices. By following the strategies outlined in this guide, you'll be well-equipped to create applications that can grow with your needs while maintaining performance and maintainability.</p>
        
        <p>Remember that scalability is not just about handling more users or data—it's also about making your codebase easier to work with as your team and feature set grow.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns for React Development',
    excerpt:
      'Explore advanced TypeScript patterns and techniques that will make your React code more type-safe and maintainable.',
    slug: 'advanced-typescript-patterns-react-development',
    publishedAt: '2024-01-20T00:00:00Z',
    readingTime: '12 min',
    image: '/images/blogs/solid-principles-of-object-oriented-design-a-quick-guide-to-enhance-your-development-standards.jpg',
    categories: ['TypeScript', 'React', 'JavaScript', 'Programming'],
    content: `
      <div>
        <h2>Introduction</h2>
        <p>TypeScript has become an essential tool for React development, providing type safety and improved developer experience. In this article, we'll explore advanced TypeScript patterns that will take your React development to the next level.</p>
        
        <h2>Generic Components</h2>
        <p>Generic components allow you to create reusable components that work with different data types while maintaining type safety.</p>
        
        <pre><code>interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}</code></pre>
        
        <h2>Conditional Types</h2>
        <p>Use conditional types to create more flexible and type-safe APIs:</p>
        
        <pre><code>type ButtonProps<T extends 'button' | 'link'> = {
  variant: T;
} & (T extends 'link' 
  ? { href: string; target?: string } 
  : { onClick: () => void; disabled?: boolean }
);

function Button<T extends 'button' | 'link'>(props: ButtonProps<T>) {
  if (props.variant === 'link') {
    return <a href={props.href} target={props.target}>{props.children}</a>;
  }
  return <button onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}</code></pre>
        
        <h2>Utility Types</h2>
        <p>Leverage TypeScript's built-in utility types for better type manipulation:</p>
        
        <h3>Pick and Omit</h3>
        <pre><code>interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Create a public user type without sensitive data
type PublicUser = Omit<User, 'password'>;

// Create a user creation type
type CreateUser = Pick<User, 'name' | 'email' | 'password'>;</code></pre>
        
        <h3>Partial and Required</h3>
        <pre><code>// Make all properties optional for updates
type UpdateUser = Partial<User>;

// Make specific properties required
type UserWithRequiredEmail = Required<Pick<User, 'email'>> & Partial<User>;</code></pre>
        
        <h2>Template Literal Types</h2>
        <p>Create more expressive types using template literal types:</p>
        
        <pre><code>type EventName = 'click' | 'focus' | 'blur';
type EventHandler<T extends EventName> = \`on${Capitalize<T>}`;

type ButtonEvents = {
  [K in EventName as EventHandler<K>]?: () => void;
};

// Results in: { onClick?: () => void; onFocus?: () => void; onBlur?: () => void; }</code></pre>
        
        <h2>Mapped Types</h2>
        <p>Transform existing types to create new ones:</p>
        
        <pre><code>type FormState<T> = {
  [K in keyof T]: {
    value: T[K];
    error?: string;
    touched: boolean;
  };
};

interface LoginForm {
  email: string;
  password: string;
}

type LoginFormState = FormState<LoginForm>;
// Results in:
// {
//   email: { value: string; error?: string; touched: boolean };
//   password: { value: string; error?: string; touched: boolean };
// }</code></pre>
        
        <h2>Discriminated Unions</h2>
        <p>Use discriminated unions for type-safe state management:</p>
        
        <pre><code>type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function DataComponent() {
  const [state, setState] = useState<AsyncState<User[]>>({ status: 'idle' });
  
  // TypeScript knows the available properties based on status
  if (state.status === 'success') {
    return <div>{state.data.length} users loaded</div>;
  }
  
  if (state.status === 'error') {
    return <div>Error: {state.error}</div>;
  }
  
  return <div>Loading...</div>;
}</code></pre>
        
        <h2>Higher-Order Component Types</h2>
        <p>Type HOCs properly for better reusability:</p>
        
        <pre><code>function withLoading<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P & { isLoading: boolean }> {
  return function WithLoadingComponent(props) {
    const { isLoading, ...restProps } = props;
    
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return <Component {...(restProps as P)} />;
  };
}</code></pre>
        
        <h2>Custom Hook Types</h2>
        <p>Create well-typed custom hooks:</p>
        
        <pre><code>interface UseApiOptions<T> {
  url: string;
  transform?: (data: any) => T;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useApi<T = any>({ url, transform }: UseApiOptions<T>): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(transform ? transform(result) : result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url, transform]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return { data, loading, error, refetch: fetchData };
}</code></pre>
        
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Start with strict TypeScript configuration</strong> - Enable strict mode and all strict checks</li>
          <li><strong>Use type assertions sparingly</strong> - Prefer type guards and proper typing</li>
          <li><strong>Leverage type inference</strong> - Let TypeScript infer types when possible</li>
          <li><strong>Create reusable type utilities</strong> - Build a library of common type patterns</li>
          <li><strong>Document complex types</strong> - Add comments to explain complex type logic</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Advanced TypeScript patterns can significantly improve your React development experience by providing better type safety, improved IntelliSense, and catching errors at compile time. Start incorporating these patterns gradually into your projects and watch your code quality improve.</p>
        
        <p>Remember that the goal is not to use every advanced feature, but to choose the right patterns that solve real problems in your codebase while maintaining readability and maintainability.</p>
      </div>
    `,
  },
];