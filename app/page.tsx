import { Button } from '@/components/ui/button';
import { ArrowRight} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HomeProjects from '@/components/home/projects';
import HomeSkills from '@/components/home/skills';
import Contact from '@/components/contact/contact-form';
import { styles } from '@/styles/home';
import { HOME } from '@/constants/home';

/**
 * Renders social icon buttons with proper accessibility and external link support.
 * @param {object[]} links - Array of social link objects
 */
function SocialButtons({ links }: { links: typeof HOME.socialLinks }) {
  return (
    <div className={styles?.socialButtons}>
      {links.map(({ label, href, icon: Icon, isExternal }, index) => {
        // If external (like resume), render as anchor tag with target=_blank
        if (isExternal) {
          return (
            <a
              key={index}
              href={href}
              target={'_blank'}
              rel={'noopener noreferrer'}
              aria-label={label}
            >
              <Button variant={'ghost'}size={'icon'}aria-label={label}>
                <Icon className={'h-5 w-5'}/>
              </Button>
            </a>
          );
        }
        // External social links open in new tab as well
        return (
          <a
            key={index}
            href={href}
            target={'_blank'}
            rel={'noopener noreferrer'}
            aria-label={label}
          >
            <Button variant={'ghost'}size={'icon'}aria-label={label}>
              <Icon className={'h-5 w-5'}/>
            </Button>
          </a>
        );
      })}
    </div>
  );
}

/**
 * Home page main component.
 * Implements hero, featured projects, skills, and contact sections.
 * Uses extracted styles and content constants for clean separation.
 */
export default function Home() {
  const {
    hero,
    buttons,
    socialLinks,
    sections: { featuredProjects, skills, contact },
  } = HOME;

  return (
    <div>
      {/* Hero Section */}
      <section className={styles?.heroPadding}>
        <div className={styles?.containerMedium}>
          <div className={styles?.heroGrid}>
            {/* Text Column */}
            <div className={styles?.heroTextCol}>
              <h1 className={styles?.heroTitle}>{`Hi, I'm `}{hero.name}</h1>
              <h2 className={styles?.heroSubtitle}>{hero.title}</h2>
              <p className={styles?.heroDescription}>{hero.description}</p>

              <div className={styles?.heroButtons}>
                <Link href={buttons.projects.href}>
                  <Button size={'lg'}className={'rounded-full'}>
                    {buttons.projects.label}
                    <ArrowRight className={'ml-2 h-4 w-4'}/>
                  </Button>
                </Link>
                <Link href={buttons.hireMe.href}>
                  <Button size={'lg'}variant={'outline'}className={'rounded-full'}>
                    {buttons.hireMe.label}
                  </Button>
                </Link>
              </div>

              <SocialButtons links={socialLinks} />
            </div>

            {/* Image Column */}
            <div className={styles?.heroImageCol}>
              <div className={styles?.heroImageWrapper}>
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  className={'object-cover'}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`${styles?.sectionPadding} bg-muted/50`} id={'projects'}>
        <div className={styles?.containerLarge}>
          <div className={styles?.projectsHeaderWrapper}>
            <h2 className={styles?.sectionHeaderLeft}>
              {featuredProjects.title}
            </h2>
            <Link href={featuredProjects.viewAllHref}>
              <Button variant={'outline'}>
                {featuredProjects.viewAllLabel}
                <ArrowRight className={'ml-2 h-4 w-4'}/>
              </Button>
            </Link>
          </div>
          <HomeProjects />
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles?.sectionPadding}>
        <div className={styles?.containerLarge}>
          <h2 className={styles?.sectionHeader}>{skills.title}</h2>
          <HomeSkills />
          <div className={styles?.centerText}>
            <Link href={skills.seeAllHref}>
              <Button>
                {skills.seeAllLabel}
                <ArrowRight className={'ml-2 h-4 w-4'}/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles?.sectionPadding} bg-muted/50`} id={'contact'}>
        <div className={styles?.containerSmall}>
          <h2 className={styles?.sectionHeader}>{contact.title}</h2>
          <p className={styles?.contactText}>{contact.description}</p>
          <Contact />
        </div>
      </section>
    </div>
  );
}
