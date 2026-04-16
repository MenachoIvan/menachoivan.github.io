import React from "react";
import { Cpu, Code, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TechSkills = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      category: "Web dev",
      icon: <Code size={18} />,
      items: ["Node.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Mobile & Others",
      icon: <Layers size={18} />,
      items: ["Kotlin", "Swift", "Python"],
    },
    {
      category: "Systems & Core",
      icon: <Cpu size={18} />,
      items: ["C", "Visual Basic", "SQL"],
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="mb-10 md:mb-12">
        <h3 className="text-blue-500 font-mono text-[10px] md:text-sm mb-2 tracking-widest uppercase">
          {t("techskills.stack")}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {t("techskills.lat")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-slate-900/20 border border-slate-800/50 p-5 md:p-6 rounded-2xl transition-colors hover:border-slate-700"
          >
            <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-[10px] md:text-xs uppercase tracking-wider">
              {group.icon}
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-slate-800/40 text-slate-300 text-xs md:text-sm rounded-lg border border-slate-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600/5 border border-blue-500/20 p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0">
          <Zap size={20} fill="currentColor" />
        </div>
        <div>
          <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
            {t("techskills.filo")}
          </h4>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            {t("techskills.filodesc")}
          </p>
        </div>
      </div>
    </section>
  );
};
