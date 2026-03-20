'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, Download, TerminalSquare, X } from 'lucide-react';

interface Window {
  id: string;
  title: string;
  content: string;
  minimized: boolean;
  x: number;
  y: number;
}

interface GUIInterfaceProps {
  onExit: () => void;
}

export function GUIInterface({ onExit }: GUIInterfaceProps) {
  const [windows, setWindows] = useState<Window[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const tiles = [
    { id: 'about', label: 'About', color: 'bg-blue-500', icon: '👤' },
    { id: 'skills', label: 'Skills', color: 'bg-green-500', icon: '💻' },
    { id: 'education', label: 'Education', color: 'bg-purple-500', icon: '🎓' },
    { id: 'experience', label: 'Experience', color: 'bg-red-500', icon: '💼' },
    { id: 'projects', label: 'Projects', color: 'bg-yellow-500', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', color: 'bg-pink-500', icon: '🏆' },
    { id: 'contact', label: 'Contact', color: 'bg-cyan-500', icon: '📞' },
    { id: 'resume', label: 'Resume', color: 'bg-indigo-500', icon: '📄' },
  ];

  const content: any = {
    about: `Tharigopula Gowtham Sree
Information Systems Engineer @ Lumen Technologies

Passionate full-stack developer and cybersecurity enthusiast with expertise in cloud infrastructure, automation, and modern web technologies. B.Tech in Electronics & Communications Engineering (CGPA: 8.72/10.0) from Sri Venkateswara University.

Competitive exam achievements: AIR 18 (AMECET), 93.6 percentile (JEE)
40% performance improvement on college portal database
Led technical team for national-level symposium (Sigmoid 2025)`,

    skills: `PROGRAMMING
• Python (Advanced)
• JavaScript/TypeScript (Advanced)
• SQL (Advanced)
• Bash Scripting (Intermediate)

FRONTEND
• React.js / Next.js
• Tailwind CSS
• Responsive Design

BACKEND
• Node.js / Express.js
• RESTful APIs
• Authentication

CLOUD & DEVOPS
• Microsoft Azure
• AWS (EC2, S3, Lambda)
• Docker & Kubernetes
• Terraform`,

    education: `BACHELOR OF TECHNOLOGY
Sri Venkateswara University
Electronics & Communications Engineering
June 2021 - April 2025 | CGPA: 8.72/10.0

Achievements:
✓ Managed SVUCE Official Website
✓ 2nd Prize - InWinHack 2024
✓ Technical Team Head - Sigmoid 2025
✓ NSS Volunteer (6 months)

COMPETITIVE EXAMS
✓ AMECET: AIR 18
✓ JEE MAIN: 93.6 Percentile`,

    experience: `INFORMATION SYSTEMS ENGINEER
Lumen Technologies | August 2025 - Present
• Cloud infrastructure optimization
• Automation of deployment pipelines
• System monitoring and performance tuning
• Infrastructure as Code implementation

FULL-STACK DEVELOPER INTERN
ZettaByte Plus | June 2024 - August 2024
• Banking application development
• JWT authentication implementation
• 40% database performance improvement
• React & TypeScript development`,

    projects: `BANKING APPLICATION
Full-stack app with secure payments, JWT auth, PostgreSQL

SIGMOID 2025 WEBSITE
Event platform with registration system

SVUCE COLLEGE PORTAL
Manages 500+ daily users, 40% performance gain

PYTHON SNAKE GAME
Pygame-based game with OOP design`,

    achievements: `HACKATHON WINS
✓ 2nd Prize - InWinHack 2024

COMPETITIVE EXAM RANKINGS
✓ AMECET: All India Rank 18
✓ JEE MAIN: 93.6 Percentile

RECOGNITIONS
✓ GitHub Pull Shark Badge
✓ Website Manager - SVUCE
✓ Technical Lead recognition`,

    contact: `EMAIL
work: gowtham.sree@lumen.com
personal: gowtham.tharigopula@gmail.com

LINKS
GitHub: github.com/tharigopula
LinkedIn: linkedin.com/in/gowtham-sree-tharigopula

PHONE
+91 9876543210

LOCATION
Bengaluru, Karnataka, India`,

    resume: `Download Resume

Your professional resume is ready to download.
Click the download button below.

Experience: 4 months internship + current role
Education: B.Tech in ECE (8.72 CGPA)
Skills: Full-stack, Cloud, Automation
Projects: 4+ completed projects`
  };

  const openWindow = (id: string) => {
    const existing = windows.find(w => w.id === id);
    if (existing) {
      setActiveWindow(id);
      return;
    }

    const newWindow: Window = {
      id,
      title: tiles.find(t => t.id === id)?.label || 'Window',
      content: content[id] || '',
      minimized: false,
      x: Math.random() * 100,
      y: Math.random() * 100
    };
    setWindows([...windows, newWindow]);
    setActiveWindow(id);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(windows.length > 1 ? windows[0].id : null);
    }
  };

  const toggleMinimize = (id: string) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, minimized: !w.minimized } : w
    ));
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 sm:p-4 flex justify-between items-center">
        <div className="text-lg sm:text-2xl font-bold">Gowtham Sree's Portfolio</div>
        <button
          onClick={onExit}
          className="p-1 sm:p-2 hover:bg-blue-800 rounded flex items-center gap-1 sm:gap-2"
        >
          <TerminalSquare size={20} />
          <span className="hidden sm:inline text-sm">Terminal</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 sm:p-8 overflow-auto">
        {/* Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => openWindow(tile.id)}
              className={`${tile.color} text-white p-3 sm:p-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all`}
            >
              <div className="text-2xl sm:text-4xl mb-2">{tile.icon}</div>
              <div className="font-bold text-xs sm:text-sm">{tile.label}</div>
            </button>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white bg-opacity-90 rounded-lg p-3 sm:p-6 backdrop-blur">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <a
              href="https://github.com/tharigopula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded transition"
            >
              <Github size={20} />
              <span className="text-xs sm:text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/gowtham-sree-tharigopula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded transition"
            >
              <Linkedin size={20} />
              <span className="text-xs sm:text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:gowtham.tharigopula@gmail.com"
              className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded transition"
            >
              <Mail size={20} />
              <span className="text-xs sm:text-sm">Email</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded transition"
            >
              <Download size={20} />
              <span className="text-xs sm:text-sm">Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <div
          key={window.id}
          className="fixed bg-white rounded-lg shadow-2xl flex flex-col text-sm sm:text-base"
          style={{
            width: 'min(90vw, 600px)',
            height: 'min(80vh, 500px)',
            left: `${window.x}%`,
            top: `${window.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: activeWindow === window.id ? 1000 : 100,
          }}
        >
          {/* Title Bar */}
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 sm:p-3 rounded-t-lg flex justify-between items-center cursor-move"
            onClick={() => setActiveWindow(window.id)}
          >
            <span className="font-bold text-xs sm:text-base">{window.title}</span>
            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={() => toggleMinimize(window.id)}
                className="hover:bg-blue-700 p-1 rounded text-xs"
              >
                _
              </button>
              <button
                onClick={() => closeWindow(window.id)}
                className="hover:bg-red-600 p-1 rounded"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Content */}
          {!window.minimized && (
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 text-gray-800 bg-gray-50 whitespace-pre-wrap break-words text-xs sm:text-sm leading-relaxed">
              {window.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
