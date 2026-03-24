import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const growthAreas = ["Go", "Reliability", "Concurrency", "System design"];

const CareerDirectionSection = () => {
  return (
    <SectionWrapper id="direction">
      <div className="premium-panel-strong grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
        <div>
          <span className="section-label">Where I'm Growing</span>
          <SectionTitle>I am actively expanding from mobile engineering into backend development with Go.</SectionTitle>
          <p className="max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
            I am actively expanding from mobile engineering into backend development with Go,
            focusing on reliability, concurrency, and system design.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {growthAreas.map((item) => (
            <span key={item} className="muted-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CareerDirectionSection;
