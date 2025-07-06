"use client";

import { useState, useEffect } from "react";

const PRIVACY_POLICY_SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to our Privacy Policy. Your privacy is critically important to us.",
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content:
      "We collect information that you provide to us directly and information that is collected automatically, such as usage data and cookies.",
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content:
      "We use your information to provide, maintain, and improve our services, as well as to communicate with you.",
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    content:
      "We do not share your personal information with third parties except as necessary to provide our services or as required by law.",
  },
  {
    id: "data-security",
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your information from unauthorized access.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete your personal information. Contact us for any requests.",
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    content:
      "We may update our Privacy Policy from time to time. We encourage you to review this page periodically.",
  },
  // Add more sections as needed
];

const styles = {
  container: "container mx-auto px-4 py-16 md:py-24 min-h-screen",
  wrapper: "max-w-5xl mx-auto rounded-lg shadow-lg p-8",
  header: "text-center mb-10",
  title: "text-4xl md:text-5xl font-bold mb-4",
  tocHeader: "text-xl font-semibold mb-4",
  toc: "mb-10",
  tocList: "space-y-2",
  tocLink: "hover:underline font-medium transition-colors",
  section: "mb-10 scroll-mt-24",
  sectionTitle: "text-2xl font-bold mb-2",
  sectionContent: "",
  backToTop:
    "fixed bottom-8 right-8 px-4 py-2 rounded-full shadow-lg transition-colors z-50",
};

export default function PrivacyPolicyPage() {
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
          <h1 className={styles.title}>Privacy Policy</h1>
        </header>

        {/* <nav className={styles.toc} aria-label="Table of contents">
          <h2 className={styles.tocHeader}>Contents</h2>
          <ul className={styles.tocList}>
            {PRIVACY_POLICY_SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={styles.tocLink}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        <main>
          {PRIVACY_POLICY_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              tabIndex={-1}
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                {section.title}
              </h2>
              <p className={styles.sectionContent}>
                {section.content || "Details coming soon."}
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
