"use client";

import { useState } from "react";

const TerminalInput = ({ onSubmit }) => {
  const [command, setCommand] = useState("");

  const handleCommand = (e: any) => {
    e.preventDefault();
    console.log(`Command entered: ${command}`);
    setCommand("");
  };
  return (
    <form
      className="bg-black text-green-500 font-mono px-4"
      onSubmit={handleCommand}
    >
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Type your command..."
        className="bg-transparent border-none outline-none w-full placeholder-green-500 focus:ring-0 caret-green-500 caret-opacity-100 caret-w-[20px]"
        autoFocus
      />
    </form>
  );
};

export default TerminalInput;
