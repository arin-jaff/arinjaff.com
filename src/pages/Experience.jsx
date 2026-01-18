import React from "react";
import { profile } from "../data/profile";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {profile.experience.map((exp, i) => (
          <ExperienceItem key={i} item={exp} />
        ))}
      </div>
    </section>
  );
}
