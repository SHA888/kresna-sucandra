
import React from 'react';
import { MessageSquare, TestTube, Wine, Music, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: MessageSquare,
      title: 'PromptPeel',
      category: 'AI',
      description: 'An advanced prompt engineering tool for medical practitioners leveraging large language models.',
      link: '#',
    },
    {
      icon: TestTube,
      title: 'Medical AI Tools',
      category: 'AI · Healthcare',
      description: 'Suite of AI-powered diagnostic and decision support tools for critical care.',
      link: '#',
    },
    {
      icon: Wine,
      title: 'JamLiquor',
      category: 'Web3 · Blockchain',
      description: 'Blockchain initiative for authenticating and tracking premium spirits.',
      link: '#',
    },
    {
      icon: Music,
      title: 'Bali Chill Studio',
      category: 'Creative · AI',
      description: 'AI-generated music project inspired by the tranquil sounds of Bali.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
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
