import { Metadata } from "next";
import Contact from "@/components/contact/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me for collaborations, job opportunities, or just to say hello",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you. Let's make something great together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <ContactCard 
            icon={<Mail className="h-10 w-10 text-primary" />}
            title="Email"
            details="hello@example.com"
            link="mailto:hello@example.com"
          />
          <ContactCard 
            icon={<Phone className="h-10 w-10 text-primary" />}
            title="Phone"
            details="+1 (555) 123-4567"
            link="tel:+15551234567"
          />
          <ContactCard 
            icon={<MapPin className="h-10 w-10 text-primary" />}
            title="Location"
            details="San Francisco, CA"
            link="https://maps.google.com/?q=San+Francisco,+CA"
          />
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Send a Message</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
}

function ContactCard({ 
  icon, 
  title, 
  details, 
  link 
}: { 
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
}) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <a 
          href={link} 
          className="text-muted-foreground hover:text-primary transition-colors"
          target={link.startsWith('http') ? "_blank" : undefined}
          rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {details}
        </a>
      </CardContent>
    </Card>
  );
}