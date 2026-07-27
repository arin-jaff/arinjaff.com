import React from "react";

export default function PageHeader({ title }) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-2xl leading-none md:text-3xl">{title}</h1>
    </header>
  );
}
