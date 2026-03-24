import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const focusAreas = [
  {
    title: "Clean Architecture",
    description: "Feature boundaries, service layers, and data flow organized to stay clear as products become larger.",
  },
  {
    title: "Scalable navigation flows",
    description: "Coordinator and router-driven structures for auth gates, deep screens, and product navigation that can keep evolving.",
  },
  {
    title: "Dependency Injection",
    description: "Assembly-based composition that makes modules easier to test, replace, and reason about.",
  },
  {
    title: "Async workflows and concurrency",
    description: "Combine, Swift Concurrency, and GCD used where product behavior depends on timing, state, and async coordination.",
  },
  {
    title: "Networking and service layers",
    description: "Client APIs and service abstractions designed for reuse, isolation, and long-term maintainability.",
  },
  {
    title: "Real-time communication features",
    description: "Communication-oriented flows backed by Firebase, Agora, notification endpoints, and event-driven product behavior.",
  },
  {
    title: "Maintainability and long-term evolution",
    description: "Codebases shaped for future product work, not only first delivery, with clarity around responsibilities and extension points.",
  },
  {
    title: "Backend fundamentals (Go)",
    description: "REST APIs, concurrency-safe access, retries, timeouts, and clean service structure as backend depth grows.",
  },
];

const EngineeringFocusSection = () => {
  return (
    <SectionWrapper id="focus">
      <span className="section-label">Engineering Focus</span>
      <SectionTitle>Technical patterns I optimize for when products get real.</SectionTitle>
      <SectionSubtitle>
        The strongest signal in my work is architectural thinking around navigation, async state,
        integrations, and maintainability.
      </SectionSubtitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {focusAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="premium-panel card-hover p-6 md:p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ml-4 h-px flex-1 bg-white/8" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{area.title}</h3>
            <p className="text-sm leading-7 text-text-secondary md:text-base">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EngineeringFocusSection;
