"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { skillsImages } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  const { ref: inViewRef } = useSectionInView("Skills", 0.5);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  useEffect(() => {
    if (inViewRef && typeof inViewRef === "function") {
      inViewRef(sectionRef.current);
    }
  }, [inViewRef]);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section
      className="poppins sm:mb-0 mb-5 max-w-[53rem] scroll-mt-28 text-center relative"
      ref={sectionRef}
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
        {skillsImages.map((skill, index) =>
          isMobile ? (
            <li
              key={skill.name}
              className="hover:bg-[#7ea7e1]/60 cursor-default transition-colors flex flex-col items-center justify-center bg-[#4d8bd6]/[0.47] border border-black/[0.1] rounded-xl sm:px-5 sm:py-3 px-3 py-3 shadow-md"
            >
              <Image
                key={skill.name}
                src={skill.imageUrl}
                alt="logo of tech framework"
                width={100}
                height={100}
                className="mt-auto w-18 h-18"
              />
              <span className="mt-auto text-white text-lg">{skill.name}</span>
            </li>
          ) : (
            <motion.li
              key={skill.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              animate={hasAnimated ? "animate" : "initial"}
              viewport={{ once: true }}
              custom={index}
              className="hover:bg-[#7ea7e1]/60 cursor-default transition-colors flex flex-col items-center justify-center bg-[#4d8bd6]/[0.47] border border-black/[0.1] rounded-xl sm:px-5 sm:py-3 px-3 py-3 shadow-md"
            >
              <Image
                src={skill.imageUrl}
                alt="logo of tech framework"
                width={100}
                height={100}
                className="mt-auto w-18 h-18"
              />
              <span className="mt-auto text-white text-lg">{skill.name}</span>
            </motion.li>
          )
        )}
      </ul>
    </section>
  );
}
