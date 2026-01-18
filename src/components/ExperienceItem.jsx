import React from "react";
import { motion } from "framer-motion";

export default function ExperienceItem({ item }) {
  return (
    <motion.article
      className="card p-4"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <div className="text-sm text-slate-600">{item.company} — {item.location}</div>
        </div>
        <div className="text-sm text-slate-500">{item.period}</div>
      </div>
      <ul className="mt-3 list-disc ml-5 text-sm text-slate-700">
        {item.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}
