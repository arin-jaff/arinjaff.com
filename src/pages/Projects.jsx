import React from "react";
import { profile } from "../data/profile";
import ProjectCard from "../components/ProjectCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Projects</h2>
        <p className="text-gray-500 mb-8">Personal and collaborative software projects</p>
      </motion.div>

      {featured.map((p) => (
        <FeaturedProjectCard key={p.id} project={p} />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rest.map((p, index) => (
          <ProjectCard key={p.id} project={p} index={index} />
        ))}
      </div>
    </section>
  );
}
