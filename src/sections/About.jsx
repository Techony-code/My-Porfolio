import { motion } from "framer-motion";
import { bio } from "../data/bio";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-center justify-center py-24 px-6 md:px-20 bg-gradient-to-b from-black/20 to-black"
    >
      {/* Left: Illustration / Floating shape */}
      <motion.div
        className="hidden md:flex md:w-1/2 justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-8   border-white/30 backdrop-blur-lg shadow-2xl shadow-black/60 animate-float">
          <img 
            src="/projects/code.jpeg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right: Glass Card */}
      <motion.div
        className="md:w-1/2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-xl shadow-black/40"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
          About Me
        </h2>

        <p className="text-white/80 text-lg mb-4">
          I’m{" "}
          <span className="text-emerald-400 font-semibold">
            {bio.nickname}
          </span>
          , a{" "}
          <span className="text-emerald-400 font-semibold">
            {bio.roles.join(" • ")}
          </span>{" "}
          passionate about crafting modern, responsive web applications and
          decentralized systems.
        </p>

        <p className="text-white/70 text-lg mb-6">
          {bio.about}
        </p>

        {/* Skills Preview */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {bio.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={skill.name}
                className="flex items-center gap-1 bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium"
              >
                <Icon /> {skill.name}
              </span>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}