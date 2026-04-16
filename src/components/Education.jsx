import React from "react";
import { GraduationCap, Languages, Globe, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Education = ({ isDevMode }) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="px-2 md:px-0">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <GraduationCap
              className={`transition-colors duration-500 ${isDevMode ? "text-lime-500" : "text-blue-500"}`}
              size={24}
            />
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {t("education.title")}
            </h3>
          </div>

          <div className="space-y-10 relative before:absolute before:inset-0 before:left-[3.5px] before:w-px before:bg-slate-800">
            <div className="relative pl-8 group">
              <div
                className={`absolute w-2 h-2 rounded-full left-0 top-2 transition-all duration-500 ${isDevMode ? "bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.8)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"} group-hover:scale-150`}
              ></div>
              <h4 className="text-white font-semibold text-sm md:text-base leading-tight">
                {t("education.degree")}
              </h4>
              <p
                className={`font-mono mt-1 text-xs md:text-sm transition-colors duration-500 ${isDevMode ? "text-lime-400" : "text-blue-400"}`}
              >
                {t("education.uni")}
              </p>
              <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider font-medium italic">
                {t("education.date")}
              </p>
            </div>

            {[
              {
                icon: <Globe size={14} />,
                title: t("education.erasmus"),
                uni: t("education.erasmusuni"),
                date: t("education.erasmusdate"),
              },
              {
                icon: <Cloud size={14} />,
                title: t("education.aws"),
                uni: t("education.awsinfo"),
                date: t("education.awsdate"),
              },
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div
                  className={`absolute w-2 h-2 rounded-full left-0 top-2 transition-colors duration-500 ${isDevMode ? "bg-slate-700 group-hover:bg-lime-400" : "bg-slate-700 group-hover:bg-blue-400"}`}
                ></div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-slate-500">{item.icon}</span>
                  <h4 className="text-slate-200 font-medium text-sm md:text-base leading-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs md:text-sm">{item.uni}</p>
                <p className="text-slate-500 text-[10px] mt-2 uppercase tracking-wider">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative">
          <div
            className={`absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none ${isDevMode ? "bg-lime-500/20" : "bg-blue-500/20"}`}
          ></div>

          <div
            className={`relative h-full bg-[#0a0f1e]/40 backdrop-blur-xl p-8 rounded-[2rem] border transition-all duration-500 shadow-2xl group-hover:-translate-y-2 ${
              isDevMode
                ? "border-lime-500/20 group-hover:border-lime-500/50"
                : "border-slate-800 group-hover:border-blue-500/30"
            }`}
          >
            <div className="flex items-center gap-3 mb-10">
              <div
                className={`p-2 rounded-lg transition-colors duration-500 ${isDevMode ? "bg-lime-500/10" : "bg-blue-500/10"}`}
              >
                <Languages
                  className={`transition-all duration-500 group-hover:rotate-12 ${isDevMode ? "text-lime-500" : "text-blue-500"}`}
                  size={24}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {t("education.lang")}
              </h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  name: t("education.cast"),
                  lvl: t("education.castlvl"),
                  w: "w-full",
                },
                {
                  name: t("education.cat"),
                  lvl: t("education.catlvl"),
                  w: "w-full",
                },
                {
                  name: t("education.eng"),
                  lvl: t("education.englvl"),
                  w: "w-[65%]",
                },
              ].map((lang, idx) => (
                <div key={idx} className="group/lang">
                  <div className="flex justify-between mb-3 items-end">
                    <span className="text-slate-300 text-sm md:text-base font-semibold tracking-wide group-hover/lang:text-white transition-colors">
                      {lang.name}
                    </span>
                    <span
                      className={`text-[10px] md:text-xs font-mono font-bold uppercase transition-colors duration-500 ${isDevMode ? "text-lime-400" : "text-blue-400"}`}
                    >
                      {lang.lvl}
                    </span>
                  </div>
                  <div className="w-full bg-slate-900/50 h-2 rounded-full overflow-hidden border border-slate-800 shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${lang.w} ${
                        isDevMode
                          ? "bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                          : "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
