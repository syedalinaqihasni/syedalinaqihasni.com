import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { RESUME } from '@/constants/resume';

export const metadata: Metadata = {
  title: 'Resume | Portfolio',
  description: 'View or download my professional resume',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{RESUME.profile.name}</h1>
            <h2 className="text-xl text-muted-foreground mb-4">
              {RESUME.profile.title}
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${RESUME.profile.email}`}>
                  {RESUME.profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href={`tel:${RESUME.profile.phone}`}>
                  {RESUME.profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{RESUME.profile.location}</span>
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
            <p className="text-muted-foreground">{RESUME.summary}</p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {RESUME.experiences.map((exp) => (
                <div key={exp.role + exp.period}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">{exp.role}</h4>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="text-muted-foreground mb-2">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div>
              {RESUME.education.map((edu) => (
                <>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <span className="text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="text-muted-foreground">{edu.institution}</div>
                </>
              ))}
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
                  {RESUME.skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {RESUME.skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {RESUME.skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
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
              {RESUME.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
