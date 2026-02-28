import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  const degree = "Bachelor of Computer Science";
  const institution = "Your University Name";
  const years = "2021 – 2025";
  const location = "Chennai, India";
  const description = `Focused on building strong foundations in software engineering, data structures, system design, and full-stack web development. 

Actively participated in hands-on projects and collaborative development to strengthen problem-solving skills and practical implementation knowledge.`;

  return (
    <section id="education" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">Academic background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-7">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-display font-bold mb-1.5">
                  {degree}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium text-sm">{institution}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{years}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-5">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-xs font-semibold mb-2.5 text-muted-foreground uppercase tracking-wider">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Software Engineering",
                  "Web Technologies",
                  "Data Structures",
                  "System Design",
                  "Database Management",
                ].map((area) => (
                  <span key={area} className="tech-tag text-[0.7rem]">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
