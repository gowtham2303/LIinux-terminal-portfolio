'use client';

import { useEffect, useState } from 'react';

interface BootLoaderProps {
  onBootComplete: () => void;
}

export function LinuxBootLoader({ onBootComplete }: BootLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const bootMessages = [
    '[ OK ] Linux kernel 6.1.0-kali5-amd64 booting...',
    '[ OK ] BIOS-provided physical RAM map:',
    '[ OK ] BIOS-e820: [mem 0x0000000000000000-0x000000000009efff] usable',
    '[ OK ] NX (Execute Disable) protection: active',
    '[ OK ] Initializing CGROUP subsys cpu',
    '[ OK ] Initializing CGROUP subsys cpuacct',
    '[ OK ] Loading Azure Cloud Infrastructure modules...',
    '[ OK ] Mounting Microsoft Terraform v1.6.3 engine...',
    '[ OK ] Initializing Python 3.11.6 runtime environment...',
    '[ OK ] Loading React 19 frontend framework...',
    '[ OK ] Establishing Node.js API server (v20.0)...',
    '[ OK ] Initializing PostgreSQL database connections...',
    '[ OK ] Loading Docker container orchestration...',
    '[ OK ] Mounting Kubernetes cluster configuration...',
    '[ OK ] Setting up GitHub repository access...',
    '[ OK ] Loading Kali Linux security tools...',
    '[ OK ] Establishing connection to Lumen Technologies...',
    '[ OK ] Verifying SSH key authentication...',
    '[ OK ] Loading portfolio database (/home/gowtham/portfolio/)...',
    '[ OK ] Initializing terminal emulator...',
    '[ OK ] Starting X server environment...',
    '[ OK ] Boot completed successfully!',
    '',
    'Welcome to Linux',
    '',
    'gowtham@cybersec login: gowtham',
    'Password: •••••••••',
    'Last login: Mon Mar 18 2026 from 192.168.1.100',
    '',
    'Welcome to the terminal portfolio of Gowtham Sree',
    'Type "help" for available commands.',
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
        setTimeout(onBootComplete, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onBootComplete]);

  return (
    <div className="w-full h-screen bg-black flex flex-col p-8 font-mono overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {lines.map((line, idx) => (
          <div
            key={idx}
            className="terminal-green text-sm boot-animation whitespace-pre-wrap break-words"
          >
            {line}
          </div>
        ))}
      </div>
      {isComplete && (
        <div className="terminal-green text-center py-4 text-sm">
          [System Ready]
        </div>
      )}
    </div>
  );
}
