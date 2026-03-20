'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Zap } from 'lucide-react';

export default function Desktop() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black opacity-40" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 0, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-green-400 mb-4 glow-text font-mono">
          PORTFOLIO OS
        </h1>
        <p className="text-green-300 text-lg sm:text-xl mb-12 font-mono opacity-80">
          Gowtham Sree | Information Systems Engineer
        </p>

        {/* Interface Selection */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Terminal Option */}
          <Link href="/terminal">
            <button className="glass-dark group relative px-8 sm:px-12 py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-3">
                <Terminal className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-white font-mono font-semibold text-sm sm:text-base">TERMINAL MODE</span>
                <span className="text-green-400 text-xs opacity-70">$ ./portfolio --cli</span>
              </div>
            </button>
          </Link>

          {/* GUI Option */}
          <Link href="/gui">
            <button className="glass-dark group relative px-8 sm:px-12 py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-3">
                <Zap className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-white font-mono font-semibold text-sm sm:text-base">GUI MODE</span>
                <span className="text-cyan-400 text-xs opacity-70">$ ./portfolio --gui</span>
              </div>
            </button>
          </Link>
        </div>

        {/* System Info */}
        <div className="mt-12 text-green-400 text-xs font-mono opacity-60">
          <p>Kali Linux 2024.1 | Kernel 6.2.0 | User: gowtham@cybersec</p>
        </div>
      </div>


    </div>
  );
}
