import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Personal from "./pages/Personal";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col relative overflow-x-clip">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 animate-blob-slow" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 animate-blob" />
      </div>

      <Nav />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
