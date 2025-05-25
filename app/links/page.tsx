import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import { LINKS } from '@/constants';

export const metadata: Metadata = {
  title: 'Links | Portfolio',
  description:
    'Find all my social media profiles and important links in one place',
};

const PROFILE = {
  name: 'Syed Ali Naqi Hasni',
  role: 'Front End Developer & UI/UX Designer',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
};
export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src={PROFILE.image}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
          <p className="text-muted-foreground">{PROFILE.role}</p>
        </div>

        <Card>
          <CardContent className="p-4 space-y-4">
            {LINKS.map((link) => (
              <Button
                key={link.id}
                asChild
                variant="outline"
                className={`w-full justify-start text-white ${link.color}`}
              >
                <a
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.title}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
