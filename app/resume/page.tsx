"use client"
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Resume | Portfolio",
//   description: "View or download my professional resume",
// };

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">John Doe</h1>
            <h2 className="text-xl text-muted-foreground mb-4">Senior Full Stack Developer</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:john@example.com">john@example.com</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground">
              Senior Full Stack Developer with 5+ years of experience building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. Strong focus on code quality,
              performance optimization, and team collaboration.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Senior Full Stack Developer</h4>
                  <span className="text-muted-foreground">2021 - Present</span>
                </div>
                <div className="text-muted-foreground mb-2">Tech Solutions Inc., San Francisco</div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Led development of multiple high-impact projects using React and Node.js</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented CI/CD pipelines and improved deployment processes</li>
                  <li>Reduced application load time by 40% through optimization</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Frontend Developer</h4>
                  <span className="text-muted-foreground">2019 - 2021</span>
                </div>
                <div className="text-muted-foreground mb-2">Digital Agency XYZ, New York</div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Developed responsive web applications using React and Vue.js</li>
                  <li>Collaborated with designers to implement pixel-perfect UIs</li>
                  <li>Integrated third-party APIs and services</li>
                  <li>Improved site performance and accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div>
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                <span className="text-muted-foreground">2015 - 2019</span>
              </div>
              <div className="text-muted-foreground">University of Technology</div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SCSS"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>AWS Certified Developer - Associate</li>
              <li>MongoDB Certified Developer</li>
              <li>Google Cloud Professional Developer</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}