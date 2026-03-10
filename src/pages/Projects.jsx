import React from "react";
import { profile } from "../data/profile";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title mb-2">Projects</h2>
        <p className="text-gray-500 mb-8">Personal and collaborative software projects</p>
      </motion.div>

      {/* Currently Working On */}
      <motion.div
        className="card p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-brand-500 mb-3">What I'm Working On</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 leading-relaxed">
              <a href="https://freeweight.fit" target="_blank" rel="noreferrer" className="text-accent-600 hover:text-accent-500 font-semibold">Freeweight.fit</a>
              {" "}&mdash; A better solution for coach-athlete lifting programming. Built with a FastAPI + PostgreSQL backend, a React + TypeScript frontend,
              and JWT authentication. Features include training program creation, athlete max tracking, workout logging, and team/group management,
              all deployed in a scalable architecture with Alembic migrations.
            </p>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-brand-500">Trump Mentions Trading Bot</span>
              {" "}&mdash; A fully automated trading system that predicts words Trump will say in upcoming speeches and trades on Kalshi prediction markets.
              The pipeline scrapes transcripts from 10+ sources, fine-tunes a Llama-3 8B model via LoRA on Google Colab A100 GPUs,
              runs Monte Carlo simulations to generate term probabilities, and executes trades using Kelly criterion sizing.
              Built with FastAPI, SQLAlchemy, scikit-learn, Unsloth/TRL, the Google Drive API, and a Streamlit dashboard for monitoring.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {profile.projects.map((p, index) => (
          <ProjectCard key={p.id} project={p} index={index} />
        ))}
      </div>
    </section>
  );
}
