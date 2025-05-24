
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "My professional experience and work history",
};

// Mock data - in a real app, this would come from Sanity
const experiences = [
  {
    id: "1",
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    logo: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg",
    period: "2021 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: [
      "Led development of multiple high-impact projects using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and improved deployment processes",
      "Reduced application load time by 40% through optimization",
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Digital Agency XYZ",
    logo: "https://images.pexels.com/photos/1337381/pexels-photo-1337381.jpeg",
    period: "2019 - 2021",
    location: "New York, NY",
    type: "Full-time",
    description: [
      "Developed responsive web applications using React and Vue.js",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Integrated third-party APIs and services",
      "Improved site performance and accessibility",
    ],
    skills: ["React", "Vue.js", "SCSS", "REST APIs", "Webpack"],
  },
  {
    id: "3",
    role: "Web Developer",
    company: "Startup Co",
    logo: "https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg",
    period: "2018 - 2019",
    location: "Remote",
    type: "Contract",
    description: [
      "Built and maintained client websites using WordPress",
      "Implemented custom themes and plugins",
      "Optimized website performance and SEO",
      "Provided technical support to clients",
    ],
    skills: ["WordPress", "PHP", "JavaScript", "MySQL", "SEO"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 bg-muted p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">{experience.company}</h3>
                      <p className="text-muted-foreground">{experience.period}</p>
                      <p className="text-sm text-muted-foreground mt-2">{experience.location}</p>
                      <Badge variant="secondary" className="mt-2">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-6">
                    <h3 className="text-2xl font-bold mb-4">{experience.role}</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                      {experience.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}