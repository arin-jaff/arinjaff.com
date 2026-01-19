import React from "react";
import { motion } from "framer-motion";

export default function ExperienceItem({ item, index }) {
  return (
    <motion.article
      className="card p-6 card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-semibold text-brand-500">{item.title}</h3>
          <div className="text-sm text-gray-600 mt-1">
            <span className="font-medium">{item.company}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{item.location}</span>
          </div>
        </div>
        <div className="text-sm text-gray-400 font-medium whitespace-nowrap">{item.period}</div>
      </div>

      <ul className="mt-4 space-y-2">
        {item.bullets.map((b, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
