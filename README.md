# Gowtham Sree - Professional Terminal Portfolio

A sophisticated Linux terminal-styled portfolio with dual-mode interface: authentic CLI experience and Windows Lumia-inspired GUI.

## Features

### Terminal Mode (Default)
- **Authentic Linux Commands**: Real terminal commands like `pwd`, `whoami`, `date`, `uname -a`, `history`, `clear`
- **Green Command Text**: Commands appear in vibrant green (#00FF00) for hacker aesthetic
- **White Content Output**: All portfolio information displays in clean white text
- **Fast Streaming**: Content streams character-by-character at 2ms per character for hacker-like effect
- **Command History**: Navigate previous commands using UP/DOWN arrow keys
- **Real Commands Supported**:
  - `pwd` - Print working directory
  - `whoami` - Show current user
  - `date` - Display current date and time
  - `uname -a` - System information
  - `clear` - Clear terminal screen
  - `history` - View command history

### Portfolio Commands
- **about** - Professional background and introduction
- **skills** - Technical skills categorized by domain
- **education** - Educational background, competitive exam achievements
- **experience** - Work experience and internships
- **projects** - Featured projects with detailed descriptions
- **achievements** - Awards, certifications, and recognition
- **contact** - Contact information with embedded links
- **resume** - Download professional resume PDF
- **gui** - Launch Windows Lumia-style GUI interface
- **help** - Display all available commands
- **message <text>** - Send message via default email client

### GUI Mode
- **Windows Lumia Design**: Modern tile-based interface with gradient background
- **Interactive Tiles**: 8 colorful tiles for quick access to portfolio sections
- **Draggable Windows**: Open multiple content windows simultaneously
- **Window Management**: Minimize, maximize, and close windows
- **Quick Links**: Direct access to GitHub, LinkedIn, Email, and Resume
- **Responsive Design**: Fully optimized for desktop and mobile devices

### Boot Sequence
- **Realistic System Startup**: 25+ authentic Linux boot messages
- **Typewriter Animation**: Messages appear with proper delays
- **Skip Option**: Press ENTER to skip and jump to terminal
- **Hardware Detection**: Shows CPU, RAM, storage information

## Technical Stack
- **Frontend**: React 19+, Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4, Custom CSS
- **Fonts**: Geist Mono (terminal), Geist Sans (GUI)
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Responsive**: Mobile-first design

## Available Commands

### Terminal Commands
```
pwd              Print working directory
whoami           Show current user
date             Display current date and time
uname -a         System information
clear            Clear terminal screen
history          View command history
```

### Portfolio Commands
```
about            Professional background
skills           Technical expertise
education        Educational background
experience       Work experience
projects         Portfolio projects
achievements     Awards & certifications
contact          Contact information
message <text>   Send message via email
resume           Download resume PDF
gui              Launch GUI interface
help             Show all commands
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure
```
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page (boot loader + terminal)
│   └── globals.css        # Global styles
├── components/
│   ├── BootLoader.tsx     # Linux boot sequence
│   ├── TerminalApp.tsx    # Terminal interface
│   ├── GUIInterface.tsx   # Windows Lumia GUI
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── portfolioData.ts   # Portfolio content
│   └── utils.ts           # Utility functions
├── public/
│   └── resume.txt         # Resume file
└── README.md              # This file
```

## Deployment

Deploy to Vercel with zero configuration:

```bash
npm run build
# or
vercel
```

## Contact & Links
- **Email**: gowtham.tharigopula@gmail.com
- **GitHub**: https://github.com/tharigopula
- **LinkedIn**: https://linkedin.com/in/gowtham-sree-tharigopula
- **Location**: Bengaluru, Karnataka, India

## Built with v0

This repository is linked to a [v0](https://v0.app) project. Continue developing on v0 to get automatic deployments to Vercel.

[Continue working on v0 →](https://v0.app/chat/projects/prj_AllHQZoSi9W628u5nSmL5xfH2bEK)

---

Built with ❤️ by Gowtham Sree | Information Systems Engineer
