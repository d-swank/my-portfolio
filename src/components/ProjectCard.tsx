"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  Technologies: string | string[];
  link: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  Technologies,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-gray-600 rounded-lg p-6 shadow-lg bg-gray-800/70 transform transition duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 hover:border-indigo-500 hover:-translate-y-1 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-gray-300 mb-4">
        <b>Technologies:</b> {Technologies}
      </p>
      <motion.span
        className="text-indigo-400 font-medium transition duration-300 transform hover:text-indigo-500 hover:scale-105 inline-block relative hover:animate-pulse group"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.3 + 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        View Project →
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
      </motion.span>
    </motion.a>
  );
}
