# Quick Start Guide

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

---

## What You See

### Home Page (/)
Click either **TERMINAL MODE** or **GUI MODE** button.

---

## Terminal Mode (/terminal)

### Boot Sequence
- 27 realistic Linux messages
- Typewriter animation (120ms per line)
- Press **ENTER** to skip

### After Boot - Available Commands

#### System Commands
```
pwd          Show current directory
whoami       Show current user
date         Show current date/time
uname -a     Show system info
clear        Clear screen
ls           List portfolio sections
history      Show command history
help         Show this help menu
```

#### Portfolio Commands
```
about        Professional background & introduction
skills       Technical expertise (Cloud, Frontend, Backend)
education    Educational background & exam scores
experience   Work experience & internships
projects     Featured projects with details
achievements Awards, certifications, hackathon wins
contact      Contact information & links
resume       Download resume PDF
gui          Launch GUI mode
```

#### Action Commands
```
message <text>    Send email message
clear            Clear terminal screen
```

### Features
- **Green Commands** - Typed commands appear in bright green (#00FF00)
- **White Output** - All results in white text
- **Fast Streaming** - 1ms per character for hacker feel
- **History Navigation** - UP/DOWN arrows to browse previous commands
- **Command Persistence** - All history stays on screen
- **GitHub/LinkedIn Links** - Clickable in output

---

## GUI Mode (/gui)

### Launch Apps
Click any **colorful tile** to open a window:
- Blue: About Me
- Purple: Skills
- Green: Education
- Orange: Experience
- Cyan: Projects
- Yellow: Achievements
- Pink: Contact

### Window Controls
- **Drag**: Click title bar and drag anywhere
- **Resize**: Click bottom-right corner and drag
- **Minimize**: Click minus button (goes to taskbar)
- **Restore**: Click minimized app in taskbar
- **Close**: Click X button

### Header Icons
- GitHub icon → GitHub profile
- LinkedIn icon → LinkedIn profile
- Email icon → Email client
- Document icon → Download resume

### Mobile
- Windows auto-maximize on small screens
- Touch-friendly tile grid
- Fully responsive design

---

## Customization

### Update Portfolio Content
Edit `lib/terminalData.ts`:

```typescript
export const TERMINAL_DATA = {
  about: `Your about text here`,
  skills: `Your skills here`,
  education: `Your education here`,
  // ... etc
};
```

### Change Colors
Edit `app/globals.css`:

```css
--background: oklch(0.05 0 0);  /* Background color */
--foreground: oklch(0.95 0 0);  /* Text color */
--destructive: oklch(0.577 0.245 27.325);  /* Accent color */
```

### Update Resume
Replace file at `/public/resume.txt` or `/public/resume.pdf`

### Change Links
Update in `app/gui/page.tsx`:

```typescript
<a href="YOUR_GITHUB_URL">
  <Github className="w-5 h-5" />
</a>
```

---

## Mobile Testing

### iOS Safari
1. Open http://localhost:3000 on iPhone
2. Terminal mode works great
3. GUI mode windows auto-maximize
4. All touches work properly

### Android Chrome
1. Open http://localhost:3000
2. Desktop experience responsive
3. Tiles reflow to mobile layout
4. Touch-friendly buttons

---

## Troubleshooting

### Terminal Not Showing Content
- Click the terminal window to focus
- Type `help` and press ENTER
- Check browser console for errors

### Windows Not Dragging
- Make sure you're clicking the title bar
- Not the content area
- Cursor should show move icon

### GUI Buttons Not Working
- Ensure JavaScript is enabled
- Try refreshing page (Cmd/Ctrl + R)
- Check browser console for errors

### Mobile Layout Issues
- Clear browser cache
- Try in incognito/private mode
- Test on different device size

---

## Deployment to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Final portfolio build"
git push origin main

# Vercel auto-deploys from GitHub
# Your site goes live automatically!

# Or deploy manually:
npm run build
vercel deploy --prod
```

---

## File Structure

```
project/
├── app/
│   ├── page.tsx              # Home page
│   ├── terminal/
│   │   └── page.tsx          # Terminal mode
│   ├── gui/
│   │   └── page.tsx          # GUI mode
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── TerminalWrapper.tsx   # Terminal styles
│   ├── InteractiveTerminal.tsx
│   └── LinuxBootLoader.tsx
├── lib/
│   └── terminalData.ts       # Portfolio content
├── public/
│   └── resume.txt            # Resume file
└── package.json
```

---

## Need Help?

1. **Terminal Commands Not Working?**
   - Make sure command is typed correctly
   - Press ENTER after typing
   - Check `lib/terminalData.ts` for available commands

2. **Windows Getting Stuck?**
   - Try refreshing the page
   - Clear browser cache
   - Check browser console for errors

3. **Mobile Not Responsive?**
   - Force refresh (Cmd/Ctrl + Shift + R)
   - Try different browser
   - Check viewport meta tag in `layout.tsx`

4. **Want Custom Colors?**
   - Edit color values in `app/globals.css`
   - Update gradient colors in component files
   - Use Tailwind color utilities

---

## Final Tips

✅ **Do**:
- Use terminal for professional hacker vibe
- Use GUI for impressive interactive demo
- Customize with your actual information
- Test on mobile before sharing
- Deploy to Vercel for free hosting

❌ **Don't**:
- Change the core architecture without understanding
- Remove the boot loader (part of the aesthetic)
- Forget to update portfolio data in `lib/terminalData.ts`
- Deploy without testing first

---

**Ready to go!** 🚀

Your portfolio is now a fully functional, beautiful, and impressive showcase of your skills.

Deploy, share, and impress! 🎉
