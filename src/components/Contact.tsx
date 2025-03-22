
import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Music } from 'lucide-react';

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
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Let's connect and explore collaboration opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in opacity-0">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </div>

              <div className="flex space-x-4 mt-8">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors ${link.color}`}
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-xl animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-10 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Dr. I Made Agus Kresna Sucandra. All rights reserved.
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
