'use client';

import { useEffect, useRef, useState } from 'react';
import { TERMINAL_DATA } from '@/lib/terminalData';

interface TerminalLine {
  type: 'command' | 'output';
  content: string;
  isStreaming?: boolean;
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: TERMINAL_DATA.welcome,
    },
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current?.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 0);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const streamText = async (text: string) => {
    setIsStreaming(true);
    const textLines = text.split('\n');

    for (const line of textLines) {
      setLines((prev) => [
        ...prev,
        {
          type: 'output',
          content: '',
          isStreaming: true,
        },
      ]);
      for (let i = 0; i < line.length; i++) {
        setLines((prev) => {
          const lastLine = prev[prev.length - 1];
          if (lastLine && lastLine.isStreaming) {
            return [
              ...prev.slice(0, -1),
              {
                ...lastLine,
                content: lastLine.content + line[i],
              },
            ];
          }
          return prev;
        });
        await new Promise((resolve) => setTimeout(resolve, 5)); // Stream speed
      }
      setLines((prev) => {
        const lastLine = prev[prev.length - 1];
        if (lastLine && lastLine.isStreaming) {
          return [
            ...prev.slice(0, -1),
            {
              ...lastLine,
              isStreaming: false,
            },
          ];
        }
        return prev;
      });
    }

    setIsStreaming(false);
  };

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add command to terminal
    setLines((prev) => [
      ...prev,
      {
        type: 'command',
        content: `$ ${cmd}`,
      },
    ]);

    setInput('');

    if (!trimmedCmd) {
      return;
    }

    const commandMap: Record<string, string> = {
      about: TERMINAL_DATA.about,
      skills: TERMINAL_DATA.skills,
      education: TERMINAL_DATA.education,
      experience: TERMINAL_DATA.experience,
      projects: TERMINAL_DATA.projects,
      socials: TERMINAL_DATA.socials,
      contact: TERMINAL_DATA.contact,
      help: TERMINAL_DATA.help,
      whoami: TERMINAL_DATA.whoami,
      pwd: TERMINAL_DATA.pwd,
      uname: TERMINAL_DATA.uname,
      'uname -a': TERMINAL_DATA.uname,
      clear: 'CLEAR_COMMAND',
    };

    const output = commandMap[trimmedCmd];

    if (output === 'CLEAR_COMMAND') {
      setLines([
        {
          type: 'output',
          content: '',
        },
      ]);
    } else if (output) {
      await streamText(output);
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: 'output',
          content: `command not found: ${cmd}`,
        },
        {
          type: 'output',
          content: `Type "help" for available commands.`,
        },
      ]);
    }

    scrollToBottom();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isStreaming) {
      executeCommand(input);
    }
  };

  const handleCommandClick = (cmd: string) => {
    executeCommand(cmd);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col font-mono overflow-hidden">
      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-6 terminal-green text-xs md:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap break-words leading-relaxed ${
              line.type === 'command'
                ? 'text-[#00ff00] font-bold mb-1'
                : 'text-[#00ff00] mb-1'
            }`}
          >
            {line.content}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[#00ff00] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="terminal-input flex-1 bg-transparent text-[#00ff00]"
            placeholder={isStreaming ? 'Processing...' : ''}
            disabled={isStreaming}
            autoFocus
            spellCheck="false"
          />
          {isStreaming && (
            <span className="inline-block w-2 h-4 bg-[#00ff00] animate-pulse"></span>
          )}
        </div>
      </div>

      {/* Command Bar */}
      <div className="bg-black border-t-2 border-[#00ff00] p-4 flex-shrink-0">
        <div className="flex flex-wrap gap-2 justify-center max-w-6xl mx-auto">
          {[
            'about',
            'skills',
            'education',
            'experience',
            'projects',
            'socials',
            'contact',
            'help',
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandClick(cmd)}
              disabled={isStreaming}
              className="px-3 py-2 border-2 border-[#00ff00] text-[#00ff00] font-mono text-xs hover:bg-[#00ff00] hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              [{cmd}]
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
