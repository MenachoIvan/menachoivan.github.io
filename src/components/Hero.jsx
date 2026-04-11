import React from 'react';

export const Hero = () => {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-4">
        <span className="text-blue-500 font-mono text-[10px] md:text-sm tracking-widest uppercase italic">
          // Backend Developer & Information Systems Technician
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
        Iván <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pr-2 md:pr-4">
          Menacho
        </span>
      </h1>

      <p className="text-slate-400 text-sm md:text-xl max-w-2xl leading-relaxed mb-10 px-4 md:px-0">
        Especializado en el desarrollo de APIs robustas y optimización de sistemas. 
        Actualmente impulsando la infraestructura digital en <span className="text-white font-semibold italic border-b-2 border-blue-500/30">PortAventura World</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
        <a 
          href="mailto:ivanmenachodominguez@gmail.com"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all text-sm md:text-base text-center"
        >
          Hablemos
        </a>
        <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-800 text-slate-400 font-mono text-[10px] md:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponible para proyectos
        </div>
      </div>
    </section>
  );
};