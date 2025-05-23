import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Showcasing my work, skills, and journey as a developer. Feel free to 
              reach out for collaboration or opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">Resume</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:syedhasni151214@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & built with 💙
          </p>
        </div>
      </div>
    </footer>
  );
}