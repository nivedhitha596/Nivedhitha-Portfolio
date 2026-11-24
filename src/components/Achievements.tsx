import { motion } from "framer-motion";

export default function Achievements() {
  const items = [
    "Second place in Prompt Engineering Competition at Sri Eshwar College of Engineering (50+ participants)",
    "Code O Clock National Level Hackathon at CIT, Coimbatore",
    "Solved 200+ coding problems",
  ];

  return (
    <section className="py-20 bg-background/90">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <ul className="space-y-4">
          {items.map((it, i) => (
            <motion.li
              key={it}
              className="bg-gray-900/60 backdrop-blur-xs rounded-xl p-4 border border-primary/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {it}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
