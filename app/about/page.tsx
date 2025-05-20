import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn more about my journey, experience, and the tools I use",
};

const tools = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];

const journey = [
  {
    year: "2018",
    title: "Started Programming",
    description: "Began my journey with web development, learning HTML, CSS, and JavaScript.",
  },
  {
    year: "2019",
    title: "First Developer Role",
    description: "Joined a startup as a junior frontend developer, working with React.",
  },
  {
    year: "2020",
    title: "Full Stack Development",
    description: "Expanded my skills to include backend development with Node.js and databases.",
  },
  {
    year: "2021",
    title: "Senior Developer",
    description: "Promoted to senior developer, leading team projects and mentoring juniors.",
  },
  {
    year: "2022",
    title: "Tech Lead",
    description: "Became a tech lead, architecting solutions and managing development teams.",
  },
  {
    year: "2023",
    title: "Independent Consultant",
    description: "Started working as an independent consultant, helping businesses scale their tech.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a love for creating beautiful, functional, and user-friendly applications.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="prose dark:prose-invert">
              <p className="text-lg mb-4">
                Hello! I'm John, a full-stack developer based in San Francisco. I specialize in building
                exceptional digital experiences that combine beautiful design with powerful functionality.
              </p>
              <p className="text-lg mb-4">
                With over 5 years of experience in web development, I've had the pleasure of working
                with startups, agencies, and large corporations, helping them bring their visions to life.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through writing and speaking at tech conferences.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
            <div className="space-y-12">
              {journey.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background" />
                  <Card className="flex-1 md:w-1/2 mx-4">
                    <CardContent className="p-6">
                      <div className="font-bold text-xl mb-2">{event.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((category) => (
              <Card key={category.category}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}