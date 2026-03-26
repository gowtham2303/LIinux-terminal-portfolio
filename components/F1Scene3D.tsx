'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowLeft, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function F1Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    { id: 'about', label: 'ABOUT', icon: '👤', color: 'from-red-600 to-red-700', accentColor: '#E8002D' },
    { id: 'skills', label: 'SKILLS', icon: '⚙️', color: 'from-yellow-500 to-yellow-600', accentColor: '#FFD700' },
    { id: 'education', label: 'EDUCATION', icon: '📚', color: 'from-blue-600 to-blue-700', accentColor: '#0099FF' },
    { id: 'experience', label: 'EXPERIENCE', icon: '💼', color: 'from-cyan-500 to-cyan-600', accentColor: '#00D2FF' },
    { id: 'projects', label: 'PROJECTS', icon: '🚀', color: 'from-green-600 to-green-700', accentColor: '#00FF88' },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏆', color: 'from-purple-600 to-purple-700', accentColor: '#BB00FF' },
    { id: 'contact', label: 'CONTACT', icon: '📧', color: 'from-pink-600 to-pink-700', accentColor: '#FF00BB' },
  ];

  const content: Record<string, string> = {
    about: `Information Systems Engineer at Lumen Technologies

Building where infrastructure meets product – cloud systems, automation 
pipelines, and full-stack applications.

Location: Bengaluru, India
Education: ECE graduate from Sri Venkateswara University (GPA: 8.72/10.0)
Focus: Cloud Infrastructure, Automation, Full-Stack Development`,

    skills: `CLOUD & INFRASTRUCTURE
  → Microsoft Azure (85%)
  → Terraform Infrastructure as Code (70%)
  → Azure DevOps & M365 (80%)

FRONTEND TECHNOLOGIES  
  → React & TypeScript (82%)
  → Next.js 16+ (82%)
  → HTML5 / CSS3 / Tailwind (88%)

BACKEND & AUTOMATION
  → Node.js / Express.js (75%)
  → Python 3 (78%)
  → PostgreSQL / MySQL (65%)
  → Power Automate (80%)

TOOLS & PLATFORMS
  → Git / GitHub / GitLab
  → Docker & Kubernetes
  → Linux Administration`,

    education: `B.TECH ELECTRONICS & COMMUNICATIONS
  Sri Venkateswara University, Tirupati
  June 2021 - April 2025
  GPA: 8.72 / 10.0

HIGHER SECONDARY (MPC)
  Sri Viswasanthi Educational Institutions  
  Grade: 96.3%

COMPETITIVE EXAMS
  ✓ AIR 18 - AMECET Entrance Exam
  ✓ 93.6 Percentile - JEE Main`,

    experience: `INFORMATION SYSTEMS ENGINEER
  Lumen Technologies, Bengaluru (Current)
  Building production systems and cloud infrastructure

FULL STACK DEVELOPER
  ZettaByte Plus
  Built web applications with React, Node.js, PostgreSQL

TECHNICAL TEAM LEAD
  Sigmoid 2025 - National Tech Symposium
  Managed symposium website and infrastructure`,

    projects: `BANKING APPLICATION
  React + Node.js + PostgreSQL
  Implemented secure user authentication

SVUCE OFFICIAL WEBSITE
  Full-stack development (2024-2025)
  
PORTFOLIO WEBSITE
  Next.js + Tailwind CSS + Three.js
  Interactive F1-themed portfolio

PYTHON SNAKE GAME
  Classic game implementation`,

    achievements: `2ND PLACE INWINHACK 2024
  AI Chatbot using advanced NLP

AIR 18 AMECET ENTRANCE EXAM
  Top rank in All India Entrance Exam

93.6 PERCENTILE JEE MAIN
  Strong competitive exam performance

GITHUB PULL SHARK BADGE
  Active open source contributor`,

    contact: `Email: gowtham.tharigopula@gmail.com
GitHub: github.com/gowtham2303
LinkedIn: linkedin.com/in/gowthamsree
Location: Bengaluru, India`,
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-x-hidden"
      style={{ cursor: 'none' }}
    >
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#E8002D" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Cursor Following Glow */}
      <div
        className="fixed rounded-full pointer-events-none z-10"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(232, 0, 45, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* Header with Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/30 border-b border-red-500/20 px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <button className="group flex items-center gap-2 text-red-500 hover:text-red-400 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm font-bold tracking-wider">DESKTOP</span>
          </button>
        </Link>

        <div className="flex gap-6">
          {[
            { icon: Github, href: 'https://github.com/gowtham2303' },
            { icon: Linkedin, href: 'https://linkedin.com/in/gowthamsree' },
            { icon: Mail, href: 'mailto:gowtham.tharigopula@gmail.com' },
            { icon: FileText, href: '/resume.pdf', download: true },
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

      {/* Main Content with Tabs Expanding Down */}
      <div className="relative z-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black text-white mb-12 uppercase tracking-wider">Portfolio Sections</h1>

          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div
                key={section.id}
                className="group transition-all duration-500"
                style={{
                  opacity: 0.8 + (scrollY / 1000) * 0.2,
                  transform: `translateY(${Math.sin((scrollY + idx * 100) / 200) * 3}px)`,
                }}
              >
                {/* Tab Header Button */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-red-500/20"
                  style={{
                    background: expandedSections[section.id]
                      ? `linear-gradient(135deg, rgba(232, 0, 45, 0.2), rgba(0, 210, 255, 0.1))`
                      : `linear-gradient(135deg, rgba(232, 0, 45, 0.05), rgba(0, 210, 255, 0.02))`,
                    border: `1px solid ${expandedSections[section.id] ? 'rgba(232, 0, 45, 0.3)' : 'rgba(232, 0, 45, 0.1)'}`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{section.icon}</div>
                      <div className="text-left">
                        <h3 className="text-white font-black uppercase tracking-wider text-lg">{section.label}</h3>
                        <p className="text-gray-400 text-xs mt-1">Click to expand</p>
                      </div>
                    </div>

                    <ChevronDown
                      className="w-5 h-5 text-red-500 transition-transform duration-300"
                      style={{
                        transform: expandedSections[section.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </div>

                  {/* Hover Shine */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    }}
                  />
                </button>

                {/* Content Panel - Expands Down */}
                {expandedSections[section.id] && (
                  <div
                    className="overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-2"
                    style={{
                      background: 'linear-gradient(180deg, rgba(232, 0, 45, 0.08), rgba(0, 210, 255, 0.05))',
                      border: '1px solid rgba(232, 0, 45, 0.2)',
                      borderTop: 'none',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="px-6 py-8 border-t border-red-500/10">
                      <p className="text-white/80 font-mono text-sm leading-relaxed whitespace-pre-line">
                        {content[section.id as keyof typeof content]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #E8002D, #00D2FF);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FF0040, #00E5FF);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>

      {/* 3D F1 Racing Animation Background */}
      <svg
        className="fixed inset-0 z-5 w-full h-full pointer-events-none opacity-30"
        id="f1-svg"
        style={{
          filter: 'blur(1px)',
        }}
      >
        <defs>
          <linearGradient id="carGradient1" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#E8002D" />
            <stop offset="100%" stopColor="#FF6B5B" />
          </linearGradient>
          <linearGradient id="carGradient2" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFED4E" />
          </linearGradient>
          <linearGradient id="carGradient3" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Racing Animation Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const svg = document.getElementById('f1-svg');
              if (!svg) return;

              const cars = [
                { x: 100, y: 200, angle: 0, speed: 1.5, gradient: 'carGradient1', size: 35 },
                { x: 400, y: 400, angle: 2, speed: 1.2, gradient: 'carGradient2', size: 30 },
                { x: 700, y: 100, angle: 3.14, speed: 2, gradient: 'carGradient3', size: 32 },
              ];

              function drawCar(car) {
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('transform', 'translate(' + car.x + ',' + car.y + ') rotate(' + (car.angle * 180 / Math.PI) + ')');

                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', -car.size / 2);
                rect.setAttribute('y', -car.size / 3);
                rect.setAttribute('width', car.size);
                rect.setAttribute('height', car.size / 1.5);
                rect.setAttribute('rx', '3');
                rect.setAttribute('fill', 'url(#' + car.gradient + ')');
                rect.setAttribute('opacity', '0.7');

                g.appendChild(rect);
                svg.appendChild(g);

                setTimeout(() => g.remove(), 100);
              }

              function animate() {
                cars.forEach(car => {
                  car.x += Math.cos(car.angle) * car.speed;
                  car.y += Math.sin(car.angle) * car.speed;

                  if (car.x < -50) car.x = window.innerWidth + 50;
                  if (car.x > window.innerWidth + 50) car.x = -50;
                  if (car.y < -50) car.y = window.innerHeight + 50;
                  if (car.y > window.innerHeight + 50) car.y = -50;

                  if (Math.random() < 0.02) {
                    car.angle += (Math.random() - 0.5) * 0.3;
                  }

                  drawCar(car);
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
