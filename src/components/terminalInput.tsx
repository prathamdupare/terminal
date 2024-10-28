"use client";

import { useState } from "react";

const TerminalInput = ({ onSubmit }) => {
  const [command, setCommand] = useState("");

  const handleCommand = (e: any) => {
    e.preventDefault();
    console.log(`Command entered: ${command}`);
    onSubmit(command);
    setCommand("");
  };
  return (
    <form
      className="bg-black text-green-500 font-mono pl-2 "
      onSubmit={handleCommand}
    >
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder=""
        className="bg-background border-none outline-none w-full placeholder-green-500 focus:ring-0 caret-green-500 caret-opacity-100 caret-w-[20px]"
        autoFocus
      />
    </form>
  );
};

export default TerminalInput;
