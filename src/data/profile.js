// Canonical site content. Kept in sync with public/Jaff_Arin_Resume.pdf.
export const profile = {
  name: "Arin Kosar Jaff",
  location: "New York, NY",
  email: "akj2147@columbia.edu",
  phone: "(425) 229-1603",
  github: "https://github.com/arin-jaff",
  linkedin: "https://www.linkedin.com/in/arin-jaff-252977251/",
  headshot: "/headshot.jpeg",
  resume: "/Jaff_Arin_Resume.pdf",
  title: "AI-Fluent, Cloud-Native Software Engineer",
  education: {
    school: "Columbia University",
    period: "Sep 2022 — May 2026",
    degree: "BA, Computer Science",
    gpa: "3.82/4.00",
    honors: ["D1 Varsity Lightweight Crew", "Cloud Computing TA", "Dean's List"],
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Natural Language Processing",
      "Large Language Models",
      "Analysis of Algorithms",
      "Computer Networks",
      "Cloud Computing (AWS)",
      "Ethics of LLMs"
    ]
  },
  experience: [
    {
      company: "Phia",
      title: "Software Engineer, Core Platform",
      summary: "Translating business workflows into production AI systems",
      location: "New York, NY",
      period: "Feb 2026 — Present",
      bullets: [
        "Designed and launched the company's first MCP servers (Docker/Cloud Run, Terraform), connecting internal CRM and analytics databases to LLM agents with natural-language query, bulk-write, and reporting tooling.",
        "Formulated OAuth 2.1 authentication and routing conventions adopted by all internal agentic services.",
        "Architected an enterprise-facing self-serve web platform (Next.js/Vercel, GCP) serving 1,000+ brand partners, with a high-throughput data automation engine aggregating and normalizing live analytical metrics from 20+ partner APIs.",
        "Engineered a headless rendering microservice producing pixel-accurate iOS app screenshots, exposed as an MCP tool powering AI-driven communication pipelines, reducing operational response times by 70%+."
      ]
    },
    {
      company: "Garmin Ltd.",
      title: "Software Engineer Intern, Device Interactions",
      summary: "Wearables backend & public API infrastructure",
      location: "Olathe, KS",
      period: "May 2025 — Aug 2025",
      bullets: [
        "Engineered a backend wearables service shipped to production in the Forerunner 970/570 launch.",
        "Built a failover system for the public Garmin Weather API (Java Spring Boot, Redis state management), cutting endpoint error rate by 99%.",
        "Owned features from design through CI/CD production deployment in agile sprints; demoed at weekly stand-ups."
      ]
    },
    {
      company: "Covet Inc.",
      title: "Full-Stack Software Engineer Intern",
      summary: "Scalable onboarding & systems automation",
      location: "Seattle, WA",
      period: "May 2024 — Aug 2024",
      bullets: [
        "Launched a company-first AWS-backed onboarding service that facilitated the first 100+ client acquisitions.",
        "Implemented a sitewide rule engine that cut client configuration errors by 99%+.",
        "Automated legal document generation with built-in validation, streamlining the customer onboarding flow."
      ]
    },
    {
      company: "University of Chicago, Prof. John List",
      title: "Research Assistant",
      summary: "Behavioral economics research & data automation",
      location: "Chicago, IL",
      period: "May 2023 — Aug 2023",
      bullets: [
        "Won the department-wide intern research competition with a data-driven paper on brain drain.",
        "Cut citation-verification time by 80% for The Voltage Effect (ISBN: 9780226820675) by building automated database/API services."
      ]
    }
  ],
  projects: [
    {
      id: "traininggeeks",
      featured: true,
      title: "TrainingGeeks",
      tagline: "Open-source, self-hosted endurance & strength analytics platform",
      thumb: "/traininggeeks.png",
      url: "https://demo.traininggeeks.net",
      github: "https://github.com/arin-jaff/TrainingGeeks",
      tech: ["Next.js 15", "TypeScript", "node:sqlite", "Garmin FIT SDK", "ECharts/uPlot", "Tauri"],
      description:
        "A 28K+ line, AGPL-3.0 training platform you run yourself. Ships a training calendar, CTL/ATL/TSB performance modeling, strength analytics with 1RM estimation, and intervals.icu sync, plus a macOS desktop release (Tauri + Node sidecar) built by an automated release pipeline. A federation protocol and pluggable directory server (Node 24/Hono/SQLite) let independently self-hosted instances share activity feeds, kudos, and leaderboards while all training data stays on the user's machine. Maintained as full open-source infrastructure: GitHub Actions CI + Dependabot, unit and integration test suites, contributor docs, versioned releases, and a live demo self-hosted on a Raspberry Pi."
    },
    {
      id: "ergroom",
      title: "Who's In the Erg Room?",
      tagline: "RFID-based attendance system for Columbia Lightweight Rowing",
      thumb: "/ergroom_logo.png",
      url: "https://ergroom.arinjaff.com",
      github: "https://github.com/arin-jaff/erg-room",
      tech: ["Raspberry Pi", "RFID+NFC", "Flask", "SQLite", "HTMX", "Cloudflare Tunnel"],
      description:
        "A real-time presence tracking system serving 30+ D1 athletes using a Raspberry Pi, RFID+NFC, and a Flask web app. Deployed to production behind a Cloudflare Tunnel (SQLite + HTMX), eliminating manual attendance logging for daily team practices."
    },
    {
      id: "candle",
      title: "canDLE",
      tagline: "Daily stock ticker guessing game",
      thumb: "/canDLE.png",
      url: "https://candle.arinjaff.com",
      github: "https://github.com/arin-jaff/candle",
      description:
        "A daily word-guessing game inspired by Wordle but using stock tickers instead of words. Built with React and TypeScript, deployed on AWS Lambda and S3."
    },
    {
      id: "pokebank",
      title: "Pokébank",
      tagline: "Gamified decentralized P2P trading platform",
      thumb: "/pokebank_logo.png",
      github: "https://github.com/arin-jaff/blockchain_project_work_sample",
      description:
        "Decentralized P2P trading system with Merkle tree hashing, fork resolution, nonce mining, and a card-trading GUI."
    },
    {
      id: "billswithfriends",
      title: "BillsWithFriends",
      tagline: "Receipt parsing & group-budgeting SaaS",
      thumb: "/billswithfriends_logo.png",
      githubRepos: [
        { name: "Bill-Splitter", url: "https://github.com/NitinRao-Columbia/Bill-Splitter/" },
        { name: "Social-Accountability", url: "https://github.com/NitinRao-Columbia/Social-Accountability" },
        { name: "CloutLogin", url: "https://github.com/NitinRao-Columbia/CloutLogin/" }
      ],
      description:
        "Receipt parsing and group-budgeting platform with documented APIs and AWS-backed microservices supporting session handling."
    },
    {
      id: "strava-viz",
      title: "Strava Activity Visualizer",
      tagline: "Interactive heatmap of personal athletics",
      thumb: "/strava_logo.png",
      wip: true,
      github: "https://github.com/arin-jaff/strava-visualizer",
      description:
        "A React application integrating the Strava API to fetch athlete activities, decode polyline geodata, and render interactive heatmaps using Leaflet."
    },
    {
      id: "ctrl-alt-drive",
      title: "CTRL-ALT-DRIVE",
      tagline: "Hacking 4 Defense Project on National Guard Vehicle Readiness.",
      thumb: "/wheels_logo.jpeg",
      github: "https://github.com/alexakfk/ctrl-alt-drive",
      pdfLink: "/WheelsOfReadiness.pdf",
      description:
        "Two part project including a full tech stack webapp for vehicle readiness tracking and a strategic report for the National Guard on improving vehicle maintenance processes.  Proposal was successful, and is currently moving forward through legislative process!"
    }
  ],
  skills: {
    languages: [
      "Python",
      "TypeScript/JavaScript",
      "SQL",
      "C/C++",
      "Rust",
      "Java",
      "HTML/CSS",
      "R",
      "LaTeX"
    ],
    mlAi: [
      "Anthropic/Claude API",
      "LLM Agent Pipelines",
      "MCP Servers",
      "PyTorch",
      "HuggingFace Transformers",
      "LoRA/QLoRA Fine-Tuning",
      "Pydantic",
      "NumPy",
      "Pandas"
    ],
    infrastructure: [
      "Next.js/React",
      "FastAPI",
      "Flask",
      "GCP (Cloud Run)",
      "AWS (Lambda, S3, DynamoDB)",
      "Docker",
      "Terraform",
      "Redis",
      "PostgreSQL (Supabase)",
      "SQLite",
      "MongoDB",
      "Git",
      "CI/CD"
    ]
  },
  personal: {
    rowing: {
      title: "Rowing",
      icon: "rowing",
      items: [
        { text: "High School Team Captain & Most Inspirational Award" },
        {
          text: "D1 Lightweight Rower on Columbia 150",
          link: { url: "https://gocolumbialions.com/sports/lightweight-rowing/roster/arin-jaff/22235", label: "View Profile" }
        },
        {
          text: "IRA National Rowing Championship Medalist — Bronze, Columbia Lightweight Varsity Crew, May 2025",
          link: { url: "https://gocolumbialions.com/news/2025/6/1/general-lightweight-2v8-crew-earns-bronze-on-final-day-of-ira-national-championships", label: "Read More" }
        },
        { text: "Maintained a 3.82 GPA while managing a 40+ hr/week athletic time commitment" }
      ]
    },
    music: {
      title: "Music",
      icon: "music",
      items: [
        { text: "Jazz Piano", detail: "15 years of experience" },
        { text: "Jazz Trumpet", detail: "10 years of experience" },
        { text: "Digital music development using Strudel.cc to create synthesizers", link: { url: "https://strudel.cc/", label: "Strudel.cc" } }
      ]
    },
    investment: {
      title: "Investment",
      icon: "chart",
      items: [
        { text: "Using Python to analyze Fidelity account data, track portfolio performance, and experiment with simple allocation and rebalancing strategies over time." }
      ]
    },
    eagleScout: {
      title: "Eagle Scout",
      icon: "scout",
      items: [
        { text: "Eagle Scout with Silver Palm, Boy Scouts of America" },
        { text: "Led 100+ volunteers in community service project" },
        { text: "Earned Silver Palm honor for earning additional merit badges and serving in leadership" },
        { text: "Served on senior patrol for 4+ years" },
        { text: "Headed troop of 60+ scouts on biweekly camping and backpacking trips" }
      ]
    },
    ideaBounce: {
      title: "WashU Olin Big IdeaBounce",
      icon: "lightbulb",
      link: { url: "https://olin.washu.edu/about/news-and-media/news/2020/05/ideas-win-big-at-olins-first-bigidea-bounce.php", label: "Read More" },
      items: [
        { text: "Runner-Up Venture Award with Cash Prize" },
        { text: "Won grant over 200+ teams for product design of new Epi-Pen with financial model and full product design" }
      ]
    }
  }
};
