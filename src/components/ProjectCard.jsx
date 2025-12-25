import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-xl"
    >
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm mb-4">
          {project.description}
        </p>

        {/* Stacks */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="text-xs bg-emerald-400/20 text-emerald-400 px-2 py-1 rounded-full"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            className="flex-1 text-center text-sm border border-white/30 text-white rounded-lg py-2 hover:bg-white/10 transition"
          >
            View GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex-1 text-center text-sm bg-emerald-500 text-black rounded-lg py-2 hover:bg-emerald-400 transition"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
