
import React from 'react';
import { FileText, ExternalLink, Users, BookOpen, Quote } from 'lucide-react';
import { Button } from './ui/button';

const Publications = () => {
  const publications = [
    {
      title: 'Artificial Intelligence Applications in Critical Care Medicine',
      journal: 'Journal of Medical Systems',
      year: '2022',
      link: '#',
    },
    {
      title: 'Blockchain Technology for Medical Data Security and Interoperability',
      journal: 'Healthcare Informatics Research',
      year: '2021',
      link: '#',
    },
    {
      title: 'Machine Learning Models for Predicting Post-Operative Complications',
      journal: 'Anesthesiology Research and Practice',
      year: '2020',
      link: '#',
    },
    {
      title: 'Digital Innovations in Anesthesia Education During the COVID-19 Pandemic',
      journal: 'Medical Education Online',
      year: '2020',
      link: '#',
    },
  ];

  return (
    <section id="publications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">
              Selected research papers and publications in medical and technological fields.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left side: Publications list */}
            <div className="md:col-span-3">
              <div className="grid gap-6">
                {publications.map((pub, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 animate-fade-in opacity-0"
                    style={{ animationDelay: `${index * 100 + 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg shrink-0 mt-1">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>{pub.journal}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                          <span>{pub.year}</span>
                        </div>
                        <a 
                          href={pub.link}
                          className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          <span>View Publication</span>
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: ResearchGate widget */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">ResearchGate</h3>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg" 
                      alt="ResearchGate logo" 
                      className="w-8 h-8" 
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://d.researchgate.net/profile_pic/resize90x110/default_profile_picture.jpg" 
                      alt="Dr. I Made Agus Kresna Sucandra" 
                      className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <div>
                      <h4 className="font-semibold">Dr. I Made Agus Kresna Sucandra</h4>
                      <p className="text-sm text-muted-foreground">Medical Researcher</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2 text-primary">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-xs text-muted-foreground">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2 text-primary">
                        <Quote className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold">86</div>
                      <div className="text-xs text-muted-foreground">Citations</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xs font-medium mb-1 text-muted-foreground">h-index</div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="text-right text-xs mt-1">4</div>
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-1 text-muted-foreground">Research Interest</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">AI in Medicine</span>
                        <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">Anesthesiology</span>
                        <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">Medical Education</span>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <a 
                      href="https://www.researchgate.net/profile/I-Made-Agus-Kresna-Sucandra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Full Profile</span>
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
