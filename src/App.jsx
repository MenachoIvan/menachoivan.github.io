import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoreWork } from "./components/CoreWork";
import { Education } from "./components/Education";
import { TechSkills } from "./components/TechSkills";
import { Terminal } from "./components/Terminal";

const SectionWrapper = ({ children, isDevMode, name }) => {
  return (
    <div className="relative">
      {isDevMode && (
        <div className="absolute -top-6 left-0 flex items-center gap-2 pointer-events-none font-mono z-30">
          <span className="bg-lime-500 text-[10px] text-black font-bold px-2 py-0.5 rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(132,204,22,0.3)]">
            {name}
          </span>
          <span className="text-lime-500/40 text-[10px]">v1.0.4_stable</span>
        </div>
      )}

      <div
        className={`transition-all duration-500 border-l-2 ${
          isDevMode
            ? "border-lime-500/30 pl-4 py-8"
            : "border-transparent pl-0 py-8"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  const [isDevMode, setIsDevMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-700 selection:bg-lime-500/30 relative overflow-x-hidden ${
        isDevMode ? "bg-[#060802] text-lime-500" : "bg-[#020617]"
      }`}
    >
      {isDevMode && (
        <>
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(#1a2e05 1px, transparent 1px), linear-gradient(90deg, #1a2e05 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          ></div>
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(101,163,13,0.15),rgba(101,163,13,0.05),rgba(101,163,13,0.15))] bg-[length:100%_2px,3px_100%]"></div>
        </>
      )}

      <div className="relative z-10">
        <Navbar
          isDevMode={isDevMode}
          toggleDevMode={() => setIsDevMode(!isDevMode)}
        />

        <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-36">
          <SectionWrapper isDevMode={isDevMode} name="Hero.jsx">
            <Hero isDevMode={isDevMode} />
          </SectionWrapper>
          <SectionWrapper isDevMode={isDevMode} name="CoreWork.jsx">
            <CoreWork isDevMode={isDevMode} />
          </SectionWrapper>
          <SectionWrapper isDevMode={isDevMode} name="Education.jsx">
            <Education isDevMode={isDevMode} />
          </SectionWrapper>
          <SectionWrapper isDevMode={isDevMode} name="TechSkills.jsx">
            <TechSkills isDevMode={isDevMode} />
          </SectionWrapper>
          <SectionWrapper isDevMode={isDevMode} name="Terminal.jsx">
            <Terminal isDevMode={isDevMode} setDevMode={setIsDevMode} />
          </SectionWrapper>
        </main>

        <footer
          className={`py-12 text-center border-t transition-colors duration-500 ${isDevMode ? "border-lime-900/50" : "border-slate-900"}`}
        >
          <p
            className={`font-mono text-[10px] tracking-widest ${isDevMode ? "text-lime-700" : "text-slate-600"}`}
          >
            IVÁN_MENACHO // {new Date().getFullYear()} //{" "}
            {isDevMode ? "DEBUG_REVISION_ALPHA" : "BUILD_PROD_STABLE"}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
