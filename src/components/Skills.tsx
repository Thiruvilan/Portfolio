import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { label: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
  { label: 'Web', items: ['HTML', 'CSS', 'React', 'Node.js', 'MySQL'] },
  { label: 'Design & Tools', items: ['Figma', 'Blender', 'Unity'] },
];

const skills = [
  { id: '1', name: 'React', level: 90, icon: '⚛️' },
  { id: '2', name: 'Node.js', level: 85, icon: '🟢' },
  { id: '3', name: 'JavaScript', level: 88, icon: '🟡' },
  { id: '4', name: 'Python', level: 80, icon: '🐍' },
  { id: '5', name: 'MySQL', level: 75, icon: '🗄️' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Left — Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {skillCategories.map((cat) => (
              <div key={cat.label} className="glass-card p-5">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            {skills.map((skill, index) => (
              <SkillBar key={skill.id} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: {
    id: string;
    name: string;
    level: number;
    icon: string;
  };
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="glass-card px-4 py-3"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <span className="text-base">{skill.icon}</span>
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-primary font-semibold">
          {skill.level}%
        </span>
      </div>

      <div className="skill-bar-bg h-1.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.06 }}
          className="skill-bar-fill h-full"
        />
      </div>
    </motion.div>
  );
};