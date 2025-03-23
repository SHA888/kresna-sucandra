
import React from 'react';
import { ExternalLink, Activity, Code, Users, Globe, Briefcase, Medal, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

const MeddsaiProfile = () => {
  return <div className="w-full">
      <Card className="border border-slate-200 overflow-hidden animate-fade-in opacity-0" style={{
      animationDelay: '300ms'
    }}>
        <CardHeader className="bg-[#005EB8]/10 pb-6 relative">
          <div className="absolute top-0 right-0 opacity-10 text-[#005EB8]">
            <Medal size={120} strokeWidth={1} />
          </div>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl">MEDDSAI.org</CardTitle>
            <div className="p-1 rounded-full bg-white text-[#005EB8] border border-[#005EB8]">
              <Briefcase size={24} />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Division of Data Science and Artificial Intelligence</h3>
            <CardDescription className="text-muted-foreground">
              Leading innovation in healthcare through data science and AI applications
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#005EB8]/10 text-[#005EB8]">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium">Primary Focus</h4>
                <p className="text-sm text-muted-foreground">Healthcare AI Applications</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#005EB8]/10 text-[#005EB8]">
                <Code size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium">Technology</h4>
                <p className="text-sm text-muted-foreground">ML/AI, Data Analytics</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#005EB8]/10 text-[#005EB8]">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium">Team</h4>
                <p className="text-sm text-muted-foreground">Interdisciplinary Experts</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />
          
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-semibold mb-2">Department Overview</h4>
              <p className="text-sm text-muted-foreground">
                MEDDSAI is a specialized division focused on leveraging data science and artificial intelligence 
                to improve patient care, optimize clinical workflows, and advance medical research. Our team 
                develops innovative solutions for healthcare challenges through cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-2">Key Initiatives</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="text-sm bg-slate-50 p-3 rounded-md">
                  <div className="font-medium">Predictive Analytics for Critical Care</div>
                  <div className="text-muted-foreground">Early intervention models for ICU patients</div>
                </li>
                <li className="text-sm bg-slate-50 p-3 rounded-md">
                  <div className="font-medium">Medical Image Processing</div>
                  <div className="text-muted-foreground">AI-assisted diagnostic tools</div>
                </li>
                <li className="text-sm bg-slate-50 p-3 rounded-md">
                  <div className="font-medium">Clinical Decision Support</div>
                  <div className="text-muted-foreground">Evidence-based recommendation systems</div>
                </li>
                <li className="text-sm bg-slate-50 p-3 rounded-md">
                  <div className="font-medium">Healthcare Data Integration</div>
                  <div className="text-muted-foreground">Unified data platforms for research</div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-slate-50 border-t border-slate-100">
          <Button asChild variant="outline" className="w-full bg-white hover:bg-slate-50 border-[#005EB8] text-[#005EB8] hover:text-[#005EB8]">
            <a href="https://meddsai.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <span>Visit MEDDSAI Website</span>
              <ExternalLink size={16} />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>;
};

export default MeddsaiProfile;
