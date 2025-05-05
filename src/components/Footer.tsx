"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 px-4">
      <p className="mb-2">
        © {new Date().getFullYear()} Dakota Swank. All rights reserved.
      </p>
      <div className="space-x-4 text-sm">
        <a
          href="#about"
          className="hover:text-white transition"
        >
          About
        </a>
        <a
          href="#education"
          className="hover:text-white transition"
        >
          Education
        </a>
        <a
          href="#experience"
          className="hover:text-white transition"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="hover:text-white transition"
        >
          Projects
        </a>
      </div>
    </footer>
  );
}
