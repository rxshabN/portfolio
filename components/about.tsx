"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  const { ref: animationRef, inView: inViewForAnimation } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <>
      <motion.section
        id="about"
        ref={(el) => {
          ref(el);
          animationRef(el);
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewForAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.125 }}
        className="relative sm:text-lg text-sm poppins cursor-default max-w-[75rem] text-justify leading-8 flex flex-col items-center scroll-mt-28"
      >
        <div className="sm:block hidden bg-[#c06c6e]/[0.3] absolute -z-10 top-[-6rem] -right-[16rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="sm:block hidden bg-[#6e68c7]/[0.4] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <h2 className="sm:text-7xl text-5xl font-medium capitalize mb-8">
          About me
        </h2>
        <div className="sm:grid sm:grid-cols-2 flex flex-col sm:gap-x-20 sm:w-[75rem] w-[23rem]">
          <div className="mb-3 text-pretty sm:text-start sm:flex sm:flex-col sm:gap-y-5 sm:text-2xl text-base px-10">
            <div className="sm:space-y-6 space-y-4">
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  ⭐ <span className="sm:hidden visible"> Hi there, </span>I am
                  a passionate <b>Web Developer</b> from Mumbai.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  💻 I specialize in the <b>MERN stack</b> technology{" "}
                  <i>(MongoDB, Express.js, React, Node.js).</i> I have also
                  learned <b>Python, C++, and Java</b> as part of my curriculum.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  🌐 I’ve developed <b>simple SPAs</b> to dynamic{" "}
                  <b>full-stack applications.</b>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/logo.jpg"
                  alt="image of logo"
                  quality={100}
                  width={600}
                  height={300}
                  priority={true}
                  className="sm:h-[300px] sm:w-[600px] h-40 w-80 rounded-3xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-3 text-justify sm:flex sm:flex-col sm:gap-y-5 sm:text-2xl text-base px-10">
            <div className="sm:space-y-6 space-y-4">
              <div className="flex items-start gap-4">
                <p className="leading-relaxed">
                  I’m passionate about developing solutions for{" "}
                  <b>real-world challenges</b> and creating{" "}
                  <b>impactful projects </b>
                  through web development. It’s this relentless pursuit of
                  knowledge and <b>hands-on learning</b> that fuels my desire to
                  contribute meaningfully to the tech community.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="leading-relaxed sm:block hidden">
                  In addition to my technical endeavors, I believe in the power
                  of <b>networking and collaboration</b> to create something
                  extraordinary. Whether it’s <b>discussing new technologies</b>{" "}
                  or <b>building projects together,</b> I’m always eager to
                  connect with like-minded individuals and grow in the process!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
