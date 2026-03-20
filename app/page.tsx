'use client';

import { useState } from 'react';
import { BootLoader } from '@/components/BootLoader';
import { TerminalApp } from '@/components/TerminalApp';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  if (!bootComplete) {
    return <BootLoader onBootComplete={() => setBootComplete(true)} />;
  }

  return <TerminalApp />;
}
