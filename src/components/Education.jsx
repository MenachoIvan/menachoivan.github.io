import React from "react";
import { GraduationCap, Languages, Globe, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="px-2 md:px-0">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <GraduationCap className="text-blue-500" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {t("education.title")}
            </h3>
          </div>

          <div className="space-y-10 relative before:absolute before:inset-0 before:left-[3.5px] before:w-px before:bg-slate-800">
            <div className="relative pl-8 group">
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-0 top-2 shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
              <h4 className="text-white font-semibold text-sm md:text-base leading-tight">
                {t("education.degree")}
              </h4>
              <p className="text-blue-400 text-xs md:text-sm font-mono mt-1">
                {t("education.uni")}
              </p>
              <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">
                {t("education.date")}
              </p>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute w-2 h-2 bg-slate-700 rounded-full left-0 top-2 group-hover:bg-blue-400 transition-colors"></div>
              <div className="flex items-center gap-2 mb-1">
                <Globe size={14} className="text-slate-500" />
                <h4 className="text-slate-200 font-medium text-sm md:text-base leading-tight">
                  {t("education.erasmus")}
                </h4>
              </div>
              <p className="text-slate-400 text-xs md:text-sm">
                {t("education.erasmusuni")}
              </p>
              <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">
                {t("education.erasmusdate")}
              </p>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute w-2 h-2 bg-slate-700 rounded-full left-0 top-2 group-hover:bg-blue-400 transition-colors"></div>
              <div className="flex items-center gap-2 mb-1">
                <Cloud size={14} className="text-slate-500" />
                <h4 className="text-slate-200 font-medium text-sm md:text-base leading-tight">
                  {t("education.aws")}
                </h4>
              </div>
              <p className="text-slate-400 text-xs md:text-sm">
                {t("education.awsinfo")}
              </p>
              <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">
                {t("education.awsdate")}
              </p>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative bg-[#0a0f1e]/40 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800/50 group-hover:border-blue-500/30 group-hover:-translate-y-1 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Languages
                className="text-blue-500 group-hover:scale-110 transition-transform duration-300"
                size={24}
              />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {t("education.lang")}
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 items-end">
                  <span className="text-slate-300 text-sm md:text-base font-medium">
                    {t("education.cast")}
                  </span>
                  <span className="text-blue-400 text-[10px] md:text-xs font-mono uppercase">
                    {t("education.castlvl")}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 items-end">
                  <span className="text-slate-300 text-sm md:text-base font-medium">
                    {t("education.cat")}
                  </span>
                  <span className="text-blue-400 text-[10px] md:text-xs font-mono uppercase">
                    {t("education.catlvl")}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 items-end">
                  <span className="text-slate-300 text-sm md:text-base font-medium">
                    {t("education.eng")}
                  </span>
                  <span className="text-blue-400 text-[10px] md:text-xs font-mono uppercase">
                    {t("education.englvl")}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden relative">
                  <div className="bg-blue-500 h-full w-[65%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
