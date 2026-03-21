# Quick Reference Card

## Terminal Mode Cheat Sheet

### Start Command
Type and press ENTER. History available with UP/DOWN arrows.

### Portfolio Commands (Fast Access)
```
about           │ Educational background & introduction
skills          │ Technical skills & expertise areas
education       │ B.Tech, board scores, exam rankings
experience      │ Work history & internships
projects        │ 4 major project descriptions
certifications  │ Awards, hackathon wins, rankings
socials         │ GitHub, LinkedIn, social links
contact         │ Email, location, availability
help            │ Show all commands
```

### System Commands
```
pwd             │ /home/gowtham/portfolio
whoami          │ gowtham@cybersec-terminal
date            │ Current date & time
uname -a        │ Linux cybersec-terminal 6.1.0-kali5-amd64
ls              │ List all portfolio sections
clear           │ Clear terminal screen
```

### Action Commands
```
message Hi!     │ Opens email client with message
resume          │ Downloads resume as PDF
gui             │ Switch to GUI mode
```

### Quick Tips
- Type first letter for autocomplete (e.g., "a" for "about")
- UP arrow shows last command
- Click command buttons for quick access
- Click GitHub/LinkedIn icons at top right

---

## GUI Mode Quick Start

### Opening GUI
- Type `gui` in terminal
- Press ENTER
- GUI tiles appear on Kali Linux desktop

### Window Operations

**Move**: Click title bar, drag anywhere
**Resize**: Drag bottom-right corner
**Minimize**: Click minus button → appears in taskbar
**Restore**: Click app name in taskbar
**Close**: Click X button → removes window

### The 7 Tiles

| Icon | Title | Contains |
|------|-------|----------|
| 👨‍💼 | About Me | Intro, Education, Experience |
| ⚙️ | Skills | Cloud, Automation, Frontend, Backend |
| 🎓 | Education | B.Tech, Board, Competitive exams |
| 💼 | Experience | Lumen, ZettaByte Plus |
| 🚀 | Projects | 4 major projects |
| 🏆 | Achievements | Awards, Hackathons, Rankings |
| 📧 | Contact | Email, Location, Links |

### Top Bar Icons
- GitHub icon → github.com/gowtham2303
- LinkedIn icon → linkedin.com/in/gowthamsree
- Mail icon → Opens email client
- File icon → Downloads resume

### Exit GUI
Click red "Exit GUI" button (top right) to return to terminal.

---

## Responsive Features

### Mobile (< 768px)
- 2-column tile grid
- Windows auto-maximize
- Touch-friendly buttons
- Scrollable terminal

### Tablet (768px-1024px)
- 3-column tile grid
- Floating windows
- Resizable (advanced users)

### Desktop (> 1024px)
- 4-column tile grid
- Full drag & drop
- Full resize support
- All features available

---

## Professional Content Summary

### About Gowtham
- ISE @ Lumen Technologies
- ECE Graduate (8.72 GPA)
- AI/Automation enthusiast
- 2nd place InWinHack hackathon

### Top Skills
**Cloud**: Azure, Terraform, M365
**Automation**: Power Automate, CI/CD, Scripting
**Frontend**: React, TypeScript, Next.js, Tailwind
**Backend**: Node.js, Express, Python, PostgreSQL

### Education Highlights
- B.Tech: 8.72 GPA from SVU
- Board: 96.3% in CBSE (MPC)
- AMECET: AIR 18 nationwide
- JEE MAIN: 93.6 percentile

### Major Projects
1. **Banking App**: Full-stack with React+Node.js
2. **Sigmoid Website**: National tech symposium site
3. **SVUCE Portal**: University management system
4. **Snake Game**: Python GUI game

---

## Contact Options

### Direct
- Email: gowtham.sree@example.com
- Location: Bengaluru, Karnataka

### Social
- GitHub: github.com/gowtham2303
- LinkedIn: linkedin.com/in/gowthamsree

### Download
- Resume: Click button or type `resume`

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ENTER | Execute command / Skip boot |
| UP | Previous command |
| DOWN | Next command |
| CTRL+A | Select all (in input) |
| CTRL+C | Copy (in browser) |
| CTRL+L | Focus input |

---

## Browser Features

### Supported
✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers

### Features
✅ Dark theme
✅ Animations
✅ Drag & drop
✅ Responsive design
✅ Touch support

---

## Color Reference

### Terminal Colors
- **Green (#00FF00)**: Commands
- **White (#FFFFFF)**: Content/Output
- **Red (#FF4444)**: Errors
- **Cyan (#00FFFF)**: System messages

### GUI Tile Colors
- **Blue**: About Me
- **Purple**: Skills
- **Green**: Education
- **Orange**: Experience
- **Cyan**: Projects
- **Yellow**: Achievements
- **Pink**: Contact

---

## Development

### Edit Content
File: `lib/terminalData.ts`

### Edit Colors
File: `app/globals.css`

### Edit Boot Messages
File: `components/LinuxBootLoader.tsx`

### Edit GUI Tiles
File: `components/GUICom.tsx`

### Test Locally
```bash
npm run dev
# Open http://localhost:3000
```

### Deploy
Push to GitHub → Vercel auto-deploys

---

## Troubleshooting

### "Command not found"
- Type `help` to see all commands
- Commands are case-insensitive

### "Window won't move/resize"
- Desktop/laptop only (mobile auto-maximizes)
- Check if you're clicking title bar (drag) or corner (resize)

### "Mobile too small"
- Zoom in with browser zoom
- Portrait orientation better for terminals
- Full width on tablets

### "Not responsive?"
- Clear cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R
- Check mobile view in Dev Tools (F12)

---

## Pro Tips

1. **Fast Navigation**: Click command buttons instead of typing
2. **Go Fullscreen**: F11 for immersive terminal experience
3. **Multiple Windows**: Open 2-3 apps simultaneously in GUI
4. **Command History**: Press UP multiple times to find old commands
5. **Professional Look**: Use terminal on dark background for screenshots

---

## Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main entry point |
| `components/LinuxBootLoader.tsx` | Boot sequence |
| `components/InteractiveTerminal.tsx` | Terminal UI |
| `components/GUICom.tsx` | GUI windows |
| `lib/terminalData.ts` | All portfolio data |
| `app/globals.css` | Styling & animations |
| `app/layout.tsx` | HTML structure |

---

## Last Updated
March 2026

## Creator
Gowtham Sree
Information Systems Engineer
Lumen Technologies, Bengaluru

---

**Ready to explore? Start with `help` command! 🚀**
