
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-background via-[#07383d] to-[#172b4d] py-16 md:py-20 scroll-mt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/15" />

      <div className="absolute -top-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Main hero container */}
      <div className="container mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Left: Text content */}
        <div className="relative z-10 order-2 space-y-6 text-center md:order-1 md:text-left">

          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-[clamp(2.3rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight text-cyan-400 sm:whitespace-nowrap"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Nivedhitha S V
          </motion.h1>

          <motion.h2
            className="text-2xl font-light leading-snug text-gray-200 md:text-3xl"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Full-Stack Developer
            <span className="text-cyan-400"> | </span>
            AI/ML Enthusiast
          </motion.h2>

          <motion.p
            className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 md:mx-0 md:text-lg"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Creating intelligent, responsive, and visually striking web
            experiences.
          </motion.p>

          <motion.div
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Available for remote & onsite opportunities
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 pt-3 md:justify-start"
            custom={5}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-cyan-400/50 bg-gray-900/40 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-5 pt-3 md:justify-start"
            custom={6}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            {/* GitHub */}
            <a
              href="https://github.com/nivedhitha596"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.07 3.29 9.36 7.85 10.88.57.11.78-.25.78-.56 0-.28-.01-1.02-.01-2-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.86 10.86 0 0 1 2.86-.39c.97.01 1.95.13 2.86.39 2.18-1.5 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.08 0 4.44-2.69 5.41-5.26 5.69.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.79.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/nivedhitha-s-v-473596328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.854-3.037-1.855 0-2.14 1.447-2.14 2.943v5.663h-3.554V9h3.413v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.603 0 4.268 2.37 4.268 5.456v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.144.925-2.069 2.07-2.069 1.143 0 2.069.925 2.069 2.069 0 1.144-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.791 0 0 .792 0 1.771v20.457C0 23.209.791 24 1.771 24h20.451C23.208 24 24 23.209 24 22.228V1.771C24 .792 23.208 0 22.225 0z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Profile image */}
        <motion.div
          className="relative order-1 mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px] md:order-2 md:max-w-[380px]"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Soft cyan / violet glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-xl" />

          {/* Compact vertical portrait card (9:16 aspect ratio) */}
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-cyan-400/30 bg-gray-950/40 shadow-2xl shadow-cyan-950/50">
            <img
              src="/hero.jpg"
              alt="Nivedhitha's 3D profile portrait"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
