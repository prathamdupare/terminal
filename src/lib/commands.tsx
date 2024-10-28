import React from "react";

type SetHistoryFunction = React.Dispatch<React.SetStateAction<JSX.Element[]>>;

export const handleLs = (setHistory: SetHistoryFunction, status: number) => {
  const files = [
    "file1.txt",
    "file2.txt",
    "project",
    "script.sh",
    "test.py",
    "report.pdf",
  ];

  const clickableFiles = (
    <div className="flex flex-col" key={status}>
      {files.map((file, index) => (
        <a
          key={index}
          href={`#/${file}`}
          className="text-blue-400 hover:underline mr-2"
        >
          {file}
        </a>
      ))}
    </div>
  );

  setHistory((prevHistory) => [...prevHistory, clickableFiles]);
};

export const handleClear = (setHistory: SetHistoryFunction) => {
  setHistory([]);
};

export const handleVim = (setHistory: SetHistoryFunction, status: number) => {
  const vimQuotes = [
    "Vim in a browser? JavaScript wishes it was that powerful.",
    "Warning: Browsers can only dream of handling real Vim.",
    "Vim here? That’s like running a marathon in flip-flops. Try a real terminal.",
    "JavaScript can barely handle closures, let alone Vim.",
    "Vim’s too intense for browsers. Head to a terminal for the real deal.",
    "Real Vim runs in a terminal, not in JavaScript’s playground.",
    "JS + Vim? That’s like trying to fit a jet engine on a bicycle.",
  ];

  const randomQuote = vimQuotes[Math.floor(Math.random() * vimQuotes.length)];

  setHistory((prevHistory) => [
    ...prevHistory,
    <div key={`${status}-vim`}>{randomQuote}</div>,
  ]);
};

export const handleHelp = (setHistory: SetHistoryFunction) => {
  const helpText = (
    <div className="flex flex-col" key="help">
      <h2 className="text-blue-400">Available Commands:</h2>
      <ul className="list-disc ml-5">
        <li>
          <strong>ls</strong> or <strong>ll</strong> - List files in the current
          directory.
        </li>
        <li>
          <strong>clear</strong> - Clear the terminal screen.
        </li>
        <li>
          <strong>vim</strong> - Open Vim (well, kind of).
        </li>
        <li>
          <strong>help</strong> - Show this help message.
        </li>
      </ul>
    </div>
  );
  setHistory((prevHistory) => [...prevHistory, helpText]);
};
