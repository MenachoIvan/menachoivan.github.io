import React from "react";
import { Database, Activity, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CoreWork = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32">
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-4 block">
            {t("corework.comment")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t("corework.position")}{" "}
            <span className="text-blue-500 italic">PortAventura World</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-10">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              {t("corework.positiondesc")}
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Database
                    className="text-slate-500 group-hover:text-blue-400 transition-colors"
                    size={22}
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                    {t("corework.dataadmin")}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {t("corework.dataadmindesc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Activity
                    className="text-slate-500 group-hover:text-blue-400 transition-colors"
                    size={22}
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                    {t("corework.internalprojects")}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {t("corework.internalprojectsdesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500"></div>

            <div className="relative bg-[#0a0f1e]/60 backdrop-blur-xl border border-slate-800 group-hover:border-blue-500/40 group-hover:-translate-y-1 rounded-[2rem] p-8 md:p-10 transition-all duration-500 shadow-2xl overflow-hidden">
              <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col gap-1">
                  <span className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {t("corework.featured")}
                  </span>
                  <div className="h-0.5 w-8 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
                </div>
                <Code2
                  className="text-slate-600 group-hover:text-blue-400 transition-colors"
                  size={20}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {t("corework.projecttitle")}
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">
                {t("corework.projectdesc")}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                {["VB.NET", "SQL SERVER", "API REST"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono rounded-md group-hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreWork;
