'use client';

import { useState, useEffect } from 'react';
import { LinuxBootLoader } from '@/components/LinuxBootLoader';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!bootComplete) {
    return (
      <div className="relative">
        <LinuxBootLoader onBootComplete={() => setBootComplete(true)} />
        {showSkip && (
          <button
            onClick={() => setBootComplete(true)}
            className="absolute top-4 right-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-black font-bold rounded transition-colors text-sm"
          >
            Skip Boot [Enter]
          </button>
        )}
      </div>
    );
  }

  return <InteractiveTerminal />;
}