import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const moreProjects = [
  {
    title: "Delivery Food App",
    tag: "UIKit",
    description: "Structured UI flows, product-style navigation, and scalable screen organization.",
  },
  {
    title: "ToDo App",
    tag: "iOS",
    description: "Task management, CRUD logic, and clean UX.",
  },
  {
    title: "Gallery App",
    tag: "iOS",
    description: "Media presentation, UI interaction, and navigation patterns.",
  },
  {
    title: "News App",
    tag: "SwiftUI",
    description: "API integration, async/await, and content feeds.",
  },
  {
    title: "Stocks List App",
    tag: "iOS",
    description: "Data-driven UI, list management, and networking basics.",
  },
  {
    title: "Weather App",
    tag: "iOS",
    description: "API integration, async data updates, and UI rendering.",
  },
  {
    title: "Bluetooth Searcher",
    tag: "iOS",
    description: "Device discovery, real-time updates, and system interaction.",
  },
];

const MoreProjectsSection = () => {
  return (
    <SectionWrapper id="more-projects">
      <span className="section-label">Additional Projects</span>
      <SectionTitle>Smaller applications across mobile product patterns.</SectionTitle>
      <SectionSubtitle>
        These projects demonstrate hands-on experience across different aspects of mobile and
        backend development.
      </SectionSubtitle>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {moreProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="premium-panel card-hover p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
                {project.tag}
              </span>
            </div>
            <p className="text-sm leading-7 text-text-secondary">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MoreProjectsSection;
