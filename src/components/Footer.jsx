import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-5xl mx-auto p-6 text-sm text-slate-600 flex justify-between">
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="mx-2">·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
