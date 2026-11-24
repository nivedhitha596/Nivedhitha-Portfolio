import { motion } from "framer-motion";
import { Code, Database, Cpu, Layers } from "lucide-react";

type SkillCategory = {
  title: string;
  items: { name: string; icon: React.ReactNode }[];
};

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: <Code size={20} /> },
      { name: "Python", icon: <Code size={20} /> },
      { name: "C / C++", icon: <Code size={20} /> },
      { name: "JavaScript (ES6+)", icon: <Code size={20} /> },
      { name: "SQL", icon: <Database size={20} /> },
      { name: "HTML5", icon: <Layers size={20} /> },
      { name: "CSS3", icon: <Layers size={20} /> },
    ],
  },
  {
    title: "Software Engineering",
    items: [
      { name: "Data Structures & Algorithms", icon: <Cpu size={20} /> },
      { name: "OOP", icon: <Cpu size={20} /> },
      { name: "RESTful API Design", icon: <Layers size={20} /> },
      { name: "Git", icon: <Code size={20} /> },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { name: "MongoDB", icon: <Database size={20} /> },
      { name: "Postman", icon: <Layers size={20} /> },
      { name: "VS Code", icon: <Code size={20} /> },
      { name: "GitHub", icon: <Code size={20} /> },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "OpenCV", icon: <Cpu size={20} /> },
      { name: "InsightFace", icon: <Cpu size={20} /> },
      { name: "NumPy", icon: <Cpu size={20} /> },
      { name: "Pandas", icon: <Cpu size={20} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-gray-900/60 backdrop-blur-xs rounded-xl p-6 border border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{cat.title}</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-200">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
