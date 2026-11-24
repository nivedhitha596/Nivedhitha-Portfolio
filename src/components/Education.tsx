import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-20 bg-background/90">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="bg-gray-900/60 backdrop-blur-xs rounded-xl p-6 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-2">
            B.E. Computer Science & Engineering (AI & ML)
          </h3>
          <p className="text-gray-300">
            KPR Institute of Engineering and Technology, Coimbatore
          </p>
          <p className="text-gray-400">Expected Graduation: 2028</p>
          <p className="text-gray-400">CGPA: 7.91</p>
        </motion.div>
      </div>
    </section>
  );
}
