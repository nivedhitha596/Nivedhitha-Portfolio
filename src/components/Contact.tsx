import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const mailtoLink =
    "mailto:nivedhitha5611@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Nivedhitha,";

  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I’m open to new opportunities, collaborations, or a quick chat about tech.
        </motion.p>

        <div className="flex flex-col items-center space-y-4">
          <a
            href={mailtoLink}
            className="flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <div className="flex space-x-6 pt-2">
            <a
              href="https://linkedin.com/in/nivedhitha-s-v-473596328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/nivedhitha596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
