"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  repolink,
  link,
}: ProjectProps) {
  return (
    <section className="rounded-xl border-none relative poppins cursor-default hover:bg-[#395388] transition group mb-3 sm:mb-8 last:mb-0 bg-[#2a3959] overflow-hidden sm:pr-8 lg:h-[30rem] h-max">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] max-w-[100%] flex flex-col h-full">
        <h3 className="weight sm:text-2xl text-lg font-semibold text-green-400">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-gray-300 sm:mr-50 mr-0 sm:text-base text-sm">
          {description}
        </p>
        <div className="flex flex-row justify-between items-center mt-8">
          <Link
            href={repolink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto poppins border border-black/10 cursor-pointer bg-blue-700/[0.95] px-7
          py-3 flex items-center gap-4 justify-center rounded-full outline-hidden active:scale-90
          transition text-white w-fit"
          >
            <span className="hidden sm:block weight">View Repository</span>
            <BsGithub size={25} />
          </Link>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span
              className="sm:hidden mt-auto popins border border-black/10 cursor-pointer bg-black px-7
          py-3 flex items-center gap-4 justify-center rounded-full outline-hidden active:scale-90
          transition text-white w-fit"
            >
              <BsGlobe size={25} />
            </span>
          </Link>
        </div>

        <ul className="hidden lg:flex flex-nowrap justify-center sm:mt-auto sm:ml-[15.6rem] gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full w-fit"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt="Project Image"
          quality={100}
          loading="lazy"
          className="sm:block hidden absolute top-8 -right-56 w-[32rem] rounded-t-lg rounded-b-lg shadow-green-400/[0.23] shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.01]"
        />
      </Link>
    </section>
  );
}
