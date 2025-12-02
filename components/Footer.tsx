import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { cvData } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I am currently open to new opportunities in Blockchain Engineering, Smart Contract Auditing, and R&D roles.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${cvData.contact.email}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={24} />
            </a>
            <a href={`https://github.com/${cvData.contact.github}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={24} />
            </a>
            <a href={`https://linkedin.com/in/${cvData.contact.linkedin}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
            </a>
        </div>

        <div className="text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
          <p className="mt-2 text-xs">Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};