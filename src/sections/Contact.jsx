import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o9cfyxm",
        "template_mmzsbfm",
        formData,
        "ZworGvssOETGbxlB8"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-black/20 to-black"
    >
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Contact Me
      </h2>

      {/* Quick Contact Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a
          href="mailto:samade744@gmail.com"
          className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all"
        >
          <FiMail /> samade744@gmail.com
        </a>

        <a
          href="https://github.com/Techony-code"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all"
        >
          <FiGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-iyanuoluwa-adewunmi-413140330/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all"
        >
          <FiLinkedin /> LinkedIn
        </a>

        <a
          href="https://x.com/SammyAde86685"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-800/70 px-5 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all"
        >
          <FaXTwitter />
        </a>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col gap-6 shadow-lg shadow-black/40"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          required
          className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-emerald-400 rounded-xl font-semibold text-black hover:bg-emerald-500 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-white/80 mt-2">{status}</p>
        )}
      </motion.form>
    </motion.section>
  );
}
