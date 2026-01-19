import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import githubLogo from "../assets/github_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";

export default function Nav() {
  const loc = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/personal", label: "Personal" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="font-semibold text-lg text-brand-500 hover:text-brand-600 transition-colors">
            {profile.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  loc.pathname === it.to
                    ? "bg-brand-500 text-white"
                    : "text-gray-600 hover:text-brand-500 hover:bg-gray-50"
                }`}
              >
                {it.label}
              </Link>
            ))}

            <div className="ml-3 pl-3 border-l border-gray-200 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded hover:bg-gray-50 transition-colors"
                aria-label="GitHub"
              >
                <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded hover:bg-gray-50 transition-colors"
                aria-label="LinkedIn"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href={profile.resume}
                download
                className="ml-2 px-3 py-1.5 bg-brand-500 text-white text-sm font-medium rounded hover:bg-brand-600 transition-colors inline-flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {items.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded text-sm font-medium transition-all duration-200 ${
                    loc.pathname === it.to
                      ? "bg-brand-500 text-white"
                      : "text-gray-600 hover:text-brand-500 hover:bg-gray-50"
                  }`}
                >
                  {it.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-gray-200">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded hover:bg-gray-50 transition-colors"
                  aria-label="GitHub"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded hover:bg-gray-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href={profile.resume}
                  download
                  className="ml-auto px-3 py-1.5 bg-brand-500 text-white text-sm font-medium rounded hover:bg-brand-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
