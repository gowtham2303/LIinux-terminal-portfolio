'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';

export function F1Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [cardRotations, setCardRotations] = useState<Record<string, { x: number; y: number }>>({});

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

  const handleCardHover = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 25;
    const y = -(e.clientX - rect.left - rect.width / 2) / 25;
    setCardRotations({ ...cardRotations, [id]: { x, y } });
  };

  const handleCardLeave = (id: string) => {
    setCardRotations({ ...cardRotations, [id]: { x: 0, y: 0 } });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{ cursor: 'none' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#E8002D" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Cursor Following Glow - Large Radial */}
      <div
        className="fixed rounded-full pointer-events-none z-10"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232, 0, 45, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />

      {/* Header with Glassmorphism */}
      <header className="relative z-30 backdrop-blur-xl bg-black/30 border-b border-red-500/20 px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <button className="group flex items-center gap-2 text-red-500 hover:text-red-400 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm font-bold tracking-wider">DESKTOP</span>
          </button>
        </Link>

        <div className="flex gap-6">
          {[
            { icon: Github, href: 'https://github.com/tharigopula' },
            { icon: Linkedin, href: 'https://linkedin.com/in/gowtham-sree-tharigopula' },
            { icon: Mail, href: 'mailto:gowtham.tharigopula@gmail.com' },
            { icon: FileText, href: '/resume.txt', download: true },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={link.download}
              className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </header>

      {/* Main Content Grid with Enhanced Spacing */}
      <div className="relative z-20 h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                onMouseMove={(e) => handleCardHover(section.id, e)}
                onMouseLeave={() => handleCardLeave(section.id)}
                className={`group relative h-56 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  activeSection === section.id
                    ? 'ring-2 ring-red-500 shadow-2xl shadow-red-500/50 scale-105'
                    : 'hover:shadow-2xl hover:shadow-red-500/20'
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                  transform: cardRotations[section.id]
                    ? `perspective(1000px) rotateX(${cardRotations[section.id].x}deg) rotateY(${cardRotations[section.id].y}deg)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                }}
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-md" />
                
                {/* Border Gradient */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(232, 0, 45, 0.3), rgba(0, 210, 255, 0.1))',
                    padding: '1px',
                    pointerEvents: 'none',
                  }}
                >
                  <div className="inset-0 rounded-xl bg-black/60" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
                  <div
                    className="text-5xl md:text-6xl font-black text-white transition-all duration-300 group-hover:scale-110"
                    style={{
                      textShadow: '0 0 40px rgba(232, 0, 45, 0.6), 0 0 80px rgba(232, 0, 45, 0.3)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {section.label.charAt(0)}
                  </div>
                  <span className="font-mono text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">
                    {section.label}
                  </span>
                </div>

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Modal with Enhanced Styling */}
      {activeSection && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[80vh] bg-black/95 rounded-xl p-8 overflow-y-auto backdrop-blur-2xl shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95"
            style={{
              border: '1px solid rgba(232, 0, 45, 0.4)',
              boxShadow: '0 0 60px rgba(232, 0, 45, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black text-red-500 uppercase tracking-wider">
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              <button
                onClick={() => setActiveSection(null)}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="border-b border-red-500/20 mb-6" />

            <p className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-line">
              {content[activeSection as keyof typeof content]}
            </p>
          </div>
        </div>
      )}

      {/* Animated Cars Background */}
      <svg
        className="absolute inset-0 z-5 w-full h-full pointer-events-none"
        id="f1-svg"
      >
        {/* Define car shapes */}
        <defs>
          <g id="f1-car">
            <rect width="40" height="20" fill="currentColor" x="-20" y="-10" rx="3" />
            <circle cx="-8" cy="8" r="4" fill="#333" />
            <circle cx="8" cy="8" r="4" fill="#333" />
          </g>
        </defs>
      </svg>

      {/* Canvas for animated racing elements */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const svg = document.getElementById('f1-svg');
              if (!svg) return;
              
              const cars = [
                { x: 100, y: 200, angle: 0, speed: 2, color: '#E8002D' },
                { x: 400, y: 400, angle: 2, speed: 1.5, color: '#FFD700' },
                { x: 700, y: 100, angle: 3.14, speed: 2.5, color: '#00D2FF' },
              ];
              
              function animate() {
                cars.forEach((car, idx) => {
                  car.x += Math.cos(car.angle) * car.speed;
                  car.y += Math.sin(car.angle) * car.speed;
                  
                  if (car.x < -50) car.x = window.innerWidth + 50;
                  if (car.x > window.innerWidth + 50) car.x = -50;
                  if (car.y < -50) car.y = window.innerHeight + 50;
                  if (car.y > window.innerHeight + 50) car.y = -50;
                  
                  // Change angle occasionally for more dynamic movement
                  if (Math.random() < 0.02) {
                    car.angle += (Math.random() - 0.5) * 0.5;
                  }
                });
                
                requestAnimationFrame(animate);
              }
              
              animate();
            })();
          `,
        }}
      />
    </div>
  );
}
