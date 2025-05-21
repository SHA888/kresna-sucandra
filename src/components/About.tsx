import React from 'react';
import { Shield, Brain, Database, Palette, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const About = () => {
  const focusAreas = [{
    icon: Shield,
    title: 'Critical Care',
    description: 'Head of Critical Care Fellowship at RSUP Ngoerah'
  }, {
    icon: Brain,
    title: 'AI Research',
    description: 'Division Head of Data Science and AI, Department of Anesthesiology and Intensive Care'
  }, {
    icon: Database,
    title: 'Web3 Innovation',
    description: 'Tech co-founder startups and blockchain initiatives'
  }, {
    icon: Palette,
    title: 'Creative Exploration',
    description: 'AI-generated music and digital art creator'
  }];
  return <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Meet the Cybermedical Polymath, a forward-thinker at the intersection of medicine, technology, and creativity.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Enhanced visual element with circular frame */}
            <div className="relative flex justify-center flex-col items-center">
              <div className="absolute -z-10 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-blue-100/80 to-sky-50/80 blur-sm transform -rotate-3"></div>
              <div className="relative mb-12">
                <Avatar className="w-[300px] h-[300px] border-4 border-white shadow-xl">
                  <AvatarImage src="/lovable-uploads/b8a0b35e-3732-4690-a450-256a4b582297.png" alt="Dr. Kresna Sucandra, MD" className="object-cover transition-transform hover:scale-105 duration-700" />
                  <AvatarFallback>
                    DR
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full glass-dark rotate-6 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full glass-dark -rotate-12 -z-10"></div>
              </div>
              <div className="w-full bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Dr. Kresna Sucandra, MD</h3>
                <p className="text-muted-foreground text-sm">Intensivist Anesthesiologist, AI Researcher, Software Engineer, Blockchain Developer, Security Enthusiast</p>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I currently serve as the Head of Critical Care Fellowship Program and Division Head of Data Science 
                and Artificial Intelligence at the Department of Anesthesiology and Intensive Care at RSUP 
                Ngoerah, Udayana University Medical School in Bali, Indonesia.
              </p>
              <p className="text-lg leading-relaxed">Beyond my clinical practice, I'm a tech co-founder involved in multiple startups, a contributor to Medical AI Digest, and an avid creator in AI, Web3, Cyber Security, and digital art spaces.</p>
              <p className="text-lg leading-relaxed">
                My passion lies in bridging the gap between cutting-edge technology and practical 
                healthcare applications, with a forward-thinking approach to solving complex problems.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">Focus Areas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {focusAreas.map((area, index) => <div key={area.title} className="glass p-6 rounded-xl card-hover animate-fade-in opacity-0" style={{
              animationDelay: `${index * 100 + 100}ms`
            }}>
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;