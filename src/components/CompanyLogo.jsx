import React from "react";

// Falls back to a monogram tile so a company without a sourced logo still
// lines up with the ones that have one.
export default function CompanyLogo({ company, logo, className = "size-8" }) {
  const base = `${className} shrink-0 rounded border border-border bg-mount`;

  if (!logo) {
    return (
      <span
        aria-hidden="true"
        className={`${base} flex items-center justify-center font-display text-sm text-muted-foreground`}
      >
        {company.charAt(0)}
      </span>
    );
  }

  return <img src={logo} alt={`${company} logo`} className={`${base} object-contain p-1`} />;
}
