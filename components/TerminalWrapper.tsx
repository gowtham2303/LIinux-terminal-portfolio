'use client';

import React from 'react';
import { InteractiveTerminal } from './InteractiveTerminal';

export function TerminalWrapper() {
  return (
    <div className="w-full h-full bg-black text-white font-mono flex flex-col">
      <style>{`
        /* Terminal Styling */
        .terminal-command {
          color: #00ff00;
          font-weight: bold;
        }

        .terminal-output {
          color: #ffffff;
        }

        .terminal-heading {
          color: #ff3333;
          font-weight: bold;
          margin-top: 12px;
          margin-bottom: 6px;
          font-size: 1.1em;
          text-shadow: 0 0 5px rgba(255, 51, 51, 0.5);
        }

        .terminal-subheading {
          color: #ff9900;
          font-weight: bold;
          margin-top: 8px;
          margin-bottom: 4px;
          font-size: 1em;
        }

        .terminal-success {
          color: #00ff00;
        }

        .terminal-info {
          color: #00ccff;
        }

        .terminal-error {
          color: #ff3333;
        }

        .terminal-link {
          color: #00ccff;
          text-decoration: underline;
          cursor: pointer;
        }

        .terminal-link:hover {
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
      `}</style>
      <InteractiveTerminal />
    </div>
  );
}
