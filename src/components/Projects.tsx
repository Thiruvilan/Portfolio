import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Nagrik Aur Samvidhan",
    description:
      "A story-driven interactive application that simplifies complex legal concepts through narrative-based gameplay. Built with Unity, it features branching storylines, dynamic dialogue systems, and scenario-based decision making to improve civic literacy.",
    tags: ["Unity", "C#", "Game Design", "UI/UX"],
    link: "https://github.com/Siddharth-K-S/Nagrik-Aur-Samvidhan",
    github: "https://github.com/Siddharth-K-S/Nagrik-Aur-Samvidhan",
  },
  {
    id: "2",
    title: "People Mood Tracker",
    description:
      "A responsive web application for logging, visualizing, and analyzing emotional patterns over time. Features real-time data visualization with interactive charts, trend analysis, and personalized insights to support mental wellness.",
    tags: ["React", "JavaScript", "CSS", "Data Visualization"],
    link: "https://github.com/Siddharth-K-S/Mood-Tracker-Web",
    github: "https://github.com/Siddharth-K-S/Mood-Tracker-Web",
  },
  {
    id: "3",
    title: "career dreamer (frontend)",
    description:
      "Developed an AI-Powered Career and Skills Advisor, an intelligent system that analyzes students’ technical skills and emotional strengths to recommend personalized career paths aligned with evolving job market demands. The platform uses NLP and machine learning techniques to perform skill extraction, career-role mapping, and skill-gap analysis, helping students make data-driven career decisions and improve employability readiness.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    link: "https://github.com/Thiruvilan/Career-dreamer-frontend",
    github: "https://github.com/Thiruvilan/Career-dreamer-frontend",
  },
  {
    id: "4",
    title: "Workforce Management System",
    description:
      "A full-stack web application for managing workforce operations including employee scheduling, task allocation, and real-time performance dashboards. Built with React and Node.js with a focus on scalability and clean data flow.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    link: "https://github.com/Thiruvilan/workforce_management",
    github: "https://github.com/Thiruvilan/workforce_management",
  },
  {
    id: "5",
    title: "Tendora - E-commerce Platform",
    description:
      "A front-end e-commerce platform built with React and Node.js, featuring product listings, user authentication, cart functionality, and secure payment processing.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    link: "https://github.com/Thiruvilan/Tendora",
    github: "https://github.com/Thiruvilan/Tendora",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">A selection of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const handleCardClick = () => {
    if (project.github && project.github.trim() !== "") {
      window.open(project.github, "_blank", "noopener,noreferrer");
    } else if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onClick={handleCardClick}
      className="project-card p-6 group flex flex-col cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-display font-semibold">{project.title}</h3>

        <div
          className="flex gap-1.5 ml-3 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.github && project.github.trim() !== "" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag text-[0.7rem]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
