'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  FileText,
  User,
  Code2,
  BookOpen,
  Briefcase,
  Rocket,
  Trophy,
  Mail as MessageSquare,
  Minimize2,
  X,
} from 'lucide-react';

interface Window {
  id: string;
  title: string;
  icon: React.ReactNode;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  content: string;
}

const sectionContent = {
  about:
    'Information Systems Engineer at Lumen Technologies. I specialize in cloud infrastructure, automation pipelines, and full-stack development. ECE graduate with 8.72 GPA from Sri Venkateswara University.',
  skills:
    'Cloud: AWS, Azure, GCP | Languages: Python, JavaScript, TypeScript | DevOps: Docker, Kubernetes, Terraform | Frontend: React, Next.js | Backend: Node.js, PostgreSQL',
  education:
    'B.Tech Electronics & Communications (2021-2025) - Sri Venkateswara University, CGPA: 8.72. AMECET AIR 18, JEE Main 93.6 percentile.',
  experience:
    'Lumen Technologies - ISE (Current). ZettaByte Plus - Full Stack Developer. Sigmoid 2025 - Technical Team Lead.',
  projects:
    'Banking App (React, Node.js, PostgreSQL), SVUCE Portal (Full Stack), Portfolio Website, Python Snake Game.',
  achievements:
    '2nd Prize InWinHack 2024, GitHub Pull Shark Badge, NSS Volunteer, Basketball Player.',
  contact: 'Email: gowtham.tharigopula@gmail.com | GitHub | LinkedIn | Bengaluru, India',
};

export default function GUIPage() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [draggingWindow, setDraggingWindow] = useState<string | null>(null);
  const [resizingWindow, setResizingWindow] = useState<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const apps = [
    { id: 'about', title: 'About Me', icon: <User className="w-12 h-12" />, color: 'from-blue-500 to-blue-600' },
    { id: 'skills', title: 'Skills', icon: <Code2 className="w-12 h-12" />, color: 'from-purple-500 to-purple-600' },
    { id: 'education', title: 'Education', icon: <BookOpen className="w-12 h-12" />, color: 'from-green-500 to-green-600' },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="w-12 h-12" />, color: 'from-orange-500 to-orange-600' },
    { id: 'projects', title: 'Projects', icon: <Rocket className="w-12 h-12" />, color: 'from-cyan-500 to-cyan-600' },
    { id: 'achievements', title: 'Achievements', icon: <Trophy className="w-12 h-12" />, color: 'from-yellow-500 to-yellow-600' },
    { id: 'contact', title: 'Contact', icon: <Mail className="w-12 h-12" />, color: 'from-pink-500 to-pink-600' },
  ];

  const openWindow = (appId: string) => {
    const app = apps.find((a) => a.id === appId);
    if (!app) return;

    const newWindow: Window = {
      id: appId,
      title: app.title,
      icon: app.icon,
      isMinimized: false,
      position: { x: 100 + windows.length * 30, y: 100 + windows.length * 30 },
      size: { width: 500, height: 400 },
      zIndex: nextZIndex,
      content: sectionContent[appId as keyof typeof sectionContent],
    };

    setNextZIndex(nextZIndex + 1);

    // Remove duplicate window if already open
    setWindows((prev) => {
      const filtered = prev.filter((w) => w.id !== appId);
      return [...filtered, newWindow];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, isMinimized: !w.isMinimized, zIndex: !w.isMinimized ? nextZIndex : w.zIndex }
          : w
      )
    );
    if (!windows.find((w) => w.id === id)?.isMinimized) {
      setNextZIndex(nextZIndex + 1);
    }
  };

  const bringToFront = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  const handleMouseDown = (e: React.MouseEvent, windowId: string, action: 'drag' | 'resize') => {
    if (action === 'drag') {
      bringToFront(windowId);
      const window = windows.find((w) => w.id === windowId);
      if (window) {
        dragOffsetRef.current = {
          x: e.clientX - window.position.x,
          y: e.clientY - window.position.y,
        };
      }
      setDraggingWindow(windowId);
    } else {
      setResizingWindow(windowId);
    }
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingWindow) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === draggingWindow
              ? {
                  ...w,
                  position: {
                    x: e.clientX - dragOffsetRef.current.x,
                    y: e.clientY - dragOffsetRef.current.y,
                  },
                }
              : w
          )
        );
      }

      if (resizingWindow) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === resizingWindow
              ? {
                  ...w,
                  size: {
                    width: Math.max(300, e.clientX - w.position.x),
                    height: Math.max(200, e.clientY - w.position.y),
                  },
                }
              : w
          )
        );
      }
    };

    const handleMouseUp = () => {
      setDraggingWindow(null);
      setResizingWindow(null);
    };

    if (draggingWindow || resizingWindow) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggingWindow, resizingWindow, windows]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden relative">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 via-transparent to-transparent" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1.5" fill="rgba(0, 255, 255, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-20 border-b border-cyan-900/50 px-4 py-3 glass-dark flex items-center justify-between">
        <Link href="/">
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-cyan-900/20">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-mono">desktop</span>
          </button>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tharigopula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-cyan-900/20 rounded"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/gowtham-sree-tharigopula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-cyan-900/20 rounded"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:gowtham.tharigopula@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-cyan-900/20 rounded"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/resume.txt"
            download
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-cyan-900/20 rounded"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 overflow-auto p-6">
        {/* App Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => openWindow(app.id)}
              className={`group relative bg-gradient-to-br ${app.color} rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer overflow-hidden aspect-square flex items-center justify-center`}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity bg-white" />
              <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center gap-2 z-10">
                <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
                  {app.icon}
                </div>
                <span className="text-white font-semibold text-center text-xs sm:text-sm leading-tight px-2">
                  {app.title}
                </span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Windows */}
      {windows.map((w) => (
        <div
          key={w.id}
          className={`absolute window-animation glass transition-all duration-200 rounded-lg shadow-2xl border border-cyan-500/30 overflow-hidden ${
            w.isMinimized ? 'hidden' : ''
          }`}
          style={{
            left: `${w.position.x}px`,
            top: `${w.position.y}px`,
            width: `${w.size.width}px`,
            height: `${w.size.height}px`,
            zIndex: w.zIndex,
          }}
        >
          {/* Title Bar */}
          <div
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 flex items-center justify-between cursor-move select-none"
            onMouseDown={(e) => handleMouseDown(e, w.id, 'drag')}
          >
            <span className="text-sm font-mono font-semibold flex items-center gap-2">
              <span className="text-xs">{w.icon}</span>
              {w.title}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => toggleMinimize(w.id)}
                className="hover:bg-cyan-700 p-1 rounded transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => closeWindow(w.id)}
                className="hover:bg-red-600 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 h-[calc(100%-48px)] overflow-auto text-white text-sm">
            <p className="leading-relaxed text-gray-200">{w.content}</p>
          </div>

          {/* Resize Handle */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-500/50 hover:bg-cyan-400 cursor-nwse-resize transition-colors"
            onMouseDown={(e) => handleMouseDown(e, w.id, 'resize')}
          />
        </div>
      ))}

      {/* Taskbar */}
      {windows.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 glass-dark border-t border-cyan-900/50 px-4 py-2 flex gap-2 overflow-x-auto">
          {windows.map((w) => (
            <button
              key={w.id}
              onClick={() => {
                if (w.isMinimized) toggleMinimize(w.id);
                bringToFront(w.id);
              }}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                w.isMinimized
                  ? 'bg-cyan-900/30 text-cyan-300 hover:bg-cyan-900/50'
                  : 'bg-cyan-600 text-white hover:bg-cyan-700'
              }`}
            >
              {w.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
