import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    "NPTEL – Natural Language Processing (NLP)",
    "NPTEL – Industry 4.0 and Internet of Things (IoT)",
  ];

  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        <ul className="space-y-4">
          {certs.map((c, i) => (
            <motion.li
              key={c}
              className="bg-gray-900/60 backdrop-blur-xs rounded-xl p-4 border border-primary/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {c}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
