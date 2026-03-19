export const TERMINAL_DATA = {
  welcome: `
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║     Welcome to GOWTHAM'S Professional Terminal Portfolio       ║
║                 Information Systems Engineer                   ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

Type "help" for available commands or click buttons below.
  
$ whoami
tharigopula gowtham sree : you can call me gowtham

$ pwd
/home/gowtham/portfolio

$ ls -la
total 256
drwxr-xr-x  8 gowtham users  4096 Mar 18 14:32 .
drwxr-xr-x 10 root    root   4096 Mar 18 12:00 ..
-rw-r--r--  1 gowtham users  2048 Mar 18 14:00 about
-rw-r--r--  1 gowtham users  1536 Mar 18 14:00 skills
-rw-r--r--  1 gowtham users  3072 Mar 18 14:00 education
-rw-r--r--  1 gowtham users  2560 Mar 18 14:00 experience
-rw-r--r--  1 gowtham users  4096 Mar 18 14:00 projects
-rw-r--r--  1 gowtham users  1024 Mar 18 14:00 contact
-rwxr-xr-x  1 gowtham users   512 Mar 18 14:00 help
`,

  help: `$ help
=======================================================================
                    AVAILABLE COMMANDS
=======================================================================

about       - Display information about Gowtham Sree
skills      - List technical skills and expertise
education   - Show educational background and achievements
experience  - Display professional experience and roles
projects    - View portfolio projects and accomplishments
socials     - Social media and professional links
contact     - Get in touch contact information
clear       - Clear the terminal screen
whoami      - Display current user
pwd         - Print working directory
uname       - System information
resume      - Download resume (PDF)
help        - Show this help message

=======================================================================
Type any command to execute it.
=======================================================================
`,

  about: `$ cat /home/gowtham/about.txt
=======================================================================
                    ABOUT GOWTHAM SREE
=======================================================================

╔═══════════════════════════════════════════════════════════════╗
║  Information Systems Engineer @ Lumen Technologies            ║
║  Electronics & Communications Engineer                        ║
║  Based in Bengaluru, Karnataka, India                         ║
╚═══════════════════════════════════════════════════════════════╝

█ PROFILE
I am an Information Systems Engineer with a passion for cloud 
infrastructure, automation, and full-stack development. Currently 
at Lumen Technologies, I specialize in Azure cloud solutions, 
infrastructure automation with Terraform, and process optimization.

█ EDUCATION BACKGROUND
BSc Electronics & Communications Engineering
Sri Venkateswara University (SVU)
GPA: 8.72 / 10.0 | Jun 2021 - Apr 2025

Higher Secondary (MPC, CBSE): 96.3%
Sri Viswasanthi Educational Institutions

█ KEY ACHIEVEMENTS
• AIR 18 in AMECET (Aircraft Maintenance Engineering Entrance)
• 93.6 Percentile in JEE Main Examination
• 2nd Prize - InWinHack 24-Hour Hackathon (AI Chatbot)
• Technical Team Head - Sigmoid 2025 (National Technical Symposium)
• GitHub Pull Shark Badge
• NSS Volunteer (6 months)
• Basketball Player - ECE Department

█ PROFESSIONAL INTERESTS
→ Cloud Infrastructure & Azure DevOps
→ Infrastructure as Code (Terraform, Ansible)
→ Full-Stack Web Development (React, Node.js, TypeScript)
→ Cybersecurity & Linux Administration
→ Python Automation Scripts
→ Microservices & Containerization

=======================================================================
`,

  skills: `$ ls -la /bin/skills
-rwxr-xr-x  1 root root 4096 Mar 18 14:00 skills.bin

$ ./skills.bin
=======================================================================
                    TECHNICAL SKILLS
=======================================================================

┌─ CLOUD & INFRASTRUCTURE ─────────────────────────────────────┐
│ Microsoft Azure (Virtual Machines, App Services, AKS)         │
│ Terraform (Infrastructure as Code, Modules, State Management) │
│ Azure DevOps (Pipelines, Repositories)                        │
│ Kubernetes (Basic, Container Orchestration)                   │
│ Docker (Container Creation, Registry, Compose)                │
└──────────────────────────────────────────────────────────────┘

┌─ BACKEND DEVELOPMENT ───────────────────────────────────────┐
│ Node.js (Express, REST APIs, Server Management)              │
│ Python 3 (Automation, Scripts, Data Processing)              │
│ TypeScript (Type Safety, Large Projects)                     │
│ PostgreSQL & MongoDB (Database Design & Optimization)        │
│ RESTful APIs & GraphQL Basics                                │
└──────────────────────────────────────────────────────────────┘

┌─ FRONTEND DEVELOPMENT ──────────────────────────────────────┐
│ React 19 (Hooks, Context, Performance Optimization)          │
│ TypeScript + React (Type-Safe Components)                    │
│ Tailwind CSS (Responsive Design, Component Design)           │
│ HTML5 & CSS3 (Semantic, Accessibility)                       │
│ Next.js (SSR, SSG, API Routes)                               │
└──────────────────────────────────────────────────────────────┘

┌─ AUTOMATION & SCRIPTING ────────────────────────────────────┐
│ Bash Scripting (System Administration, Automation)           │
│ Python Automation (Task Automation, Web Scraping)            │
│ Power Automate & M365 Integration                            │
│ Process Automation                                           │
└──────────────────────────────────────────────────────────────┘

┌─ TOOLS & PLATFORMS ─────────────────────────────────────────┐
│ Git & GitHub (Version Control, Collaboration)               │
│ VS Code, IntelliJ IDEA (Development Environments)           │
│ Linux/Ubuntu (System Administration)                        │
│ Kali Linux (Security Tools, Penetration Testing Basics)     │
│ Microsoft 365 (Teams, SharePoint, Excel)                    │
└─────────────────────────────────────────────────────────────┘

┌─ SOFT SKILLS ───────────────────────────────────────────────┐
│ Problem Solving & Debugging                                 │
│ Technical Documentation                                     │
│ Team Collaboration & Communication                          │
│ Project Management                                          │
└─────────────────────────────────────────────────────────────┘

=======================================================================
`,

  education: `$ grep -r "Education" /home/gowtham/profile.log
=======================================================================
                    EDUCATIONAL BACKGROUND
=======================================================================

    ╔════════════════════════════════════════════════════════════╗
    ║  ■ ■ ■ ■  PRIMARY EDUCATION  ■ ■ ■ ■                    ║
    ╚════════════════════════════════════════════════════════════╝

📚 Bachelor of Technology (B.Tech)
   Electronic & Communications Engineering
   Sri Venkateswara University (SVUCE), Tirupati
   
   ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
   │  📖 Duration:    June 2021 - Apr 2025   │
   │  📊 CGPA:        8.72 / 10.0            │
   │  🏆 Status:      Final Year             │
   └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
   
   ✓ Managed SVUCE Official Website (2024-2025)
   ✓ 2nd Prize - InWinHack 24-Hour Hackathon
   ✓ Technical Team Head - Sigmoid 2025
   ✓ NSS Volunteer (6 months)
   ✓ Basketball Player - ECE Department

    ╔════════════════════════════════════════════════════════════╗
    ║  ■ ■ ■ ■  SECONDARY EDUCATION  ■ ■ ■ ■                  ║
    ╚════════════════════════════════════════════════════════════╝

📚 Higher Secondary (12th Grade)
   MPC (Mathematics, Physics, Chemistry) - CBSE
   Sri Viswasanthi Educational Institutions
   
   ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
   │  📖 Duration:    June 2019 - May 2021   │
   │  📊 Score:       96.3% (First Class)    │
   └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘

   🎖️  AMECET (Aircraft Maintenance Engineering)
       ├─ All India Rank (AIR): 18
       └─ Top performer in aerospace entrance exam

   🎖️  JEE MAIN (Engineering Entrance Exam)
       ├─ Percentile: 93.6
       └─ Among top performers in India

    ╔════════════════════════════════════════════════════════════╗
    ║  ■ ■ ■ ■  CERTIFICATIONS & AWARDS  ■ ■ ■ ■              ║
    ╚════════════════════════════════════════════════════════════╝

🏆 Hackathon & Competition Wins:
   ├─ InWinHack 2024: 2nd Prize (AI Chatbot)
   └─ GitHub Pull Shark Badge

🎓 Technical Training:
   ├─ Microsoft Azure Cloud Training
   ├─ Terraform Infrastructure as Code
   └─ Full-Stack Web Development Bootcamp

=======================================================================
`,

  experience: `$ cat /home/gowtham/experience.log
=======================================================================
                    PROFESSIONAL EXPERIENCE
=======================================================================

╔═══════════════════════════════════════════════════════════════╗
║ LUMEN TECHNOLOGIES - Information System Engineer              ║
╚═══════════════════════════════════════════════════════════════╝

🔧 Current Position (Full-Time)
   Duration:      August 2025 - Present (8 months)
   Location:      Bengaluru, Karnataka, India (Hybrid)
   Employment:    Full-Time
   
   🎯 Responsibilities:
      → Infrastructure automation using Terraform
      → Azure cloud infrastructure management
      → CI/CD pipeline development and maintenance
      → Process optimization and automation
      → Collaboration with cross-functional teams
      → Documentation and technical support
   
   💻 Technologies Used:
      • Microsoft Azure (VMs, App Services, AKS)
      • Terraform & Infrastructure as Code
      • Docker & Kubernetes
      • Azure DevOps Pipelines
      • Python & Bash Scripting
      • Git & GitHub

📍 Previous Position (Internship)
   Duration:      February 2025 - August 2025 (7 months)
   Type:          Full-Time Internship
   Location:      Bengaluru, Karnataka
   
   🎯 Focus Areas:
      → Microsoft Azure platform learning
      → Process automation implementation
      → Basic infrastructure tasks
      → Cross-team collaboration

╔═══════════════════════════════════════════════════════════════╗
║ ZETTABYTE PLUS - Full Stack Developer (Intern)               ║
╚═══════════════════════════════════════════════════════════════╝

📝 Position Details
   Duration:      January 2024 - April 2024 (4 months)
   Type:          Internship (Full-Time)
   Location:      Tirupati, Remote
   Company:       ZettaByte Plus (EdTech & Technology Services)
   
   🎯 Projects & Work:
      → Full-stack web application development
      → Frontend development with React
      → Backend API development with Node.js
      → Database design and optimization
      → Practical development skills enhancement
      → Real-world project implementation
   
   💻 Technologies Used:
      • React & TypeScript
      • Node.js & Express
      • MongoDB & PostgreSQL
      • Tailwind CSS
      • REST APIs

=======================================================================
`,

  projects: `$ ./list_projects.sh
=======================================================================
                    FEATURED PROJECTS
=======================================================================

    ╔══════════════════════════════════════════════════════════╗
    ║  ◆ ◆ ◆ ◆  BANKING APPLICATION  ◆ ◆ ◆ ◆               ║
    ╚══════════════════════════════════════════════════════════╝

💳 [Full-Stack Web Application]
   TypeScript | React | Node.js | PostgreSQL | 4 months

   ┌─────────────────────────────────────────────────────────┐
   │  User Authentication & Account Management               │
   │  ├─ JWT-based secure authentication                     │
   │  ├─ Role-based access control (Admin/User)              │
   │  └─ Password encryption with bcrypt                     │
   │                                                          │
   │  Transaction Processing System                          │
   │  ├─ Money transfer between accounts                     │
   │  ├─ Real-time balance updates                           │
   │  ├─ Transaction history & analytics                     │
   │  └─ Payment security & encryption                       │
   │                                                          │
   │  Admin Dashboard                                        │
   │  ├─ User management interface                           │
   │  ├─ Transaction monitoring                              │
   │  └─ System analytics & reports                          │
   └─────────────────────────────────────────────────────────┘

──────────────────────────────────────────────────────────────

    ╔══════════════════════════════════════════════════════════╗
    ║  ◆ ◆ ◆ ◆  SIGMOID 2025 WEBSITE  ◆ ◆ ◆ ◆             ║
    ╚══════════════════════════════════════════════════════════╝

🎨 [Event Website - National Technical Symposium]
   React | Tailwind CSS | Node.js | 2024-2025

   ┌─────────────────────────────────────────────────────────┐
   │  Event Information & Management                         │
   │  ├─ Event schedules & timelines                         │
   │  ├─ Venue & logistics information                       │
   │  └─ Live updates & announcements                        │
   │                                                          │
   │  Registration System                                    │
   │  ├─ Event registration for participants                 │
   │  ├─ Team formation & management                         │
   │  └─ Automated confirmation emails                       │
   │                                                          │
   │  Management Dashboard                                   │
   │  ├─ Participant tracking                                │
   │  ├─ Real-time statistics                                │
   │  └─ Event analytics & reporting                         │
   └─────────────────────────────────────────────────────────┘

──────────────────────────────────────────────────────────────

    ╔══════════════════════════════════════════════════════════╗
    ║  ◆ ◆ ◆ ◆  SVUCE COLLEGE PORTAL  ◆ ◆ ◆ ◆             ║
    ╚══════════════════════════════════════════════════════════╝

🎓 [College Management System]
   React | Node.js | MongoDB | Tailwind CSS | Ongoing

   ┌─────────────────────────────────────────────────────────┐
   │  Student Management                                     │
   │  ├─ Student information database                        │
   │  ├─ Profile management & updates                        │
   │  └─ Attendance tracking system                          │
   │                                                          │
   │  Course & Academic Management                           │
   │  ├─ Course registration & enrollment                    │
   │  ├─ Grade management & transcripts                      │
   │  ├─ Academic calendar & schedules                       │
   │  └─ Course materials & assignments                      │
   │                                                          │
   │  Performance & Analytics                                │
   │  ├─ Performance improvement: +40%                       │
   │  ├─ Automated backup systems                            │
   │  ├─ Database scaling & optimization                     │
   │  └─ Enhanced UI/UX for better usability                 │
   └─────────────────────────────────────────────────────────┘

──────────────────────────────────────────────────────────────

    ╔══════════════════════════════════════════════════════════╗
    ║  ◆ ◆ ◆ ◆  PYTHON SNAKE GAME  ◆ ◆ ◆ ◆               ║
    ╚══════════════════════════════════════════════════════════╝

🐍 [Python Desktop Game]
   Python 3 | Pygame | OOP | Solo Project

   ┌─────────────────────────────────────────────────────────┐
   │  Game Mechanics                                         │
   │  ├─ Classic snake movement controls                     │
   │  ├─ Collision detection (walls & self)                  │
   │  ├─ Food spawning & eating mechanics                    │
   │  └─ Score tracking & high scores                        │
   │                                                          │
   │  Visual & Audio                                         │
   │  ├─ Smooth animations & rendering                       │
   │  ├─ Sound effects for gameplay events                   │
   │  ├─ Multiple difficulty levels                          │
   │  └─ UI for menus & game over screens                    │
   │                                                          │
   │  Learning Outcomes                                      │
   │  ├─ Game loop programming patterns                      │
   │  ├─ OOP design & architecture                           │
   │  ├─ Event handling & input processing                   │
   │  └─ Performance optimization techniques                 │
   └─────────────────────────────────────────────────────────┘

=======================================================================
`,

  socials: `$ cat /home/gowtham/socials.txt
=======================================================================
                    SOCIAL & PROFESSIONAL LINKS
=======================================================================

🔗 PROFESSIONAL PROFILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 LinkedIn
   Profile: linkedin.com/in/gowtham-sree-tharigopula
   Connections: 323+ Professional Network
   Status: Open to Software Engineer & Python Developer roles
   Current: Information Systems Engineer @ Lumen Technologies

💻 GitHub
   Username: @tharigopula
   Badge: 🐙 Pull Shark (Active in open source)
   Repositories: Portfolio of projects and contributions
   Focus: Cloud, Automation, Full-Stack Development

📧 Email
   Primary: gowtham.sree@example.com
   Professional: Available for inquiries and collaboration
   Response Time: 24-48 hours

🌍 Other Platforms
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   📌 Location: Bengaluru, Karnataka, India
   🏢 Company: Lumen Technologies
   🎓 Education: Sri Venkateswara University
   🔗 Portfolio: Available upon request

=======================================================================

For direct contact, use the 'contact' command.
`,

  contact: `$ mail -s "Let's Connect" gowtham

=======================================================================
                    CONTACT INFORMATION
=======================================================================

    ╔══════════════════════════════════════════════════════════╗
    ║  ◊ ◊ ◊ ◊  DIRECT COMMUNICATION  ◊ ◊ ◊ ◊              ║
    ╚══════════════════════════════════════════════════════════╝

📧 EMAIL ADDRESSES
   ├─ Work Email:      gowtham.sree@lumen.com
   ├─ Personal Email:  gowtham.tharigopula@gmail.com
   └─ Contact:         reach.gowtham@outlook.com

📱 PROFESSIONAL LINKS
   ├─ GitHub:         https://github.com/tharigopula
   │                  └─ Pull Shark Badge | Open Source Contributor
   │
   ├─ LinkedIn:       https://linkedin.com/in/gowtham-sree-tharigopula
   │                  └─ 323+ Connections | ISE @ Lumen Technologies
   │
   └─ Portfolio:      https://gowtham-sree.dev


    ╔══════════════════════════════════════════════════════════╗
    ║  ◊ ◊ ◊ ◊  PROFESSIONAL PROFILE  ◊ ◊ ◊ ◊              ║
    ╚══════════════════════════════════════════════════════════╝

🏢 CURRENT POSITION
   Company:           Lumen Technologies
   Role:              Information Systems Engineer
   Location:          Bengaluru, Karnataka, India
   Employment:        Full-Time (Hybrid)
   Duration:          August 2025 - Present

📍 LOCATION & AVAILABILITY
   City:              Bengaluru, Karnataka
   Country:           India
   Timezone:          IST (UTC+5:30)
   Open to Work:      Yes ✓

⏰ RESPONSE TIME
   Email Response:    24-48 hours
   Preferred Contact: LinkedIn or Email
   Meeting Availability: Flexible (Book via Calendly)


    ╔══════════════════════════════════════════════════════════╗
    ║  ◊ ◊ ◊ ◊  COLLABORATION INTERESTS  ◊ ◊ ◊ ◊           ║
    ╚══════════════════════════════════════════════════════════╝

I'm open to discussions for:
   ✓ Full-Time Software Engineer Positions
   ✓ Python Developer & Automation Roles
   ✓ Cloud Infrastructure & DevOps
   ✓ Technical Consulting & Mentoring
   ✓ Open Source Collaboration
   ✓ Contract & Freelance Projects
   ✓ Technical Blogging & Content Creation


    ╔══════════════════════════════════════════════════════════╗
    ║  ◊ ◊ ◊ ◊  QUICK CONTACT MATRIX  ◊ ◊ ◊ ◊             ║
    ╚══════════════════════════════════════════════════════════╝

Purpose          │ Best Channel       │ Expected Response
─────────────────┼────────────────────┼────────────────────
Job Opportunity  │ LinkedIn Message   │ 24 hours
Technical Query  │ Email              │ 24-48 hours
Collaboration    │ GitHub Issues      │ 48 hours
General Inquiry  │ LinkedIn           │ 48 hours
Urgent Matter    │ Email (URGENT tag) │ ASAP

=======================================================================

Click any button above to explore more sections!
`,

  uname: `$ uname -a
Linux gowtham 6.1.0-kali5-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.12-1kali2 x86_64 GNU/Linux

$ uname -r
Information Systems Engineer Portfolio - Version 1.0.0

$ hostnamectl
Static hostname: cybersec-workstation
Icon name: computer-laptop
Chassis: laptop
Machine ID: a1b2c3d4e5f6g7h8
Boot ID: x9y8z7w6v5u4t3s2
`,

  whoami: `$ whoami
gowtham

$ id
uid=1000(gowtham) gid=1000(users) groups=1000(users),27(sudo),1001(developers)
`,

  pwd: `$ pwd
/home/gowtham/portfolio
`,
};
