'use client';

import { useEffect, useState } from 'react';

interface BootLoaderProps {
  onBootComplete: () => void;
}

const bootMessages = [
  'BIOS v6.2.0 POST Test...',
  'CPU: Intel Core i7-13700K @ 3.4GHz',
  'RAM: 32GB DDR5 Test... PASS',
  'Storage: 1TB NVMe SSD Detected',
  '',
  'Initializing Linux kernel 6.2.0...',
  'Loading boot modules...',
  'Detecting PCI devices [OK]',
  'Initializing AHCI controller [OK]',
  'Starting udev daemon [OK]',
  'Mounting root filesystem (ext4) [OK]',
  'Mounting /boot partition [OK]',
  'Starting systemd initialization [OK]',
  'Loading network drivers [OK]',
  'Configuring network interfaces...',
  'eth0: initialized [OK]',
  'Starting SSH server (port 22) [OK]',
  'Loading Docker daemon [OK]',
  'Starting PostgreSQL service [OK]',
  'Starting nginx web server [OK]',
  'Loading Node.js v20.10.0 runtime [OK]',
  'Initializing user session...',
  '',
  'System boot completed in 12.34 seconds',
  'Welcome to Ubuntu 24.04 LTS',
];

export function BootLoader({ onBootComplete }: BootLoaderProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootMessages.length) {
        setMessages((prev) => [...prev, bootMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(onBootComplete, 500);
      }
    }, 120);

    setTimeout(() => setCanSkip(true), 1000);

    const handleKey = (e: KeyboardEvent) => {
      if (canSkip && (e.key === 'Enter' || e.key === ' ')) {
        clearInterval(interval);
        onBootComplete();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKey);
    };
  }, [canSkip, onBootComplete]);

  return (
    <div className="w-full h-screen bg-black text-white font-mono text-xs sm:text-sm overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-0">
        {messages.map((msg, idx) => (
          <div key={idx} className="leading-relaxed">
            {msg}
          </div>
        ))}
      </div>
      {canSkip && (
        <div className="p-3 sm:p-6 text-center text-cyan-400 text-xs">
          Press ENTER to skip...
        </div>
      )}
    </div>
  );
}
