import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  // No external links per user request
};

const projects: Project[] = [
  {
    title: "URBAN EYE – Full‑Stack Civic Reporting Platform",
    description:
      "A platform that enables citizens to report geotagged infrastructure defects, with interactive maps and role‑based access for municipal authorities. Optimized MongoDB geolocation queries.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MongoDB"],
  },
  {
    title: "PredixAI – Predictive Maintenance Using IoT & Autoencoders",
    description:
      "An autoencoder‑based anomaly detection system for sensor data, featuring preprocessing, feature engineering, and visualisation of anomalies for early fault detection.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit‑learn", "Pandas", "NumPy", "Streamlit"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-gray-900/60 backdrop-blur-xs rounded-xl p-6 border border-primary/20 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
