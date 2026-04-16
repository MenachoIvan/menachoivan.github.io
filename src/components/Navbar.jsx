import React, { useState } from "react";
import { Mail, Braces, User, ChevronDown, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Navbar = ({ isDevMode, toggleDevMode }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", countryCode: "GB" },
    { code: "es", label: "Español", countryCode: "ES" },
    { code: "cat", label: "Català", countryCode: "cat" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === (i18n.language || "en")) || languages[0];

  const getFlagSrc = (countryCode) => {
    if (countryCode === "cat") return "./cat.svg";
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        isDevMode
          ? "bg-black border-lime-500/50 shadow-[0_0_20px_rgba(132,204,22,0.15)]"
          : "bg-[#020617]/80 border-blue-500/20"
      }`}
    >
      <nav className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto text-white gap-4">
        <span
          className={`font-mono font-bold text-xl tracking-tighter transition-all ${isDevMode ? "text-lime-500" : ""}`}
        >
          <span className={isDevMode ? "text-lime-500" : "text-blue-500"}>
            &lt;
          </span>
          <span className="text-white mx-1">IM</span>
          <span className={isDevMode ? "text-lime-500" : "text-blue-500"}>
            /&gt;
          </span>
        </span>

        <div className="flex items-center space-x-5 md:space-x-8 text-[10px] md:text-xs uppercase tracking-widest font-mono">
          <button
            onClick={toggleDevMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-300 border ${
              isDevMode
                ? "bg-lime-500/20 text-lime-400 border-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.3)]"
                : "text-slate-400 hover:bg-slate-800 border-slate-800 shadow-inner"
            }`}
          >
            <Cpu size={16} className={isDevMode ? "animate-spin" : ""} />
            <span className="font-bold">
              {isDevMode ? "DEBUG_ON" : "DEBUG_OFF"}
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2.5 border px-3 py-1.5 rounded-lg transition-all ${
                isDevMode
                  ? "bg-black border-lime-500/30 text-lime-400"
                  : "bg-slate-900 border-slate-800 text-blue-400 shadow-inner"
              }`}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-700 shrink-0">
                <img
                  src={getFlagSrc(currentLanguage.countryCode)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
            </button>

            {isOpen && (
              <div
                className={`absolute top-full mt-2 right-0 border rounded-xl overflow-hidden shadow-2xl min-w-[140px] p-1 ${
                  isDevMode
                    ? "bg-black border-lime-500/50 text-lime-400"
                    : "bg-slate-950 border-slate-800"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-3 py-2.5 text-left rounded-lg transition-colors ${
                      i18n.language === lang.code
                        ? isDevMode
                          ? "bg-lime-500/20 text-lime-400"
                          : "bg-blue-500/10 text-blue-400"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-700 shrink-0">
                      <img
                        src={getFlagSrc(lang.countryCode)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-wider">
                      {lang.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://linkedin.com/in/ivan-menacho"
            target="_blank"
            rel="noreferrer"
            className={`hover:scale-110 transition-transform ${isDevMode ? "text-lime-500" : "text-slate-300 hover:text-blue-400"}`}
          >
            <User size={18} />
          </a>
          <a
            href="https://github.com/MenachoIvan"
            target="_blank"
            rel="noreferrer"
            className={`hover:scale-110 transition-transform ${isDevMode ? "text-lime-500" : "text-slate-300 hover:text-blue-400"}`}
          >
            <Braces size={18} />
          </a>
          <a
            href="mailto:ivanmenachodominguez@gmail.com"
            className={`hover:scale-110 transition-transform ${isDevMode ? "text-lime-500" : "text-slate-300 hover:text-blue-400"}`}
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};
