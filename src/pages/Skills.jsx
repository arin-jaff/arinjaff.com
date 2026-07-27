import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";

const categories = [
  {
    title: "languages",
    description: "core programming languages",
    skills: profile.skills.languages
  },
  {
    title: "ml / ai",
    description: "agents, models and data tooling",
    skills: profile.skills.mlAi
  },
  {
    title: "infrastructure & web",
    description: "services, platforms and delivery",
    skills: profile.skills.infrastructure
  }
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader number="03" name="skills" title="technical skills" />

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
              <div key={category.title} className="py-5 md:py-6">
                <div className="mb-3 flex flex-wrap items-baseline gap-4">
                  <span className="specimen-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="label">{category.description}</span>
                </div>
                <h3 className="font-display text-base leading-tight tracking-tight md:text-lg">
                  {category.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="label border border-border px-2 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Relevant coursework" className="mt-14">
          <h2 className="label-strong mb-3">relevant coursework</h2>
          <div className="border-y border-border py-5 md:py-6">
            <p className="text-sm text-muted-foreground">
              {profile.education.coursework.join(" · ")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
