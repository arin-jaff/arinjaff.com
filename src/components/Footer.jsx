import React from "react";
import { profile } from "../data/profile";
import githubLogo from "../assets/github_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">

          </div>
          <div className="flex items-center gap-4">
            View more about me!
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="GitHub"
            >
              <img src={githubLogo} alt="GitHub" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="LinkedIn"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
