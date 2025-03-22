
import React from 'react';
import { useGitHubData } from '@/hooks/useGitHubData';
import GitHubWidget from '@/components/github/GitHubWidget';

const Technology = () => {
  const githubData = useGitHubData();

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
          <GitHubWidget githubData={githubData} />
        </div>
      </div>
    </section>
  );
};

export default Technology;
