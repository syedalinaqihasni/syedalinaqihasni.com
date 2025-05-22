"use client"
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, Instagram, Facebook, MessageSquare } from "lucide-react";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Links | Portfolio",
//   description: "Find all my social media profiles and important links in one place",
// };

// Mock data - in a real app, this would come from Sanity
const links = [
  { 
    id: "1", 
    title: "GitHub", 
    url: "https://github.com", 
    icon: <Github className="h-5 w-5" />,
    color: "bg-[#333] hover:bg-[#222]",
  },
  { 
    id: "2", 
    title: "LinkedIn", 
    url: "https://linkedin.com", 
    icon: <Linkedin className="h-5 w-5" />,
    color: "bg-[#0077B5] hover:bg-[#005885]",
  },
  { 
    id: "3", 
    title: "Twitter", 
    url: "https://twitter.com", 
    icon: <Twitter className="h-5 w-5" />,
    color: "bg-[#1DA1F2] hover:bg-[#0c85d0]",
  },
  { 
    id: "4", 
    title: "YouTube", 
    url: "https://youtube.com", 
    icon: <Youtube className="h-5 w-5" />,
    color: "bg-[#FF0000] hover:bg-[#cc0000]",
  },
  { 
    id: "5", 
    title: "Instagram", 
    url: "https://instagram.com", 
    icon: <Instagram className="h-5 w-5" />,
    color: "bg-gradient-to-r from-[#405DE6] via-[#833AB4] to-[#C13584] hover:from-[#3951cc] hover:via-[#762ea1] hover:to-[#aa3174]",
  },
  { 
    id: "6", 
    title: "Facebook", 
    url: "https://facebook.com", 
    icon: <Facebook className="h-5 w-5" />,
    color: "bg-[#1877F2] hover:bg-[#0a60d1]",
  },
  { 
    id: "7", 
    title: "Contact Me", 
    url: "/contact", 
    icon: <MessageSquare className="h-5 w-5" />,
    color: "bg-primary hover:bg-primary/90",
  },
];

export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
        </div>
        
        <Card>
          <CardContent className="p-4 space-y-4">
            {links.map((link) => (
              <Button
                key={link.id}
                asChild
                variant="outline"
                className={`w-full justify-start text-white ${link.color}`}
              >
                <a 
                  href={link.url}
                  target={link.url.startsWith('http') ? "_blank" : undefined}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
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