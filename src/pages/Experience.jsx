import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader number="01" name="experience" title="where i've worked" />

      <div className="max-w-3xl">
        <h2 className="label-strong mb-3">professional experience and internships</h2>
        <div className="divide-y divide-border border-y border-border">
          {profile.experience.map((item, i) => (
            <article key={item.company} className="py-5 md:py-6">
              <div className="mb-2 flex flex-wrap items-baseline gap-4">
                <span className="specimen-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="label">{item.location}</span>
                <span className="label ml-auto">{item.period}</span>
              </div>

              <h3 className="font-display text-base leading-tight tracking-tight md:text-lg">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>

              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="specimen-index shrink-0 pt-0.5">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
