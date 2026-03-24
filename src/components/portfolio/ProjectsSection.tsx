import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

interface Project {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  focus: string;
  featured?: boolean;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "WeFriiends",
    tag: "Main Active Project",
    description:
      "A large SwiftUI iOS application under active development, focused on architecture, navigation flows, and long-term maintainability. Features Combine-driven state handling, coordinator-based navigation with a custom routing approach, MVVM structure, and dependency injection. Includes authentication flows, location and network-aware features, a dedicated design system, and localization support.",
    stack: ["SwiftUI", "Combine", "MVVM", "Coordinators", "DI"],
    focus: "Architecture-heavy iOS product with real-world complexity and ongoing evolution.",
    featured: true,
    badge: "Active Development",
  },
  {
    title: "Family Chat",
    tag: "Communication Product",
    description:
      "A cross-platform communication application built with Flutter, integrating Firebase services, Agora-based calling, and a custom push notification backend. Includes notification endpoints and communication-oriented product logic across both app and server-side pieces.",
    stack: ["Flutter", "Firebase", "Agora", "Push Backend"],
    focus: "Full-stack communication product with real-time capabilities.",
  },
  {
    title: "Market Data Service",
    tag: "Backend (Go)",
    description:
      "A backend service for fetching and serving currency rates, demonstrating real backend patterns: external API integration, in-memory storage with sync.RWMutex, retry and timeout handling, stale data detection, logging, and a testable structure throughout.",
    stack: ["Go", "REST API", "sync.RWMutex", "Retry Logic"],
    focus: "Reliable backend patterns with concurrent-safe data access.",
  },
  {
    title: "Log Analyzer API",
    tag: "Backend (Go)",
    description:
      "A Go service for parsing and analyzing logs with a clean and structured architecture. Features clean separation of handler, service, and model layers, tests, Dockerfile and Makefile for streamlined development.",
    stack: ["Go", "REST", "Docker", "Make"],
    focus: "Clean structure and standard library backend methodology.",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`rounded-lg border border-border bg-card p-6 md:p-8 card-hover ${
        project.featured ? "md:col-span-2 glow-border" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
              {project.tag}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
          </div>
          {project.badge && (
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.badge}
            </span>
          )}
        </div>
        <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
          <a href="https://github.com/AlbertinhoDev" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-xs text-text-tertiary italic">{project.focus}</p>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SectionSubtitle>Selected work demonstrating architecture, product thinking, and technical depth.</SectionSubtitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
