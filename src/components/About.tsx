
import React from 'react';
import { Shield, Brain, Database, Palette } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Critical Care',
      description: 'Head of Critical Care Fellowship at RSUP Ngoerah',
    },
    {
      icon: Brain,
      title: 'AI Research',
      description: 'Division Head of Data Science and AI, Department of Anesthesiology and Intensive Care',
    },
    {
      icon: Database,
      title: 'Web3 Innovation',
      description: 'Tech co-founder startups and blockchain initiatives',
    },
    {
      icon: Palette,
      title: 'Creative Exploration',
      description: 'AI-generated music and digital art creator',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A forward-thinker at the intersection of medicine, technology, and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image or avatar */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100 to-sky-50"></div>
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-xl overflow-hidden">
                {/* Here you would add an actual image later */}
                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                  <span className="text-sm">Professional Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg glass-dark rotate-6"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg glass-dark -rotate-12"></div>
            </div>

            {/* Bio text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I currently serve as the Head of Critical Care Fellowship and Division Head of Data Science 
                and Artificial Intelligence at the Department of Anesthesiology and Intensive Care at RSUP 
                Ngoerah in Bali, Indonesia.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond my clinical practice, I'm a tech co-founder involved in multiple startups, 
                a contributor to Medical AI Digest, and an avid creator in AI, Web3, and digital art spaces.
              </p>
              <p className="text-lg leading-relaxed">
                My passion lies in bridging the gap between cutting-edge technology and practical 
                healthcare applications, with a forward-thinking approach to solving complex problems.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">Focus Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.map((area, index) => (
                <div 
                  key={area.title} 
                  className="glass p-6 rounded-xl card-hover animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
