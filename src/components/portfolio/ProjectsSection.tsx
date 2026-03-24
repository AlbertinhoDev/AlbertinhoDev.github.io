import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

interface Project {
  title: string;
  tag: string;
  description: string;
  points: string[];
  stack: string[];
}

const featuredProject: Project = {
  title: "WeFriiends",
  tag: "Featured Project",
  description:
    "A large SwiftUI iOS application under active development, built around architecture, navigation flows, and long-term maintainability. It is treated as a real product with evolving feature scope, structured state handling, and infrastructure for ongoing growth.",
  points: [
    "SwiftUI-based app",
    "Combine-driven state handling",
    "coordinator-based navigation flows",
    "custom routing approach",
    "MVVM structure",
    "dependency injection",
    "authentication flows",
    "location and network-aware features",
    "design system and localization",
    "active ongoing development",
  ],
  stack: ["SwiftUI", "Combine", "MVVM", "Coordinators", "Dependency Injection"],
};

const selectedProjects: Project[] = [
  {
    title: "Family Chat",
    tag: "Communication Product",
    description:
      "A cross-platform communication application built with Flutter, integrating Firebase services, Agora-based calling, and a custom push notification backend for communication-oriented product logic.",
    points: [
      "Flutter multi-platform app",
      "Firebase integration",
      "Agora-based communication",
      "custom push backend",
      "notification endpoints",
      "communication-oriented product logic",
    ],
    stack: ["Flutter", "Firebase", "Agora", "Push backend"],
  },
  {
    title: "Market Data Service",
    tag: "Backend (Go)",
    description:
      "A backend service that demonstrates practical backend patterns around API consumption, concurrent-safe data access, failure handling, and testable structure.",
    points: [
      "REST API",
      "external API integration",
      "in-memory storage",
      "concurrency (sync.RWMutex)",
      "retry and timeout handling",
      "stale data detection",
      "logging",
      "testable structure",
    ],
    stack: ["Go", "REST API", "sync.RWMutex", "logging"],
  },
  {
    title: "Log Analyzer API",
    tag: "Backend (Go)",
    description:
      "A Go service for parsing and analyzing logs with a clean handler and service split, lightweight infrastructure, and a structure that stays easy to test and extend.",
    points: [
      "log parsing",
      "analysis endpoint",
      "clean structure (handler/service separation)",
      "tests",
      "Dockerfile and Makefile",
    ],
    stack: ["Go", "REST API", "tests", "Dockerfile", "Makefile"],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <span className="section-label">Selected Projects</span>
      <SectionTitle>Product work and backend services with architecture at the center.</SectionTitle>
      <SectionSubtitle>
        The selected work below shows how I approach product systems, communication flows, and
        backend structure without inflating scope or inventing technologies.
      </SectionSubtitle>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="premium-panel-strong card-hover mb-6 overflow-hidden p-7 md:p-9"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                {featuredProject.tag}
              </span>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
                Active Development
              </span>
            </div>
            <h3 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">
              {featuredProject.title}
            </h3>
            <p className="mb-6 max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {featuredProject.stack.map((item) => (
                <span key={item} className="muted-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.35rem] border border-white/8 bg-black/10 p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
              Product Scope
            </p>
            <div className="grid gap-3">
              {featuredProject.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {selectedProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="premium-panel card-hover flex h-full flex-col p-6 md:p-7"
          >
            <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
              {project.tag}
            </span>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">{project.title}</h3>
            <p className="mb-6 text-sm leading-7 text-text-secondary md:text-base">
              {project.description}
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="muted-chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto space-y-3">
              {project.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
