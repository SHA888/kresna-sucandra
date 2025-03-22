
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: 'Present',
      role: 'Head of Critical Care Fellowship',
      organization: 'RSUP Ngoerah, Bali',
      description: 'Leading the Critical Care training program and developing innovative educational approaches.',
    },
    {
      period: '2021 - Present',
      role: 'Division Head of Data Science and AI',
      organization: 'Department of Anesthesiology and Intensive Care',
      description: 'Spearheading AI initiatives and implementing data-driven solutions in healthcare.',
    },
    {
      period: '2020 - Present',
      role: 'Tech Co-founder',
      organization: 'Various Startups',
      description: 'Building innovative solutions at the intersection of healthcare, AI, and blockchain technology.',
    },
    {
      period: '2019 - 2020',
      role: 'IBM AI Developer',
      organization: 'Professional Certification',
      description: 'Advanced training in artificial intelligence and machine learning applications.',
    },
    {
      period: '2018 - 2019',
      role: 'MIT xPRO AI in Healthcare',
      organization: 'Professional Development',
      description: 'Specialized training in healthcare applications of artificial intelligence.',
    },
    {
      period: '2017 - 2018',
      role: 'UT Data Science Program',
      organization: 'Professional Development',
      description: 'Comprehensive training in data science methodologies and applications.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional journey across healthcare, education, and technology.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } animate-fade-in opacity-0`}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>

                  {/* Period tag - mobile always left, desktop alternates */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.organization}</p>
                  </div>

                  {/* Content - mobile always left, desktop alternates */}
                  <div className={`md:w-1/2 pl-8 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                  }`}>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
