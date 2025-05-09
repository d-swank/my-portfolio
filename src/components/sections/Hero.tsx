"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white text-4xl scroll-mt-20"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-mono mb-4"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Hello, I’m{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold font-sans">
          Dakota Swank
        </span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl font-sans max-w-xl mx-auto mb-6 leading-relaxed"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        I’m a San Diego-based Software QA Engineer who is passionate about
        creating beautiful and functional websites for fun!
      </motion.p>
    </section>
  );
}
