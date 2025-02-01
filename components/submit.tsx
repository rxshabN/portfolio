import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={pending}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="weight group disabled:scale-100 disabled:bg-opacity-65 h-[3.5rem] w-[9rem] bg-blue-700/[0.8] text-white group rounded-full transition-all outline-none active:scale-90 flex items-center justify-center gap-2"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <span className="text-lg">Submit</span>
          <motion.div
            animate={{
              x: isHovered ? [0, 6, 0] : 0,
              y: isHovered ? [0, -6, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <FaPaperPlane className="text-xs transition-all" size={16} />
          </motion.div>
        </>
      )}
    </button>
  );
}
