"use client";

import StatusBar from "@/components/statusBar";
import TerminalInput from "@/components/terminalInput";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(2);
  const handleCommandSubmit = (command) => {
    console.log(`Command submitted: ${command}`);
    // Add your logic to update the status or handle commands here
    setStatus((prevStatus) => prevStatus + 1); // Example status update
  };

  return (
    <main className="flex flex-col justify-between w-screen h-screen">
      <div className="flex gap-0 px-4">
        <p className="text-green-200">➜ </p>
        <TerminalInput onSubmit={handleCommandSubmit} />
      </div>
      <StatusBar state={status} />
    </main>
  );
}
