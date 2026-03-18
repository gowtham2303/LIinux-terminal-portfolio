import { useEffect, useState } from 'react';

interface BootLoaderProps {
  onComplete: () => void;
}

const BOOT_MESSAGES = [
  'BIOS v2.1.0 © 2024 Cybersec Corp',
  '===================================',
  '',
  'Initializing system...',
  'Detecting hardware...',
  'Loading kernel modules...',
  'Initializing network adapter [OK]',
  'Mounting filesystems...',
  'Starting system services...',
  '',
  'Loading packages:',
  '  [████████░░░░░░░░░░] 25% - React',
  '  [████████████░░░░░░░] 50% - TypeScript',
  '  [████████████████░░░░] 75% - Tailwind CSS',
  '  [██████████████████░░] 90% - Next.js',
  '  [████████████████████] 100% - Portfolio',
  '',
  'System initialization complete.',
  'Starting login shell...',
  '',
];

export default function BootLoader({ onComplete }: BootLoaderProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (messageIndex >= BOOT_MESSAGES.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }

    const currentMessage = BOOT_MESSAGES[messageIndex];
    
    if (charIndex < currentMessage.length) {
      const timer = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 15);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        const newDisplayedText = [...displayedText, currentMessage];
        setDisplayedText(newDisplayedText);
        setMessageIndex(messageIndex + 1);
        setCharIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messageIndex, charIndex, displayedText, onComplete]);

  return (
    <div className="w-full h-screen bg-black border border-foreground overflow-hidden scan-lines flex flex-col p-4">
      <div className="flex-1 overflow-y-auto space-y-0 text-sm">
        {displayedText.map((line, idx) => (
          <div key={idx} className="text-foreground leading-relaxed h-5">
            {line}
          </div>
        ))}
        {messageIndex < BOOT_MESSAGES.length && (
          <div className="text-foreground leading-relaxed h-5">
            {BOOT_MESSAGES[messageIndex].substring(0, charIndex)}
            <span className="cursor ml-0.5">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
