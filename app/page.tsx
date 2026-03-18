'use client';

import { useState, useEffect } from 'react';
import BootLoader from '@/components/BootLoader';
import Terminal from '@/components/Terminal';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className="w-full h-screen bg-background text-foreground font-mono">
      {isBooting ? (
        <BootLoader onComplete={() => setIsBooting(false)} />
      ) : (
        <Terminal />
      )}
    </div>
  );
}
