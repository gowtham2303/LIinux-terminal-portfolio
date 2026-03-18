'use client';

import { useState } from 'react';
import { LinuxBootLoader } from '@/components/LinuxBootLoader';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  if (!bootComplete) {
    return <LinuxBootLoader onBootComplete={() => setBootComplete(true)} />;
  }

  return <InteractiveTerminal />;
}
