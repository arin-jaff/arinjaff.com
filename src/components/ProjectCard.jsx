import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="card p-4 flex flex-col gap-3"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="h-40 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
        {project.thumb ? (
          <img src={project.thumb} alt={project.title} className="object-cover h-full w-full" />
        ) : (
          <div className="text-sm text-slate-500 p-4">Thumbnail</div>
        )}
      </div>
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="text-sm text-slate-600">{project.tagline}</p>
    </motion.a>
  );
}
