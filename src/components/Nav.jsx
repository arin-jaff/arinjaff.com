import React from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

export default function Nav() {
  const loc = useLocation();
  const items = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/interests", label: "Interests" }
  ];
  return (
    <nav className="bg-white border-b sticky top-0 z-30">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-semibold text-lg">
          {profile.name}
        </Link>
        <div className="space-x-4">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={`px-3 py-2 rounded-md ${
                loc.pathname === it.to ? "bg-brand-50" : "hover:bg-gray-100"
              }`}
            >
              {it.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-3 px-3 py-2 rounded-md border"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
