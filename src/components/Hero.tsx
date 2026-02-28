import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const roles = [
    "Full Stack Developer",
    "Unity Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Initials Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="mb-10 inline-block"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl gradient-bg p-[2px]">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  TM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 tracking-tight text-foreground">
              Thiruvilan M
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="h-10 md:h-12 mb-6 overflow-hidden"
          >
            <motion.span
              key={currentRole}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl font-medium text-primary inline-block"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              I build scalable web applications and interactive digital
              experiences with clean architecture and modern technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="gradient-bg px-5 py-2.5 rounded-lg font-medium text-primary-foreground 
               flex items-center justify-center gap-2 text-sm 
               hover:bg-primary/90 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="glass-card px-5 py-2.5 rounded-lg font-medium 
               flex items-center justify-center gap-2 text-sm 
               hover:bg-primary/10 hover:border-primary 
               transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/Thiruvilan_M_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card px-5 py-2.5 rounded-lg font-medium 
               flex items-center justify-center gap-2 text-sm
               hover:bg-accent/10 hover:border-accent 
               transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="text-muted-foreground/50 cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
