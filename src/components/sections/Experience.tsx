"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string | string[];
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Software QA Engineer",
      company: "Boeing",
      period: "2023 – Present",
      description: [
        "Executes diverse testing (functional, regression, web services, mobile performance/usability), tracking defects and maintaining detailed documentation of test results.",
        "Serves as Scrum Master, facilitating all ceremonies, coaching the team on Agile/Scrum principles.",
        "Develops and maintains multiple automated test scripts using TestComplete, integrating them into Jenkins CI.",
        "Leads end-to-end QA strategies for major releases, overseeing test planning and documentation.",
        "Collaborates with development teams to identify, report, and resolve software defects promptly.",
      ],
    },
    {
      role: "Web Development",
      company: "Hobby",
      period: "2018 – Present",
      description: [
        "Develops responsive and dynamic web applications using Next.js and React.",
        "Utilizes Tailwind CSS to create modern, maintainable, and scalable styling solutions.",
        "Ensures cross-browser compatibility and responsive design across various devices.",
        "Optimizes applications for performance and accessibility.",
        "Implements reusable components and follows best practices for clean, efficient code.",
      ],
    },
    {
      role: "Boatswain's Mate 3rd Class Petty Officer",
      company: "United States Navy",
      period: "2014 – 2018",
      description: [
        "Held a secret security clearance while performing bridge associated tasks such as standing watch as Helmsman and Lee Helmsman.",
        "Served as a master helmsman responsible for navigating a 1,092-foot aircraft carrier through critical missions over 12,000 miles and 4 successful Pacific deployments.",
        "Led a watch team of five seamen as BMOW, ensuring safe operations and clear communication via ship-wide announcements.",
        "Trained and supervised ship maintenance duties including rigging, painting, deck equipment, and RHIB operations.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/70 rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg p-6 text-gray-800 dark:text-gray-100 hover:brightness-110 hover:shadow-xl hover:scale-[1.02] hover:border-indigo-600 dark:hover:border-indigo-500 transform backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold font-sans mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 font-mono">
                {exp.company} • {exp.period}
              </p>

              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 font-sans">
                  {exp.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
