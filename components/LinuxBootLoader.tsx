'use client';

import { useEffect, useState } from 'react';

interface BootLoaderProps {
  onBootComplete: () => void;
}

export function LinuxBootLoader({ onBootComplete }: BootLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const bootMessages = [
    '[ OK ] Linux kernel 6.1.0-cybersec-amd64 booting...',
    '[ OK ] BIOS-provided physical RAM map',
    '[ OK ] NX (Execute Disable) protection: active',
    '[ OK ] Initializing CGROUP subsystems',
    '[ OK ] Loading Azure Cloud Infrastructure modules...',
    '[ OK ] Mounting Microsoft Terraform v1.6.3 engine...',
    '[ OK ] Initializing Python 3.11.6 runtime environment...',
    '[ OK ] Loading React 19 frontend framework...',
    '[ OK ] Establishing Node.js API server (v20.0)...',
    '[ OK ] Initializing PostgreSQL database connections...',
    '[ OK ] Loading Docker container orchestration...',
    '[ OK ] Mounting Kubernetes cluster configuration...',
    '[ OK ] Setting up GitHub repository access...',
    '[ OK ] Loading security tools suite...',
    '[ OK ] Establishing connection to Lumen Technologies...',
    '[ OK ] Verifying SSH key authentication...',
    '[ OK ] Loading portfolio database...',
    '[ OK ] Initializing terminal emulator...',
    '[ OK ] Starting X server environment...',
    '[ OK ] Boot completed successfully!',
    '',
    'Gowtham Sree Portfolio System v2.0',
    '',
    'gowtham@cybersec login: gowtham',
    'Password: •••••••••',
    'Last login: ' + new Date().toLocaleString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    }),
    '',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootMessages.length) {
        setLines((prev) => [...prev, bootMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        setTimeout(onBootComplete, 800);
      }
    }, 60); // Faster boot sequence

    // Allow Enter key to skip
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        clearInterval(interval);
        setIsComplete(true);
        onBootComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onBootComplete]);

  return (
    <div className="w-full h-screen bg-black flex flex-col p-4 md:p-8 font-mono overflow-hidden scan-lines">
      <div className="flex-1 overflow-y-auto terminal-scrollbar">
        {lines.map((line, idx) => (
          <div
            key={idx}
            className="text-green-400 text-xs md:text-sm boot-animation whitespace-pre-wrap break-words leading-relaxed"
          >
            {line}
          </div>
        ))}
      </div>
      {isComplete && (
        <div className="text-green-400 text-center py-4 text-sm animate-pulse">
          [System Ready - Press Enter to Continue]
        </div>
      )}
    </div>
  );
}