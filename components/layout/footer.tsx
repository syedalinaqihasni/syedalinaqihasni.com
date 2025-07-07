"use client";

import {
  CONSTANT,
  CONTACT_INFO,
  LINKS_GROUPS,
  SOCIAL_LINKS,
} from "@/constants/footer";
import Link from "next/link";

const styles = {
  container: "w-full",
  heading: "text-lg font-semibold mb-4",
  grid: "grid grid-cols-2 gap-4",
  list: "space-y-1",
  link: "text-muted-foreground hover:text-foreground transition-colors",
  contactBlock: "mt-6",
  contactList: "space-y-2 text-sm text-muted-foreground",
  footerBase:
    "border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",
  socialIcons: "flex space-x-4",
  socialIcon:
    "h-5 w-5 text-muted-foreground hover:text-foreground transition-colors",
};

export default function Footer() {
  return (
    <footer className={"bg-muted py-12 mt-20"}>
      <div className={"container mx-auto px-4 md:px-6"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
          <div>
            <Link href={"/"} className={"font-bold text-2xl mb-4"}>
              <h3
                className={
                  "mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400"
                }
              >
                {CONSTANT?.brandName}
              </h3>
            </Link>
            <p className={"text-muted-foreground pr-[15%]"}>
              {CONSTANT?.description}
            </p>
            <p className={"text-muted-foreground pr-[15%]"}>
              {CONSTANT?.description2}
            </p>
          </div>
          <div className={styles?.container}>
            <h3 className={styles?.heading}>{CONSTANT?.quickLinksHeading}</h3>
            <div className={styles?.grid}>
              {LINKS_GROUPS?.map((group, i) => (
                <ul className={styles?.list} key={i}>
                  {group?.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className={styles?.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div>
            <div className={styles?.contactBlock}>
              <h3 className={styles?.heading}>{CONSTANT?.connectHeading}</h3>
              <ul className={styles?.contactList}>
                {CONTACT_INFO?.map((item, idx) => (
                  <li key={idx}>
                    {item.link && (
                      <>
                        {item.label}: <Link href={item.link}>{item.value}</Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles?.footerBase}>
          <p className={"text-sm text-muted-foreground"}>
            {CONSTANT?.copyright}{' | '}<span><Link href="/term-and-conditions">Term and Conditions</Link></span>{' | '}<span><Link href="/privacy-policy">Privacy Policy</Link></span>
          </p>
          <div className={"mt-2 md:mt-0"}>
            <div className={styles?.socialIcons}>
              {SOCIAL_LINKS?.map(({ icon: Icon, url, label }) => (
                <Link
                  key={label}
                  href={url}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={label}
                >
                  <Icon className={styles?.socialIcon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
