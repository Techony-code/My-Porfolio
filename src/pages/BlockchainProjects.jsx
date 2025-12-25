import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";
import StackFilterDropdown from "../components/StackFilterDropdown";

export default function FrontendProjects() {
  const frontendProjects = projects.filter(p => p.category === "blockchain");
  const allStacks = [...new Set(frontendProjects.flatMap(p => p.stacks))];

  const [selectedStacks, setSelectedStacks] = useState([]);

  const filteredProjects = selectedStacks.length === 0
    ? frontendProjects
    : frontendProjects.filter(p =>
        selectedStacks.every(s => p.stacks.includes(s))
      );

  return (
    <motion.section
      className="min-h-screen px-6 md:px-20 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold text-white mb-8">Blockchain Projects</h1>

      {/* Stack Dropdown */}
      <StackFilterDropdown
        stacks={allStacks}
        selectedStacks={selectedStacks}
        setSelectedStacks={setSelectedStacks}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-white/60 mt-10">No frontend projects match selected stacks.</p>
      )}
    </motion.section>
  );
}