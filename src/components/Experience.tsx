import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Nubiznez Private Limited, Chennai",
      date: "December 2025",
      duties: [
        "Developed responsive web interfaces using HTML5, CSS3, and JavaScript.",
        "Refactored code into reusable UI components.",
        "Improved initial page load latency by 15%.",
        "Ensured fluid design across desktop, tablet, and mobile.",
      ],
    },
    {
      role: "Full Stack Development Intern",
      company: "Pinesphere, Coimbatore",
      date: "8 June 2026 – 4 July 2026",
      duties: [
        "Built full-stack application components using REST API patterns.",
        "Implemented API endpoints for user data management.",
        "Connected frontend forms with MongoDB data models.",
        "Collaborated via Git for version control and code reviews.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background/90">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="border-l-4 border-primary pl-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-primary">
                {exp.role} –{" "}
                <span className="text-gray-300">{exp.company}</span>
              </h3>

              <p className="text-sm text-gray-400 mb-2">
                {exp.date}
              </p>

              <ul className="list-disc list-inside space-y-1 text-gray-200">
                {exp.duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
