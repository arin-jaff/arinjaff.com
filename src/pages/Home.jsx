import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, FileTextIcon } from "../components/icons";
import ContributionsChart from "../components/ContributionsChart";
import CompanyLogo from "../components/CompanyLogo";
import Definition from "../components/Definition";
import wahooHenley from "../assets/WahooHenley.jpeg";

const index = [
  { number: "01", label: "experience", to: "/experience" },
  { number: "02", label: "projects", to: "/projects" },
  { number: "03", label: "skills", to: "/skills" },
  { number: "04", label: "personal", to: "/personal" },
  { number: "05", label: "github", href: profile.github }
];

// Pulled from the resume data so the two can't drift apart.
const current = profile.experience.find((item) => item.company === "Phia");

const rowClass =
  "group grid grid-cols-[34px_1fr_auto] items-center gap-3 py-3.5 transition-colors hover:bg-paper-deep";

function IndexRow({ item }) {
  const inner = (
    <>
      <span className="font-mono text-[9px] text-muted-foreground">{item.number}</span>
      <span className="font-display text-sm leading-none">{item.label}</span>
      <span className="font-mono text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
        ↗
      </span>
    </>
  );

  return item.to ? (
    <Link to={item.to} className={rowClass}>
      {inner}
    </Link>
  ) : (
    <a href={item.href} target="_blank" rel="noreferrer" className={rowClass}>
      {inner}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid gap-10 py-4 md:py-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <div className="flex flex-wrap items-start gap-6">
            <div className="archive-mat w-32 shrink-0 sm:w-40">
              <img
                src={profile.headshot}
                alt={profile.name}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="min-w-[14rem] flex-1">
              <h1 className="font-display text-2xl leading-none md:text-3xl">{profile.name}</h1>
              <p className="mt-3 text-sm md:text-base">{profile.title}</p>
              <div className="mt-2 text-xs text-muted-foreground md:text-sm">
                <Definition
                  term="PR"
                  pronunciation="/ˌpiː ˈɑːr/"
                  senses={[
                    "Abbreviation for “pull request,” a proposal by a developer to merge code changes from one branch into a main codebase",
                    "Abbreviation for “personal record,” an individual’s highest achievement in a scope or field, often athletics"
                  ]}
                />{" "}
                specialist
              </div>

              <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPinIcon className="size-4" />
                  {profile.location}
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <MailIcon className="size-4" />
                  {profile.email}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <FileTextIcon className="size-4" />
                  Résumé
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed md:text-lg md:leading-relaxed">
            <p>
              I am a Computer Scientist and Software Engineer with experience building cloud services
              and full-stack enterprise applications. I enjoy designing scalable systems that solve
              real-world problems.
            </p>
            <p>
              I am a Software Engineer on the Core Platform team at Phia, where I build MCP servers
              and the AI tooling around them. I hold a Computer Science degree from Columbia
              University, where I focused on machine learning, artificial intelligence, and cloud
              computing.
            </p>
            <p>
              {/* Mounted like a print stuck to the page, so the block of copy
                  breaks up instead of running flat to the margin. */}
              <a
                href="https://traininggeeks.net"
                target="_blank"
                rel="noreferrer"
                className="archive-mat float-right ml-5 mt-1 block w-20 -rotate-2 transition-transform duration-200 hover:rotate-0 sm:w-24"
              >
                <img
                  src="/traininggeeks.png"
                  alt="TrainingGeeks"
                  className="aspect-square w-full object-cover object-left"
                />
              </a>
              I am working on several projects, including{" "}
              <a
                href="https://traininggeeks.net"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
              >
                TrainingGeeks
              </a>{" "}
              — an open-source, self-hosted endurance and strength analytics platform that keeps all
              your training data on your own machine. Check out a{" "}
              <a
                href="https://demo.traininggeeks.net"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
              >
                live demo here
              </a>
              , running my own training history off a Raspberry Pi at home. Have a look at my other
              projects and prior experience!
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <p className="label-strong mb-3 block">index</p>
            <div className="divide-y divide-border border-y border-border">
              {index.map((item) => (
                <IndexRow key={item.number} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p className="label-strong mb-3 block">now</p>
            <div className="border border-border bg-mount p-6 shadow-[0_2px_8px_-2px_var(--archive-shadow)]">
              <div className="flex items-center gap-4">
                <CompanyLogo
                  company={current.company}
                  logo={current.logo}
                  className="size-14"
                />
                <div className="min-w-0">
                  <h2 className="font-display text-xl leading-tight">{current.company}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{current.title}</p>
                </div>
              </div>
              <p className="label mt-5 block border-t border-border pt-4">{current.period}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-4xl space-y-14">
        <ContributionsChart />

        <section aria-label="Athletics">
          <h2 className="label-strong mb-3">athletics</h2>
          <div className="grid gap-8 border-y border-border py-6 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I just completed my career as a{" "}
                <span className="font-medium text-foreground">D1 athlete</span> for the{" "}
                <span className="font-medium text-foreground">Columbia Lightweight Rowing team</span>.
                I was a part of the 2V8 crew which earned{" "}
                <span className="font-medium text-foreground">
                  bronze at the 2025 IRA National Championships
                </span>
                , representing the culmination of our team's dedication and hard work. As a part of
                the 1V, we won <span className="font-medium text-foreground">Wahoo Henley</span>{" "}
                hosted by UVA Men's Rowing.
              </p>
              <a
                href="https://gocolumbialions.com/news/2025/6/1/general-lightweight-2v8-crew-earns-bronze-on-final-day-of-ira-national-championships"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-accent"
              >
                Read the press release
                <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
            <figure>
              <div className="archive-mat">
                <img
                  src={wahooHenley}
                  alt="Columbia Lightweight Rowing team at Wahoo Henley Regatta"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="label mt-3 block text-center">
                team at wahoo henley regatta
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-label="Education">
          <h2 className="label-strong mb-3">education</h2>
          <div className="border-y border-border py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-base leading-tight tracking-tight md:text-lg">
                {profile.education.school}
              </h3>
              <span className="label">gpa {profile.education.gpa}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{profile.education.degree}</p>
            <p className="specimen-index mt-1 block">{profile.education.period}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {profile.education.honors.map((honor) => (
                <span key={honor} className="label border border-border px-2 py-1">
                  {honor}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <p className="label mb-2">relevant coursework</p>
              <p className="text-sm text-muted-foreground">
                {profile.education.coursework.join(" · ")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
