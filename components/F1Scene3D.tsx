'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function F1Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { id: 'about', label: 'ABOUT', color: 'from-red-600 to-red-700' },
    { id: 'skills', label: 'SKILLS', color: 'from-yellow-500 to-yellow-600' },
    { id: 'education', label: 'EDUCATION', color: 'from-blue-600 to-blue-700' },
    { id: 'experience', label: 'EXPERIENCE', color: 'from-cyan-500 to-cyan-600' },
    { id: 'projects', label: 'PROJECTS', color: 'from-green-600 to-green-700' },
    { id: 'achievements', label: 'ACHIEVEMENTS', color: 'from-purple-600 to-purple-700' },
    { id: 'contact', label: 'CONTACT', color: 'from-pink-600 to-pink-700' },
  ];

  const content: Record<string, string> = {
    about: `Information Systems Engineer at Lumen Technologies, Bengaluru.

Building where infrastructure meets product – cloud systems, automation pipelines, and full-stack applications.

ECE graduate from Sri Venkateswara University with 8.72 GPA.`,

    skills: `• Cloud: Microsoft Azure, Terraform, Azure DevOps
• Frontend: React, Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Express.js, Python
• Database: PostgreSQL, MySQL
• DevOps: Docker, Kubernetes, CI/CD
• Tools: Git, Linux, Power Automate`,

    education: `B.Tech Electronics & Communications (2021-2025)
Sri Venkateswara University, Tirupati
GPA: 8.72 / 10.0

AIR 18 - AMECET Entrance Exam
93.6 Percentile - JEE Main
96.3% - 12th Grade (CBSE)`,

    experience: `Lumen Technologies
Information Systems Engineer (Current)

ZettaByte Plus
Full Stack Developer

Sigmoid 2025
Technical Team Head (National Symposium)`,

    projects: `Banking Application (React, Node.js, PostgreSQL)
SVUCE Official Website (Full Stack)
Portfolio Website (Next.js, Tailwind)
Python Snake Game`,

    achievements: `2nd Prize - InWinHack 2024 (AI Chatbot)
GitHub Pull Shark Badge
NSS Volunteer
Basketball Player - ECE Department
Technical Symposium Organizer`,

    contact: `Email: gowtham.tharigopula@gmail.com
GitHub: github.com/tharigopula
LinkedIn: linkedin.com/in/gowtham-sree-tharigopula
Location: Bengaluru, India`,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{ cursor: 'none' }}
    >
      {/* 3D Canvas Background */}
      <canvas
        className="absolute inset-0 w-full h-full"
        id="f1-canvas"
      />

      {/* Cursor Glow */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(232, 0, 45, 0.1) 0%, transparent 70%)',
          transition: 'left 0.15s ease, top 0.15s ease',
        }}
      />

      {/* Header */}
      <header className="relative z-30 border-b border-red-900/30 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/40">
        <Link href="/">
          <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-mono text-sm">DESKTOP</span>
          </button>
        </Link>

        <div className="flex gap-4">
          <a href="https://github.com/tharigopula" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/gowtham-sree-tharigopula" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:gowtham.tharigopula@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="/resume.txt" download className="text-gray-400 hover:text-red-500 transition-colors">
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="relative z-20 h-[calc(100vh-80px)] overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-7xl mx-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              className={`group relative aspect-square rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl ${
                activeSection === section.id ? 'ring-2 ring-red-500 shadow-lg shadow-red-500/50' : ''
              }`}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                backgroundImage: activeSection === section.id ? `linear-gradient(135deg, rgb(220 38 38) 0%, rgb(127 29 29) 100%)` : `linear-gradient(135deg, rgb(107 114 128 / 0.2) 0%, rgb(75 85 99 / 0.2) 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center justify-center h-full gap-3 p-4">
                <div className="text-3xl md:text-4xl font-black text-white" style={{ textShadow: '0 0 30px rgba(232, 0, 45, 0.5)' }}>
                  {section.label.charAt(0)}
                </div>
                <span className="font-mono text-xs md:text-sm font-bold text-white/80">{section.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Modal */}
      {activeSection && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="w-full max-w-2xl max-h-96 bg-black/95 border border-red-500/50 rounded-lg p-8 overflow-y-auto backdrop-blur-xl shadow-2xl shadow-red-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-black text-red-500 mb-6 uppercase tracking-widest">
              {sections.find((s) => s.id === activeSection)?.label}
            </h2>
            <p className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-line">
              {content[activeSection as keyof typeof content]}
            </p>
            <button
              onClick={() => setActiveSection(null)}
              className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs rounded transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* 3D Elements Background Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const canvas = document.getElementById('f1-canvas');
              if (!canvas) return;
              
              const ctx = canvas.getContext('2d');
              if (!ctx) return;
              
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              
              let animationId;
              const cars = [
                { x: 100, y: 200, angle: 0, speed: 2, color: '#E8002D', size: 30 },
                { x: 400, y: 400, angle: Math.PI / 4, speed: 1.5, color: '#FFD700', size: 25 },
                { x: 700, y: 100, angle: Math.PI, speed: 2.5, color: '#00D2FF', size: 28 },
              ];
              
              function drawCar(car) {
                ctx.save();
                ctx.translate(car.x, car.y);
                ctx.rotate(car.angle);
                
                ctx.fillStyle = car.color;
                ctx.fillRect(-car.size/2, -car.size/3, car.size, car.size/1.5);
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.fillRect(-car.size/3, -car.size/4, car.size/3, car.size/3);
                
                ctx.restore();
              }
              
              function animate() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                cars.forEach(car => {
                  car.x += Math.cos(car.angle) * car.speed;
                  car.y += Math.sin(car.angle) * car.speed;
                  
                  if (car.x < -50) car.x = canvas.width + 50;
                  if (car.x > canvas.width + 50) car.x = -50;
                  if (car.y < -50) car.y = canvas.height + 50;
                  if (car.y > canvas.height + 50) car.y = -50;
                  
                  if (Math.random() < 0.01) {
                    car.angle += (Math.random() - 0.5) * 0.3;
                  }
                  
                  drawCar(car);
                });
                
                animationId = requestAnimationFrame(animate);
              }
              
              animate();
              
              window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
              });
            })();
          `,
        }}
      />
    </div>
  );
}
