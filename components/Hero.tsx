import React from 'react';
import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react';
import { cvData } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Profile Image / Placeholder */}
        <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
             <img 
               src="https://picsum.photos/400/400" 
               alt={cvData.name} 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white p-2 rounded-full shadow-md text-primary-600">
               <MapPin size={20} />
            </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-2">Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-2">
              {cvData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {cvData.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
             {cvData.interests.slice(0, 4).map((interest, idx) => (
               <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium uppercase tracking-wide">
                 {interest}
               </span>
             ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4">
             <a href={`mailto:${cvData.contact.email}`} className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary-200">
               <Mail size={18} />
               Contact Me
             </a>
             <a href={`https://github.com/${cvData.contact.github}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-medium transition-all">
               <Github size={18} />
               GitHub
             </a>
              <a href={`https://linkedin.com/in/${cvData.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-medium transition-all">
               <Linkedin size={18} />
               LinkedIn
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};