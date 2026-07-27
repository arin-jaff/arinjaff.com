import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader number="—" name="404" title="nothing filed here" />

      <div className="max-w-3xl border-y border-border py-6">
        <p className="text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="group mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-accent"
        >
          <span className="font-mono transition-transform duration-200 group-hover:-translate-x-1">
            ↖
          </span>
          back to index
        </Link>
      </div>
    </div>
  );
}
