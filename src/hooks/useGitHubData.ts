
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface GitHubData {
  username: string;
  role: string;
  repositories: string;
  contributions: string;
  years: string;
  loading: boolean;
  error: boolean;
  featuredProjects: Array<{name: string, description: string}>;
  technologies: string[];
}

export const useGitHubData = () => {
  const [githubData, setGithubData] = useState<GitHubData>({
    username: 'SHA888',
    role: 'Medical AI Researcher & Developer',
    repositories: '25+',
    contributions: '500+',
    years: '6',
    loading: true,
    error: false,
    featuredProjects: [],
    technologies: []
  });
  
  const { toast } = useToast();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch GitHub user data
        const response = await fetch('https://api.github.com/users/SHA888');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }
        const userData = await response.json();
        
        // Fetch repositories data to count them
        const reposResponse = await fetch('https://api.github.com/users/SHA888/repos');
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const reposData = await reposResponse.json();
        
        // Calculate years on GitHub based on account creation date
        const createdAt = new Date(userData.created_at);
        const currentDate = new Date();
        // Convert dates to timestamps in milliseconds for arithmetic operation
        const yearsOnGitHub = Math.floor(
          (currentDate.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 365)
        );
        
        // Extract technologies from repositories
        const techSet = new Set<string>();
        reposData.forEach((repo: any) => {
          if (repo.language && repo.language !== 'null') {
            techSet.add(repo.language);
          }
        });
        
        // Get top technologies (limited to 10)
        const topTechnologies = Array.from(techSet).slice(0, 10);
        
        // Get featured projects (non-forked, with descriptions, sorted by stars)
        const featuredRepos = reposData
          .filter((repo: any) => !repo.fork && repo.description)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description
          }));
        
        setGithubData(prev => ({
          ...prev,
          username: userData.login,
          role: userData.bio || 'Medical AI Researcher & Developer', // Use bio if available
          repositories: reposData.length.toString(),
          years: yearsOnGitHub.toString(),
          loading: false,
          featuredProjects: featuredRepos.length > 0 ? featuredRepos : [
            {name: 'MedicalImaging-AI', description: 'Deep learning for radiology'},
            {name: 'EHR-NLP-Analytics', description: 'Clinical text mining'},
            {name: 'BiomedViz', description: 'Interactive visualization for research'},
            {name: 'Health-ML-Platform', description: 'Predictive modeling framework'}
          ],
          technologies: topTechnologies.length > 0 ? topTechnologies : [
            'Python', 'TensorFlow', 'PyTorch', 'JavaScript', 'React', 'R', 'SQL'
          ]
        }));
        
        toast({
          title: "Profile loaded",
          description: "GitHub profile information loaded successfully.",
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
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

  return githubData;
};
