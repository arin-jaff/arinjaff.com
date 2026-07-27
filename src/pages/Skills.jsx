import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";

const groups = [
  {
    heading: "programming languages",
    categories: [
      { title: "advanced", description: "primary languages with deep expertise", skills: profile.skills.advanced },
      { title: "intermediate", description: "languages used in projects and coursework", skills: profile.skills.intermediate },
      { title: "proficient", description: "additional technical skills", skills: profile.skills.proficient }
    ]
  },
  {
    heading: "expertise & tools",
    categories: [
      { title: "expertise areas", description: "core competencies and specializations", skills: profile.skills.expertise },
      { title: "tools & frameworks", description: "technologies and platforms", skills: profile.skills.tools }
    ]
  }
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader number="03" name="skills" title="technical skills" />

      <div className="max-w-3xl">
        <p className="mb-12 text-sm leading-relaxed text-muted-foreground">
          My technical skills have been developed through rigorous Computer Science coursework at
          Columbia University, hands-on experience in software engineering internships at Garmin and
          Covet, and through developing several applications. I have gained expertise in full-stack
          development, cloud computing, and AI/ML through both academic study and real-world
          application building production systems.
        </p>

        <div className="space-y-14">
          {groups.map((group) => (
            <section key={group.heading} aria-label={group.heading}>
              <h2 className="label-strong mb-3">{group.heading}</h2>
              <div className="divide-y divide-border border-y border-border">
                {group.categories.map((category, i) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
