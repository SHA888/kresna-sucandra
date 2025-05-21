
import React from 'react';
import { MessageSquare, TestTube, Wine, Music, ExternalLink, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Terminal,
      title: 'Medi Programming Language',
      category: 'Open-Source',
      description: 'Medi is a modern programming language designed for medical and healthcare applications.',
      link: 'https://github.com/MediLang/medi',
    },
    {
      icon: MessageSquare,
      title: 'PromptPeel',
      category: 'AI',
      description: 'PromptPeel helps you craft better AI prompts for more accurate and relevant results.',
      link: 'https://promptpeel.ai/',
    },
    {
      icon: TestTube,
      title: 'Tursi AI',
      category: 'AI · Open-Source',
      description: 'A simple framework to deploy AI models locally with one command, no containers needed.',
      link: 'https://github.com/BlueTursi/tursi-ai/',
    },
    {
      icon: Wine,
      title: 'JamLiquor',
      category: 'Web3 · Blockchain',
      description: 'A Cleanroom JAM Client with Edge, AI, and PQC Extensions.',
      link: 'https://jamliquor.xyz/',
    },
    {
      icon: Music,
      title: 'Bali Chill Studio',
      category: 'Creative · AI',
      description: 'AI-generated music project inspired by the tranquil sounds of Bali.',
      link: 'https://www.balichillstudio.com/',
    },
  ];

  const mediLinks = [
    { name: 'Website', url: 'https://medi-lang.org' },
    { name: 'Documentation', url: 'https://medilang.github.io/medi' },
    { name: 'Twitter', url: 'https://x.com/MediLangHQ' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/groups/14694015' },
    { name: 'Discord', url: 'https://discord.gg/JxE6dD285R' },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50"> {/* Reduced padding from py-24 to py-16 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"> {/* Reduced margin from mb-16 to mb-12 */}
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of my work across healthcare, technology, and creative domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary/80 bg-primary/5 py-1 px-2 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <a 
                      href={project.link} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Learn more about ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {project.title === 'Medi Programming Language' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mediLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 py-1 px-2 rounded-full transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-1 bg-gradient-to-r from-primary/10 to-primary/30"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>View All Projects</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
