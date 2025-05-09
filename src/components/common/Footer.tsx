"use client";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-200 via-white to-slate-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-400 text-center py-6 px-4">
      <p className="mb-2 font-sans">
        © {new Date().getFullYear()} Dakota Swank. All rights reserved.
      </p>

      <div className="space-x-4 text-sm mb-4 font-sans">
        <a
          href="#about"
          className="hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#education"
          className="hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          Education
        </a>
        <a
          href="#experience"
          className="hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          Projects
        </a>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 text-xl mt-4">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Next.js"
          className="hover:text-indigo-600 dark:hover:text-white transition-colors duration-300n"
        >
          <SiNextdotjs />
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
          title="TypeScript"
          className="text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          <SiTypescript />
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Tailwind CSS"
          className="text-teal-600 dark:text-teal-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          <SiTailwindcss />
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          title="Framer Motion"
          className="text-pink-600 dark:text-pink-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300"
        >
          <SiFramer />
        </a>
      </div>
    </footer>
  );
}
