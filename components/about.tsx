"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  const { ref: animationRef, inView: inViewForAnimation } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <>
      <motion.section
        ref={(el) => {
          ref(el);
          animationRef(el);
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewForAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.125 }}
        className="relative sm:text-lg text-sm poppins cursor-default max-w-[75rem] text-justify leading-8 flex flex-col items-center scroll-mt-28"
      >
        <h2 className="weight sm:text-7xl text-5xl font-medium capitalize mb-8">
          About me
        </h2>
        <div className="lg:grid lg:grid-cols-2 flex flex-col sm:gap-x-20 sm:max-w-[75rem] w-[fit]">
          <div className="mb-3 text-justify sm:flex sm:flex-col sm:gap-y-5 sm:text-2xl text-lg px-2.5">
            <div className="sm:space-y-6 space-y-4">
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  ⭐ <span className="sm:hidden visible"> Hi there, </span>I am
                  a passionate{" "}
                  <b className="weight text-green-400">Web Developer</b> from
                  Mumbai.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  💻 I am proficient in the{" "}
                  <b className="weight text-green-400">MERN stack</b>{" "}
                  (full-stack) technology which inclues MongoDB for database
                  management, ExpressJS for server development, React for
                  front-end designing and Node.js for background environment
                  execution of JavaScript. I have also learned{" "}
                  <b className="weight text-green-400">Python, C++, and Java</b>{" "}
                  programming languages as part of my curriculum.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  🌐 I’ve developed a wide range of projects, from{" "}
                  <b className="weight text-green-400">simple SPAs</b> to
                  dynamic{" "}
                  <b className="weight text-green-400">
                    full-stack applications.
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3 text-justify sm:flex sm:flex-col sm:gap-y-5 sm:text-2xl text-lg px-2.5">
            <div className="sm:space-y-6 space-y-4">
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  I’m extremely passionate about developing solutions for{" "}
                  <b className="weight text-green-400">real-world challenges</b>{" "}
                  and creating{" "}
                  <b className="weight text-green-400">impactful projects </b>
                  through{" "}
                  <b className="text-green-400 weight">web development.</b> It’s
                  this relentless pursuit of knowledge and{" "}
                  <b className="weight text-green-400">hands-on learning</b>{" "}
                  that fuels my desire to provide meaningful contributions to
                  the tech community and to society.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed sm:block hidden">
                  In addition to my technical endeavors, I believe in the power
                  of{" "}
                  <b className="weight text-green-400">
                    networking and collaboration
                  </b>{" "}
                  to envision and create something extraordinary. Whether it’s{" "}
                  <b className="weight text-green-400">
                    discussing new technologies
                  </b>{" "}
                  or{" "}
                  <b className="weight text-green-400">
                    building projects together,
                  </b>{" "}
                  I’m always eager to connect with like-minded individuals and
                  grow in the process!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
