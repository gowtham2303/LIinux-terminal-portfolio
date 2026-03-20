# Installation & Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- Git installed

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/gowtham2303/LIinux-terminal-portfolio.git
cd LIinux-terminal-portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── app/
│   ├── page.tsx                 # Main entry point (boot loader + terminal)
│   ├── layout.tsx               # Root layout with fonts and global meta
│   ├── globals.css              # Global styles and animations
│   └── gui/
│       └── page.tsx             # GUI mode page
├── components/
│   ├── LinuxBootLoader.tsx      # Linux boot sequence animation
│   ├── InteractiveTerminal.tsx  # Main terminal component
│   ├── GUICom.tsx               # GUI mode with draggable windows
│   └── ui/                      # shadcn/ui component library
├── lib/
│   └── terminalData.ts          # All portfolio content data
├── public/
│   ├── resume.pdf               # Resume file
│   └── fonts/                   # Custom fonts (if any)
└── package.json                 # Dependencies and scripts
```

## Key Files Explained

### app/page.tsx
Entry point. Shows boot loader, then terminal. No modifications needed unless you want to skip boot.

### components/LinuxBootLoader.tsx
Displays realistic Linux boot sequence. Press ENTER to skip. Shows 27+ authentic boot messages.

### components/InteractiveTerminal.tsx
Main terminal interface. Handles:
- Command execution
- Command history navigation
- Streaming text output
- Real terminal commands (pwd, whoami, date, uname, ls, clear)
- Portfolio commands (about, skills, education, etc.)
- Message and resume handling
- GUI mode switching

### components/GUICom.tsx
GUI mode with:
- Draggable windows (click title bar and drag)
- Resizable windows (drag bottom-right corner)
- Minimize/close buttons
- 7 tile apps
- Kali Linux desktop background
- Mobile responsive

### lib/terminalData.ts
Contains all portfolio content:
- `welcome` - Welcome message
- `about` - About Gowtham
- `skills` - Technical skills
- `education` - Educational background
- `experience` - Work experience
- `projects` - Project descriptions
- `certifications` - Achievements
- `socials` - Social links
- `contact` - Contact information
- `help` - Help text
- System info (whoami, pwd, uname, ls, date)

### app/globals.css
Global styles including:
- Color scheme (dark theme)
- Typography
- Animations (typewriter, fade, glow, etc.)
- Terminal-specific styles
- Responsive media queries
- Scroll bar styling

## Customization Guide

### Update Portfolio Content

Edit `lib/terminalData.ts`:

```typescript
export const TERMINAL_DATA = {
  about: `Your new about text here...`,
  skills: `Your skills here...`,
  // ... etc
};
```

### Change Colors

Edit `app/globals.css` - search for color definitions:

```css
:root {
  --background: oklch(0.05 0 0);  /* Black */
  --foreground: oklch(0.95 0 0);  /* White */
  /* ... more colors ... */
}
```

### Customize Boot Messages

Edit `components/LinuxBootLoader.tsx`:

```typescript
const bootMessages = [
  'Your custom boot message 1',
  'Your custom boot message 2',
  // ... etc
];
```

### Modify GUI Tiles

Edit `components/GUICom.tsx` - update the `apps` array:

```typescript
const apps = [
  {
    id: 'about',
    title: 'About Me',
    color: 'from-blue-500 to-cyan-500',
    icon: '👨‍💼',
    content: `Your content here...`,
  },
  // ... more apps
];
```

## Terminal Commands

### Portfolio Commands
```
about           Information about Gowtham
skills          Technical skills and expertise
education       Educational background
experience      Work experience
projects        Portfolio projects
certifications  Achievements and certifications
socials         Social media links
contact         Contact information
help            Show available commands
```

### System Commands
```
pwd             Print working directory
whoami          Show current user
date            Display date and time
uname -a        System information
ls              List directory contents
clear           Clear terminal screen
```

### Action Commands
```
message <text>  Send message (opens email client)
resume          Download resume PDF
gui             Launch GUI mode
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Deploy to Vercel:
```bash
vercel
```

Or use the Vercel dashboard to import from GitHub.

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder to Netlify
```

#### AWS Amplify
```bash
amplify init
amplify add hosting
amplify publish
```

#### Self-Hosted
```bash
npm run build
npm run start
```

## Environment Variables

No environment variables required for basic functionality. If you want to add custom email handling:

```bash
# Create .env.local
NEXT_PUBLIC_EMAIL=your-email@example.com
```

## Troubleshooting

### Boot Loader Not Showing
- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R
- Check if `LinuxBootLoader.tsx` exists in components/

### Terminal Not Responding
- Open browser dev tools (F12) and check console
- Ensure `InteractiveTerminal.tsx` is in components/
- Check `lib/terminalData.ts` for syntax errors

### GUI Not Opening
- Ensure `/gui` route is accessible
- Check if `app/gui/page.tsx` exists
- Verify `GUICom.tsx` is in components/
- Clear cache and restart dev server

### Mobile Not Responsive
- Check viewport meta tag in `app/layout.tsx`
- Verify Tailwind breakpoints in styles
- Test with browser dev tools (F12 > Mobile View)

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules
npm install
```

## Performance Tips

1. **Use Production Build**: `npm run build && npm run start`
2. **Enable Compression**: Already enabled in Next.js
3. **Lazy Load Components**: Already implemented
4. **Optimize Images**: No images by default, add with optimization

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android 11+)

## Security Notes

1. Email links use `mailto:` protocol (safe)
2. GitHub/LinkedIn links are external (target="_blank")
3. No backend API calls (no server security issues)
4. All data is client-side
5. No cookies or local storage by default

## Development Workflow

1. Make changes to components or data
2. Save file (HMR should auto-update)
3. Test in browser
4. Commit changes: `git add . && git commit -m "message"`
5. Push: `git push origin main`
6. Vercel auto-deploys on push

## Adding New Features

### Add New Command
1. Edit `lib/terminalData.ts` and add new property
2. Edit `components/InteractiveTerminal.tsx` and add to commandMap
3. Test by typing command in terminal

### Add New GUI App
1. Edit `components/GUICom.tsx` apps array
2. Add new object with id, title, color, icon, content
3. Test by clicking the tile

### Change Terminal Colors
Edit specific CSS classes in `app/globals.css`:
- `.terminal-green` for commands
- `.terminal-white` for output
- `.terminal-red` for errors
- `.terminal-cyan` for system messages

## Version Info

- Next.js: 16+
- React: 19+
- TypeScript: 5+
- Tailwind CSS: 4+
- Node: 18+

## Support & Issues

- GitHub Issues: Report bugs or feature requests
- GitHub Discussions: Ask questions or share ideas
- Twitter/Email: Contact Gowtham directly

## License

This project is open source and available under the MIT License.

## Credits

Built by **Gowtham Sree**
- Information Systems Engineer at Lumen Technologies
- GitHub: https://github.com/gowtham2303
- LinkedIn: https://linkedin.com/in/gowthamsree
- Email: gowtham.sree@example.com

---

Happy coding! 🚀
