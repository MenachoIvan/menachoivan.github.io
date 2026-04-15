import React from "react";
import { Database, Activity, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CoreWork = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="mb-10 md:mb-12">
        <h3 className="text-blue-500 font-mono text-[10px] md:text-sm mb-2 tracking-widest uppercase">
          {t("corework.comment")}
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          {t("corework.position")} <br className="md:hidden" />
          <span className="text-blue-500 md:text-white">
            PortAventura World
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
        <div className="space-y-6 md:space-y-8">
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            {t("corework.positiondesc")}
          </p>

          <div className="space-y-5 md:space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit text-blue-400 shrink-0">
                <Database size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">
                  {t("corework.dataadmin")}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm leading-snug">
                  {t("corework.dataadmindesc")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit text-blue-400 shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">
                  {t("corework.internalprojects")}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm leading-snug">
                  {t("corework.internalprojectsdesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group mt-4 lg:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-blue-500/10 text-blue-400 text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-blue-500/20">
                {t("corework.featured")}
              </span>
              <Code2 className="text-slate-600" size={20} />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-3 italic">
              {t("corework.projecttitle")}
            </h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              {t("corework.projectdesc")}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700 px-2 py-1 rounded">
                VB.NET
              </span>
              <span className="text-[9px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700 px-2 py-1 rounded">
                SQL SERVER
              </span>
              <span className="text-[9px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700 px-2 py-1 rounded">
                API REST
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
