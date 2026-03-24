import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Swift", "Go", "Dart", "JavaScript", "Python", "VBA"],
  },
  {
    category: "Mobile",
    skills: ["SwiftUI", "UIKit", "Combine", "Swift Concurrency", "GCD", "Core Location", "PhotosUI", "Keychain", "AuthenticationServices", "XCTest", "Flutter"],
  },
  {
    category: "Architecture",
    skills: ["MVVM", "Coordinators", "Router Pattern", "Dependency Injection", "Assembly Pattern", "Clean Architecture", "SOLID"],
  },
  {
    category: "Backend / Infra",
    skills: ["REST API", "Go (net/http)", "Retry / Timeout Handling", "Logging", "In-Memory Storage", "Firebase", "Agora", "Render", "Node.js (Basic Backend)"],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>Technologies and patterns I work with regularly.</SectionSubtitle>
      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border"
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
