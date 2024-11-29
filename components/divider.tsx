"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-200 sm:my-16 sm:w-96 w-40 mt-5 mb-5 h-1 rounded-full"
    ></motion.div>
  );
}
