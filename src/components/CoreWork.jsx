import React from 'react';
import { Database, Activity, Code2 } from 'lucide-react';

export const CoreWork = () => {
  return (
    <section className="py-24 border-t border-slate-900">
      <div className="mb-12">
        <h3 className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">// Actualidad_y_Proyectos</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Sistemas de Información en PortAventura World</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="space-y-8">
          <p className="text-slate-400 text-lg leading-relaxed">
            Gestión integral del ecosistema de Ticketing, asegurando la integridad de los datos y el flujo constante de información en uno de los parques temáticos de mayor demanda de Europa.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit text-blue-400">
                <Database size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Administración de Datos</h4>
                <p className="text-slate-400 text-sm">Gestión de bases de datos críticas para el ticketing y mantenimiento preventivo de APIs internas.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit text-blue-400">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Soporte y Proyectos Internos</h4>
                <p className="text-slate-400 text-sm">Participación activa en el desarrollo de herramientas para la optimización de procesos del parque.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-blue-500/20">
                Proyecto Destacado
              </span>
              <Code2 className="text-slate-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4 italic">Ticketing & Hotels Interface</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Desarrollo de una aplicación de interfaz para conectar los sistemas de reservas hoteleras con el motor de ticketing. 
              Esta solución automatiza el flujo de información, reduciendo errores manuales y agilizando operativas de recepción y agilizando el acceso de los clientes.
            </p>
            <div className="flex flex-wrap gap-2 mb-0">
              <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">VB.NET</span>
              <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">SQL SERVER</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};