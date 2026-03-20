'use client';

import { useState, useRef, useEffect } from 'react';
import { portfolioData, commands } from '@/lib/portfolioData';
import { GUIInterface } from './GUIInterface';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'system';
  content: string;
}

export function TerminalApp() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: 'Welcome to Gowtham Sree\'s Interactive Portfolio'
    },
    {
      type: 'system',
      content: 'Type "help" for available commands or "gui" for graphical interface'
    },
    {
      type: 'output',
      content: ''
    }
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showGUI, setShowGUI] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [lines]);

  const streamOutput = async (text: string, isCommand: boolean = false) => {
    setIsStreaming(true);
    const characters = text.split('');
    let currentText = '';

    for (let char of characters) {
      await new Promise(resolve => setTimeout(resolve, 2));
      currentText += char;
      setLines(prev => {
        const newLines = [...prev];
        if (newLines[newLines.length - 1].type === 'output') {
          newLines[newLines.length - 1] = {
            type: 'output',
            content: currentText
          };
        }
        return newLines;
      });
    }
    setIsStreaming(false);
  };

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add command to display
    setLines(prev => [...prev, {
      type: 'command',
      content: `$ ${cmd}`
    }]);

    // Add to history
    if (trimmedCmd) {
      setHistory(prev => [...prev, trimmedCmd]);
    }

    // Handle commands
    if (trimmedCmd === 'clear') {
      setLines([{ type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'pwd') {
      setLines(prev => [...prev, {
        type: 'output',
        content: '/home/gowtham/portfolio'
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'whoami') {
      setLines(prev => [...prev, {
        type: 'output',
        content: 'gowtham'
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'date') {
      setLines(prev => [...prev, {
        type: 'output',
        content: new Date().toString()
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'uname -a') {
      setLines(prev => [...prev, {
        type: 'output',
        content: 'Linux portfolio 6.2.0 #1 SMP x86_64 GNU/Linux'
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'history') {
      setLines(prev => [...prev, {
        type: 'output',
        content: history.map((h, i) => `${i + 1}  ${h}`).join('\n')
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd === 'gui') {
      setShowGUI(true);
      return;
    }

    if (trimmedCmd === 'resume') {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Gowtham_Sree_Resume.pdf';
      link.click();
      setLines(prev => [...prev, {
        type: 'output',
        content: 'Resume download initiated...'
      }, { type: 'output', content: '' }]);
      return;
    }

    if (trimmedCmd.startsWith('message ')) {
      const message = trimmedCmd.substring(8);
      const email = 'gowtham.tharigopula@gmail.com';
      window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(message)}`;
      setLines(prev => [...prev, {
        type: 'output',
        content: 'Opening default email client...'
      }, { type: 'output', content: '' }]);
      return;
    }

    // Portfolio commands
    const content = (portfolioData as any)[trimmedCmd];
    if (content) {
      setLines(prev => [...prev, { type: 'output', content: '' }]);
      await streamOutput(content);
      setLines(prev => [...prev, { type: 'output', content: '' }]);
      return;
    }

    // Unknown command
    if (trimmedCmd) {
      setLines(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
      }, { type: 'output', content: '' }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (showGUI) {
    return <GUIInterface onExit={() => setShowGUI(false)} />;
  }

  return (
    <div className="w-full h-screen bg-black text-white font-mono flex flex-col overflow-hidden">
      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-3 sm:p-6 text-xs sm:text-sm space-y-0"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap break-words leading-relaxed ${
              line.type === 'command'
                ? 'text-[#00ff00] font-semibold'
                : line.type === 'error'
                ? 'text-red-500'
                : line.type === 'system'
                ? 'text-cyan-400'
                : 'text-white'
            }`}
          >
            {line.content}
          </div>
        ))}
        
        {/* Current Input */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#00ff00] font-semibold flex-shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-transparent text-[#00ff00] flex-1 outline-none"
            placeholder={isStreaming ? 'Processing...' : ''}
            disabled={isStreaming}
            autoFocus
            spellCheck="false"
          />
          {isStreaming && <span className="text-[#00ff00] animate-pulse">▌</span>}
        </div>
      </div>

      {/* Command Bar */}
      <div className="bg-gray-900 border-t border-gray-700 p-2 sm:p-4 flex-shrink-0 overflow-x-auto">
        <div className="flex gap-1 sm:gap-2 justify-start sm:justify-center flex-wrap">
          {['about', 'skills', 'education', 'experience', 'projects', 'achievements', 'contact', 'resume', 'gui', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              disabled={isStreaming}
              className="px-2 sm:px-3 py-1 sm:py-2 border border-[#00ff00] text-[#00ff00] font-mono text-xs hover:bg-[#00ff00] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
