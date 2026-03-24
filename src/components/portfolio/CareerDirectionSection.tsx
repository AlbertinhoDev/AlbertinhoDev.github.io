import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const CareerDirectionSection = () => {
  return (
    <SectionWrapper id="direction">
      <SectionTitle>Where I'm Growing</SectionTitle>
      <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
        I am currently expanding from mobile development into backend engineering using Go,
        focusing on reliability, concurrency, and system design — while keeping the same
        architectural rigor that drives my iOS work.
      </p>
    </SectionWrapper>
  );
};

export default CareerDirectionSection;
