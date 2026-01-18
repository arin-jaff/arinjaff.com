import React from "react";
import { profile } from "../data/profile";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <p className="mb-6 text-slate-600">Interactive thumbnails & playful layout inspired by Neal.fun.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {profile.projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
