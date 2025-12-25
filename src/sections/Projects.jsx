import { Link } from "react-router-dom";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // Safety check
  if (!projects || projects.length === 0) {
    return (
      <section className="py-24 text-center text-white/60">
        No projects found.
      </section>
    );
  }

  const frontend = projects
    .filter((p) => p.category === "frontend")
    .slice(0, 4);

  const blockchain = projects
    .filter((p) => p.category === "blockchain")
    .slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Projects
      </h2>

      {/* Frontend */}
      <div className="mb-16">
        <h3 className="text-xl text-emerald-400 mb-6">
          Frontend Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frontend.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/projects/frontend"
            className="text-emerald-400 hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* Blockchain */}
      <div>
        <h3 className="text-xl text-emerald-400 mb-6">
          Blockchain Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blockchain.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/projects/blockchain"
            className="text-emerald-400 hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
