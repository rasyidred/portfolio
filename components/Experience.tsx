import React from 'react';
import { Briefcase } from 'lucide-react';
import { cvData } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="relative border-l-2 border-primary-100 ml-4 md:ml-6 space-y-12">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-primary-500 shadow-sm" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-medium text-primary-500 whitespace-nowrap mt-1 sm:mt-0 px-3 py-1 bg-primary-50 rounded-full">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 font-semibold text-lg">{exp.company}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">{exp.location}</p>
              </div>

              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base flex items-start gap-2">
                    <span className="text-primary-400 mt-1.5 text-xs">●</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};