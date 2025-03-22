
import React from 'react';
import { ExternalLink, Github, Code, Terminal, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Technology</h2>
            <p className="section-subtitle">
              Programming projects and technical contributions in healthcare and medical informatics.
            </p>
          </div>

          {/* GitHub widget */}
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="bg-primary/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">SHA888</h4>
                    <p className="text-sm text-muted-foreground">Medical AI Researcher & Developer</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-muted-foreground">Contributions</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium mb-2">Featured Projects</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Medical NLP for clinical notes analysis</li>
                      <li>• Healthcare ML prediction models</li>
                      <li>• Radiology image processing applications</li>
                      <li>• Biomedical data visualization tools</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">Python</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">TensorFlow</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">PyTorch</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">JavaScript</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">React</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">R</span>
                      <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">SQL</span>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <a 
                    href="https://github.com/SHA888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>View GitHub Profile</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
