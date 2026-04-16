import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Terminal = ({ isDevMode, setDevMode }) => {
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
    return text.split(urlRegex).map((part, i) =>
      part.match(urlRegex) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-4 decoration-1 transition-colors ${isDevMode ? "text-lime-400 decoration-lime-500/50" : "text-orange-500 decoration-orange-500/30"}`}
        >
          {part}
        </a>
      ) : (
        part
      ),
    );
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cleanInput = input.toLowerCase().trim();

      if (cleanInput === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      if (cleanInput === "debug" || cleanInput === "dev") {
        setDevMode(true);
        setHistory((prev) => [
          ...prev,
          { type: "input", content: input },
          {
            type: "output",
            content: ">> ATTACHING_DEBUGGER_SESSION... SUCCESS.",
          },
          { type: "output", key: "terminal.debug" },
        ]);
        setInput("");
        setTimeout(focusInput, 10);
        return;
      }

      if (cleanInput === "debug --off" || cleanInput === "dev --off") {
        setDevMode(false);
        setHistory((prev) => [
          ...prev,
          { type: "input", content: input },
          { type: "output", content: ">> DETACHING_DEBUGGER... EXIT_CODE_0." },
        ]);
        setInput("");
        setTimeout(focusInput, 10);
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
        "debug",
        "dev",
      ];

      if (validCommands.includes(cleanInput)) {
        let key = `terminal.${cleanInput}`;
        if (cleanInput === "experience") key = "terminal.exp";
        if (["run", "marathon", "prs"].includes(cleanInput))
          key = "terminal.run";
        if (cleanInput === "dev") key = "terminal.debug";

        newHistory.push({ type: "output", key });
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
    <div
      onClick={focusInput}
      className={`border transition-all duration-300 cursor-text shadow-2xl ${
        isDevMode
          ? "bg-black border-lime-500 shadow-lime-500/20"
          : "bg-[#0a0f1e] border-slate-800 rounded-xl"
      }`}
    >
      <div
        className={`px-4 py-1.5 flex items-center justify-between border-b ${isDevMode ? "bg-lime-900/20 border-lime-500/30 font-mono" : "bg-slate-900/80 border-slate-800"}`}
      >
        <div className="flex gap-1.5">
          <div
            className={`w-3 h-3 rounded-full ${isDevMode ? "bg-lime-500 animate-pulse" : "bg-red-500/20"}`}
          ></div>
          <div
            className={`w-3 h-3 rounded-full ${isDevMode ? "border border-lime-500/40" : "bg-yellow-500/20"}`}
          ></div>
        </div>
        <div
          className={`text-[10px] uppercase tracking-widest ${isDevMode ? "text-lime-500 font-bold font-mono" : "text-slate-500"}`}
        >
          {isDevMode ? "DEBUG_SESSION://IVAN_MENACHO" : "system_terminal"}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto bg-black/40 font-mono"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={`mb-1 ${line.type === "input" ? (isDevMode ? "text-lime-300" : "text-blue-400") : isDevMode ? "text-lime-500/80" : "text-slate-400"}`}
          >
            {line.type === "input" && (
              <span className="mr-2 opacity-50">$</span>
            )}
            {line.key ? formatOutput(t(line.key, line.params)) : line.content}
          </div>
        ))}
        <div className="flex mt-1">
          <span
            className={`${isDevMode ? "text-lime-500" : "text-blue-500"} mr-2 opacity-70`}
          >
            #
          </span>
          <input
            ref={inputRef}
            type="text"
            className={`bg-transparent border-none outline-none w-full ${isDevMode ? "text-lime-300" : "text-blue-400"}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
