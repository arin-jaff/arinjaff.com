import React, { useState } from "react";
import { motion } from "framer-motion";
import githubLogo from "../assets/github_logo.png";

export default function ProjectCard({ project, index }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.div
      className="card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-44 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
        {project.thumb ? (
          <img
            src={project.thumb}
            alt={project.title}
            className="object-contain h-full w-full p-4 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Project Preview</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-500">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{project.tagline}</p>
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{project.description}</p>

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          {/* Live URL if available */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-accent-600 font-medium hover:text-accent-500 transition-colors"
            >
              View Live
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          {/* Single GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
            >
              <img src={githubLogo} alt="GitHub" className="w-4 h-4 mr-1" />
              GitHub
            </a>
          )}

          {/* PDF link */}
          {project.pdfLink && (
            <a
              href={project.pdfLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Proposal PDF
            </a>
          )}

          {/* Multiple GitHub repos dropdown */}
          {project.githubRepos && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors"
              >
                <img src={githubLogo} alt="GitHub" className="w-4 h-4 mr-1" />
                GitHub
                <svg className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                  {project.githubRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {repo.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
