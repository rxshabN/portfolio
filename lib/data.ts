import React from "react";
import discord from "@/public/discord.png";
import patreon from "@/public/patreon.png";
import project from "@/public/project-manager.png";
import password from "@/public/password.png";
import { BsBriefcase, BsGithub, BsMicrosoft } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaBook, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Organizations",
    hash: "#organizations",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "SVKM JV Parekh International School",
    location: "Vile Parle(W), Mumbai, Maharashtra-400056",
    description: "Grade: 93.6% in IGCSE 10th board examination.",
    icon: React.createElement(FaBook),
    date: "2008-2021",
  },
  {
    title: "Poddar Brio International School",
    location: "Kalyan-Karjat Road, Badlapur, Maharashtra-421503",
    description: "Grade: 89.1% in CBSE 12th board examination.",
    icon: React.createElement(FaBook),
    date: "2021-2023",
  },
  {
    title: "Vellore Institute of Technology",
    location: "Katpadi, Vellore, Tamil Nadu-632014",
    description:
      "I am currently pursuing B.Tech in Computer Science and Engineering (AI & ML). Core Member of SIAM-VIT Chapter. Part-time Full-Stack Developer at VITrendZ.",
    icon: React.createElement(FaGraduationCap),
    date: "2023 - Present",
  },
] as const;

export const organizationData = [
  {
    title: "Society for Industrial and Applied Mathematics",
    location: "VIT Vellore",
    description:
      "I am a Core Member of SIAM-VIT Chapter. I am currently part of the technical team developing the official website.",
    icon: React.createElement(BsBriefcase),
    date: "February 2024 - Present",
  },
  {
    title: "VITrendZ",
    location: "VIT Vellore",
    description:
      "I am a full stack web developer at VITrendZ. I am a member of the core team in charge of redeveloping the landing page of VITrendZ website.",
    icon: React.createElement(FaLaptopCode),
    date: "October 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Project Manager",
    description:
      "Create, edit, and manage projects and tasks using an interactive drag-and-drop Kanban board. Users can add other users with an invite link provided in the workspace settings. It is also a PWA so that users can install it as an app on their devices.",
    tags: [
      "Next.js",
      "React",
      "Appwrite",
      "Hono.js",
      "Nuqs",
      "Tanstack",
      "shadcn",
    ],
    imageUrl: project,
    repolink: "https://github.com/rxshabN/project-manager",
    link: "https://project-manager-rn.vercel.app",
  },
  {
    title: "Real-time Chat App",
    description:
      "A fully functional real-time chat application inspired by Discord. This project provides messaging via WebSockets and audio/video chat capabilities using LiveKit, with user authentication powered by Clerk. Users can add members via invite links.",
    tags: [
      "Next.js",
      "PostgreSQL",
      "TailwindCSS",
      "Prisma",
      "Clerk",
      "TypeScript",
    ],
    imageUrl: discord,
    repolink: "https://github.com/rxshabN/discord-clone",
    link: "https://discord-clone-rishabn.up.railway.app",
  },
  {
    title: "Payment Gateway App",
    description:
      "A Patreon-like project built using Next.js, Tailwind CSS, and MongoDB Atlas. This project allows users to create accounts, sign in via OAuth using Google/GitHub, and make payments using Razorpay.",
    tags: ["React", "Next.js", "TailwindCSS", "OAuth", "MongoDB", "Razorpay"],
    imageUrl: patreon,
    repolink: "https://github.com/rxshabN/patreon-clone",
    link: "https://patreon-clone-rishabn.vercel.app",
  },
  {
    title: "Password Manager",
    description:
      "A simple and modern password manager built using React, Tailwind CSS, and MongoDB. This project allows users to store their passwords on a MongoDB Atlas cluster. Users can also edit and delete their passwords.",
    tags: ["React", "Vite", "MongoDB", "TailwindCSS", "ExpressJS", "Mongoose"],
    imageUrl: password,
    repolink: "https://github.com/rxshabN/Password-Manager---mongodb",
    link: "https://rxshabn.github.io/Password-Manager---mongodb",
  },
] as const;

export const certificateData = [
  {
    title: "GitHub Foundations",
    description:
      "This certificate validates my expertise in measuring entry-level skills with GitHub basics like repositories, commits, branching, markdowns, and project management.",
    tags: [
      "Build Pipeline",
      "CI/CD",
      "DevOps",
      "GitHub",
      "GitHub Actions",
      "Release Management",
    ],
    icon: React.createElement(BsGithub),
    link: "https://www.credly.com/badges/2648eb05-a77e-491b-ada5-9d31fa36aeaa/linked_in_profile",
  },
  {
    title: "MongoDB Node.js Developer",
    description:
      "This certificate validates my expertise in building Node.js applications with MongoDB. It covers the basics of building and manipulating databases in MongoDB using Node.js and its ORM driver Mongoose.",
    tags: [
      "MongoDB",
      "Node.js",
      "Database",
      "Mongoose",
      "Data Manipulation",
      "CRUD",
    ],
    icon: React.createElement(SiMongodb),
    link: "https://learn.mongodb.com/c/f079MIzoTU-wv5aWTovhGg",
  },
  {
    title: "Career Essentials in Software Development",
    description:
      "This certificate validates my expertise in software development essentials, including learning basics of the essential languages such as Python, C/C++, Java, Kotlin, Rust, etc. I also learned about system design and the software lifecycle.",
    tags: [
      "Python",
      "C/C++",
      "Software Development",
      "Software Lifecycle",
      "Java",
      "Rust",
    ],
    icon: React.createElement(BsMicrosoft),
    link: "https://www.linkedin.com/learning/certificates/08e4dbc86ea8ba148aad6a22afa280feb3d7916f95d83394e91b191500cfe1f1",
  },
  {
    title: "Career Essentials in Generative AI",
    description:
      "This certificate validates my expertise in Generative AI, including learning about the basics of Generative AI, GPT-3, LLM, Neural Networks, and Deep Learning.",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "AI",
      "GPT",
      "LLM",
      "Neural Networks",
    ],
    icon: React.createElement(BsMicrosoft),
    link: "https://www.linkedin.com/learning/certificates/7669cbb15bb6c588c0616524bec12bedd066e274a4aa0d0330d8a39e9ca2bd0d",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Git",
  "JavaScript",
  "TypeScript",
  "AlpineJS",
  "React",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "HonoJS",
  "Bootstrap",
  "FramerMotion",
  "TailwindCSS",
  "Shadcn",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Appwrite",
  "Sentry",
  "Postman",
  "WebSockets",
  // "tRPC",
] as const;

export const skillsImages = skillsData.map((skill) => ({
  name: skill,
  imageUrl: `/${skill.toLowerCase()}.png`,
}));
