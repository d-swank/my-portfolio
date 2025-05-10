"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-4 pt-24 pb-32 border-b border-indigo-600 dark:border-indigo-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <motion.div
          className="group bg-white/80 dark:bg-gray-800/70 rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg p-8 text-gray-800 dark:text-gray-100 hover:brightness-105 hover:border-indigo-600 dark:hover:border-indigo-500 transform backdrop-blur-sm max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            className="text-xl mb-6 leading-relaxed font-sans text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I’m always open to new opportunities, collaborations, and exciting
            projects. Feel free to reach out and let’s create something amazing
            together!
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center space-x-8 text-4xl"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                href: "https://linkedin.com/in/d-swank",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/d-swank",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "mailto:dakotaswank18@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map(({ href, icon, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-600 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ rotate: -5, scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
