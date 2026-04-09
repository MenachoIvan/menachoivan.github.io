import React from 'react';
import { Navbar } from './components/Navbar';
import {Hero} from './components/Hero'
import { CoreWork } from './components/CoreWork';
import { Education } from './components/Education';
import { TechSkills } from './components/TechSkills';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      <Navbar /> 
      
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <CoreWork />
        <Education />
        <TechSkills />
      </main>
      <footer className='py-20 text-center border-t borderslate-900'>
        <p className='text-slate-600 front-mono text-[10px] tracking-[0.3em]'>
          IVAN_MENACHO // {new Date().getFullYear()} // BUILD WITH REACT AND VITE
        </p>
      </footer>
      </div>
  );
}

export default App;