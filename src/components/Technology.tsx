
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Terminal, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { useToast } from './ui/use-toast';

const Technology = () => {
  const [githubData, setGithubData] = useState({
    username: 'SHA888',
    role: 'Medical AI Researcher & Developer',
    repositories: '25+',
    contributions: '500+',
    years: '6',
    loading: true,
    error: false
  });
  
  const { toast } = useToast();

  useEffect(() => {
    // Simulating GitHub API call
    const fetchGitHubData = async () => {
      try {
        // In a real implementation, we would fetch from GitHub API
        // const response = await fetch('https://api.github.com/users/SHA888');
        // const data = await response.json();
        
        // For now, we'll simulate a successful API response after a delay
        setTimeout(() => {
          setGithubData(prev => ({
            ...prev,
            loading: false
          }));
          
          toast({
            title: "Profile loaded",
            description: "GitHub profile information loaded successfully.",
          });
        }, 1500);
      } catch (error) {
        setGithubData(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
        
        toast({
          variant: "destructive",
          title: "Error loading profile",
          description: "Could not fetch GitHub profile information.",
        });
      }
    };

    fetchGitHubData();
  }, [toast]);

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
                  {githubData.loading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold">{githubData.username}</h4>
                      <p className="text-sm text-muted-foreground">{githubData.role}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    {githubData.loading ? (
                      <Skeleton className="h-7 w-12 mx-auto mb-1" />
                    ) : (
                      <div className="text-2xl font-bold">{githubData.repositories}</div>
                    )}
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <Terminal className="w-5 h-5" />
                    </div>
                    {githubData.loading ? (
                      <Skeleton className="h-7 w-16 mx-auto mb-1" />
                    ) : (
                      <div className="text-2xl font-bold">{githubData.contributions}</div>
                    )}
                    <div className="text-xs text-muted-foreground">Contributions</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      <Github className="w-5 h-5" />
                    </div>
                    {githubData.loading ? (
                      <Skeleton className="h-7 w-6 mx-auto mb-1" />
                    ) : (
                      <div className="text-2xl font-bold">{githubData.years}</div>
                    )}
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
                
                {githubData.loading ? (
                  <div className="space-y-4 mb-6">
                    <div>
                      <Skeleton className="h-4 w-32 mb-2" />
                      <Skeleton className="h-3 w-full mb-1" />
                      <Skeleton className="h-3 w-full mb-1" />
                      <Skeleton className="h-3 w-3/4 mb-1" />
                      <Skeleton className="h-3 w-5/6" />
                    </div>
                    
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <Skeleton key={i} className="h-6 w-16 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
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
                )}

                <Button asChild className="w-full" disabled={githubData.loading}>
                  <a 
                    href="https://github.com/SHA888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {githubData.loading ? 'Loading...' : 'View GitHub Profile'}
                    {!githubData.loading && <ExternalLink size={16} />}
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
