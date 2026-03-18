'use client';

import { Button } from '@/components/ui/button';

interface TerminalCommandBarProps {
  onCommandClick: (command: string) => void;
  isExecuting: boolean;
}

const COMMANDS = [
  { label: 'About', command: 'about' },
  { label: 'Education', command: 'education' },
  { label: 'Skills', command: 'skills' },
  { label: 'Experience', command: 'experience' },
  { label: 'Projects', command: 'projects' },
  { label: 'Certifications', command: 'certifications' },
  { label: 'Contact', command: 'contact' },
];

export default function TerminalCommandBar({ onCommandClick, isExecuting }: TerminalCommandBarProps) {
  return (
    <div className="border-t border-muted bg-secondary p-4 flex gap-2 flex-wrap justify-center">
      {COMMANDS.map((cmd) => (
        <button
          key={cmd.command}
          onClick={() => onCommandClick(cmd.command)}
          disabled={isExecuting}
          className="px-3 py-2 border border-foreground text-foreground text-xs font-mono hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          $ {cmd.label}
        </button>
      ))}
    </div>
  );
}
