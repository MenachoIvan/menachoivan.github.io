import React, { useState } from "react";
import { Mail, Braces, User, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", countryCode: "GB" },
    { code: "es", label: "Español", countryCode: "ES" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === (i18n.language || "en")) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <nav className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto text-white gap-4 relative z-50">
      <span className="font-mono font-bold text-xl tracking-tighter flex items-center">
        <span className="text-blue-500">&lt;</span>
        <span className="text-white mx-1">IM</span>
        <span className="text-blue-500">/&gt;</span>
      </span>

      <div className="flex items-center space-x-5 md:space-x-8 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-blue-400 hover:border-blue-500 transition-all active:scale-95 shadow-inner"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-700 shrink-0 bg-slate-800">
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${currentLanguage.countryCode}.svg`}
                alt={currentLanguage.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden md:inline text-slate-200">
              {currentLanguage.label}
            </span>
            <ChevronDown
              size={14}
              className={`transition-transform text-slate-500 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-[-1]"
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="absolute top-full mt-2 right-0 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl min-w-[140px] p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 w-full px-3 py-2.5 text-left rounded-lg transition-colors ${
                      i18n.language === lang.code
                        ? "text-blue-400 bg-blue-500/10 font-semibold"
                        : "text-slate-300 hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-700 shrink-0 shadow-sm bg-slate-800">
                      <img
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${lang.countryCode}.svg`}
                        alt={lang.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-wider">
                      {lang.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <a
          href="https://linkedin.com/in/ivan-menacho"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Linkedin</span> <User size={18} />
        </a>

        <a
          href="https://github.com/MenachoIvan"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Github</span> <Braces size={18} />
        </a>

        <a
          href="mailto:ivanmenachodominguez@gmail.com"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">{t("nav.contact")}</span>{" "}
          <Mail size={18} />
        </a>
      </div>
    </nav>
  );
};
