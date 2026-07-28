import React from "react";

export default function PageHeader({ title }) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-2xl leading-none md:text-3xl">{title}</h1>
      <span
        aria-hidden="true"
        className="mt-4 block h-1 w-14 rounded-full"
        style={{ background: "var(--folder-color)" }}
      />
    </header>
  );
}
