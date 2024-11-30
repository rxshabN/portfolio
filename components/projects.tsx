"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <>
      <div
        className="poppins mb-3 last:mb-0 scroll-mt-28 mx-5"
        id="projects"
        ref={ref}
      >
        <div className="sm:block hidden bg-[#a59ff5]/[0.3] absolute -z-10 top-[-5rem] -right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="sm:block hidden bg-[#e07577]/[0.2] absolute top-[-4rem] left-[25rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <section className="mx-auto">
          <h2 className="poppins cursor-default sm:text-7xl text-5xl font-medium capitalize mb-20 text-center">
            My Projects
          </h2>
          <h3 className="text-center font-normal cursor-default -mt-12 text-xl sm:px-0 px-5 sm:mb-0 mb-5">
            Here are my top four projects, click on the image to check out the
            site.
          </h3>
          <br />
          <h3 className="text-center text-xl font-normal cursor-default -mt-6 mb-10 sm:text-3xl px-5 sm:px-0 ">
            To view all my projects{" "}
            <Link
              href="https://github.com/rxshabN?tab=repositories"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here.
            </Link>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[75rem] mx-auto">
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
