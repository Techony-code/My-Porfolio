import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { bio } from "../data/bio";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < bio.roles[index].length) {
        setCurrentRole((prev) => prev + bio.roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentRole("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % bio.roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-20 pt-16" 
      // Added pt-16 here to avoid navbar overlap
    >
      {/* Profile Picture */}
      <motion.div
        className="relative mb-10 md:mb-0 md:mr-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/30 backdrop-blur-lg shadow-2xl shadow-black/60 animate-float">
          <img
            src={bio.profileImage}
            alt={bio.fullName}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Glass Card */}
      <motion.div
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 max-w-lg shadow-lg shadow-black/40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {bio.fullName}
        </motion.h1>

        <motion.h2
          className="text-xl text-emerald-400 h-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {currentRole}
        </motion.h2>

        <motion.p
          className="text-white/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {bio.shortBio}
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-400 rounded-xl font-semibold text-black hover:bg-emerald-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 rounded-xl font-semibold text-white hover:bg-white/20 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}