import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-1">
        <motion.img
          src={profile.headshot}
          alt={profile.name}
          className="rounded-2xl w-full card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        />
        <div className="mt-4 card p-4">
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <p className="text-sm text-slate-600">{profile.title}</p>
          <p className="mt-2 text-sm">{profile.location}</p>
          <a href={`mailto:${profile.email}`} className="block mt-2 text-sm text-sky-600">
            {profile.email}
          </a>
          <div className="mt-4 space-x-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ml-3 text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-6">
        <motion.div className="card p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-slate-700 leading-relaxed">
            I am a Computer Science student with experience building cloud services and full-stack
            products. I enjoy designing scalable systems, applying machine learning, and shipping
            production-ready features. Select work includes internships at Garmin and Covet, and
            research work on data-driven economics experiments.
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/projects" className="px-4 py-2 rounded-md border">
              Projects
            </Link>
            <Link to="/experience" className="px-4 py-2 rounded-md border">
              Experience
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold">Latest</h3>
            <p className="text-sm mt-2">Teaching Assistant, Cloud Computing (Columbia CS)</p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">Athletics</h3>
            <p className="text-sm mt-2">Columbia Men’s Varsity Crew — IRA National Championship bronze</p>
          </div>
        </div>
      </div>
    </section>
  );
}
