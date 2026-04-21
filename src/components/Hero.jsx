import React from "react";
import { useTranslation } from "react-i18next";

export const Hero = ({ isDevMode }) => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="flex flex-col gap-4">
        <h2
          className={`font-mono text-xs md:text-sm tracking-[0.3em] transition-colors duration-500 ${
            isDevMode ? "text-lime-500/70" : "text-blue-500/70"
          }`}
        >
          {t("hero.role")}
        </h2>

        <div className="flex flex-col mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            Iván
          </h1>
          <h1
            className={`text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-500 ${
              isDevMode
                ? "text-lime-500 drop-shadow-[0_0_15px_rgba(132,204,22,0.5)]"
                : "text-blue-400"
            }`}
          >
            Menacho
          </h1>
        </div>

        <p
          className={`max-w-xl text-lg leading-relaxed transition-colors duration-500 ${
            isDevMode ? "text-lime-100/70" : "text-slate-400"
          }`}
        >
          {t("hero.description")}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 active:scale-95 ${
              isDevMode
                ? "bg-lime-500 text-black shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:bg-lime-400"
                : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
            }`}
          >
            Let's talk
          </button>

          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-500 ${
              isDevMode
                ? "border-lime-500/30 bg-lime-500/5"
                : "border-slate-800 bg-slate-900/50"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${
                isDevMode
                  ? "bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,1)]"
                  : "bg-green-500"
              }`}
            ></div>
            <span
              className={`text-xs font-mono tracking-wider ${
                isDevMode ? "text-lime-500" : "text-slate-400"
              }`}
            >
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
