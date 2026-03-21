'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center relative cursor-none">
      {/* F1 Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="f1grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="64" y2="0" stroke="rgba(232, 0, 45, 0.04)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="64" stroke="rgba(232, 0, 45, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#f1grid)" />
        </svg>
      </div>

      {/* Cursor Following Glow */}
      <div
        className="fixed w-[700px] h-[700px] rounded-full pointer-events-none z-[1]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(232, 0, 45, 0.06) 0%, transparent 70%)',
          transition: 'left 0.2s ease, top 0.2s ease',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-block mb-8 px-6 py-2 border border-[rgba(232,0,45,0.3)] rounded-full bg-[rgba(232,0,45,0.05)]">
          <span style={{ color: '#E8002D', fontSize: '0.65rem', letterSpacing: '5px', fontWeight: 600 }}>
            INFORMATION SYSTEMS ENGINEER · BENGALURU
          </span>
        </div>

        {/* Hero Name */}
        <h1
          className="font-mono text-6xl sm:text-7xl md:text-8xl font-black mb-4 text-white"
          style={{
            letterSpacing: '-3px',
            textShadow: '0 0 100px rgba(232, 0, 45, 0.3), 0 0 200px rgba(232, 0, 45, 0.1)',
          }}
        >
          GOWTHAM<br />
          <span style={{ color: '#E8002D' }}>SREE</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl mb-8 font-mono font-light"
          style={{ color: '#00D2FF', letterSpacing: '5px' }}
        >
          Full Stack · Cloud · Automation
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto mb-12 font-mono text-sm sm:text-base"
          style={{ color: '#888', lineHeight: '1.9' }}
        >
          Building production systems at Lumen Technologies. Infrastructure meets code — Azure, Terraform, and whatever it takes to make things run at scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/terminal">
            <button
              className="group relative px-8 sm:px-12 py-4 sm:py-5 overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(232, 0, 45, 0.3)',
                borderRadius: '8px',
              }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, rgba(232, 0, 45, 0.2), transparent)',
                }}
              />
              <span className="relative font-mono font-semibold text-sm" style={{ color: '#E8002D' }}>
                TERMINAL MODE →
              </span>
            </button>
          </Link>

          <Link href="/gui">
            <button
              className="group relative px-8 sm:px-12 py-4 sm:py-5 overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                borderRadius: '8px',
              }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 210, 255, 0.2), transparent)',
                }}
              />
              <span className="relative font-mono font-semibold text-sm" style={{ color: '#00D2FF' }}>
                TERMINAL GUI →
              </span>
            </button>
          </Link>
        </div>

        {/* System Info */}
        <div className="mt-16 text-xs font-mono opacity-50" style={{ color: '#888' }}>
          <p>ubuntu@f1-terminal:~$ kernel 6.2.0 | user: gowtham@lumen</p>
        </div>
      </div>
    </div>
  );
}
