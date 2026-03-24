import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const focusAreas = [
  { title: "Clean Architecture", description: "Structured layers, clear boundaries, and separation of concerns across every project." },
  { title: "Scalable Navigation & App Flows", description: "Coordinator and router patterns that handle complex navigation without tight coupling." },
  { title: "Dependency Injection", description: "Assembly-based DI for testable, modular, and maintainable codebases." },
  { title: "Async Workflows & Concurrency", description: "Combine, Swift Concurrency, and GCD for responsive, safe asynchronous operations." },
  { title: "Networking & Service Layers", description: "Structured networking abstractions and reusable service layers for production applications." },
  { title: "Real-Time & Communication Features", description: "Token-based calling, push notification backends, and live messaging infrastructure." },
  { title: "Maintainability & Long-Term Evolution", description: "Code designed for long-term evolution — readable, extensible, and refactor-friendly." },
  { title: "Backend Fundamentals (Go)", description: "REST APIs, retry logic, concurrent-safe patterns, and clean server-side architecture." },
];

const EngineeringFocusSection = () => {
  return (
    <SectionWrapper id="focus">
      <SectionTitle>Engineering Focus</SectionTitle>
      <SectionSubtitle>Core areas of technical depth and ongoing investment.</SectionSubtitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {focusAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-6 rounded-lg border border-border bg-card card-hover"
          >
            <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EngineeringFocusSection;
