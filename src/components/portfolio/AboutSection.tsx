import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle>About</SectionTitle>
      <div className="max-w-3xl space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
        <p>
          I specialize in iOS development with Swift, building scalable and maintainable
          applications across both UIKit and SwiftUI. My work centers on designing architecture
          and service layers that handle real-world flows — authentication, geolocation, async
          events, and networking — with clean separation of concerns and a focus on modularity.
        </p>
        <p>
          I care about code that other engineers can understand, extend, and maintain. That means
          structured navigation, well-defined service boundaries, and product logic that scales
          with complexity — not just code that works today.
        </p>
        <p>
          Beyond iOS, I work with Flutter and Dart on communication-oriented products, and I'm
          actively expanding into backend engineering with Go — applying the same focus on
          reliability, scalability, and long-term maintainability to server-side systems.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
