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
        "Executes diverse testing (functional, regression, web services, mobile performance/usability), tracking defects and maintaining detailed documentation of test results.\n",
        "Serves as Scrum Master, facilitating all ceremonies, coaching the team on Agile/Scrum principles.\n",
        "Develops and maintains multiple automated test scripts using TestComplete, integrating them into Jenkins CI.\n",
        "Leads end-to-end QA strategies for major releases, overseeing test planning and documentation.\n",
        "Collaborates with development teams to identify, report, and resolve software defects promptly.",
      ],
    },
    {
      role: "Web Development",
      company: "Hobby",
      period: "2018 – Present",
      description: [
        "Develops responsive and dynamic web applications using Next.js and React.\n",
        "Utilizes Tailwind CSS to create modern, maintainable, and scalable styling solutions.\n",
        "Ensures cross-browser compatibility and responsive design across various devices.\n",
        "Optimizes applications for performance and accessibility.\n",
        "Implements reusable components and follows best practices for clean, efficient code.",
      ],
    },
    {
      role: "Boatswain's Mate 3rd Class Petty Officer",
      company: "United States Navy",
      period: "2014 – 2018",
      description: [
        "Held a secret security clearance while performing bridge associated tasks such as standing watch as Helmsman and Lee Helmsman.\n",
        "Essential to the ship’s navigation for serving as a master helmsman who successfully conducted critical tasks of driving a 1,092-foot aircraft carrier through 16 special evolutions traveling over 12,000 miles and 4 successful Pacific deployments.\n",
        "Stood watch as BMOW (Boatswain’s Mate of the Watch) which included the responsibility of leading a team of five seamen to having a successful watch, making special announcements and everything related to the ship’s activities over the 1MC.\n",
        "Trained, directed, and supervised personnel in ship’s maintenance duties from all activities relating to marlinespike, deck, boat seamanship, painting, upkeep of ship’s external structure, rigging, deck equipment, and RHIBs (Rigid Hull Inflatable Boats).",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="pt-24 md:pt-34 pb-24 md:pb-34 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 text-white px-4"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 rounded-lg border border-gray-600 shadow-lg p-6 text-gray-100 hover:brightness-110 hover:shadow-xl hover:scale-[1.02] hover:border-indigo-400 transition transform backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-1 text-white">
                {exp.role}
              </h3>
              <p className="text-gray-400 mb-3">
                {exp.company} • {exp.period}
              </p>

              {/* If description is an array, show bullets. Else, show paragraph */}
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
                <p className="text-gray-300">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
