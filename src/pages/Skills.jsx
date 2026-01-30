import React from "react";
import { profile } from "../data/profile";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const languageCategories = [
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
    title: "Proficient",
    description: "Additional technical skills",
    skills: profile.skills.proficient,
    color: "brand"
  }
];

const expertiseCategories = [
  {
    title: "Expertise Areas",
    description: "Core competencies and specializations",
    skills: profile.skills.expertise,
    color: "accent"
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
        <h2 className="section-title mb-2">Technical Skills</h2>
        <p className="text-gray-500 mb-8">Skills and proficiencies developed through coursework, internships, and personal projects</p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="card p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-gray-600 leading-relaxed">
          My technical skills have been developed through rigorous Computer Science coursework at Columbia University,
          hands-on experience in software engineering internships at Garmin and Covet, and various personal projects.
          I have gained expertise in full-stack development, cloud computing, and AI/ML through both academic study and
          real-world application building production systems.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Programming Languages */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-brand-500">Programming Languages</h3>
          {languageCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h4 className="font-semibold text-brand-500">{category.title}</h4>
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

        {/* Right Column - Expertise & Tools */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-brand-500">Expertise & Tools</h3>
          {expertiseCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h4 className="font-semibold text-brand-500">{category.title}</h4>
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
      </div>
    </section>
  );
}
