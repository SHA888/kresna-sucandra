
import React from 'react';
import { LinkedInProfile, MeddsaiProfile } from './experience';

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

          {/* LinkedIn Profile Widget */}
          <LinkedInProfile />

          {/* MEDDSAI.org Widget */}
          <MeddsaiProfile />
        </div>
      </div>
    </section>
  );
};

export default Experience;
