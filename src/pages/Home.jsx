import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import githubLogo from "../assets/github_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import ergroomLogo from "../assets/ergroom_logo.png";
import wahooHenley from "../assets/WahooHenley.jpeg";
import oarsIcon from "../assets/oars.png";

export default function Home() {
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Column - Profile */}
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profile.headshot}
              alt={profile.name}
              className="rounded w-full aspect-square object-cover shadow-soft border border-gray-200"
            />
          </motion.div>

          <motion.div
            className="mt-6 card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-2xl font-bold text-brand-500">{profile.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{profile.title}</p>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-accent-600 hover:text-accent-500 mt-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {profile.email}
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700"
              >
                <img src={githubLogo} alt="GitHub" className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-6">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-brand-500">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I am a Computer Scientist and Software Engineer with experience building cloud services and full-stack
              enterprise applications. I enjoy designing scalable systems that solve real-world problems. I plan on 
              working at Garmin in 2026 as a Software Engineer, and currently
              I am a Computer Science student at Columbia University, where I am focusing on
              machine learning, artificial intelligence, and cloud computing. I am working on several
              projects, including <a href="https://ergroom.arinjaff.com" target="_blank" rel="noreferrer" className="text-accent-600 hover:text-accent-500 font-medium">Who's in the Erg Room?</a> - 
              an online web-tracker for Columbia Lightweight Rowing which uses a Raspberry Pi, RFID module, and a Flask application to show real-time erg room occupancy. Check out my other projects and prior experience!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/experience" className="btn-secondary">
                View Experience
              </Link>
            </div>
          </motion.div>

          {/* Athletics Card */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-brand-500 flex items-center gap-2">
              <img src={oarsIcon} alt="Rowing Oars" className="w-5 h-5" />
              Athletics
            </h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  I am a <span className="font-semibold text-brand-500">D1 athlete</span> competing for the{" "}
                  <span className="font-semibold">Columbia Lightweight Rowing team</span>. I was a part of the 2V8 crew which earned{" "}
                  <span className="font-semibold text-accent-600">bronze at the 2025 IRA National Championships</span>,
                  representing the culmination of our team's dedication and hard work. As a part of the 1V this year, we recently won 
                   <span className="font-semibold text-accent-600"> Wahoo Henley</span> hosted by UVA Men's Rowing.,
                </p>
                <a
                  href="https://gocolumbialions.com/news/2025/6/1/general-lightweight-2v8-crew-earns-bronze-on-final-day-of-ira-national-championships"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-accent-600 hover:text-accent-500 font-medium transition-colors"
                >
                  Read the press release
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div>
                <img
                  src={wahooHenley}
                  alt="Columbia Lightweight Rowing team at Henley Royal Regatta"
                  className="rounded-lg shadow-soft border border-gray-200 w-full object-cover"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">Team at Henley Royal Regatta</p>
              </div>
            </div>
          </motion.div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
            {/* Current Role: Columbia TA */}
            <motion.div
                className="card p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
            >
                <h3 className="font-semibold text-brand-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Current Role
                </h3>
                <p className="text-sm bold text-gray-600 mt-2">Teaching Assistant, Cloud Computing</p>
                <p className="text-xs text-gray-400 mt-1">Columbia University CS • Present</p>
            </motion.div>

            {/* Garmin Role (Upcoming/Previous) */}
            <motion.div
                className="card p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h3 className="font-semibold text-brand-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Upcoming Role
                </h3>
                <p className="text-sm bold text-gray-600 mt-2">Garmin Software Engineer I</p>
                <p className="text-xs text-gray-400 mt-1">Full-Time, 2026- (Intern Summer 2025)</p>
            </motion.div>
            </div>

            {/* Education Card */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="font-semibold text-brand-500 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            <div className="mt-3">
              <p className="font-medium text-gray-800">{profile.education.school}</p>
              <p className="text-sm text-gray-500">{profile.education.degree}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">{profile.education.period}</span>
                <span className="text-sm font-medium text-accent-600">GPA: {profile.education.gpa}</span>
              </div>
              {profile.education.honors && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.education.honors.map((honor, idx) => (
                    <span key={idx} className="text-xs bg-accent-50 text-accent-600 px-2 py-1 rounded">{honor}</span>
                  ))}
                </div>
              )}
              {profile.education.coursework && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium mb-2">Relevant Coursework</p>
                  <p className="text-xs text-gray-600">{profile.education.coursework.join(" · ")}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
