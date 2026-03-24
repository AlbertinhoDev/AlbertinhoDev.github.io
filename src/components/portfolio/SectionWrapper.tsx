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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container max-w-5xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{children}</h2>
);

export const SectionSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">{children}</p>
);

export default SectionWrapper;
