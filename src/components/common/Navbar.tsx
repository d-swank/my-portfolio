"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTypingContext } from "@/components/common/Typewriter";

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { typingDone } = useTypingContext();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-gradient-to-r from-white via-slate-200 to-slate-300 text-gray-900 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 dark:text-white sticky top-0 z-100">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={typingDone ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href="#hero"
                className="flex items-center text-indigo-600 dark:text-white dark:hover:text-indigo-500 transform hover:scale-110 transition-transform cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 375 375"
                  width="45"
                  height="45"
                  className="transform"
                >
                  <defs>
                    <clipPath id="b3cae876d8">
                      <path
                        d="M 60 48.773438 L 270 48.773438 L 270 278 L 60 278 Z"
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="2a3b3eb7c2">
                      <path
                        d="M 52.183594 99 L 319 99 L 319 326.273438 L 52.183594 326.273438 Z"
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#b3cae876d8)">
                    <path
                      fill="currentColor"
                      d="M 125.789062 178.800781 C 151.679688 178.84375 177.574219 178.734375 203.460938 178.835938 C 225.433594 178.917969 241.203125 197.921875 237.042969 219.089844 C 233.976562 234.6875 220.066406 245.933594 203.617188 245.953125 C 170.492188 245.996094 137.359375 245.96875 104.234375 245.96875 C 103.039062 245.96875 101.84375 245.96875 100.566406 245.96875 C 100.367188 246.679688 100.230469 246.945312 100.222656 247.203125 C 100.203125 256.574219 100.238281 265.949219 100.15625 275.316406 C 100.136719 277.539062 101.507812 277.3125 102.914062 277.3125 C 137.25 277.304688 171.582031 277.433594 205.917969 277.242188 C 232.039062 277.09375 256.355469 259.542969 265.226562 234.941406 C 280.71875 191.953125 249.535156 147.476562 203.84375 147.429688 C 177.675781 147.402344 151.5 147.484375 125.332031 147.394531 C 103.828125 147.320312 87.816406 126.808594 92.890625 106 C 96.605469 90.765625 110.113281 80.386719 126.472656 80.378906 C 172.777344 80.34375 219.085938 80.367188 265.390625 80.367188 C 266.449219 80.367188 267.507812 80.367188 269.089844 80.367188 C 268.3125 79.355469 267.949219 78.84375 267.546875 78.371094 C 259.777344 69.269531 251.957031 60.207031 244.261719 51.042969 C 242.863281 49.371094 241.386719 48.839844 239.269531 48.839844 C 202.148438 48.890625 165.027344 48.863281 127.90625 48.898438 C 124.757812 48.898438 121.597656 49.054688 118.464844 49.351562 C 80.46875 52.878906 53.421875 90.375 61.902344 127.722656 C 68.777344 157.980469 94.726562 178.753906 125.789062 178.800781 Z"
                      fillOpacity="1"
                      fillRule="nonzero"
                    />
                  </g>
                  <g clipPath="url(#2a3b3eb7c2)">
                    <path
                      fill="currentColor"
                      d="M 313.660156 181.292969 C 306.757812 157.476562 292.65625 137.023438 272.875 122.144531 C 253.089844 107.265625 229.503906 99.371094 204.667969 99.316406 C 189.113281 99.28125 173.296875 99.296875 158 99.300781 C 150.722656 99.308594 143.441406 99.308594 136.164062 99.308594 C 134.898438 99.316406 133.617188 99.300781 132.347656 99.300781 C 130.023438 99.296875 127.628906 99.289062 125.246094 99.300781 C 120.75 99.335938 116.660156 101.003906 113.722656 103.992188 C 111 106.773438 109.519531 110.453125 109.558594 114.367188 C 109.648438 122.792969 116.222656 129.035156 125.203125 129.203125 C 126.007812 129.21875 126.820312 129.21875 127.628906 129.21875 L 128.425781 129.21875 C 136.328125 129.21875 144.214844 129.210938 152.109375 129.199219 C 169.160156 129.175781 186.792969 129.15625 204.117188 129.238281 C 228.699219 129.355469 251.027344 139.289062 267 157.210938 C 282.933594 175.085938 290.230469 198.324219 287.546875 222.648438 C 283.015625 263.703125 246.800781 295.96875 205.09375 296.105469 C 174.773438 296.207031 143.941406 296.179688 114.121094 296.152344 C 103.425781 296.144531 92.734375 296.132812 82.046875 296.132812 C 82.046875 289.023438 82.039062 281.921875 82.03125 274.8125 C 82.003906 249.53125 81.984375 223.386719 82.183594 197.695312 C 82.230469 191.058594 81.105469 182.769531 71.816406 177.523438 C 70.96875 177.046875 69.835938 175.972656 68.632812 174.835938 C 67.855469 174.097656 66.976562 173.261719 66.003906 172.429688 L 52.183594 160.519531 L 52.183594 326.089844 L 64.734375 326.089844 C 75.722656 326.089844 86.71875 326.101562 97.703125 326.109375 C 110.433594 326.125 123.347656 326.128906 136.335938 326.128906 C 152.175781 326.128906 168.128906 326.117188 183.921875 326.0625 C 185.9375 326.054688 187.960938 326.0625 189.988281 326.070312 C 199.976562 326.097656 210.308594 326.125 220.566406 324.746094 C 252.84375 320.421875 281.65625 302.140625 299.613281 274.601562 C 317.691406 246.871094 322.8125 212.863281 313.660156 181.292969 Z"
                      fillOpacity="1"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-lg font-mono">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -50 }}
                  animate={typingDone ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.1 + i * 0.3,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="relative flex hover:text-indigo-600 dark:hover:text-indigo-500 after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.button
                onClick={() => setIsResumeOpen(true)}
                initial={{ opacity: 0 }}
                animate={typingDone ? { opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + navLinks.length * 0.3 + 0.5, // appears after last link
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="relative flex font-mono text-lg pb-1 border-b-2 border-l-2 border-r-2 px-2 border-indigo-600 hover:border-indigo-600 hover:text-indigo-600 dark:border-indigo-500 dark:hover:border-indigo-500 text-indigo-500 transition-transform duration-300 shadow-lg hover:shadow-indigo-600 hover:animate-pulse cursor-pointer"
              >
                Resume
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={typingDone ? { opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + navLinks.length * 0.3 + 0.5, // appears after Resume link
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden ml-auto flex items-center justify-center z-50">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                initial={{ opacity: 0, y: -50 }}
                animate={typingDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col justify-center items-center gap-2  cursor-pointer"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 10 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden fixed inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-50 text-black dark:text-white"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-500"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsResumeOpen(true);
                setMenuOpen(false);
              }}
              className="font-mono text-xl pb-1 border-b-2 border-l-2 border-r-2 px-2 border-indigo-600 hover:border-indigo-600 hover:text-indigo-600 dark:border-indigo-500 dark:hover:border-indigo-500 text-indigo-500 transition-transform duration-200 shadow-lg hover:shadow-indigo-600 hover:animate-pulse cursor-pointer"
            >
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <Modal
        isOpen={isResumeOpen}
        closeModalAction={() => setIsResumeOpen(false)}
      />

      {/* Mobile Theme Toggle */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}
