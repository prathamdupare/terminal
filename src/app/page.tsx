"use client";

import StatusBar from "@/components/statusBar";
import TerminalInput from "@/components/terminalInput";
import { handleClear, handleHelp, handleLs, handleVim } from "@/lib/commands";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(2);
  const [history, setHistory] = useState<JSX.Element[]>([]);

  const handleCommandSubmit = (mainCommand: string) => {
    const command = mainCommand.replace(/\s+/g, "");
    setStatus((prevStatus) => prevStatus + 1);
    setHistory((prevHistory) => [
      ...prevHistory,
      <div key={`${status}-command`} className="text-green-200">
        ➜ {command}
      </div>,
    ]);

    if (command === "ls" || command === "ll") {
      handleLs(setHistory, status);
    } else if (command === "clear") {
      handleClear(setHistory);
    } else if (command === "help") {
      handleHelp(setHistory);
    } else if (command === "vim") {
      handleVim(setHistory, status);
    } else {
      setHistory((prevHistory) => [
        ...prevHistory,
        <div key={`${status}-error`}>Command not found: {command}</div>,
      ]);
    }
  };

  return (
    <main className="flex flex-col justify-between w-screen h-screen">
      <div className="flex flex-col gap-0 px-4">
        <div>
          {history.map((item, index) => (
            <div className="font-mono" key={index}>
              {" "}
              {item}
            </div>
          ))}
        </div>
        <div className="flex">
          <p className="text-green-200">➜ </p>
          <TerminalInput onSubmit={handleCommandSubmit} />
        </div>
      </div>
      <StatusBar state={status} />
    </main>
  );
}
