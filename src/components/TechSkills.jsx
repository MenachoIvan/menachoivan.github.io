import React from "react";
import { Cpu, Code, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TechSkills = ({ isDevMode }) => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      category: "Web dev",
      icon: <Code size={18} />,
      items: [
        "Node.js",
        "React",
        "NextJS",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Rest APIs",
      ],
    },
    {
      category: "Systems & Core",
      icon: <Cpu size={18} />,
      items: ["Java", "VB.NET Framework", "C/C++", "SQL Server", "Oracle DB"],
    },
    {
      category: "Mobile & Others",
      icon: <Layers size={18} />,
      items: ["Kotlin", "Swift", "Python", "Git/Github"],
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-900">
      <div className="mb-12">
        <h3
          className={`font-mono text-[10px] md:text-sm mb-2 tracking-[0.3em] uppercase transition-colors duration-500 ${isDevMode ? "text-lime-500" : "text-blue-500"}`}
        >
          {t("techskills.stack")}
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {t("techskills.lat")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="group relative">
            <div
              className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] ${isDevMode ? "bg-lime-500/20" : "bg-blue-500/20"}`}
            ></div>

            <div
              className={`relative h-full bg-[#0a0f1e]/40 backdrop-blur-md border p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-1 ${
                isDevMode
                  ? "border-lime-500/10 group-hover:border-lime-500/40"
                  : "border-slate-800 group-hover:border-blue-500/30 shadow-xl"
              }`}
            >
              <div
                className={`flex items-center gap-2 mb-6 font-mono text-[10px] md:text-xs uppercase font-bold tracking-[0.1em] transition-colors duration-500 ${isDevMode ? "text-lime-400" : "text-blue-400"}`}
              >
                <div
                  className={`p-1.5 rounded-md ${isDevMode ? "bg-lime-500/10" : "bg-blue-500/10"}`}
                >
                  {group.icon}
                </div>
                {group.category}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 ${
                      isDevMode
                        ? "bg-lime-500/5 border-lime-500/10 text-lime-200 group-hover:border-lime-500/30 group-hover:bg-lime-500/10"
                        : "bg-slate-900/50 border-slate-800 text-slate-300 group-hover:border-slate-700 group-hover:text-white"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`relative overflow-hidden p-6 md:p-8 rounded-3xl border transition-all duration-700 group/filo ${
          isDevMode
            ? "bg-lime-500/[0.03] border-lime-500/20"
            : "bg-blue-600/[0.03] border-blue-500/20"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-32 h-32 blur-[60px] transition-colors duration-700 ${isDevMode ? "bg-lime-500/10" : "bg-blue-500/10"}`}
        ></div>

        <div className="relative flex flex-col sm:flex-row items-start gap-6">
          <div
            className={`p-3 rounded-2xl shrink-0 transition-all duration-500 group-hover/filo:scale-110 shadow-2xl ${
              isDevMode
                ? "bg-lime-500/20 text-lime-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            <Zap size={24} fill="currentColor" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2 text-lg md:text-xl tracking-tight">
              {t("techskills.filo")}
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              {t("techskills.filodesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
