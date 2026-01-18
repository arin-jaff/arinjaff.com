// Profile data sourced from uploaded resume. See resume: :contentReference[oaicite:1]{index=1}
export const profile = {
  name: "Arin Kosar Jaff",
  location: "Kirkland, WA",
  email: "akj2147@columbia.edu",
  phone: "(425) 229-1603",
  github: "https://github.com/arin-jaff",
  linkedin: "https://www.linkedin.com/in/arin-jaff-252977251/",
  headshot: "/Arin_Headshot.jpeg",
  title: "Computer Science Student & Software Engineer",
  education: {
    school: "Columbia University",
    period: "Sep 2022 — May 2026",
    degree: "B.S. Computer Science",
    gpa: "3.80/4.00"
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
      id: "pokebank",
      title: "Pokébank",
      tagline: "Gamified decentralized P2P trading platform",
      thumb: "/projects/pokebank-thumb.jpg",
      url: "https://example.com/pokebank",
      description:
        "Decentralized P2P trading system with Merkle tree hashing, fork resolution, nonce mining, and a card-trading GUI."
    },
    {
      id: "billswithfriends",
      title: "BillsWithFriends",
      tagline: "Receipt parsing & group-budgeting SaaS",
      thumb: "/projects/billswithfriends-thumb.jpg",
      url: "https://example.com/billswithfriends",
      description:
        "Receipt parsing and group-budgeting platform with documented APIs and AWS-backed microservices supporting session handling."
    }
  ],
  skills: {
    advanced: ["Python", "Java", "JavaScript"],
    intermediate: ["TypeScript", "SQL", "C(++/C)","HTML/CSS"],
    proficient: ["R", "LaTeX"],
    tools: ["PyTorch", "AWS (Lambda, S3, DynamoDB)", "React", "Spring Boot", "MongoDB", "Neo4j"]
  },
  interests: [
    "Competitive rowing (IRA National Championship bronze medalist)",
    "Distributed systems and cloud-native architecture",
    "Open-source contributions",
    "Hiking & backpacking"
  ],
  misc: {
    leadership: [
      "Eagle Scout — led 100+ volunteers project",
      "WashU Olin Big IdeaBounce finalist — product design award"
    ]
  }
};
