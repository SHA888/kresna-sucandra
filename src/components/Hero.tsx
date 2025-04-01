
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Anesthesiologist', 'Intensivist', 'AI Researcher', 'Blockchain Developer', 'Technologist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30 animate-float animation-delay-200"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 animate-fade-in opacity-0 animate-delay-100">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              Medicine · AI · Web3 · Creativity
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block">Dr. Kresna Sucandra, MD</span>
            </h1>
            
            {/* Cybermedical Polymath subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary italic mb-2">
              Cybermedical Polymath
            </h2>
          </div>
          
          <div className="h-14 mb-8 animate-fade-in opacity-0 animate-delay-200">
            <div className="relative text-xl sm:text-2xl text-center">
              <span
                className="text-emerald-600 font-medium inline-block min-w-52 transition-all duration-300"
                key={currentRoleIndex}
              >
                {roles[currentRoleIndex]}
              </span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0 animate-delay-300 text-balance">
            Exploring the intersection of healthcare, artificial intelligence, and blockchain technology
            to shape the future of medicine and human-centered technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0 animate-delay-400">
            <a
              href="#about"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-foreground/10 bg-white/50 hover:bg-white font-medium transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
