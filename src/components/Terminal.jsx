import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Terminal = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", key: "terminal.welcome" },
    { type: "output", key: "terminal.instruction" },
  ]);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formatOutput = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
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
      const validCommands = [
        "about",
        "experience",
        "exp",
        "stack",
        "status",
        "contact",
        "help",
        "run",
        "marathon",
        "prs",
      ];

      if (cleanInput === "help") {
        newHistory.push({ type: "output", key: "terminal.help" });
      } else if (cleanInput === "experience" || cleanInput === "exp") {
        newHistory.push({ type: "output", key: "terminal.exp" });
      } else if (["run", "marathon", "prs"].includes(cleanInput)) {
        newHistory.push({ type: "output", key: "terminal.run" });
      } else if (validCommands.includes(cleanInput)) {
        newHistory.push({ type: "output", key: `terminal.${cleanInput}` });
      } else if (cleanInput !== "") {
        newHistory.push({
          type: "output",
          key: "terminal.error",
          params: { command: cleanInput },
        });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div
        onClick={focusInput}
        className="bg-[#0a0f1e] border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm group hover:border-blue-500/30 transition-colors duration-500 cursor-text"
      >
        <div
          className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-slate-800 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
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
          className="p-6 h-64 overflow-y-auto bg-slate-950/50 backdrop-blur-sm"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${line.type === "input" ? "text-blue-400" : "text-slate-300"} leading-relaxed`}
            >
              {line.type === "input" ? (
                <>
                  <span className="text-blue-600 mr-2">➜</span>
                  {line.content}
                </>
              ) : (
                formatOutput(t(line.key, line.params))
              )}
            </div>
          ))}
          <div className="flex items-center mt-2">
            <span className="text-blue-600 mr-2">➜</span>
            <input
              ref={inputRef}
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
