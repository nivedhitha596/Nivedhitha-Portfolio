
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "🛠️ Programming: Java, Python, C, C++, JavaScript, SQL",
    "📚 Core concepts: Data Structures, Algorithms, OOP",
    "🌐 Web development: HTML5, CSS3, JavaScript, RESTful APIs",
    "🗄️ Databases and tools: MongoDB, Git, GitHub, VS Code, Postman",
    "🤖 AI/ML libraries: OpenCV, InsightFace, NumPy, Pandas",
    "🚀 Interested in building innovative applications through software development and AI/ML",
  ];

  return (
    <section className="py-12 bg-background/90">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I am <strong>Nivedhitha S V</strong>, a Computer Science and
          Engineering student specializing in Artificial Intelligence and
          Machine Learning at KPR Institute of Engineering and Technology,
          Coimbatore. I am pursuing my B.E. degree with an expected graduation
          in 2028 and a CGPA of 7.91. I enjoy developing responsive web
          applications, exploring AI/ML technologies, and solving
          real-world problems through technology.
        </motion.p>

        <motion.ul
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
