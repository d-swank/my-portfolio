"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const fullText = "Hello, I'm Dakota Swank";
  const prefixLength = "Hello, I'm ".length;

  const heroRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [showBlink, setShowBlink] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [showParagraph, setShowParagraph] = useState(false);

  // Track if Hero section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isInView || index >= fullText.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 150);
    return () => clearTimeout(timeout);
  }, [index, isInView]);

  // Enable blink + paragraph animation after typing
  useEffect(() => {
    if (index === fullText.length) {
      setShowBlink(true);
      setShowParagraph(true);
    }
  }, [index]);

  const visibleText = fullText.slice(0, index);
  const prefix = visibleText.slice(0, prefixLength);
  const name = visibleText.slice(prefixLength);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white text-4xl scroll-mt-20"
    >
      <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4">
        <span className="inline-block">
          {prefix}
          <span className="text-indigo-600 dark:text-indigo-500 font-semibold font-sans">
            {name}
          </span>
          <span
            className={`cursor-blink ${showBlink ? "cursor-blink-active" : ""}`}
          />
        </span>
      </h1>

      <p
        className={`text-xl md:text-2xl font-sans max-w-3xl mb-6 px-5 md:px-5 leading-relaxed transition-all duration-1000 ease-out transform ${
          showParagraph
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        I’m a San Diego-based Software QA Engineer who is driven by detail and
        passionate about performance.
      </p>
    </section>
  );
}
