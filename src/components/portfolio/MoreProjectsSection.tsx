import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const moreProjects = [
  { title: "Delivery Food App", tag: "UIKit", description: "Structured UI flows, product-style navigation, and scalable screen organization." },
  { title: "ToDo App", tag: "iOS", description: "Task management with CRUD logic and clean UX." },
  { title: "Gallery App", tag: "iOS", description: "Media presentation, UI interaction, and navigation patterns." },
  { title: "News App", tag: "SwiftUI", description: "API integration, async/await, and content feeds." },
  { title: "Stocks List App", tag: "iOS", description: "Data-driven UI, list management, and networking basics." },
  { title: "Weather App", tag: "iOS", description: "API integration, async data updates, and UI rendering." },
  { title: "Bluetooth Searcher", tag: "iOS", description: "Device discovery, real-time updates, and system interaction." },
];

const MoreProjectsSection = () => {
  return (
    <SectionWrapper id="more-projects">
      <SectionTitle>Additional Projects</SectionTitle>
      <SectionSubtitle>These projects demonstrate hands-on experience across different aspects of mobile and backend development.</SectionSubtitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {moreProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="p-4 rounded-lg border border-border bg-card card-hover"
          >
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-sm text-foreground">{project.title}</h4>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{project.tag}</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MoreProjectsSection;
