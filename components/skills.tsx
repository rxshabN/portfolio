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
  const { ref: inViewRef } = useSectionInView("Skills", 0.5);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
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
  return (
    <section
      className="poppins mb-0 max-w-[53rem] scroll-mt-28 text-center relative"
      ref={sectionRef}
      id="skills"
    >
      <div className="sm:block hidden bg-[#6f61f3]/[0.3] absolute -z-10 top-[-12rem] left-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="sm:block hidden bg-[#0e1d2d]/[0.4] absolute -z-10 top-[-12rem] -right-[15rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="weight sm:text-7xl text-5xl font-medium mb-16 cursor-default flex flex-col gap-y-10"
      >
        My Skills
        <span className="poppins sm:text-2xl text-xl sm:px-0 px-10 text-center sm:mb-0 -mb-5">
          Frameworks/libraries I have used to build my applications.
        </span>
      </motion.h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {skillsImages.map((skill, index) => (
          <motion.li
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"} // Animate only if hasn't happened before
            viewport={{ once: true }}
            custom={index}
            className="hover:bg-[#395388] transition-colors flex flex-col items-center justify-center bg-blue-500/[0.2]  border border-black/[0.1] rounded-xl px-5 py-3 shadow-md"
          >
            {/* bg-gray-600/70 */}
            <Image
              src={skill.imageUrl}
              alt="logo of tech framework"
              width={100}
              height={100}
              className="mt-auto"
            />
            <span className="mt-auto text-white text-lg">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
