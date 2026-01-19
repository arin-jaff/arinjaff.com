import React from "react";
import { profile } from "../data/profile";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Advanced",
    description: "Primary languages with deep expertise",
    skills: profile.skills.advanced,
    color: "accent"
  },
  {
    title: "Intermediate",
    description: "Languages used in projects and coursework",
    skills: profile.skills.intermediate,
    color: "brand"
  },
  {
    title: "Tools & Frameworks",
    description: "Technologies and platforms",
    skills: profile.skills.tools,
    color: "gray"
  }
];

export default function Skills() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Skills</h2>
        <p className="text-gray-500 mb-8">Technical skills and proficiencies</p>
      </motion.div>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-semibold text-brand-500">{category.title}</h3>
              <span className="text-xs text-gray-400">{category.description}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill} label={skill} color={category.color} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
