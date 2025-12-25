import { FaReact, FaEthereum } from "react-icons/fa";
import { SiTailwindcss, SiSolidity } from "react-icons/si";

export const bio = {
  fullName: "Samuel Adewunmi",
  nickname: "TECHONY",
  roles: ["Frontend Developer", "Blockchain Developer"],
  shortBio:
    "I build modern, scalable web applications and decentralized solutions with a focus on performance, clean architecture, and great user experience.",
  about:
    "I am a frontend and blockchain developer passionate about building high-quality digital products. I enjoy working with modern JavaScript frameworks, crafting clean UI experiences, and developing smart contracts and Web3 applications that solve real-world problems.",
  profileImage: "src/assets/profile.jpg",
  socials: {
    github: "https://github.com/TECHONY",
    twitter: "",
    linkedin: "",
  },
  skills: [
    { name: "React", icon: FaReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Blockchain", icon: FaEthereum },
    { name: "Solidity", icon: SiSolidity },
  ],
};