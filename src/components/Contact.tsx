
import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Music, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/',
      color: 'hover:text-blue-700',
    },
    {
      name: 'ResearchGate',
      icon: ExternalLink,
      url: 'https://www.researchgate.net/',
      color: 'hover:text-green-600',
    },
    {
      name: 'SoundCloud',
      icon: Music,
      url: 'https://soundcloud.com/',
      color: 'hover:text-orange-500',
    },
    {
      name: 'Twitter',
      icon: ExternalLink,
      url: 'https://x.com/ks_sha888',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.com/users/746755560258666630',
      color: 'hover:text-indigo-600',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Let's connect and explore collaboration opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="animate-fade-in opacity-0 text-center">
              <p className="text-muted-foreground mb-8 max-w-2xl">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="flex items-center justify-center space-x-2 mb-8">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:kresnasucandra@unud.ac.id" className="text-foreground hover:text-primary transition-colors">
                  kresnasucandra@unud.ac.id
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Dr. Kresna Sucandra, MD. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
