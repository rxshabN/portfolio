"use client";

import { organizationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Organization() {
  const { ref } = useSectionInView("Organizations", 0.5);
  return (
    <section
      id="organizations"
      className="relative scroll-mt-28 poppins"
      ref={ref}
    >
      <div className="lg:block hidden bg-[#0e1d2d]/[0.3] absolute -z-10 top-[-6rem] -right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="lg:block hidden bg-[#6f61f3]/[0.2] absolute top-[-1rem] left-[55rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-7xl text-5xl font-medium capitalize mb-8 text-center weight cursor-default"
      >
        Organizations
      </motion.h2>
      <VerticalTimeline lineColor="">
        {organizationData.map((organization, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "#5e2a88B3",
                boxShadow: "none",
                border: "1px solid rgba(94, 42, 136, 0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                backdropFilter: "blur(30px)",
                cursor: "default",
                borderRadius: "1rem",
                WebkitBoxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.15)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #B3A0D2",
              }}
              date={organization.date}
              icon={organization.icon}
              iconStyle={{
                background: "white",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-2xl text-green-400 cursor-default weight">
                {organization.title}
              </h3>
              <p className="font-normal !mt-1 text-white cursor-default">
                {organization.location}
              </p>
              <p className="!text-md !mt-4 !font-normal text-gray-200 cursor-default">
                {organization.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
