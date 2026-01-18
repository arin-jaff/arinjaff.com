import React from "react";
import { profile } from "../data/profile";

export default function Interests() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Interests & Personal</h2>
      <div className="card p-4">
        <ul className="list-disc ml-5">
          {profile.interests.map((it, idx) => <li key={idx} className="mb-2">{it}</li>)}
        </ul>

        <h3 className="mt-4 font-medium">Leadership & Achievements</h3>
        <ul className="list-disc ml-5 mt-2">
          {profile.misc.leadership.map((l, idx) => <li key={idx} className="mb-1">{l}</li>)}
        </ul>
      </div>
    </section>
  );
}
