import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const name = "Thiruvilan M";
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg gradient-text">
              {initials}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">{roles[0]}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
