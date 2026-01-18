import React from "react";
import { profile } from "../data/profile";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="card p-4">
        <h3 className="font-medium">Advanced</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.advanced.map((s) => <SkillCard key={s} label={s} />)}
        </div>

        <h3 className="font-medium mt-4">Intermediate</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.intermediate.map((s) => <SkillCard key={s} label={s} />)}
        </div>

        <h3 className="font-medium mt-4">Tools</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.tools.map((s) => <SkillCard key={s} label={s} />)}
        </div>
      </div>
    </section>
  );
}
