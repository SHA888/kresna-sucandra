
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

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

          <div className="mt-12 text-center glass p-6 rounded-xl animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
            <h3 className="text-xl font-semibold mb-4">More Research</h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete research portfolio and citation metrics.
            </p>
            <a
              href="https://www.researchgate.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow"
            >
              <span>ResearchGate Profile</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
