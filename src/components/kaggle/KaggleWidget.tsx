
import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, BarChart, Database, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface KaggleWidgetProps {
  username: string;
}

interface KaggleData {
  username: string;
  name: string;
  title: string;
  competitions: string;
  datasets: string;
  notebooks: string;
  medals: string;
  tier: string;
  loading: boolean;
  error: boolean;
  skills: string[];
}

const KaggleWidget = ({ username }: KaggleWidgetProps) => {
  const [kaggleData, setKaggleData] = useState<KaggleData>({
    username: username,
    name: 'Dr. I Made Agus Kresna Sucandra',
    title: 'Medical Data Scientist',
    competitions: '8',
    datasets: '5',
    notebooks: '12',
    medals: '4',
    tier: 'Expert',
    loading: true,
    error: false,
    skills: ['Medical AI', 'Computer Vision', 'NLP', 'Healthcare Analytics', 'Python', 'R', 'PyTorch']
  });

  useEffect(() => {
    // Simulate loading data from Kaggle API
    // Note: Kaggle doesn't have a public API, so we're using mock data
    setTimeout(() => {
      setKaggleData(prev => ({
        ...prev,
        loading: false
      }));
    }, 800);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
        <div className="bg-primary/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Kaggle</h3>
            <img
              src="https://www.kaggle.com/static/images/site-logo.svg"
              alt="Kaggle logo"
              className="w-8 h-8"
            />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Database className="w-8 h-8 text-primary" />
            </div>
            {kaggleData.loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            ) : (
              <div>
                <h4 className="font-semibold">{kaggleData.name}</h4>
                <p className="text-sm text-muted-foreground">{kaggleData.title}</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-primary">
                <BarChart className="w-5 h-5" />
              </div>
              {kaggleData.loading ? (
                <Skeleton className="h-7 w-12 mx-auto mb-1" />
              ) : (
                <div className="text-2xl font-bold">{kaggleData.competitions}</div>
              )}
              <div className="text-xs text-muted-foreground">Competitions</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-primary">
                <Database className="w-5 h-5" />
              </div>
              {kaggleData.loading ? (
                <Skeleton className="h-7 w-16 mx-auto mb-1" />
              ) : (
                <div className="text-2xl font-bold">{kaggleData.datasets}</div>
              )}
              <div className="text-xs text-muted-foreground">Datasets</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 text-primary">
                <Code className="w-5 h-5" />
              </div>
              {kaggleData.loading ? (
                <Skeleton className="h-7 w-6 mx-auto mb-1" />
              ) : (
                <div className="text-2xl font-bold">{kaggleData.notebooks}</div>
              )}
              <div className="text-xs text-muted-foreground">Notebooks</div>
            </div>
          </div>
          
          {kaggleData.loading ? (
            <div className="space-y-4 mb-6">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-full mb-1" />
                <Skeleton className="h-3 w-full mb-1" />
                <Skeleton className="h-3 w-3/4 mb-1" />
              </div>
              
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm font-medium mb-2">Achievements</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {kaggleData.medals} Competition Medals</li>
                  <li>• {kaggleData.tier} Tier Data Scientist</li>
                  <li>• Published {kaggleData.notebooks} Analysis Notebooks</li>
                  <li>• Created {kaggleData.datasets} Medical Datasets</li>
                </ul>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-2">Skills & Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {kaggleData.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-slate-100 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Button asChild className="w-full" disabled={kaggleData.loading}>
            <a 
              href={`https://www.kaggle.com/${kaggleData.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {kaggleData.loading ? 'Loading...' : 'View Kaggle Profile'}
              {!kaggleData.loading && <ExternalLink size={16} />}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KaggleWidget;
