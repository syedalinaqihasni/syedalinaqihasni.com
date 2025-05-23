import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Briefcase, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HomeProjects from '@/components/home/projects';
import HomeSkills from '@/components/home/skills';
import Contact from '@/components/contact/contact-form';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400">
                  Hi, I'm Syed Hasni
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Frontend Web Designer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                I build exceptional digital experiences that are fast,
                accessible, and visually appealing. Let's create something
                amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#">
                  <Button size="lg" className="rounded-full">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="lg" variant="outline" className="rounded-full">
                    Hire Me
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/syedalinaqihasni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/syedalinaqihasni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Briefcase className="h-5 w-5" />
                  </Button>
                </a>
                <Link href="#">
                  <Button variant="ghost" size="icon" aria-label="Resume">
                    <FileText className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="https://raw.githubusercontent.com/syedalinaqihasni/syedalinaqihasni.com/refs/heads/main/images/syedalinaqihasni.jpg?token=GHSAT0AAAAAADDHF65SLQPE5N2DTIFLI2WC2BQ6BUQ"
                  alt="Syed Ali Naqi Hasni - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <HomeProjects />
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Skills & Expertise
          </h2>
          <HomeSkills />
          <div className="text-center mt-10">
            <Link href="/skills">
              <Button>
                See All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Let's make something great together.
          </p>
          <Contact />
        </div>
      </section>
    </div>
  );
}
