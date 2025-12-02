import React, { useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import { cvData } from '../constants';

export const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference'>('All');
  
  const filteredPapers = cvData.papers.filter(p => 
    filter === 'All' ? true : p.type === filter
  );

  return (
    <section id="publications" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-3">
            <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
            </div>
            
            <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm self-start">
                {['All', 'Journal', 'Conference'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type as any)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            filter === type 
                            ? 'bg-primary-600 text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-4">
          {filteredPapers.map((paper, index) => (
            <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                                paper.type === 'Journal' 
                                ? 'bg-blue-50 text-blue-700 border-blue-100' 
                                : 'bg-orange-50 text-orange-700 border-orange-100'
                            }`}>
                                {paper.type}
                            </span>
                            <span className="text-sm text-gray-500 font-mono">{paper.year}</span>
                            {paper.status && (
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                                    {paper.status}
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {paper.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 italic">
                            {paper.authors.replace('Ansori, M. R. R.', 'Ansori, M.R.R.').split('Ansori, M.R.R.').map((part, i, arr) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="font-bold text-gray-900 underline decoration-primary-300 decoration-2 underline-offset-2">Ansori, M.R.R.</span>}
                                </span>
                            ))}
                        </p>
                        <p className="text-gray-500 text-sm border-t border-gray-100 pt-2 mt-2">
                            {paper.publication}
                        </p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};