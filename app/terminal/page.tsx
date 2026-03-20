'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TerminalWrapper } from '@/components/TerminalWrapper';

export default function TerminalPage() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Simulate boot time
    const timer = setTimeout(() => setIsBooted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white font-mono flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-green-700/50 px-4 py-3 flex items-center justify-between bg-black/50 glass">
        <Link href="/">
          <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors p-2 rounded hover:bg-green-900/20">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-mono">back</span>
          </button>
        </Link>
        <h1 className="text-green-400 font-mono text-sm sm:text-base">gowtham@cybersec-terminal:~</h1>
        <div className="w-10" />
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-hidden">
        {isBooted ? (
          <TerminalWrapper />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-green-400 font-mono text-sm">Initializing terminal...</p>
          </div>
        )}
      </div>
    </div>
  );
}
