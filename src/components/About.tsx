import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const About: React.FC = () => {
  const name = "Thiruvilan";
  const location = "India";
  const about = `I am a passionate full-stack developer focused on building scalable, user-centric applications. 
I enjoy transforming complex problems into clean, efficient, and intuitive digital experiences.

With experience across frontend and backend technologies, I aim to build applications that are not only functional but also performant and maintainable. I continuously explore new technologies and design patterns to improve both product quality and developer experience.`;

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Who I am and what I bring to the table
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-lg font-display font-bold text-primary-foreground">
                  {name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-display font-semibold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "4+", label: "Projects" },
                  { value: "8+", label: "Technologies" },
                  { value: "3+", label: "Years Coding" },
                  { value: "∞", label: "Curiosity" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-3 text-center">
                    <div className="text-2xl font-display font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="glass-card p-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-[0.925rem]">
                {about}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Clean Architecture",
                "Performance-Focused",
                "Collaborative",
                "Detail-Oriented"
              ].map((trait, i) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="tech-tag"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};