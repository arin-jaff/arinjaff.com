import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Personal from "./pages/Personal";
import NotFound from "./pages/NotFound";
import { profile } from "./data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from "./components/icons";

export const folders = [
  { to: "/", label: "index", number: "00", color: "var(--archive-tab-index)" },
  { to: "/experience", label: "Experience", number: "01", color: "var(--archive-tab-visual)" },
  { to: "/projects", label: "Projects", number: "02", color: "var(--archive-tab-play)" },
  { to: "/skills", label: "Skills", number: "03", color: "var(--archive-tab-writing)" },
  { to: "/personal", label: "Personal", number: "04", color: "var(--archive-tab-about)" }
];

function Tab({ folder, active }) {
  return (
    <Link
      to={folder.to}
      className={`archive-layer-tab${active ? " archive-layer-tab-active" : ""}`}
      aria-current={active ? "page" : undefined}
      tabIndex={active ? 0 : undefined}
    >
      <span>{folder.label}</span>
      <span className="archive-tab-number">{folder.number}</span>
    </Link>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const activeSlot = folders.findIndex((f) => f.to === pathname);

  return (
    <div className="archive-shell">
      <div className="archive-shell-chrome">
        <div className="archive-socials">
          <a
            className="archive-social-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            className="archive-social-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a className="archive-social-link" href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a className="archive-social-link" href={profile.resume} download aria-label="Résumé">
            <FileTextIcon />
          </a>
        </div>
      </div>

      <div className="archive-folder-stack">
        {folders.map((folder, slot) => {
          // the index folder also holds anything that doesn't match a route (404)
          const active = slot === activeSlot || (activeSlot === -1 && slot === 0);

          return (
            <section
              key={folder.to}
              className={`archive-folder-layer${active ? " archive-folder-layer-active" : ""}`}
              style={{ "--folder-color": folder.color, "--slot": String(slot) }}
            >
              <Tab folder={folder} active={active} />

              {active ? (
                <div className="archive-layer-body">
                  <main className="archive-folder-content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/experience" element={<Experience />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/personal" element={<Personal />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              ) : (
                <Link
                  to={folder.to}
                  className="archive-layer-body"
                  aria-label={`Open ${folder.label} folder`}
                  tabIndex={-1}
                />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
