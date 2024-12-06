"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <>
      <section
        id="about"
        className="poppins scroll-mt-28 cursor-default max-w-[75rem] lg:h-[30rem] sm:grid sm:grid-cols-[400px_1fr] items-center justify-between sm:mb-0 pt-8 sm:pt-0"
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
              className="sm:h-[300px] sm:w-[300px] h-40 w-40 rounded-full border-[0.35rem] border-white object-cover shadow-xl shadow-green-400/[0.2]"
            />
          </motion.div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-2 text-center sm:text-center text-2xl font-medium !leading-[1.5] sm:text-[2rem]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I,{" "}
          <span className="font-bold text-green-400 weight">
            Rishab Nagwani
          </span>
          , am a <br className="sm:hidden visible" />{" "}
          <span className="font-bold text-green-400 weight">
            Full-Stack Web Developer
          </span>{" "}
          focused on building <br className="sm:hidden visible" />{" "}
          <span className="font-bold text-green-400 weight">
            real world web applications
          </span>
          .
          <br />I am <span className="sm:visible hidden">currently</span> a
          sophomore <span className="hidden sm:visible">pursuing B.Tech</span>{" "}
          at <br className="visible sm:hidden" />{" "}
          <span className="font-bold weight text-green-400">
            Vellore Institute of Technology <br className="sm:hidden visible" />
          </span>{" "}
          Vellore, Tamil Nadu. <br /> My specialization is{" "}
          <br className="sm:hidden visible" />{" "}
          <span className="font-bold text-green-400 weight">MERN Stack</span>{" "}
          Development.
        </motion.h1>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mb-[2vh] sm:mb-0"
      >
        <a
          className="weight border text-black border-black/10 cursor-pointer bg-green-400 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
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
          className="weight group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's Connect!{" "}
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
          <Link
            href="https://www.linkedin.com/in/rishab-nagwani-53a37628a"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <Image
              src="/linkedin.ico"
              alt="image of linkedin icon"
              height={23}
              width={23}
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rxshabN"
            className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <Image
              src="/github.ico"
              alt="image of github icon"
              height={23}
              width={23}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nagwanirishab@gmail.com"
            className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <Image
              src="/gmail.ico"
              alt="image of gmail icon"
              height={23}
              width={23}
            />
          </Link>
          <Link
            href="https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg=="
            rel="noopener noreferrer"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <Image
              src="/insta.png"
              alt="image of insta icon"
              height={23}
              width={23}
            />
          </Link>
          <Link
            href="https://peerlist.io/rishabnagwani"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none active:scale-90 transition"
          >
            <Image
              src="/peerlist.ico"
              alt="image of peerlist icon"
              height={23}
              width={23}
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
}
