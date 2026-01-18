import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
      <p className="mb-6">The page you requested does not exist.</p>
      <Link to="/" className="px-4 py-2 border rounded-md">Return home</Link>
    </div>
  );
}
