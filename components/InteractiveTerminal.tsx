'use client';

import { useEffect, useRef, useState } from 'react';
import { TERMINAL_DATA, SYSTEM_INFO } from '@/lib/terminalData';
import { Github, Linkedin, Download, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
  isStreaming?: boolean;
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'system',
      content: TERMINAL_DATA.welcome,
    },
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
        await new Promise((resolve) => setTimeout(resolve, 1));
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

  const handleMessage = async (message: string) => {
    const mailtoLink = `mailto:gowtham.sree@example.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_blank');
    
    setLines((prev) => [
      ...prev,
      {
        type: 'system',
        content: '✓ Opening email client with your message...',
      },
      {
        type: 'output',
        content: 'Message: "' + message + '"',
      },
    ]);
  };

  const handleResume = () => {
    setLines((prev) => [
      ...prev,
      {
        type: 'system',
        content: '📄 Downloading resume...',
      },
      {
        type: 'output',
        content: (
          <div className="flex items-center gap-2 mt-2">
            <a
              href="/resume.pdf"
              download="Gowtham_Sree_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        ),
      },
    ]);
  };

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim();

    if (trimmedCmd) {
      setCommandHistory((prev) => [...prev, trimmedCmd]);
      setHistoryIndex(-1);
    }

    setLines((prev) => [
      ...prev,
      {
        type: 'command',
        content: `${SYSTEM_INFO.user}@${SYSTEM_INFO.hostname}:${SYSTEM_INFO.directory}$ ${cmd}`,
      },
    ]);

    setInput('');

    if (!trimmedCmd) {
      return;
    }

    const lowerCmd = trimmedCmd.toLowerCase();

    if (lowerCmd.startsWith('message ')) {
      const message = trimmedCmd.substring(8);
      if (message.trim()) {
        await handleMessage(message);
      } else {
        setLines((prev) => [
          ...prev,
          {
            type: 'error',
            content: 'Usage: message <your-message>',
          },
        ]);
      }
      return;
    }

    if (lowerCmd === 'resume') {
      handleResume();
      return;
    }

    if (lowerCmd === 'gui') {
      setLines((prev) => [
        ...prev,
        {
          type: 'system',
          content: '🖥️  Launching GUI mode...',
        },
      ]);
      setTimeout(() => {
        window.location.href = '/gui';
      }, 500);
      return;
    }

    if (lowerCmd === 'date') {
      const now = new Date();
      setLines((prev) => [
        ...prev,
        {
          type: 'output',
          content: now.toString(),
        },
      ]);
      return;
    }

    const commandMap: Record<string, string> = {
      about: TERMINAL_DATA.about,
      skills: TERMINAL_DATA.skills,
      education: TERMINAL_DATA.education,
      experience: TERMINAL_DATA.experience,
      projects: TERMINAL_DATA.projects,
      certifications: TERMINAL_DATA.certifications,
      socials: TERMINAL_DATA.socials,
      contact: TERMINAL_DATA.contact,
      help: TERMINAL_DATA.help,
      whoami: TERMINAL_DATA.whoami,
      pwd: TERMINAL_DATA.pwd,
      uname: TERMINAL_DATA.uname,
      'uname -a': TERMINAL_DATA.uname,
      ls: TERMINAL_DATA.ls,
      clear: 'CLEAR_COMMAND',
    };

    const output = commandMap[lowerCmd];

    if (output === 'CLEAR_COMMAND') {
      setLines([]);
    } else if (output) {
      await streamText(output);
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: 'error',
          content: `bash: ${trimmedCmd}: command not found`,
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
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleCommandClick = (cmd: string) => {
    executeCommand(cmd);
    setTimeout(() => {
      executeCommand(cmd);
    }, 100);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderLine = (line: TerminalLine, idx: number) => {
    let className = 'whitespace-pre-wrap break-words leading-relaxed mb-1 font-mono';
    
    switch (line.type) {
      case 'command':
        className += ' text-green-400 font-bold text-sm';
        break;
      case 'output':
        className += ' text-white text-sm';
        break;
      case 'error':
        className += ' text-red-400 text-sm';
        break;
      case 'system':
        className += ' text-cyan-400 text-sm font-semibold';
        break;
    }

    return (
      <div key={idx} className={className}>
        {line.content}
      </div>
    );
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-900 border-b border-gray-700 px-3 md:px-4 py-2 flex items-center justify-between flex-shrink-0">
        <span className="text-gray-400 text-xs md:text-sm truncate hidden sm:inline font-mono">
          {SYSTEM_INFO.user}@{SYSTEM_INFO.hostname}: {SYSTEM_INFO.directory}
        </span>
        <div className="flex-1" />
        <div className="flex gap-2 md:gap-3 flex-shrink-0">
          <a
            href="https://github.com/gowtham2303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            title="GitHub"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/gowthamsree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-3 md:p-6 terminal-scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, idx) => renderLine(line, idx))}

        {/* Input Line */}
        <div className="flex items-start gap-2 mt-4">
          <span className="text-green-400 font-bold text-xs md:text-sm whitespace-nowrap flex-shrink-0 leading-tight">
            {SYSTEM_INFO.user}@{SYSTEM_INFO.hostname}:{SYSTEM_INFO.directory}$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-transparent text-green-400 text-xs md:text-sm outline-none border-none font-mono min-w-0"
            placeholder={isStreaming ? 'Processing...' : ''}
            disabled={isStreaming}
            autoFocus
            spellCheck="false"
          />
          {isStreaming && (
            <span className="inline-block w-2 h-3 md:h-4 bg-green-400 animate-pulse flex-shrink-0"></span>
          )}
        </div>
      </div>

      {/* Command Bar */}
      <div className="bg-gray-900 border-t border-gray-700 p-2 md:p-4 flex-shrink-0 overflow-x-auto">
        <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center max-w-6xl mx-auto min-w-max md:min-w-0">
          {[
            'about',
            'skills',
            'education',
            'experience',
            'projects',
            'certifications',
            'socials',
            'contact',
            'resume',
            'gui',
            'help',
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandClick(cmd)}
              disabled={isStreaming}
              className="px-2 md:px-4 py-1.5 md:py-2 border border-green-500 text-green-400 font-mono text-xs hover:bg-green-500 hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 rounded whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
