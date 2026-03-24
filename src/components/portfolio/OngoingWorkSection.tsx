import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const OngoingWorkSection = () => {
  return (
    <SectionWrapper id="ongoing" className="pt-0">
      <div className="premium-panel p-7 md:p-8">
        <span className="section-label">Ongoing Product Work</span>
        <SectionTitle>I continue working on larger and evolving products, including work that is not fully public.</SectionTitle>
        <p className="max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
          I continue working on larger and evolving products, including work that is not fully
          public. This reflects real-world engineering decisions around architecture, scalability,
          and maintainability.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default OngoingWorkSection;
