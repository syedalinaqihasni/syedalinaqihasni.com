import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional experience and work history',
};

const PAGE_TITLE = 'Experience';
const PAGE_DESCRIPTION =
  "My professional journey and the companies I've had the pleasure to work with.";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {PAGE_DESCRIPTION}
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((experience) => (
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
                      <h3 className="font-semibold text-lg">
                        {experience.company}
                      </h3>
                      <p className="text-muted-foreground">
                        {experience.period}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {experience.location}
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      {experience.role}
                    </h3>
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
