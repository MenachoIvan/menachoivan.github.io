import React from 'react';
import { GraduationCap, Languages } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        <div className="px-2 md:px-0">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <GraduationCap className="text-blue-500" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Educación</h3>
          </div>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-slate-800">
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2"></div>
              <h4 className="text-white font-semibold text-sm md:text-base leading-tight">
                Grado en Técnicas de Desarrollo de Aplicaciones Web y Móviles
              </h4>
              <p className="text-blue-400 text-xs md:text-sm font-mono mt-1">Universitat Rovira i Virgili</p>
              <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">Febrero 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/30 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800/50">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Languages className="text-blue-500" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Idiomas</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 items-end">
                <span className="text-slate-300 text-sm md:text-base font-medium">Castellano / Catalán</span>
                <span className="text-blue-400 text-[10px] md:text-xs font-mono uppercase">Nativo</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 items-end">
                <span className="text-slate-300 text-sm md:text-base font-medium">Inglés</span>
                <span className="text-blue-400 text-[10px] md:text-xs font-mono uppercase">Técnico / B2</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};