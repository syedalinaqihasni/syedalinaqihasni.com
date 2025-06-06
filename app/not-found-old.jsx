import Link from 'next/link';

export default function PortfolioNotFound() {
  return (
    <div style={styles?.container}>
      <h1 style={styles?.title}>404</h1>
      <p style={styles?.subtitle}>Oops! The portfolio page you are looking for does not exist.</p>
      <p style={styles?.text}>Maybe check out some of our other projects or go back home.</p>
      <div style={styles?.links}>
        <Link href="/"style={styles?.link}>Home
        </Link>
        <Link href="/portfolio" style={styles?.link}>Portfolio
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '8rem',
    margin: 0,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.8rem',
    margin: '1rem 0',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
};
