'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Code, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Mail, 
  Terminal,
  Download,
  Github,
  Linkedin,
  X,
  Minimize2,
  Maximize2,
  Move
} from 'lucide-react';

interface AppWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export function GUIMode() {
  const [windows, setWindows] = useState<AppWindow[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const [dragging, setDragging] = useState<string | null>(null);
  const [resizing, setResizing] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const apps = [
    {
      id: 'about',
      title: 'About Me',
      icon: <User className="w-full h-full" />,
      color: 'bg-blue-600',
      content: (
        <div className="space-y-4 text-gray-700 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gowtham Sree</h2>
          <p className="text-xl text-blue-600 font-semibold">Information Systems Engineer at Lumen Technologies</p>
          
          <div className="space-y-4 mt-6">
            <p className="text-lg leading-relaxed">
              I work where infrastructure meets product — cloud systems, automation pipelines,
              and full-stack applications that actually ship.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-xl flex items-center gap-2">
                🎓 Education
              </h3>
              <p className="text-lg">ECE graduate from Sri Venkateswara University with 8.72 GPA</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-green-900 mb-3 text-xl flex items-center gap-2">
                💼 Experience
              </h3>
              <p className="text-lg">Started as intern at Lumen, converted to full-time engineer</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-purple-900 mb-3 text-xl flex items-center gap-2">
                🏆 Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>2nd place at InWinHack (AI Chatbot)</li>
                <li>AIR 18 in AMECET</li>
                <li>93.6 percentile in JEE Main</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <Code className="w-full h-full" />,
      color: 'bg-purple-600',
      content: (
        <div className="space-y-4 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-blue-900 mb-4 text-xl flex items-center gap-2">
                ☁️ Cloud & Infrastructure
              </h3>
              <ul className="space-y-2">
                <li>• Microsoft Azure</li>
                <li>• Terraform (IaC)</li>
                <li>• M365 Ecosystem</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
                ⚙️ Automation
              </h3>
              <ul className="space-y-2">
                <li>• Power Automate</li>
                <li>• CI/CD Pipelines</li>
                <li>• Scripting (Python, PowerShell)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-pink-900 mb-4 text-xl flex items-center gap-2">
                🎨 Frontend
              </h3>
              <ul className="space-y-2">
                <li>• React / TypeScript</li>
                <li>• Next.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-orange-900 mb-4 text-xl flex items-center gap-2">
                🔧 Backend
              </h3>
              <ul className="space-y-2">
                <li>• Node.js / Express</li>
                <li>• Python</li>
                <li>• PostgreSQL / MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap className="w-full h-full" />,
      color: 'bg-green-600',
      content: (
        <div className="space-y-6 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-r-xl">
              <h3 className="font-bold text-2xl mb-2">B.Tech — Electronics & Communications</h3>
              <p className="text-gray-600 text-lg">Sri Venkateswara University, Tirupati</p>
              <p className="text-sm text-gray-500 mb-3">June 2021 — April 2025</p>
              <p className="mt-3 font-bold text-blue-600 text-xl">GPA: 8.72 / 10.0</p>
              <ul className="mt-4 space-y-2">
                <li>• Led Technical Team at Sigmoid 2025</li>
                <li>• Built AI chatbots and automation systems</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6 bg-gradient-to-r from-green-50 to-transparent p-6 rounded-r-xl">
              <h3 className="font-bold text-2xl mb-2">Higher Secondary — MPC (CBSE)</h3>
              <p className="text-gray-600 text-lg">Sri Viswasanthi Educational Institutions</p>
              <p className="text-sm text-gray-500 mb-3">June 2019 — May 2021</p>
              <p className="mt-3 font-bold text-green-600 text-xl">Score: 96.3%</p>
              <ul className="mt-4 space-y-2">
                <li>• AIR 18 in AMECET</li>
                <li>• 93.6 percentile in JEE Main</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-r-xl">
              <h3 className="font-bold text-2xl mb-2">Secondary School — CBSE</h3>
              <p className="text-gray-600 text-lg">Jawahar Navodaya Vidyalaya, Rajasthan</p>
              <p className="text-sm text-gray-500 mb-3">July 2014 — April 2019</p>
              <p className="mt-3 font-bold text-purple-600 text-xl">Score: 93.6%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <Briefcase className="w-full h-full" />,
      color: 'bg-orange-600',
      content: (
        <div className="space-y-6 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-2xl mb-2">Information Systems Engineer</h3>
              <p className="text-blue-600 font-bold text-lg">Lumen Technologies</p>
              <p className="text-sm text-gray-600 mb-4">August 2025 — Present | Bengaluru, India</p>
              <ul className="mt-4 space-y-2">
                <li>• Cloud infrastructure with Microsoft Azure</li>
                <li>• Terraform-based Infrastructure as Code</li>
                <li>• Enterprise automation with Power Automate</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-2xl mb-2">Information Systems Intern</h3>
              <p className="text-green-600 font-bold text-lg">Lumen Technologies</p>
              <p className="text-sm text-gray-600 mb-4">February 2025 — August 2025</p>
              <ul className="mt-4 space-y-2">
                <li>• Converted to full-time in 7 months</li>
                <li>• Reduced manual tasks by 40% through automation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-2xl mb-2">Full Stack Developer</h3>
              <p className="text-purple-600 font-bold text-lg">ZettaByte Plus</p>
              <p className="text-sm text-gray-600 mb-4">January 2024 — April 2024 | Remote</p>
              <ul className="mt-4 space-y-2">
                <li>• Built production-ready web applications</li>
                <li>• EdTech platform development</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <FolderGit2 className="w-full h-full" />,
      color: 'bg-cyan-600',
      content: (
        <div className="space-y-6 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notable Projects</h2>
          
          <div className="grid gap-6">
            <div className="border border-gray-200 bg-white p-6 rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-2xl flex items-center gap-2 mb-3">
                🏦 Banking Application
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Full-stack banking app with transaction management and secure authentication
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">PostgreSQL</span>
              </div>
            </div>
            
            <div className="border border-gray-200 bg-white p-6 rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-2xl flex items-center gap-2 mb-3">
                🎯 Sigmoid 2K25 Website
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Official website for national-level tech symposium (10,000+ visitors)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">HTML5</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">CSS3</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">JavaScript</span>
              </div>
            </div>
            
            <div className="border border-gray-200 bg-white p-6 rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-2xl flex items-center gap-2 mb-3">
                🎓 SVUCE College Web App
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Official university web app (5000+ users)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">React</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: <Award className="w-full h-full" />,
      color: 'bg-yellow-600',
      content: (
        <div className="space-y-6 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements & Certifications</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-sm">
              <span className="text-4xl flex-shrink-0">🥈</span>
              <div>
                <h3 className="font-bold text-xl mb-2">InWinHack 2024 — 2nd Place</h3>
                <p className="text-gray-600">Built customizable AI chatbot in 24-hour hackathon</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm">
              <span className="text-4xl flex-shrink-0">👨‍💼</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Technical Team Head — Sigmoid 2025</h3>
                <p className="text-gray-600">Led technical team for national symposium</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-sm">
              <span className="text-4xl flex-shrink-0">🌟</span>
              <div>
                <h3 className="font-bold text-xl mb-2">AIR 18 — AMECET</h3>
                <p className="text-gray-600">Top 20 nationwide in engineering entrance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-sm">
              <span className="text-4xl flex-shrink-0">📈</span>
              <div>
                <h3 className="font-bold text-xl mb-2">93.6 Percentile — JEE Main</h3>
                <p className="text-gray-600">Top 7% among 1M+ candidates</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow-sm">
              <span className="text-4xl flex-shrink-0">🔱</span>
              <div>
                <h3 className="font-bold text-xl mb-2">GitHub Badges</h3>
                <p className="text-gray-600">Pull Shark & Pair Extraordinaire</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail className="w-full h-full" />,
      color: 'bg-red-600',
      content: (
        <div className="space-y-6 p-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          
          <p className="text-gray-600 text-lg mb-8">
            I'm always open to interesting conversations about tech, collaborations, 
            or new opportunities.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:gowtham.sree@example.com"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all group"
            >
              <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bold text-lg">Email</p>
                <p className="text-gray-600">gowtham.sree@example.com</p>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/gowthamsree"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all group"
            >
              <Linkedin className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bold text-lg">LinkedIn</p>
                <p className="text-gray-600">linkedin.com/in/gowthamsree</p>
              </div>
            </a>
            
            <a
              href="https://github.com/gowtham2303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all group"
            >
              <Github className="w-8 h-8 text-gray-700 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bold text-lg">GitHub</p>
                <p className="text-gray-600">github.com/gowtham2303</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
              <div className="w-8 h-8 text-green-600 flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <p className="font-bold text-lg">Location</p>
                <p className="text-gray-600">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6" />
              Download Resume
            </a>
          </div>
        </div>
      ),
    },
  ];

  const openWindow = (app: typeof apps[0]) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    
    const existingWindow = windows.find(w => w.id === app.id);
    if (existingWindow) {
      setWindows(windows.map(w => 
        w.id === app.id 
          ? { ...w, isMinimized: false, zIndex: newZIndex }
          : w
      ));
    } else {
      const isMobile = window.innerWidth < 768;
      setWindows([
        ...windows,
        {
          id: app.id,
          title: app.title,
          icon: app.icon,
          content: app.content,
          isMinimized: false,
          isMaximized: isMobile,
          zIndex: newZIndex,
          position: isMobile ? { x: 0, y: 0 } : { x: 50 + windows.length * 30, y: 50 + windows.length * 30 },
          size: isMobile ? { width: window.innerWidth, height: window.innerHeight - 60 } : { width: 700, height: 600 },
        },
      ]);
    }
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(windows.map(w => {
      if (w.id === id) {
        return {
          ...w,
          isMaximized: !w.isMaximized,
          position: !w.isMaximized ? { x: 0, y: 0 } : { x: 50, y: 50 },
          size: !w.isMaximized 
            ? { width: window.innerWidth, height: window.innerHeight - 60 }
            : { width: 700, height: 600 },
        };
      }
      return w;
    }));
  };

  const focusWindow = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: newZIndex } : w
    ));
  };

  const handleMouseDown = (id: string, e: React.MouseEvent, type: 'drag' | 'resize') => {
    e.stopPropagation();
    focusWindow(id);
    if (type === 'drag') {
      setDragging(id);
    } else {
      setResizing(id);
    }
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const window = windows.find(w => w.id === dragging);
        if (window && !window.isMaximized) {
          const dx = e.clientX - dragStart.x;
          const dy = e.clientY - dragStart.y;
          setWindows(windows.map(w =>
            w.id === dragging
              ? { ...w, position: { x: w.position.x + dx, y: w.position.y + dy } }
              : w
          ));
          setDragStart({ x: e.clientX, y: e.clientY });
        }
      } else if (resizing) {
        const window = windows.find(w => w.id === resizing);
        if (window && !window.isMaximized) {
          const dx = e.clientX - dragStart.x;
          const dy = e.clientY - dragStart.y;
          setWindows(windows.map(w =>
            w.id === resizing
              ? {
                  ...w,
                  size: {
                    width: Math.max(400, w.size.width + dx),
                    height: Math.max(300, w.size.height + dy),
                  },
                }
              : w
          ));
          setDragStart({ x: e.clientX, y: e.clientY });
        }
      }
    };

    const handleMouseUp = () => {
      setDragging(null);
      setResizing(null);
    };

    if (dragging || resizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, resizing, windows, dragStart]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen bg-[url('/kali-wallpaper.jpg')] bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Desktop Icons - Lumia Style Tiles */}
      <div className="absolute inset-0 p-4 md:p-8 overflow-y-auto pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 max-w-7xl">
          {apps.map((app, index) => (
            <button
              key={app.id}
              onClick={() => openWindow(app)}
              className={`${app.color} aspect-square rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 p-4 md:p-6 flex flex-col items-start justify-between text-white group relative overflow-hidden`}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2">
                {app.icon}
              </div>
              <span className="font-bold text-sm md:text-lg text-left">
                {app.title}
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          ))}
          
          {/* Terminal Tile */}
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gray-900 aspect-square rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 p-4 md:p-6 flex flex-col items-start justify-between text-white group relative overflow-hidden"
            style={{
              animation: `fadeIn 0.5s ease-out ${apps.length * 0.1}s both`,
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mb-2">
              <Terminal className="w-full h-full" />
            </div>
            <span className="font-bold text-sm md:text-lg text-left">
              Terminal
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        !window.isMinimized && (
          <div
            key={window.id}
            className="absolute bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            style={{
              left: window.position.x,
              top: window.position.y,
              width: window.size.width,
              height: window.size.height,
              zIndex: window.zIndex,
              maxWidth: '100vw',
              maxHeight: '100vh',
            }}
            onClick={() => focusWindow(window.id)}
          >
            {/* Window Header */}
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center justify-between cursor-move select-none"
              onMouseDown={(e) => handleMouseDown(window.id, e, 'drag')}
            >
              <div className="flex items-center gap-3 text-white overflow-hidden">
                <div className="w-5 h-5 flex-shrink-0">{window.icon}</div>
                <span className="font-semibold truncate">{window.title}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => minimizeWindow(window.id)}
                  className="p-1.5 hover:bg-white/20 rounded transition-colors"
                  title="Minimize"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => maximizeWindow(window.id)}
                  className="p-1.5 hover:bg-white/20 rounded transition-colors"
                  title="Maximize"
                >
                  <Maximize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => closeWindow(window.id)}
                  className="p-1.5 hover:bg-red-500 rounded transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            
            {/* Window Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {window.content}
            </div>

            {/* Resize Handle */}
            {!window.isMaximized && (
              <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                onMouseDown={(e) => handleMouseDown(window.id, e, 'resize')}
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, transparent 50%, #3b82f6 50%, #3b82f6 100%)',
                }}
              />
            )}
          </div>
        )
      ))}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => window.location.href = '/'}
          className="px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors flex items-center gap-2 flex-shrink-0 text-sm md:text-base"
        >
          <Terminal className="w-4 h-4" />
          <span className="hidden sm:inline">Terminal</span>
        </button>
        
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => {
              if (window.isMinimized) {
                setWindows(windows.map(w =>
                  w.id === window.id ? { ...w, isMinimized: false } : w
                ));
              }
              focusWindow(window.id);
            }}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors flex items-center gap-2 flex-shrink-0 text-sm"
          >
            <div className="w-4 h-4">{window.icon}</div>
            <span className="hidden md:inline">{window.title}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}