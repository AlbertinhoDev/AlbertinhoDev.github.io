import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Swift", "Go", "Dart", "JavaScript", "Python", "VBA"],
  },
  {
    category: "Mobile",
    skills: [
      "SwiftUI",
      "UIKit",
      "Combine",
      "Swift Concurrency",
      "GCD",
      "Core Location",
      "PhotosUI",
      "Keychain",
      "AuthenticationServices",
      "XCTest",
      "Flutter",
    ],
  },
  {
    category: "Architecture",
    skills: ["MVVM", "Coordinators", "Router pattern", "Dependency Injection", "Assembly pattern", "Clean Architecture", "SOLID"],
  },
  {
    category: "Backend / Infra",
    skills: [
      "REST API",
      "Go (net/http)",
      "retry / timeout handling",
      "logging",
      "in-memory storage",
      "Firebase",
      "Agora",
      "Render",
      "Node.js (basic backend)",
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <span className="section-label">Skills</span>
      <SectionTitle>Mobile depth, architecture discipline, and backend fundamentals.</SectionTitle>
      <SectionSubtitle>
        The stack below reflects the tools and patterns behind my mobile work today and my
        backend growth path in Go.
      </SectionSubtitle>
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="premium-panel card-hover p-6 md:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground">{group.category}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
                {group.skills.length} items
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
