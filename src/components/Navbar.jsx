import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg shadow-black/20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 rounded-2xl padding-[20px]">
        {/* Logo */}
        <div className="text-white font-bold text-2xl cursor-pointer">TECHONY</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-64} // offset equal to navbar height
              duration={500}
              className="text-white font-medium hover:text-emerald-400 cursor-pointer transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 flex flex-col items-center gap-6 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-64} // same offset for mobile
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white font-medium hover:text-emerald-400 cursor-pointer transition text-lg"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}