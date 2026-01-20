// Profile data sourced from uploaded resume. See resume: :contentReference[oaicite:1]{index=1}
export const profile = {
  name: "Arin Kosar Jaff",
  location: "Kirkland, WA",
  email: "akj2147@columbia.edu",
  phone: "(425) 229-1603",
  github: "https://github.com/arin-jaff",
  linkedin: "https://www.linkedin.com/in/arin-jaff-252977251/",
  headshot: "/personal_photo.jpg",
  resume: "/Jaff, Arin - Resume.pdf",
  title: "Computer Science Student & Software Engineer",
  education: {
    school: "Columbia University",
    period: "Sep 2022 — May 2026",
    degree: "B.S. Computer Science",
    gpa: "3.77/4.00",
    honors: ["Men's Varsity Crew", "Dean's List"],
    coursework: ["Machine Learning", "Artificial Intelligence", "Analysis of Algorithms", "Natural Language Processing", "Computer Networks", "Cloud Computing", "Hacking 4 Defense", "Large Language Models", "Ethical and Responsible AI", "Foundations and Ethics of LLMs"]
  },
  experience: [
    {
      company: "Columbia University Computer Science",
      title: "Teaching Assistant, Cloud Computing",
      location: "New York, NY",
      period: "Sep 2025 — May 2026",
      bullets: [
        "Led weekly office hours for 200+ students in theory and applications for Cloud Computing.",
        "Code reviewed and graded 50+ student projects with AWS management and microservice deployment."
      ]
    },
    {
      company: "Garmin Ltd.",
      title: "Software Engineer Intern — Device Interactions",
      location: "Olathe, KS",
      period: "May 2025 — Aug 2025",
      bullets: [
        "Shipped new failover system for public Garmin Weather API, reducing a key endpoint's error rate by 99%.",
        "Used Java Spring Boot and Redis for state management; developed backend service planned for Q1 2026."
      ]
    },
    {
      company: "Covet Inc.",
      title: "Full-Stack Software Engineer Intern",
      location: "Seattle, WA",
      period: "May 2024 — Aug 2024",
      bullets: [
        "Launched AWS-based onboarding service used to acquire first 100+ clients.",
        "Implemented test-driven site error detection (Jest) and a sitewide Rule Engine reducing client configuration errors by 99%+."
      ]
    },
    {
      company: "University of Chicago, Dept. of Economics",
      title: "Research Assistant, Prof. John List",
      location: "Chicago, IL",
      period: "May 2023 — Aug 2023",
      bullets: [
        "Authored data-driven paper on brain-drain; won department-wide internship competition.",
        "Automated citation management and reduced citation time by 80%."
      ]
    }
  ],
  projects: [
    {
      id: "strava-viz",
      title: "Strava Activity Visualizer",
      tagline: "Interactive heatmap of personal athletics",
      thumb: "/strava_logo.png",
      url: "https://your-deployed-strava-app.com", 
      description:
        "A React application integrating the Strava API to fetch athlete activities, decode polyline geodata, and render interactive heatmaps using Leaflet."
    },
    {
      id: "ergroom",
      title: "Who's In the Erg Room?",
      tagline: "Real-time erg room occupancy tracker",
      thumb: "/ergroom_logo.png",
      url: "https://ergroom.arinjaff.com",
      github: "https://github.com/arin-jaff/erg-room",
      description:
        "Real-time tracking system for erg room occupancy, helping athletes plan their workouts efficiently."
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
      id: "ctrl-alt-drive",
      title: "ctrl-alt-drive",
      tagline: "Hackign 4 Defense Project on National Guard Vehicle Readiness. Proposal was successful, and is currently moving forward through legislative process!",
      thumb: "/wheels_logo.jpeg",
      github: "https://github.com/alexakfk/ctrl-alt-drive",
      pdfLink: "/WheelsOfReadiness.pdf",
      description:
        "WheelsOfReadiness - A legislative proposal addressing autonomous vehicle policy and infrastructure readiness."
    }
  ],
  skills: {
    advanced: ["Python", "Java", "JavaScript"],
    intermediate: ["TypeScript", "SQL", "C(++/C)","HTML/CSS"],
    proficient: ["R", "LaTeX"],
    tools: ["Java Spring Boot", "PyTorch", "Maven", "AWS (Lambda, S3, DynamoDB, Pinpoint, VPC)", "Git", "MongoDB", "Neo4j", "Jest", "Jupyter", "NumPy", "Pandas", "React", "Flask"]
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
          text: "IRA National Championship Bronze Medalist 2025",
          link: { url: "https://gocolumbialions.com/news/2025/6/1/general-lightweight-2v8-crew-earns-bronze-on-final-day-of-ira-national-championships", label: "Read More" }
        },
        { text: "Maintained 4.0+ GPA while managing 40+ hr/week athletic time commitment" }
      ]
    },
    openSource: {
      title: "Open Source Contributions",
      icon: "code",
      description: "Passionate about contributing to open source projects, particularly in sports analytics and scientific computing.",
      items: [
        { text: "Projects:" },
        { text: "Contributions to Tidal, a live coding music environment", link: { url: "https://codeberg.org/uzu/tidal", label: "Tidal" } },
        { text: "Floodlight Sports Analytics", link: { url: "https://github.com/floodlight-sports/floodlight", label: "floodlight" } }
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
        { text: "Finalist — Spring 2022" },
        { text: "Won grant over 200+ teams for product design of new Epi-Pen with financial model and full product design" }
      ]
    }
  }
};
