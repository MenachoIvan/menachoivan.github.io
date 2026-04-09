import React from 'react';

export const Hero = () => {
  return (
    <section className="py-20 flex flex-col items-center md:items-start">
      <div className="inline-block mb-4">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">
          // Backend Developer & Information Systems Technician
        </span>
      </div>

      <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
        Iván <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pr-4">
          Menacho
        </span>
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        Especializado en el desarrollo backend robusto y optimización de sistemas. 
        Actualmente técnico en sistemas de infromación en <span className="text-white font-semibold italic border-b-2 border-blue-500/30">PortAventura World</span>.
      </p>

      <div className="flex gap-4">
        <a 
          href="mailto:ivanmenachodominguez@gmail.com"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
        >
          Hablemos
        </a>
        <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-800 text-slate-400 font-mono text-sm">
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