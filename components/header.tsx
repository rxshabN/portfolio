"use client";

import { motion } from "framer-motion";
import React from "react";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="z-[999] relative hidden lg:block poppins">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-gray-700 border-opacity-40 bg-[#5e2a88]/[0.7] bg-opacity-80 shadow-lg shadow-violet-400/[0.17] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[77%] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:w-[70%]">
        <div className="flex w-full items-center justify-between">
          <motion.div
            className="text-white text-[1.1rem] name font-bold cursor-default"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              onClick={() => handleScroll("home")}
              className="cursor-pointer focus:outline-none"
            >
              Rishab Nagwani
            </button>
          </motion.div>
          <ul className="flex w-[22rem] items-center justify-center gap-y-1 text-[0.95rem] font-medium text-white sm:w-[initial] sm:flex-nowrap gap-1 xl:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <button
                  className={clsx(
                    "flex items-center justify-center w-full px-3 py-3 hover:bg-[#a724dc]/[0.85] rounded-full transition",
                    {
                      "text-white": activeSection === link.name,
                    }
                    // hover:bg-[#1b8b1b]
                  )}
                  onClick={() => {
                    handleScroll(link.hash.replace("#", ""));
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 245,
                        damping: 35,
                      }}
                      className="bg-[#a724dc]/[0.85] rounded-full absolute inset-0 -z-10 py-2"
                    ></motion.span>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
