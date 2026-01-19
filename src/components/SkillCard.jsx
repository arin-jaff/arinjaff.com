import React from "react";
import { motion } from "framer-motion";

const colorMap = {
  accent: "bg-accent-50 text-accent-600 border-accent-100",
  brand: "bg-brand-50 text-brand-500 border-brand-100",
  gray: "bg-gray-50 text-gray-600 border-gray-200"
};

export default function SkillCard({ label, color = "gray", index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className={`px-3 py-1.5 text-sm font-medium rounded border transition-all duration-200 hover:shadow-sm ${colorMap[color]}`}
    >
      {label}
    </motion.span>
  );
}
