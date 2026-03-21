'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Minus, Maximize2, Github, Linkedin, Mail, FileText } from 'lucide-react';

interface Window {
  id: string;
  title: string;
  color: string;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  content: React.ReactNode;
}

const apps = [
  {
    id: 'about',
    title: 'About Me',
    color: 'from-blue-500 to-cyan-500',
    icon: '👨‍💼',
    content: `Information Systems Engineer at Lumen Technologies

I work where infrastructure meets product — cloud systems, automation pipelines, and full-stack applications that actually ship.

Education: ECE graduate from Sri Venkateswara University with 8.72 GPA
Experience: Started as intern at Lumen, converted to full-time engineer

Achievements:
• 2nd place at InWinHack (AI Chatbot)
• AIR 18 in AMECET  
• 93.6 percentile in JEE Main`,
  },
  {
    id: 'skills',
    title: 'Skills',
    color: 'from-purple-500 to-pink-500',
    icon: '⚙️',
    content: `Cloud & Infrastructure
• Microsoft Azure
• Terraform (IaC)
• M365 Ecosystem

Process Automation
• Power Automate
• CI/CD Pipelines
• Scripting (Python, PowerShell)

Frontend Development
• React / TypeScript
• Next.js
• Tailwind CSS

Backend Development
• Node.js / Express
• Python
• PostgreSQL / MySQL`,
  },
  {
    id: 'education',
    title: 'Education',
    color: 'from-green-500 to-emerald-500',
    icon: '🎓',
    content: `B.Tech — Electronics & Communications
Sri Venkateswara University, Tirupati
June 2021 — April 2025
GPA: 8.72 / 10.0

Higher Secondary — MPC (CBSE)
Sri Viswasanthi Educational Institutions
June 2019 — May 2021
Score: 96.3%

Achievements:
• AIR 18 in AMECET
• 93.6 percentile in JEE Main
• Top performer in board exams`,
  },
  {
    id: 'experience',
    title: 'Experience',
    color: 'from-orange-500 to-red-500',
    icon: '💼',
    content: `Information Systems Engineer
Lumen Technologies | August 2025 — Present
• Cloud infrastructure with Microsoft Azure
• Terraform-based Infrastructure as Code
• Enterprise automation with Power Automate

Information Systems Intern  
Lumen Technologies | February 2025 — August 2025
• Converted to full-time in 7 months
• Reduced manual tasks by 40%

Full Stack Developer
ZettaByte Plus | January 2024 — April 2024
• Built production-ready web applications
• EdTech platform development`,
  },
  {
    id: 'projects',
    title: 'Projects',
    color: 'from-cyan-500 to-blue-500',
    icon: '🚀',
    content: `Banking Application
Full-stack banking app with transaction management
Tech: TypeScript, React, Node.js, PostgreSQL

Sigmoid 2K25 Website
National-level tech symposium website (10,000+ visitors)
Tech: HTML5, CSS3, JavaScript, PHP, MySQL

SVUCE College Web App
Official university app (5000+ users)
Tech: React, Node.js, MongoDB

Classic Snake Game
Python game with smooth controls
Tech: Python, Turtle Graphics`,
  },
  {
    id: 'achievements',
    title: 'Achievements',
    color: 'from-yellow-500 to-amber-500',
    icon: '🏆',
    content: `🥈 InWinHack 2024 — 2nd Place
Built customizable AI chatbot in 24-hour hackathon

👨‍💼 Technical Team Head — Sigmoid 2025
Led technical team for national symposium

🌟 AIR 18 — AMECET
Top 20 nationwide in engineering entrance

📈 93.6 Percentile — JEE Main
Top 7% among 1M+ candidates

🔱 GitHub Badges
Pull Shark & Pair Extraordinaire badges`,
  },
  {
    id: 'contact',
    title: 'Contact',
    color: 'from-pink-500 to-rose-500',
    icon: '📧',
    content: `Email: gowtham.sree@example.com
Location: Bengaluru, Karnataka, India

GitHub: github.com/gowtham2303
LinkedIn: linkedin.com/in/gowthamsree

Open to:
• Full-time opportunities
• Freelance projects
• Open source collaborations
• Speaking opportunities`,
  },
];

export function GUICom() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [resizingWindow, setResizingWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const openApp = (app: typeof apps[0]) => {
    const existing = windows.find(w => w.id === app.id);
    
    if (existing) {
      if (existing.isMinimized) {
        setWindows(windows.map(w => 
          w.id === app.id ? { ...w, isMinimized: false, zIndex: maxZIndex + 1 } : w
        ));
      } else {
        setWindows(windows.map(w => 
          w.id === app.id ? { ...w, zIndex: maxZIndex + 1 } : w
        ));
      }
      setMaxZIndex(maxZIndex + 1);
      return;
    }

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const newWindow: Window = {
      id: app.id,
      title: app.title,
      color: app.color,
      isMinimized: false,
      position: isMobile ? { x: 0, y: 0 } : { x: 50 + windows.length * 20, y: 50 + windows.length * 20 },
      size: isMobile 
        ? { width: window.innerWidth, height: window.innerHeight - 80 }
        : { width: 500, height: 500 },
      zIndex: maxZIndex + 1,
      content: app.content,
    };

    setWindows([...windows, newWindow]);
    setMaxZIndex(maxZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const startDrag = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if ((e.target as HTMLElement).closest('button')) return;
    
    const window = windows.find(w => w.id === id);
    if (!window) return;
    
    setDraggedWindow(id);
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggedWindow) {
      setWindows(windows.map(w =>
        w.id === draggedWindow
          ? { ...w, position: { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y } }
          : w
      ));
    }

    if (resizingWindow) {
      const window = windows.find(w => w.id === resizingWindow);
      if (window && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newWidth = Math.max(300, e.clientX - window.position.x - rect.left);
        const newHeight = Math.max(200, e.clientY - window.position.y - rect.top);
        
        setWindows(windows.map(w =>
          w.id === resizingWindow
            ? { ...w, size: { width: newWidth, height: newHeight } }
            : w
        ));
      }
    }
  };

  const handleMouseUp = () => {
    setDraggedWindow(null);
    setResizingWindow(null);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as any);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedWindow, resizingWindow, dragOffset]);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Kali Linux Desktop Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-green-500 font-mono text-xs opacity-50">
            root@kali:~#
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23000%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%2300ff00%22 stroke-width=%220.5%22 opacity=%220.1%22/></svg>')] bg-repeat"></div>
        </div>
      </div>

      {/* Windows Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Minimized Windows Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/80 border-t border-green-500/30 flex items-center gap-2 px-4 flex-wrap content-center overflow-y-auto">
          {windows.filter(w => w.isMinimized).map(w => (
            <button
              key={w.id}
              onClick={() => setWindows(windows.map(win =>
                win.id === w.id ? { ...win, isMinimized: false, zIndex: maxZIndex + 1 } : win
              ))}
              className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-500 text-black font-bold text-xs rounded hover:from-green-500 hover:to-green-400 transition-all whitespace-nowrap"
            >
              {w.title}
            </button>
          ))}
        </div>

        {/* Windows */}
        {windows.map(w => (
          !w.isMinimized && (
            <div
              key={w.id}
              style={{
                position: 'absolute',
                left: `${w.position.x}px`,
                top: `${w.position.y}px`,
                width: `${w.size.width}px`,
                height: `${w.size.height}px`,
                zIndex: w.zIndex,
              }}
              className="flex flex-col bg-gray-900 border-2 border-green-500/50 rounded-lg shadow-2xl overflow-hidden"
              onMouseDown={() => setWindows(windows.map(win =>
                win.id === w.id ? { ...win, zIndex: maxZIndex + 1 } : win
              ))}
            >
              {/* Title Bar */}
              <div
                onMouseDown={(e) => startDrag(e, w.id)}
                className={`bg-gradient-to-r ${w.color} p-3 flex items-center justify-between cursor-move select-none text-white font-bold`}
              >
                <span className="text-sm">{w.title}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => minimizeWindow(w.id)}
                    className="p-1 hover:bg-black/30 rounded transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => closeWindow(w.id)}
                    className="p-1 hover:bg-red-600 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto bg-gray-800 p-4 text-white font-mono text-xs sm:text-sm whitespace-pre-wrap">
                {w.content}
              </div>

              {/* Resize Handle */}
              <div
                onMouseDown={() => setResizingWindow(w.id)}
                className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-green-500 to-transparent cursor-nwse-resize"
              ></div>
            </div>
          )
        ))}
      </div>

      {/* Top Sidebar with Icons */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-black/90 border-b border-green-500/30 flex items-center justify-between px-4 md:px-8 z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-green-500 font-bold text-lg md:text-2xl font-mono">Portfolio GUI</h1>
        </div>
        
        {/* Quick Links */}
        <div className="flex gap-3 md:gap-4">
          <a
            href="https://github.com/gowtham2303"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-green-500/20 rounded-lg transition-all text-green-400 hover:text-green-300"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/gowthamsree"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-green-500/20 rounded-lg transition-all text-green-400 hover:text-green-300"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:gowtham.sree@example.com"
            className="p-2 hover:bg-green-500/20 rounded-lg transition-all text-green-400 hover:text-green-300"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="p-2 hover:bg-green-500/20 rounded-lg transition-all text-green-400 hover:text-green-300"
            title="Resume"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* App Grid - Lumia Tiles */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 top-20 md:top-0 flex items-center justify-center p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl w-full auto-rows-max">
          {apps.map(app => (
            <button
              key={app.id}
              onClick={() => openApp(app)}
              className={`aspect-square md:aspect-video bg-gradient-to-br ${app.color} rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 cursor-pointer p-4`}
            >
              <span className="text-3xl md:text-5xl">{app.icon}</span>
              <span className="text-white font-bold text-xs md:text-sm text-center">{app.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Back to Terminal Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="fixed top-4 right-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors z-40 text-xs md:text-sm"
      >
        Exit GUI
      </button>
    </div>
  );
}
