import React from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";
import raceDayPhoto from "../assets/RaceDay.jpeg";
import oarsIcon from "../assets/oars.png";

const categoryIcons = {
  rowing: (
    <img src={oarsIcon} alt="Rowing" className="w-5 h-5 object-contain" />
  ),
  scout: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  music: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
};

function PersonalItem({ item, index }) {
  return (
    <motion.li
      className="flex items-start gap-3 text-gray-600"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
      <div>
        <span>{item.text}</span>
        {item.detail && (
          <span className="text-gray-400 ml-2">({item.detail})</span>
        )}
        {item.link && (
          <a
            href={item.link.url}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-accent-500 hover:text-accent-600 text-sm inline-flex items-center gap-1"
          >
            {item.link.label}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.li>
  );
}

function PersonalCard({ category, icon, index, isRowing }) {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <h3 className="font-semibold text-brand-500 mb-4 flex items-center gap-2">
        <span className="text-accent-500">{icon}</span>
        {category.title}
        {category.link && (
          <a
            href={category.link.url}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-accent-500 hover:text-accent-600 text-sm inline-flex items-center gap-1"
          >
            {category.link.label}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </h3>

      {category.description && (
        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
      )}

      {isRowing && (
        <div className="mb-4">
          <img
            src={raceDayPhoto}
            alt="Columbia Lightweight Rowing Race Day"
            className="rounded-lg shadow-soft border border-gray-200 w-full object-cover"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">Race Day, IRA National Championships</p>
        </div>
      )}

      <ul className="space-y-3">
        {category.items.map((item, idx) => (
          <PersonalItem key={idx} item={item} index={idx} />
        ))}
      </ul>
    </motion.div>
  );
}

export default function Personal() {
  const categories = Object.entries(profile.personal);

  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Personal</h2>
        <p className="text-gray-500 mb-8">Beyond the code</p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="card p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-gray-600 leading-relaxed">
          Beyond software engineering, I am deeply involved in athletics, music, and community leadership.
          As a D1 rower at Columbia, I balance the demands of competitive athletics with academic excellence.
          My diverse interests—from performing jazz music to leading Eagle Scout projects—shape my approach
          to problem-solving and teamwork in both technical and personal pursuits.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map(([key, category], idx) => (
          <PersonalCard
            key={key}
            category={category}
            icon={categoryIcons[category.icon]}
            index={idx}
            isRowing={key === 'rowing'}
          />
        ))}
      </div>
    </section>
  );
}
