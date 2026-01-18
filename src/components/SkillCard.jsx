import React from "react";

export default function SkillCard({ label }) {
  return (
    <span className="px-3 py-1 bg-slate-100 text-sm rounded-full border text-slate-700">
      {label}
    </span>
  );
}
