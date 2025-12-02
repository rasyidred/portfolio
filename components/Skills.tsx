import React from 'react';
import { Cpu, GraduationCap, Trophy } from 'lucide-react';
import { cvData } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Col: Education & Awards */}
            <div className="space-y-12">
                {/* Education */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                            <GraduationCap size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                    </div>
                    <div className="space-y-6">
                        {cvData.education.map((edu, idx) => (
                            <div key={idx} className="pl-4 border-l-2 border-primary-200">
                                <h3 className="font-bold text-gray-900 text-lg">{edu.institution}</h3>
                                <p className="text-primary-600 font-medium text-sm mb-1">{edu.degree}</p>
                                <div className="flex justify-between text-sm text-gray-500 mb-2">
                                    <span>{edu.period}</span>
                                    <span>{edu.location}</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                                    <p><span className="font-semibold">GPA:</span> {edu.gpa}</p>
                                    <p className="mt-1"><span className="font-semibold">Thesis:</span> {edu.thesis}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div>
                     <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
                            <Trophy size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Awards</h2>
                    </div>
                    {cvData.awards.map((award, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-yellow-50 to-white border border-yellow-100 p-4 rounded-xl flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-gray-900">{award.title}</h4>
                                <p className="text-sm text-gray-600">{award.issuer}</p>
                            </div>
                            <span className="text-yellow-600 font-bold bg-white px-3 py-1 rounded-full shadow-sm text-sm">
                                {award.year}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Col: Skills */}
            <div>
                 <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                        <Cpu size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
                </div>

                <div className="grid gap-6">
                    {cvData.skills.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx}
                                        className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Research Interests Tag Cloud */}
                 <div className="mt-12">
                     <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Research Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {cvData.interests.map((interest, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-sm">
                                {interest}
                            </span>
                        ))}
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};