import React from "react";
import { motion } from "framer-motion";
import githubLogo from "../assets/github_logo.png";

export default function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      className="mb-8 rounded-lg p-[2px] bg-gradient-to-r from-accent-500 via-purple-500 to-accent-500 bg-[length:200%_auto] animate-gradient-x shadow-card-hover"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card !border-0 rounded-[6px] overflow-hidden group">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-accent-50 flex items-center justify-center p-8 min-h-[220px]">
            <img
              src={project.thumb}
              alt={project.title}
              className="object-contain max-h-48 w-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-3 p-8">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-accent-600 to-purple-600 px-2.5 py-1 rounded-full">
                Featured
              </span>
              <h3 className="text-2xl font-bold text-brand-500">{project.title}</h3>
            </div>
            <p className="text-sm text-accent-600 font-medium mt-2">{project.tagline}</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{project.description}</p>

            {project.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex items-center gap-4 flex-wrap">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !py-2 text-sm inline-flex items-center gap-1.5"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !py-2 text-sm inline-flex items-center gap-1.5"
                >
                  <img src={githubLogo} alt="GitHub" className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
