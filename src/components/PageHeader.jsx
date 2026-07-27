import React from "react";

export default function PageHeader({ number, name, title }) {
  return (
    <header className="mb-12">
      <p className="label mb-3">
        folder {number} · {name}
      </p>
      <h1 className="font-display text-2xl leading-none md:text-3xl">{title}</h1>
    </header>
  );
}
