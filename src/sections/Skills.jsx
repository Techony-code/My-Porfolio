import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaEthereum } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSolidity,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, level: 90, info: "Used in 10+ frontend projects" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, info: "Styled multiple responsive apps" },
  { name: "JavaScript", icon: SiJavascript, level: 95, info: "Core language for most projects" },
  { name: "Node.js", icon: FaNodeJs, level: 80, info: "Backend logic & APIs" },
  { name: "Solidity", icon: SiSolidity, level: 70, info: "Smart contracts on Ethereum" },
  { name: "Blockchain", icon: FaEthereum, level: 75, info: "Decentralized app development" },
  { name: "HTML", icon: SiHtml5, level: 95, info: "Structure for every website" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-black/20 to-black"
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-lg shadow-black/40 hover:scale-105 transition-transform cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Skill Icon */}
              <Icon className="text-emerald-400 text-4xl mb-2" />
              <p className="text-white font-semibold mb-2">{skill.name}</p>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-emerald-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                />
              </div>

              <span className="text-white/70 text-sm mt-1">
                {skill.level}%
              </span>

              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white/10 backdrop-blur-xl text-white text-sm rounded-lg p-2 text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300"
              >
                {skill.info}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}