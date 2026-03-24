import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`section-spacing ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="container max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="headline-tight mb-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
    {children}
  </h2>
);

export const SectionSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="mb-12 max-w-3xl text-base leading-8 text-text-secondary md:text-lg">{children}</p>
);

export default SectionWrapper;
