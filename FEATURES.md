# Complete Portfolio Features

## Terminal Mode ✅

### Color Scheme
- **Commands**: Green (#00FF00) - All user commands display in bright green
- **Output**: White (#FFFFFF) - All content and responses in white
- **Errors**: Red (#FF4444) - Error messages in red
- **System**: Cyan (#00FFFF) - System messages in cyan

### Responsive Design
- **Mobile**: Optimized font sizes (xs: 0.75rem, sm: 0.875rem)
- **Tablet**: Adjusted spacing and padding
- **Desktop**: Full features with comfortable sizing
- **Scrollable**: Terminal scrolls on all screen sizes with custom scrollbar
- **Touch-friendly**: Buttons sized for mobile taps (min 44px height)

### Terminal Commands
```
pwd              /home/gowtham/portfolio
whoami           gowtham@cybersec-terminal
uname -a         Linux cybersec-terminal 6.1.0-kali5-amd64
date             Current date and time
ls               List portfolio sections
clear            Clear terminal screen
```

### Portfolio Commands
```
about            - Gowtham's background and introduction
skills           - Technical skills (Cloud, Automation, Frontend, Backend)
education        - B.Tech, board scores, competitive exam ranks
experience       - Lumen Technologies, ZettaByte Plus roles
projects         - Banking app, Sigmoid website, SVUCE portal, Snake game
certifications   - InWinHack 2nd place, AIR 18 AMECET, 93.6 JEE
socials          - GitHub, LinkedIn, Email, Twitter links
contact          - Contact information with embedded links
resume           - Download resume as PDF
gui              - Switch to GUI mode
help             - Show all available commands
```

### Special Commands
```
message <text>   - Opens email client with your message
                   Example: message Hi Gowtham, let's discuss!
                   
resume           - Downloads Gowtham_Sree_Resume.pdf
```

### Interactive Features
- **Command History**: Press UP/DOWN arrows to navigate previous commands
- **Input Handling**: Type freely, supports backspace and delete
- **Auto-scroll**: Terminal automatically scrolls to show new content
- **Focus**: Click anywhere to focus input
- **Streaming**: Content streams 1ms per character for authentic terminal feel

### Header
- Terminal title bar with minimize/maximize/close buttons
- GitHub and LinkedIn icons (clickable links)
- Toggle fullscreen button (desktop only)
- Responsive layout on mobile

### Command Bar
- Quick-access buttons for all main commands
- Mobile-friendly wrapping
- Disabled state during streaming
- Smooth transitions and hover effects

---

## GUI Mode ✅

### Kali Linux Desktop
- Dark gradient background (gray-900 to black to gray-900)
- Terminal-style decorative elements
- Authentic hacker aesthetic
- Responsive layout on all screen sizes

### Window Management

#### Dragging
- Click and drag any window's title bar to move
- Windows stay within viewport bounds
- Smooth movement with mouse tracking
- Full z-index management (windows come to front on interaction)

#### Resizing
- Bottom-right corner drag handle
- Minimum size: 300x200px
- Smooth resize with live preview
- Works on desktop and tablet

#### Window Controls
- **Minimize Button**: Collapses window to taskbar at bottom
- **Close Button**: Removes window completely
- **Taskbar**: Shows minimized apps, click to restore
- **Auto-maximize**: Mobile windows auto-maximize on open

### 7 Tile Apps

#### 1. About Me (Blue)
- Professional background
- Work experience summary
- Education highlights
- Key achievements

#### 2. Skills (Purple)
- Cloud & Infrastructure (Azure, Terraform, M365)
- Process Automation
- Frontend Development
- Backend Development

#### 3. Education (Green)
- B.Tech details (8.72 GPA)
- Higher Secondary (96.3%)
- Secondary School
- Competitive exam ranks

#### 4. Experience (Orange)
- Lumen Technologies (ISE, Aug 2025-Present)
- Lumen Internship (Feb-Aug 2025)
- ZettaByte Plus (Jan-Apr 2024)

#### 5. Projects (Cyan)
- Banking Application
- Sigmoid 2K25 Website
- SVUCE College Web App
- Classic Snake Game

#### 6. Achievements (Yellow)
- InWinHack 2024 (2nd Place)
- Technical Team Head - Sigmoid 2025
- AIR 18 AMECET
- 93.6 Percentile JEE Main
- GitHub badges

#### 7. Contact (Pink)
- Email: gowtham.sree@example.com
- Location: Bengaluru, Karnataka
- GitHub and LinkedIn links
- Open to opportunities

### Top Header Bar
- Portfolio title on the left
- Quick links on the right:
  - GitHub icon (links to github.com/gowtham2303)
  - LinkedIn icon (links to linkedin.com/in/gowthamsree)
  - Mail icon (opens email client)
  - File icon (downloads resume)
- Fully responsive

### Mobile Features
- Tile grid: 2 columns on mobile, 4 columns on desktop
- Windows auto-maximize on mobile
- Touch-friendly window controls
- Scrollable taskbar for multiple minimized windows
- All features fully functional on phones/tablets

### Responsive Breakpoints
- **Mobile (< 768px)**
  - 2-column tile grid
  - Windows maximize to full screen
  - Smaller title bar
  - Compact spacing

- **Tablet (768px - 1024px)**
  - 3-column tile grid
  - Floating windows
  - Resizable windows

- **Desktop (> 1024px)**
  - 4-column tile grid
  - Full dragging/resizing
  - All features available

### Exit GUI
- Red "Exit GUI" button in top right
- Returns to terminal mode
- Preserves terminal history

---

## Boot Loader ✅

### Features
- 27+ authentic Linux boot messages
- Realistic hardware detection
- System initialization messages
- Module loading sequence
- Kernel boot logs
- User login prompt

### Animations
- Typewriter effect (60ms per message)
- Green text (#00FF00)
- Scrollable output area
- Responsive on all devices

### Skip Option
- Press ENTER to skip boot sequence
- "System Ready" message when complete
- Smooth transition to terminal

### Boot Messages Include
- BIOS/EFI messages
- Kernel initialization
- Hardware detection
- Module loading:
  - Azure Cloud Infrastructure
  - Terraform v1.6.3
  - Python 3.11.6
  - React 19
  - Node.js v20.0
  - PostgreSQL
  - Docker
  - Kubernetes
  - GitHub access
  - Security tools
  - Lumen Technologies connection

---

## Responsive Design Summary

### Terminal Mode
- ✅ Mobile: Single column, optimized fonts
- ✅ Tablet: Comfortable spacing
- ✅ Desktop: Full experience
- ✅ Touch input support
- ✅ Scrollable on small screens
- ✅ Command bar wraps horizontally

### GUI Mode
- ✅ Mobile: Auto-maximized windows, 2-column tiles
- ✅ Tablet: Resizable windows, 3-column tiles
- ✅ Desktop: Full dragging/resizing, 4-column tiles
- ✅ Touch support for window controls
- ✅ Responsive taskbar
- ✅ Landscape/portrait support

---

## Technologies Used

- **Framework**: Next.js 16 (App Router, Server Components)
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS animations
- **Icons**: Lucide React
- **Fonts**: Geist Mono (terminal), Geist Sans (GUI)
- **State Management**: React Hooks (useState, useRef, useEffect)
- **Build**: Turbopack (default in Next.js 16)

---

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx              # Main page (boot loader + terminal)
│   ├── layout.tsx            # Root layout with fonts/metadata
│   ├── globals.css           # Global styles, animations, terminal styles
│   └── gui/
│       └── page.tsx          # GUI mode page
├── components/
│   ├── LinuxBootLoader.tsx   # Boot sequence component
│   ├── InteractiveTerminal.tsx # Terminal component
│   ├── GUICom.tsx            # GUI mode component
│   └── ui/                   # shadcn/ui components library
├── lib/
│   └── terminalData.ts       # All portfolio content (commands, descriptions)
├── public/
│   └── resume.pdf            # Resume file for download
└── README.md                 # Documentation
```

---

## Commands Quick Reference

### System
`pwd` `whoami` `date` `uname -a` `ls` `clear`

### Portfolio
`about` `skills` `education` `experience` `projects` `certifications` `socials` `contact` `help`

### Actions
`message <text>` `resume` `gui`

### Navigation
UP/DOWN arrows for command history
Enter to execute
ESC to clear

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| UP | Previous command in history |
| DOWN | Next command in history |
| ENTER | Execute command / Skip boot |
| Click | Focus terminal / Move window |
| Drag | Move window (GUI mode) |
| Drag corner | Resize window (GUI mode) |

---

## Features Checklist

Terminal Mode
- ✅ Green commands, white output
- ✅ Real Linux commands
- ✅ Fast streaming (1ms/char)
- ✅ Command history
- ✅ Mobile responsive
- ✅ GitHub/LinkedIn links in header
- ✅ Message command
- ✅ Resume download
- ✅ GUI mode access

GUI Mode
- ✅ Windows Lumia tiles
- ✅ Fully draggable windows
- ✅ Fully resizable windows
- ✅ Minimize to taskbar
- ✅ Close functionality
- ✅ Z-index management
- ✅ Kali Linux background
- ✅ Mobile responsive
- ✅ Touch-friendly
- ✅ Quick links in header
- ✅ Exit back to terminal

Boot Loader
- ✅ Realistic Linux boot
- ✅ 27+ authentic messages
- ✅ Skip with ENTER
- ✅ Green terminal text
- ✅ Responsive design
- ✅ Smooth animations

Overall
- ✅ Fully mobile responsive
- ✅ Professional design
- ✅ Smooth animations
- ✅ No ASCII boxes
- ✅ Clean typography
- ✅ Fast performance
- ✅ Accessible controls
