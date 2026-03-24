import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const OngoingWorkSection = () => {
  return (
    <SectionWrapper id="ongoing">
      <SectionTitle>Ongoing Product Work</SectionTitle>
      <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
        I continue working on larger and evolving products, including work that is not fully
        public. This reflects real-world engineering decisions around architecture,
        scalability, and maintainability.
      </p>
    </SectionWrapper>
  );
};

export default OngoingWorkSection;
