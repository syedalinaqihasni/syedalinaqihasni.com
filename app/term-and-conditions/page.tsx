"use client";

import { useState, useEffect } from "react";

const TERMS_AND_CONDITIONS = [
  {
    id: "introduction",
    title: "Introduction",
    content: "Welcome to our Terms and Conditions. Please read carefully.",
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    content: "Users must comply with all applicable laws and regulations.",
  },
  {
    id: "limitations",
    title: "Limitations of Liability",
    content: "We are not liable for any damages arising from use of our service.",
  },
  // Add more terms as needed
];

const styles = {
  container: "container mx-auto px-4 py-16 md:py-24  min-h-screen",
  wrapper: "max-w-5xl mx-auto  rounded-lg shadow-lg p-8",
  header: "text-center mb-10",
  title: "text-4xl md:text-5xl font-bold mb-4",
  tocHeader: "text-xl font-semibold mb-4",
  toc: "mb-10",
  tocList: "space-y-2",
  tocLink: "hover:underline font-medium transition-colors",
  termSection: "mb-10 scroll-mt-24",
  termTitle: "text-2xl font-bold mb-2",
  termContent: "",
  backToTop:
    "fixed bottom-8 right-8 px-4 py-2 rounded-full shadow-lg transition-colors z-50",
};

export default function TermsAndConditionsPage() {
  // Optional: control visibility of Back to Top button
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
        </header>

        {/* <nav className={styles.toc} aria-label="Table of contents">
          <h2 className={styles.tocHeader}>Contents</h2>
          <ul className={styles.tocList}>
            {TERMS_AND_CONDITIONS.map((term) => (
              <li key={term.id}>
                <a href={`#${term.id}`} className={styles.tocLink}>
                  {term.title}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        <main>
          {TERMS_AND_CONDITIONS.map((term) => (
            <section
              key={term.id}
              id={term.id}
              className={styles.termSection}
              tabIndex={-1}
              aria-labelledby={`${term.id}-title`}
            >
              <h2 id={`${term.id}-title`} className={styles.termTitle}>
                {term.title}
              </h2>
              <p className={styles.termContent}>
                {term.content || "Details coming soon."}
              </p>
            </section>
          ))}
        </main>
      </div>

      {showTopBtn && (
        <button
          className={styles.backToTop}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
