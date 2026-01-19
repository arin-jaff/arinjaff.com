import React from "react";
import { profile } from "../data/profile";
import ExperienceItem from "../components/ExperienceItem";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Experience</h2>
        <p className="text-gray-500 mb-8">Professional experience and internships</p>
      </motion.div>

      <div className="space-y-4">
        {profile.experience.map((exp, i) => (
          <ExperienceItem key={i} item={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
