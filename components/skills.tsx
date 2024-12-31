"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { skillsImages } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      className="poppins sm:mb-0 mb-5 max-w-[53rem] scroll-mt-28 text-center relative"
      ref={ref}
      id="skills"
    >
      <div className="lg:block hidden bg-[#6f61f3]/[0.3] absolute -z-10 top-[-12rem] left-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="lg:block hidden bg-[#0e1d2d]/[0.4] absolute -z-10 top-[-12rem] -right-[15rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="weight sm:text-7xl text-5xl font-medium mb-16 cursor-default flex flex-col gap-y-4"
      >
        My Skills
        <span className="poppins sm:text-2xl text-xl sm:px-0 px-10 text-center sm:mb-0 -mb-5">
          Frameworks/libraries I have used to build my applications.
        </span>
      </motion.h2>
      <ul className="sm:flex sm:flex-wrap grid grid-cols-2 mx-7 sm:mx-0 justify-center gap-6">
        {skillsImages.map((skill, index) => (
          <li className="hover:bg-[#7ea7e1]/60 cursor-default transition-colors flex flex-col items-center justify-center bg-[#4d8bd6]/[0.47] border border-black/[0.1] rounded-xl sm:px-5 sm:py-3 px-3 py-3 shadow-md">
            <Image
              src={skill.imageUrl}
              alt="logo of tech framework"
              width={100}
              height={100}
              className="mt-auto w-18 h-18"
            />
            <span className="mt-auto text-white text-lg">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
