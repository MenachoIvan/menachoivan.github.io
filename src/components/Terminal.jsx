import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Terminal = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "output",
      content: "Ivan Menacho OS v1.0.4 - Initializing systems...",
    },
    { type: "output", content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () =>
      "Available commands: about, exp, skills, contact, clear, status",
    about: () => t("hero.description") + " PortAventura World.",
    exp: () =>
      "3+ years at PortAventura World. 1 Erasmus in Genova. 1 Degree at URV.",
    skills: () =>
      "Full Stack dev, Systems Admin, Middleware expert, SQL Specialist.",
    status: () =>
      "System: Online | Latency: 12ms | Uptime: 99.9% | Mood: Ready to code",
    contact: () =>
      "Redirecting to contact section... (or use the button above!)",
    clear: () => {
      setHistory([]);
      return null;
    },
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cleanInput = input.toLowerCase().trim();

      if (cleanInput === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const newHistory = [...history, { type: "input", content: input }];

      if (commands[cleanInput]) {
        const result = commands[cleanInput]();
        if (result !== null) {
          newHistory.push({ type: "output", content: result });
        }
      } else if (cleanInput !== "") {
        newHistory.push({
          type: "output",
          content: `Command not found: ${cleanInput}. Type "help" for assistance.`,
        });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="bg-[#0a0f1e] border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm group hover:border-blue-500/30 transition-colors duration-500">
        <div className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
            <TerminalIcon size={12} />
            system_terminal
          </div>
        </div>

        <div
          ref={scrollRef}
          className="p-6 h-64 overflow-y-auto custom-scrollbar bg-slate-950/50 backdrop-blur-sm"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${line.type === "input" ? "text-blue-400" : "text-slate-300"}`}
            >
              {line.type === "input" && (
                <span className="text-blue-600 mr-2">➜</span>
              )}
              {line.content}
            </div>
          ))}
          <div className="flex items-center mt-2">
            <span className="text-blue-600 mr-2">➜</span>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-blue-400 w-full caret-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
        </div>
      </div>
    </section>
  );
};
