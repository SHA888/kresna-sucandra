
import React from 'react';
import { ExternalLink, Briefcase, GraduationCap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

const Experience = () => {
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

          {/* LinkedIn Profile Widget - Full Width */}
          <div className="w-full">
            <Card className="border border-slate-200 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <CardHeader className="bg-[#0077B5]/10 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">LinkedIn</CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-[#0077B5]" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img 
                    src="https://media.licdn.com/dms/image/D5603AQFUClxf6t65dg/profile-displayphoto-shrink_800_800/0/1686132185447?e=1715817600&v=beta&t=9g9r4zBn2Zv9CGy9MOJjz6I7LXfbzk19c3RIrJtDZIc" 
                    alt="Dr. I Made Agus Kresna Sucandra" 
                    className="w-20 h-20 rounded-full border-2 border-white object-cover"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Dr. I Made Agus Kresna Sucandra</h3>
                    <CardDescription className="text-muted-foreground">
                      Division Head of Data Science and AI | Critical Care Intensivist | Tech Co-founder
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Denpasar, Bali, Indonesia</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#0077B5]/10 text-[#0077B5]">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Current Role</h4>
                      <p className="text-sm text-muted-foreground">Division Head of Data Science and AI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#0077B5]/10 text-[#0077B5]">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Education</h4>
                      <p className="text-sm text-muted-foreground">Udayana University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#0077B5]/10 text-[#0077B5]">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Connections</h4>
                      <p className="text-sm text-muted-foreground">500+ connections</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />
                
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base font-semibold mb-2">About</h4>
                    <p className="text-sm text-muted-foreground">
                      Critical Care Medicine Specialist with a passion for technology, AI in healthcare, and medical education. 
                      Currently leading data science initiatives and developing innovative healthcare solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-semibold mb-2">Experience Highlights</h4>
                    <ul className="space-y-3">
                      <li className="text-sm">
                        <div className="font-medium">Head of Critical Care Fellowship</div>
                        <div className="text-muted-foreground">RSUP Ngoerah, Bali • Present</div>
                      </li>
                      <li className="text-sm">
                        <div className="font-medium">Division Head of Data Science and AI</div>
                        <div className="text-muted-foreground">Department of Anesthesiology and Intensive Care • 2021 - Present</div>
                      </li>
                      <li className="text-sm">
                        <div className="font-medium">Tech Co-founder</div>
                        <div className="text-muted-foreground">Various Startups • 2020 - Present</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-slate-50 border-t border-slate-100">
                <Button asChild variant="outline" className="w-full bg-white hover:bg-slate-50 border-[#0077B5] text-[#0077B5] hover:text-[#0077B5]">
                  <a 
                    href="https://www.linkedin.com/in/kresna-sucandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>View Full LinkedIn Profile</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
