"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsArrowRight,
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
      <section
        ref={ref}
        id="home"
        className="poppins scroll-mt-28 cursor-default max-w-[75rem] sm:h-[30rem] sm:grid sm:grid-cols-[400px_1fr] items-center justify-between sm:mb-0 pt-8 sm:pt-0"
      >
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/rishab.jpg"
              alt="image of rishab nagwani"
              quality={100}
              width={300}
              height={300}
              priority={true}
              className="sm:h-[300px] sm:w-[300px] h-40 w-40 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-center sm:text-justify text-2xl font-medium !leading-[1.5] sm:text-[2rem]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I am <span className="font-bold text-[#f87171]">Rishab Nagwani</span>,
          a{" "}
          <span className="font-bold text-sky-400">
            Full-Stack Web Developer
          </span>{" "}
          focused on building{" "}
          <span className="font-bold text-green-400">
            real-world web applications.
          </span>{" "}
          I am a sophomore at Vellore Institute of Technology, Tamil Nadu,
          India. I specialize in{" "}
          <span className="font-bold text-amber-400">MERN Stack</span>{" "}
          development.
        </motion.h1>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-[23vh] sm:mb-0"
      >
        <a
          className="poppins border border-black/10 cursor-pointer bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          href="/resume.pdf"
          download="RishabN-Resume.pdf"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Download Resume{" "}
          <motion.div
            className="flex items-center"
            animate={{
              y: isHovered ? [0, -6, 8, 0] : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <HiDownload />
          </motion.div>
        </a>
        <Link
          href="#contact"
          className="poppins group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's connect!{" "}
          <motion.div
            className="flex items-center"
            animate={{
              x: isHovered1 ? [0, 8, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <BsArrowRight />
          </motion.div>
        </Link>
        <div className="flex flex-row gap-x-2">
          <a
            href="http://www.linkedin.com/in/rishab-nagwani-53a37628a"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/rxshabN"
            className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:nagwanirishab@gmail.com"
            className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <BsEnvelopeFill />
          </a>
          <a
            href="https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg=="
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <BsInstagram />
          </a>
        </div>
      </motion.div>
    </>
  );
}
