import React from 'react';
import { ExternalLink, BookOpen, Quote, File, Edit3, Github, Code } from 'lucide-react';
import { Button } from './ui/button';

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-slate-50"> {/* Reduced padding from py-24 to py-16 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"> {/* Reduced margin from mb-16 to mb-12 */}
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">
              Selected research papers and publications in medical and technological fields.
            </p>
          </div>

          <div className="space-y-6"> {/* Added spacing container with reduced gap */}
            {/* Morton Journal widget */}
            <div className="w-full mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
                <div className="bg-primary/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Morton Journal</h3>
                    <Edit3 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <File className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Managing Editor</h4>
                      <p className="text-sm text-muted-foreground">Scientific Journal</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium mb-2">About the Journal</div>
                      <p className="text-sm text-muted-foreground">
                        Morton Journal is a peer-reviewed scientific publication focusing on advancements
                        in medicine, technology, and interdisciplinary research.
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Editorial Responsibilities</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Manuscript review and editorial decisions</li>
                        <li>• Author correspondence and guidance</li>
                        <li>• Publication quality control and standards</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <Button variant="outline" asChild className="w-full">
                      <a
                        href="https://preview--morton-journal.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Preview Site</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                    <Button asChild className="w-full">
                      <a
                        href="https://mortonjournal.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Official Journal Site</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* ResearchGate widget - now full width */}
            <div className="w-full">
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
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
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
