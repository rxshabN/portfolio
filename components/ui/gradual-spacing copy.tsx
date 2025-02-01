"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  delay?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing1({
  text,
  duration = 0.15,
  delayMultiple = 0.015,
  delay = 50,
  framerProps = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartAnimation(true); // Begin the animation after the delay
    }, delay);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(delayTimeout);
  }, [delay]);
  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence>
        {startAnimation &&
          text.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("drop-shadow-sm ", className)}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
      </AnimatePresence>
    </div>
  );
}
