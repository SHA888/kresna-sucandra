
import React from 'react';
import { LinkedInProfile, MeddsaiProfile } from './experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white"> {/* Reduced padding from py-24 to py-16 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"> {/* Reduced margin from mb-16 to mb-12 */}
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional journey across healthcare, education, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Changed from space-y-6 to grid layout */}
            {/* LinkedIn Profile Widget */}
            <LinkedInProfile />

            {/* MEDDSAI.org Widget */}
            <MeddsaiProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
