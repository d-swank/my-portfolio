"use client"; // Important for Framer Motion in Next.js 14 App Router

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 text-white text-4xl px-4"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-4"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Hello, I’m <span className="text-indigo-400 font-semibold">Dakota Swank</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2x1 text-white"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        I’m a San Diego-based Software QA Engineer who is passionate about creating beautiful and
        functional websites for fun!
      </motion.p>
    </section>
  );
}
