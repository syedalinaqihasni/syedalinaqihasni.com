import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FeaturedProjects from "@/components/home/projects";
import HomeSkills from "@/components/home/skills";
import Contact from "@/components/contact/contact-form";
import { CONTENT } from "@/constants/home";
import FeaturedBlogs from "@/components/blogs/featured-blogs";

const styles = {
  sectionPadding: "py-16 px-4",
  heroPadding: "pt-32 pb-16 md:pt-40 md:pb-20 px-4",
  containerSmall: "container mx-auto max-w-4xl",
  containerMedium: "container mx-auto max-w-5xl",
  containerLarge: "container mx-auto max-w-6xl",
  heroGrid: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
  heroTextCol: "md:col-span-7",
  heroImageCol: "md:col-span-5 flex justify-center md:justify-end",
  heroImageWrapper:
    "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl",
  heroTitle:
    "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400",
  heroSubtitle: "text-2xl md:text-3xl font-medium mb-6",
  heroDescription: "text-lg md:text-xl text-muted-foreground mb-8 max-w-lg",
  heroButtons: "flex flex-wrap gap-4",
  socialButtons: "flex gap-4 mt-8",
  sectionHeader: "text-3xl font-bold mb-10 text-center",
  sectionHeaderLeft: "text-3xl font-bold mb-10",
  projectsHeaderWrapper: "flex justify-between items-center mb-10",
  centerText: "text-center mt-10",
  contactText: "text-center text-muted-foreground mb-10 max-w-2xl mx-auto",
};

function SocialButtons({ links }: { links: typeof CONTENT.socialLinks }) {
  return (
    <div className={styles?.socialButtons}>
      {links?.map(({ label, href, icon: Icon, isExternal }, index) => {
        if (isExternal) {
          return (
            <Link
              key={index}
              href={href}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={label}
            >
              <Button variant={"ghost"} size={"icon"} aria-label={label}>
                <Icon className={"h-5 w-5"} />
              </Button>
            </Link>
          );
        }
        return (
          <Link
            key={index}
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={label}
          >
            <Button variant={"ghost"} size={"icon"} aria-label={label}>
              <Icon className={"h-5 w-5"} />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

export default function Home() {
  const {
    hero,
    buttons,
    socialLinks,
    sections: { featuredProjects, skills, contact },
  } = CONTENT;

  return (
    <div>
      <section className={styles?.heroPadding}>
        <div className={styles?.containerMedium}>
          <div className={styles?.heroGrid}>
            <div className={styles?.heroTextCol}>
              <h1 className={styles?.heroTitle}>
                {`Hi, I'm `}
                {hero?.name}
              </h1>
              <h2 className={styles?.heroSubtitle}>{hero?.title}</h2>
              <p className={styles?.heroDescription}>{hero?.description}</p>

              <div className={styles?.heroButtons}>
                <Link href={buttons?.projects?.href}>
                  <Button size={"lg"} className={"rounded-full"}>
                    {buttons?.projects?.label}
                    <ArrowRight className={"ml-2 h-4 w-4"} />
                  </Button>
                </Link>
                <Link href={buttons?.hireMe?.href}>
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className={"rounded-full"}
                  >
                    {buttons?.hireMe?.label}
                  </Button>
                </Link>
              </div>

              <SocialButtons links={socialLinks} />
            </div>
            <div className={styles?.heroImageCol}>
              <div className={styles?.heroImageWrapper}>
                <Image
                  src={hero?.imageSrc}
                  alt={hero?.imageAlt}
                  fill
                  className={"object-cover"}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles?.sectionPadding} bg-muted/50`}
        id={"projects"}
      >
        <div className={styles?.containerLarge}>
          <div className={styles?.projectsHeaderWrapper}>
            <h2 className={styles?.sectionHeaderLeft}>
              {featuredProjects?.title}
            </h2>
            <Link href={featuredProjects?.viewAllHref}>
              <Button variant={"outline"}>
                {featuredProjects?.viewAllLabel}
                <ArrowRight className={"ml-2 h-4 w-4"} />
              </Button>
            </Link>
          </div>
          <FeaturedProjects />
        </div>
      </section>
      <section className={styles?.sectionPadding}>
        <div className={styles?.containerLarge}>
          <h2 className={styles?.sectionHeader}>{skills.title}</h2>
          <HomeSkills />
          <div className={styles?.centerText}>
            <Link href={skills.seeAllHref}>
              <Button>
                {skills?.seeAllLabel}
                <ArrowRight className={"ml-2 h-4 w-4"} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={`${styles?.sectionPadding} bg-muted/50`}
        id={"projects"}
      >
        <div className={styles?.containerLarge}>
          <div className={styles?.projectsHeaderWrapper}>
            <h2 className={styles?.sectionHeaderLeft}>{"Recent Blogs"}</h2>
            <Link href={"/blogs"}>
              <Button variant={"outline"}>
                {featuredProjects?.viewAllLabel}
                <ArrowRight className={"ml-2 h-4 w-4"} />
              </Button>
            </Link>
          </div>
          <FeaturedBlogs />
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`${styles?.sectionPadding} bg-muted/50`}
        id={"contact"}
      >
        <div className={styles?.containerSmall}>
          <h2 className={styles?.sectionHeader}>{contact.title}</h2>
          <p className={styles?.contactText}>{contact.description}</p>
          <Contact />
        </div>
      </section>
    </div>
  );
}
