import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const strengths = [
  "Swift across UIKit and SwiftUI",
  "Architecture design, service layers, and separation of concerns",
  "Authentication, geolocation, async events, and networking flows",
  "Flutter experience on communication-oriented products",
  "Go backend learning path centered on reliability and scalability",
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="section-label">About</span>
          <SectionTitle>Architecture-led mobile engineering with backend momentum.</SectionTitle>
          <p className="max-w-xl text-base leading-8 text-text-secondary md:text-lg">
            Strong iOS experience means more than shipping screens. I build Swift applications
            across UIKit and SwiftUI with clear architectural boundaries, stable service layers,
            and product flows designed to survive real requirements over time.
          </p>
        </div>

        <div className="premium-panel-strong p-7 md:p-8">
          <div className="space-y-5 text-base leading-8 text-text-secondary">
            <p>
              My work covers authentication, geolocation, async events, networking, and the kind
              of product logic that becomes difficult when structure is weak. I focus on
              modularity, Clean Architecture, and separation of concerns so those systems stay
              readable and evolvable as scope increases.
            </p>
            <p>
              I have also worked with Flutter and Dart on communication-based applications, where
              integrations and event-driven flows matter as much as UI delivery. The same mindset
              now drives my backend growth in Go: reliability, scalability, and long-term
              maintainability over short-lived shortcuts.
            </p>
          </div>

          <div className="soft-divider mt-8 pt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
