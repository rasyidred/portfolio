import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Publications />
      </main>
      <Footer />
    </div>
  );
};

export default App;