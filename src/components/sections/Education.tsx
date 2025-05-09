"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <div className="grid gap-6 md:grid-cols-2 font-sans">
          {/* Degree 1 */}
          <motion.div
            className="group bg-white/80 dark:bg-gray-800/70 rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg p-6 text-gray-800 dark:text-gray-100 hover:brightness-110 hover:shadow-xl hover:scale-[1.02] hover:border-indigo-600 dark:hover:border-indigo-500 transition transform backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="font-semibold flex items-center justify-center gap-2 text-xl">
              <motion.span
                whileHover={{ y: -3, rotate: -5 }}
                whileTap={{ y: -3, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors"
              >
                <FaGraduationCap />
              </motion.span>
              Bachelor of Science in Computer Science
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              California State University San Marcos
            </p>
            <p className="text-gray-500 dark:text-gray-400">Graduated: 2023</p>
            <motion.ul
              className="text-left mt-4 space-y-2 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                Golden Key International Honor Society
              </li>
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                Dean’s List
              </li>
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                GPA: 3.66
              </li>
            </motion.ul>

            <a
              href="https://www.csusm.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
            >
              Visit School →
            </a>
          </motion.div>

          {/* Degree 2 */}
          <motion.div
            className="group bg-white/80 dark:bg-gray-800/70 rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg p-6 text-gray-800 dark:text-gray-100 hover:brightness-110 hover:shadow-xl hover:scale-[1.02] hover:border-indigo-600 dark:hover:border-indigo-500 transition transform backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="font-semibold flex items-center justify-center gap-2 text-xl">
              <motion.span
                whileHover={{ y: -3, rotate: -5 }}
                whileTap={{ y: -3, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors"
              >
                <FaGraduationCap />
              </motion.span>
              Associate Degree for Transfer – Computer Science
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              MiraCosta College
            </p>
            <p className="text-gray-500 dark:text-gray-400">Graduated: 2021</p>
            <motion.ul
              className="text-left mt-4 space-y-2 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                Phi Theta Kappa Honor Society
              </li>
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                President’s Permanent Honor Roll
              </li>
              <li className="flex items-center gap-2">
                <FaAward className="text-indigo-600 dark:text-indigo-400" />
                GPA: 3.76
              </li>
            </motion.ul>

            <a
              href="https://www.miracosta.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
            >
              Visit School →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
