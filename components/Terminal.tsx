'use client';

import { useEffect, useRef, useState } from 'react';
import TerminalContent from './TerminalContent';
import TerminalCommandBar from './TerminalCommandBar';

export default function Terminal() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [history, setHistory] = useState<{ type: 'command' | 'output'; content: string | React.ReactNode }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial welcome message
    setHistory([
      { type: 'output', content: '$ welcome' },
      { type: 'output', content: '' },
      { type: 'output', content: '$ echo "GOKUL SATYA"' },
      { type: 'output', content: 'GOKUL SATYA' },
      { type: 'output', content: '' },
      { type: 'output', content: '$ whoami' },
      { type: 'output', content: 'gokul@cybersec' },
      { type: 'output', content: '' },
      { type: 'output', content: '$ pwd' },
      { type: 'output', content: '/home/gokul/portfolio' },
      { type: 'output', content: '' },
      { type: 'output', content: '$ ls' },
      {
        type: 'output',
        content: 'about    education    skills    experience    projects    certifications    contact',
      },
      { type: 'output', content: '' },
      {
        type: 'output',
        content:
          'Welcome to Gowtham Sathiyamurthy\'s cybersecurity portfolio! Type help to see available commands.',
      },
    ]);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandClick = (command: string) => {
    setActiveCommand(command);

    const newHistory = [...history];
    newHistory.push({ type: 'command', content: `$ ${command}` });

    // Simulate command execution
    setTimeout(() => {
      const output = getCommandOutput(command);
      newHistory.push({ type: 'output', content: output });
      newHistory.push({ type: 'output', content: '' });
      setHistory(newHistory);
      setActiveCommand(null);
    }, 300);
  };

  const getCommandOutput = (command: string) => {
    switch (command) {
      case 'skills':
        return <TerminalContent.Skills />;
      case 'about':
        return <TerminalContent.About />;
      case 'education':
        return <TerminalContent.Education />;
      case 'experience':
        return <TerminalContent.Experience />;
      case 'projects':
        return <TerminalContent.Projects />;
      case 'certifications':
        return <TerminalContent.Certifications />;
      case 'contact':
        return <TerminalContent.Contact />;
      case 'help':
        return <TerminalContent.Help />;
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div className="w-full h-screen bg-black border-2 border-foreground overflow-hidden scan-lines flex flex-col">
      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto p-4 space-y-0 text-sm font-mono">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`leading-relaxed ${item.type === 'command' ? 'text-accent font-semibold' : 'text-foreground'}`}
          >
            {item.content}
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Command Bar */}
      <TerminalCommandBar onCommandClick={handleCommandClick} isExecuting={activeCommand !== null} />
    </div>
  );
}
