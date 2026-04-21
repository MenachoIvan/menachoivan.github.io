import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoreWork } from "./components/CoreWork";
import { Education } from "./components/Education";
import { TechSkills } from "./components/TechSkills";
import { Terminal } from "./components/Terminal";

const SectionWrapper = ({ children, isDevMode, name }) => {
  const [memAlloc] = useState(() => (Math.random() * 100).toFixed(2));

  return (
    <div className="w-full">
      <div
        className={`flex items-center gap-2 font-mono transition-all duration-500 overflow-hidden ${
          isDevMode ? "h-8 opacity-100 mb-2" : "h-0 opacity-0 mb-0"
        }`}
      >
        <span className="bg-lime-500 text-[10px] text-black font-bold px-2 py-0.5 rounded uppercase tracking-tighter animate-pulse">
          {name}
        </span>
        <span className="text-lime-500/40 text-[10px]">
          mem_alloc: {memAlloc}kb
        </span>
      </div>

      <div
        className={`transition-all duration-500 border-l-2 ${
          isDevMode
            ? "border-lime-500/30 pl-6 pb-8 shadow-[inset_10px_0_20px_-10px_rgba(132,204,22,0.05)]"
            : "border-transparent pl-0 pb-8"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  const [isDevMode, setIsDevMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDevMode) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDevMode]);

  return (
    <div
      className={`min-h-screen transition-all duration-700 selection:bg-lime-500/30 relative overflow-x-hidden ${
        isDevMode
          ? "bg-[#060802] text-lime-500 cursor-none"
          : "bg-[#020617] cursor-default"
      }`}
    >
      {isDevMode && (
        <>
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(101,163,13,0.15),rgba(101,163,13,0.05),rgba(101,163,13,0.15))] bg-[length:100%_4px,4px_100%] animate-pulse"></div>
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(#1a2e05 1px, transparent 1px), linear-gradient(90deg, #1a2e05 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div
            className="fixed z-[999] pointer-events-none flex flex-col items-start gap-1 font-mono text-[8px] text-lime-500 transition-none"
            style={{ left: mousePos.x + 15, top: mousePos.y + 15 }}
          >
            <div className="w-4 h-4 border border-lime-500/50 -translate-x-1/2 -translate-y-1/2 absolute top-[-15px] left-[-15px]"></div>
            <span className="bg-black/80 px-1">X: {mousePos.x}</span>
            <span className="bg-black/80 px-1">Y: {mousePos.y}</span>
          </div>
        </>
      )}

      <div
        className={`relative z-10 ${isDevMode ? "animate-[flicker_0.15s_infinite_alternate] opacity-[0.98]" : ""}`}
      >
        <Navbar
          isDevMode={isDevMode}
          toggleDevMode={() => setIsDevMode(!isDevMode)}
        />

        <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-36">
          <SectionWrapper isDevMode={isDevMode} name="Hero.jsx">
            <Hero isDevMode={isDevMode} />
          </SectionWrapper>
          <SectionWrapper isDevMode={isDevMode} name="Terminal.jsx">
            <Terminal isDevMode={isDevMode} setDevMode={setIsDevMode} />
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes flicker {
          0% { opacity: 0.97; }
          100% { opacity: 1; }
        }
        .cursor-none a, 
        .cursor-none button, 
        .cursor-none input { 
          cursor: none !important; 
        }
      `,
        }}
      />
    </div>
  );
}

export default App;
