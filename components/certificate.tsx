"use client";

import { certificateData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Certificate() {
  const { ref } = useSectionInView("Certificates", 0.2);

  return (
    <section
      id="certificates"
      className="relative scroll-mt-28 poppins"
      ref={ref}
    >
      <div className="sm:block hidden bg-[#6f61f3]/[0.3] absolute -z-10 top-[30rem] -right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="sm:block hidden bg-[#0a192f]/[0.6] absolute top-[30rem] left-[25rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-7xl text-5xl font-medium capitalize mb-12 text-center weight cursor-default"
      >
        Certificates
      </motion.h2>
      <VerticalTimeline lineColor="">
        {certificateData.map((certificate, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "#2a3959",
                boxShadow: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                backdropFilter: "blur(30px)",
                cursor: "default",
                height: "max-content",
                borderRadius: "1rem",
                WebkitBoxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.15)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #B3A0D2",
              }}
              icon={certificate.icon}
              iconStyle={{
                background: "white",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="sm:text-2xl text-lg font-semibold weight text-green-400">
                {certificate.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-300 sm:mr-50 mr-0 sm:text-base text-sm">
                {certificate.description}
              </p>
              <div className="flex flex-row justify-between items-center mt-8">
                <Link
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto weight border border-black/10 cursor-pointer bg-blue-700/[0.95] px-7
                  py-3 flex items-center gap-4 justify-center rounded-full outline-none active:scale-90
                  transition text-white w-fit"
                >
                  <span className="sm:block">View Certificate</span>
                  <div className="flex items-center">
                    <BsArrowUpRight size={20} />
                  </div>
                </Link>
              </div>
              <ul className="hidden lg:flex flex-wrap justify-center mt-10 gap-2">
                {certificate.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-black px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full w-fit"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
