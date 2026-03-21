# Visual & Interaction Guide

## Terminal Mode Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ● ● ●  gowtham@cybersec:~/portfolio    [GitHub] [LinkedIn]     │  Header
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│ $ pwd                                                             │  Green
│ /home/gowtham/portfolio                                          │  Command
│                                                                   │
│ $ whoami                                                          │  & White
│ gowtham@cybersec-terminal                                        │  Output
│                                                                   │
│ $ about                                                           │
│ Information Systems Engineer at Lumen Technologies...            │
│ (content streams 1ms per character)                             │
│                                                                   │
│ $ _                                                               │  Input
│                                                                   │  Line
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│ [about] [skills] [education] [experience] [projects]            │  Command
│ [certifications] [socials] [contact] [resume] [gui] [help]     │  Bar
└─────────────────────────────────────────────────────────────────┘
```

### Color Scheme
```
Command: $ about              → #00FF00 (Green)
Output:  Information Systems → #FFFFFF (White)
Error:   bash: command       → #FF4444 (Red)
System:  ✓ Opening email     → #00FFFF (Cyan)
```

### Typography Hierarchy
```
Command Prompt:  Smaller, bold green
Command Text:    Medium, regular green
Output Title:    Larger, bold white
Output Content:  Medium, regular white
```

---

## GUI Mode Layout

### Desktop (> 1024px)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Portfolio GUI        [GitHub] [LinkedIn] [Mail] [Resume]     [Exit GUI]     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  Kali Linux Dark Background                                                   │
│                                                                                │
│         ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│         │  👨‍💼 About │  │  ⚙️ Skills  │  │  🎓 Educ    │  │  💼 Exper   │  │
│         └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  │
│                                                                                │
│         ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│         │  🚀 Proj    │  │  🏆 Achie   │  │  📧 Contac  │  │             │  │
│         └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  │
│                                                                                │
│  ┌────────────────────┐  ┌─────────────────────────────┐                     │
│  │ ─ ■ ×              │  │ ─ ■ ×                       │  (Draggable)        │
│  │ About Me           │  │ Skills                      │                     │
│  │ ──────────────────┐│  │ ──────────────────────────┐ │                     │
│  │ Gowtham Sree...   ││  │ Cloud & Infrastructure...  │ │  (Resizable)        │
│  │                   ││  │ • Microsoft Azure          │ │                     │
│  │                   ├┤  │ • Terraform (IaC)          ├─┤                     │
│  └────────────────────┘  └─────────────────────────────┘                     │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ [About Me] [Skills] [Education] [Exper.] [Projects] [Achievements]  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                                │
└──────────────────────────────────────────────────────────────────────────────┘

Taskbar: Shows minimized windows at bottom
```

### Mobile (< 768px)

```
┌────────────────────────────────────────┐
│ Portfolio        [GitHub] [Mail] [PDF] │  Header
├────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ 👨‍💼 About │  │ ⚙️ Skills │            │  2-Column
│  └──────────┘  └──────────┘            │  Tile Grid
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ 🎓 Educ  │  │ 💼 Exper │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ 🚀 Proj  │  │ 🏆 Achie │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌──────────────────────┐              │
│  │ 📧 Contact           │              │
│  └──────────────────────┘              │
│                                         │
│  ┌────────────────────────────────────┐│ Auto-Maximize
│  │ About Me ─ ■ ×                     ││ Windows
│  │ ──────────────────────────────────┐││
│  │ Gowtham Sree...                    │││
│  │ ISE @ Lumen Technologies           │││
│  │                                    │││
│  │ (Swipe or pinch to interact)      │││
│  │                                    │││
│  └────────────────────────────────────┘│
│                                         │
│ [About] [Skills] [Educ] [Contact]     │  Taskbar
└────────────────────────────────────────┘
```

---

## Window Interaction Guide

### Dragging a Window

```
Step 1: Point to Title Bar
┌─────────────────────────┐
│ About Me                │  ← Click here
├─────────────────────────┤
│ Content...              │
└─────────────────────────┘

Step 2: Click and Drag
┌─────────────────────────┐
│ About Me                │═══╗
├─────────────────────────┤  ║ Drag direction
│ Content...              │  ║
└─────────────────────────┘  │
                             ↓

Step 3: Release
        ┌─────────────────────────┐
        │ About Me                │
        ├─────────────────────────┤
        │ Content...              │
        └─────────────────────────┘
```

### Resizing a Window

```
Step 1: Point to Corner
┌─────────────────────────┐
│ About Me                │
├─────────────────────────┤
│                         │
│ Content...              │
│                         │
└─────────────────────────◄ Resize handle (green gradient)
                           ↖ ◄─ Drag here

Step 2: Drag to Resize
┌─────────────────────────┐
│ About Me                │
├─────────────────────────┤
│                         │
│ Content...              │
│                         │
│                         │
│                         │
└────────────────────────────────┐
                                  │
Step 3: Release - Window grows
```

### Minimize/Restore

```
Click Minus Button
┌─────────────────────────┐
│ ─ ■ × About Me          │  ← Click minus
├─────────────────────────┤
│ Content...              │
└─────────────────────────┘

Window Minimizes to Taskbar
┌─────────────────────────────────────────────┐
│ [About Me] [Skills] [Education] ...         │
└─────────────────────────────────────────────┘

Click Taskbar Button to Restore
┌─────────────────────────┐
│ About Me                │
├─────────────────────────┤
│ Content...              │
└─────────────────────────┘
```

### Close Window

```
Click X Button
┌─────────────────────────┐
│ ─ ■ × About Me          │  ← Click X
├─────────────────────────┤
│ Content...              │
└─────────────────────────┘

Window Disappears
(Can reopen by clicking tile)
```

---

## Tile App Colors

```
┌─────────────────┐
│ 👨‍💼 About Me    │  Blue gradient (from-blue-500 to-cyan-500)
└─────────────────┘

┌─────────────────┐
│ ⚙️ Skills       │  Purple gradient (from-purple-500 to-pink-500)
└─────────────────┘

┌─────────────────┐
│ 🎓 Education    │  Green gradient (from-green-500 to-emerald-500)
└─────────────────┘

┌─────────────────┐
│ 💼 Experience   │  Orange gradient (from-orange-500 to-red-500)
└─────────────────┘

┌─────────────────┐
│ 🚀 Projects     │  Cyan gradient (from-cyan-500 to-blue-500)
└─────────────────┘

┌─────────────────┐
│ 🏆 Achievements │  Yellow gradient (from-yellow-500 to-amber-500)
└─────────────────┘

┌─────────────────┐
│ 📧 Contact      │  Pink gradient (from-pink-500 to-rose-500)
└─────────────────┘
```

---

## Boot Loader Display

```
┌─────────────────────────────────────┐
│ [ OK ] Linux kernel 6.1.0 booting...│
│ [ OK ] BIOS-provided physical RAM   │
│ [ OK ] NX (Execute Disable) active  │
│ [ OK ] Initializing CGROUP...       │
│ [ OK ] Loading Azure modules...     │
│ [ OK ] Mounting Terraform v1.6.3... │
│ [ OK ] Initializing Python 3.11.6..│
│ [ OK ] Loading React 19...          │
│ [ OK ] Establishing Node.js API...  │
│                                     │
│ System boot completed!              │
│ Gowtham Sree Portfolio v2.0        │
│                                     │
│ gowtham@cybersec login: gowtham    │
│ Password: ••••••••••                │
│ Last login: Mon Mar 20 14:30 2026  │
│                                     │
│ [System Ready - Press Enter]        │
└─────────────────────────────────────┘
```

---

## Keyboard Interactions

```
Terminal Mode:
┌─────────────────────────┐
│ $ about                 │
│ [Press ENTER] → Executes command
│                                 │
│ $ whoami                        │
│ [Press UP] → Shows "about" again
│                                 │
│ $ whoami                        │
│ [Press DOWN] → Goes forward in history
│                                 │
│ $ clear                         │
│ [Press ENTER] → Clears terminal
└─────────────────────────┘

GUI Mode:
┌──────────────────────────────────┐
│ [Click Tile] → Opens window       │
│ [Drag Title] → Moves window       │
│ [Drag Corner] → Resizes window    │
│ [Click -] → Minimizes window      │
│ [Click ×] → Closes window         │
│ [Click Taskbar] → Restores window │
└──────────────────────────────────┘

Boot Loader:
┌──────────────────────────────────┐
│ [Boot Messages Scrolling...]      │
│                                   │
│ [Press ENTER] → Skips to terminal │
│ [Wait] → Auto-continues in 60s    │
└──────────────────────────────────┘
```

---

## Responsive Breakpoints

```
Mobile          Tablet              Desktop
(320-767px)     (768-1023px)        (1024px+)

┌──────────┐    ┌─────────────┐    ┌──────────────────┐
│ ┌──────┐ │    │ ┌────────┐  │    │ ┌──────┐┌──────┐ │
│ │ Tile │ │    │ │ Tile   │  │    │ │Tile  ││Tile  │ │
│ └──────┘ │    │ └────────┘  │    │ └──────┘└──────┘ │
│ ┌──────┐ │    │ ┌────────┐  │    │ ┌──────┐┌──────┐ │
│ │ Tile │ │    │ │ Tile   │  │    │ │Tile  ││Tile  │ │
│ └──────┘ │    │ └────────┘  │    │ └──────┘└──────┘ │
│ ┌──────┐ │    │ ┌────────┐  │    │ ┌──────┐┌──────┐ │
│ │ Tile │ │    │ │ Tile   │  │    │ │Tile  ││Tile  │ │
│ └──────┘ │    │ └────────┘  │    │ └──────┘└──────┘ │
│ ┌──────┐ │    │ ┌────────┐  │    │ ┌──────┐┌──────┐ │
│ │ Tile │ │    │ │ Tile   │  │    │ │Tile  ││Tile  │ │
│ └──────┘ │    │ └────────┘  │    │ └──────┘└──────┘ │
│ ┌──────┐ │    │             │    │                  │
│ │ Tile │ │    │             │    │                  │
│ └──────┘ │    │             │    │                  │
│ ┌──────┐ │    │             │    │                  │
│ │ Tile │ │    │             │    │                  │
│ └──────┘ │    │             │    │                  │
│ ┌──────┐ │    │             │    │                  │
│ │ Tile │ │    │             │    │                  │
│ └──────┘ │    │             │    │                  │
└──────────┘    └─────────────┘    └──────────────────┘
2 columns       3 columns          4 columns
```

---

## Animation Examples

### Typewriter Effect (Boot & Terminal)
```
Frame 1: $ about
         |

Frame 2: $ about
         In|

Frame 3: $ about
         Infor|

Frame 4: $ about
         Information|

(1ms per character)
```

### Fade In (Command Output)
```
Opacity:
0%   ─────────
50%  ─────────
100% Information Systems Engineer...
```

### Hover Effects (Buttons)
```
Normal:
[about]

Hover:
[about] (background color change, scale +5%)

Active:
[about] (scale -5%)
```

---

## Color Contrast

```
Green on Black:
#00FF00 on #000000 ✅ Excellent contrast (100%)

White on Black:
#FFFFFF on #000000 ✅ Excellent contrast (100%)

Red Error on Black:
#FF4444 on #000000 ✅ Very good contrast

Cyan System on Black:
#00FFFF on #000000 ✅ Excellent contrast
```

All colors meet WCAG AA accessibility standards ✅

---

## File Organization Visual

```
Portfolio App
│
├── Terminal Mode
│   ├── Boot Loader (Linux messages)
│   ├── Input Bar ($ prompt)
│   ├── Output Area (green text)
│   └── Command Bar (quick access)
│
├── GUI Mode
│   ├── Top Header (title + links)
│   ├── Tile Grid (7 apps)
│   ├── Windows (draggable, resizable)
│   └── Taskbar (minimized apps)
│
└── Data Layer
    └── Terminal Data (all content)
```

---

This visual guide helps you understand the layout, interactions, and design of your portfolio!
