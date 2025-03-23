
import React from 'react';
import { Shield, Brain, Database, Palette, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A forward-thinker at the intersection of medicine, technology, and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Enhanced visual element */}
            <div className="relative">
              <div className="absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-tr from-blue-100/80 to-sky-50/80 blur-sm transform -rotate-3"></div>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Dr. I Made Agus Kresna Sucandra" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">Dr. I Made Agus Kresna Sucandra</h3>
                  <p className="text-muted-foreground mb-4">Anesthesiologist, Intensivist & Technologist</p>
                  <div className="flex items-center text-primary/90 text-sm font-medium hover:text-primary transition-colors cursor-pointer group">
                    <span>View full biography</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 rounded-lg glass-dark rotate-6"></div>
              <div className="absolute -z-10 -top-4 -left-4 w-16 h-16 rounded-lg glass-dark -rotate-12"></div>
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
