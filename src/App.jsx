import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoreWork } from "./components/CoreWork";
import { Education } from "./components/Education";
import { TechSkills } from "./components/TechSkills";
import { Terminal } from "./components/Terminal";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-36">
        <Hero />
        <CoreWork />
        <Education />
        <TechSkills />
        <Terminal />
      </main>

      <footer className="py-12 md:py-20 text-center border-t border-slate-900">
        <p className="text-slate-600 font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] px-4">
          IVÁN_MENACHO // {new Date().getFullYear()} // BUILD WITH REACT & VITE
        </p>
      </footer>
    </div>
  );
}

export default App;
