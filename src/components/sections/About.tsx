"use client";

import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center mb-6 text-indigo-600 dark:text-indigo-400"
      >
        <FaUserAstronaut className="text-6xl hover:text-indigo-700 dark:hover:text-indigo-500 transition-colors" />
      </motion.div>

      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <motion.div
          className="group bg-white/80 dark:bg-gray-800/70 rounded-lg border font-sans border-gray-300 dark:border-gray-600 shadow-lg p-8 text-gray-800 dark:text-gray-100 hover:brightness-105 hover:border-indigo-600 dark:hover:border-indigo-400 transition transform backdrop-blur-sm max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I’m{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Dakota Swank
            </span>
            , a creative and dedicated software engineer specializing in
            bringing ideas to life. With a keen eye for detail and a relentless
            drive for perfection, I take pride in crafting seamless user
            experiences and robust backend solutions.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I’m passionate about web development and enjoy creating responsive,
            user-friendly websites and web applications. I love turning ideas
            into functional and beautiful digital experiences. My focus is on
            clean design, solid functionality, and creating great user
            experiences.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            My journey in technology began at a young age and has evolved into a
            professional pursuit of innovative problem-solving and continuous
            learning. I believe deeply in the power of technology to transform
            lives, industries, and the world at large.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Outside of coding, I enjoy exploring the outdoors, engaging with the
            tech community, and pushing the boundaries of my creativity through
            ongoing projects and collaborations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
