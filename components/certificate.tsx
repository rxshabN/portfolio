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
  const { ref } = useSectionInView("Certificates", 0.05);

  return (
    <section
      id="certificates"
      className="relative scroll-mt-28 poppins"
      ref={ref}
    >
      <div className="sm:block hidden bg-[#a59ff5]/[0.3] absolute -z-10 top-[-6rem] -right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="sm:block hidden bg-[#e07577]/[0.2] absolute top-[-1rem] left-[25rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-7xl text-5xl font-medium capitalize mb-12 text-center name cursor-default"
      >
        Certificates
      </motion.h2>
      <VerticalTimeline lineColor="">
        {certificateData.map((certificate, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "#6C4F92",
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
              <h3 className="sm:text-2xl text-lg font-semibold">
                {certificate.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-300 sm:mr-50 mr-0 sm:text-base text-sm">
                {certificate.description}
              </p>
              <div className="flex flex-row justify-between items-center mt-8">
                <Link
                  href={certificate.link}
                  className="mt-auto name border border-black/10 cursor-pointer bg-violet-700 px-7
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
