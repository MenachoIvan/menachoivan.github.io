import React from "react";
import {
  Database,
  Activity,
  Code2,
  ExternalLink,
  Terminal as TerminalIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const CoreWork = ({ isDevMode }) => {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col gap-12">
        <div>
          <span
            className={`font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block transition-colors duration-500 ${isDevMode ? "text-lime-500" : "text-blue-500"}`}
          >
            {t("corework.comment")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t("corework.position")}{" "}
            <span
              className={`italic transition-colors duration-500 ${isDevMode ? "text-lime-500" : "text-blue-500"}`}
            >
              PortAventura World
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-10">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              {t("corework.positiondesc")}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Database size={22} />,
                  title: t("corework.dataadmin"),
                  desc: t("corework.dataadmindesc"),
                },
                {
                  icon: <Activity size={22} />,
                  title: t("corework.internalprojects"),
                  desc: t("corework.internalprojectsdesc"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 group cursor-default p-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/40"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isDevMode
                        ? "group-hover:border-lime-500/50 group-hover:bg-lime-500/10 group-hover:shadow-lime-500/20"
                        : "group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
                    }`}
                  >
                    <div
                      className={`transition-colors duration-500 ${isDevMode ? "text-slate-500 group-hover:text-lime-400" : "text-slate-500 group-hover:text-blue-400"}`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`text-white font-semibold text-lg mb-1 transition-colors duration-500 ${isDevMode ? "group-hover:text-lime-400" : "group-hover:text-blue-400"}`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base italic">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div
              className={`absolute -inset-4 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${isDevMode ? "bg-lime-500" : "bg-blue-600"}`}
            ></div>

            <div
              className={`relative bg-[#050a18] border backdrop-blur-xl overflow-hidden rounded-[2.5rem] transition-all duration-700 shadow-2xl ${
                isDevMode
                  ? "border-lime-500/30 group-hover:border-lime-500/60 shadow-lime-500/10"
                  : "border-slate-800 group-hover:border-blue-500/40"
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-32 opacity-10 pointer-events-none ${isDevMode ? "bg-[linear-gradient(to_right,#84cc16_1px,transparent_1px),linear-gradient(to_bottom,#84cc16_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)]"} bg-[size:14px_14px]`}
              ></div>

              <div className="relative p-8 md:p-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse ${isDevMode ? "bg-lime-500 shadow-[0_0_8px_#84cc16]" : "bg-blue-500 shadow-[0_0_8px_#3b82f6]"}`}
                      ></div>
                      <span
                        className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${isDevMode ? "text-lime-400" : "text-blue-400"}`}
                      >
                        {t("corework.featured")}
                      </span>
                    </div>
                    <div
                      className={`h-[1px] transition-all duration-700 ${isDevMode ? "bg-lime-500 w-12 group-hover:w-24" : "bg-blue-500 w-12 group-hover:w-24"}`}
                    ></div>
                  </div>
                  <div
                    className={`p-3 rounded-2xl border transition-all duration-500 ${isDevMode ? "bg-lime-500/10 border-lime-500/20 text-lime-400" : "bg-slate-900 border-slate-800 text-slate-500 group-hover:text-blue-400"}`}
                  >
                    <Code2 size={24} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 group-hover:tracking-tight transition-all duration-500">
                  {t("corework.projecttitle")}
                </h3>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-medium">
                  {t("corework.projectdesc")}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["VB.NET", "SQL SERVER", "API REST", "JSON"].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-500 border ${
                        isDevMode
                          ? "bg-lime-500/5 border-lime-500/20 text-lime-400 group-hover:border-lime-500/40"
                          : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`pt-8 border-t flex justify-between items-center transition-colors duration-500 ${isDevMode ? "border-lime-500/20" : "border-slate-800/50"}`}
                >
                  <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px]">
                    <div className="flex items-center gap-1">
                      <TerminalIcon
                        size={12}
                        className={isDevMode ? "text-lime-500" : ""}
                      />
                      <span>PROD_v2.1</span>
                    </div>
                    <span className="opacity-30">|</span>
                    <span>LOCAL_STABLE</span>
                  </div>
                  <button
                    className={`p-2 rounded-full transition-all duration-500 ${
                      isDevMode
                        ? "text-lime-500 hover:bg-lime-500/10"
                        : "text-slate-500 hover:text-blue-400"
                    }`}
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
