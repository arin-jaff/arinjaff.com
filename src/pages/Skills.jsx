import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";

// Each group borrows a folder tab colour, so the palette stays the site's own.
const categories = [
  {
    title: "languages",
    description: "core programming languages",
    skills: profile.skills.languages,
    color: "var(--archive-tab-visual)"
  },
  {
    title: "ml / ai",
    description: "agents, models and data tooling",
    skills: profile.skills.mlAi,
    color: "var(--archive-tab-play)"
  },
  {
    title: "infrastructure & web",
    description: "services, platforms and delivery",
    skills: profile.skills.infrastructure,
    color: "var(--archive-tab-software)"
  }
];

function Chip({ color, children }) {
  return (
    <span
      className="label rounded-full px-3 py-1.5 transition-transform duration-150 hover:-translate-y-0.5"
      style={{ backgroundColor: color, color: "var(--archive-tab-ink)" }}
    >
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader title="technical skills" />

      <div className="max-w-3xl">
        <p className="mb-12 text-sm leading-relaxed text-muted-foreground">
          My technical skills have been developed through rigorous Computer Science coursework at
          Columbia University, hands-on experience building production AI systems at Phia, software
          engineering internships at Garmin and Covet, and through developing several applications. I
          have gained expertise in full-stack development, cloud computing, and AI/ML through both
          academic study and real-world application building production systems.
        </p>

        <section aria-label="Technical skills">
          <h2 className="label-strong mb-3">stack</h2>
          <div className="divide-y divide-border border-y border-border">
            {categories.map((category, i) => (
              <div key={category.title} className="py-6">
                <div className="mb-4 flex flex-wrap items-baseline gap-3">
                  <span className="specimen-index">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    aria-hidden="true"
                    className="size-2.5 self-center rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="font-display text-base leading-tight tracking-tight md:text-lg">
                    {category.title}
                  </h3>
                  <span className="label ml-auto">{category.description}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Chip key={skill} color={category.color}>
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Relevant coursework" className="mt-14">
          <h2 className="label-strong mb-3">relevant coursework</h2>
          <div className="border-y border-border py-6">
            <div className="flex flex-wrap gap-2">
              {profile.education.coursework.map((course) => (
                <span key={course} className="label rounded-full border border-border px-3 py-1.5">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
