import { motion } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroHighlights = [
  "SwiftUI and UIKit product engineering",
  "Architecture ownership, service layers, and real-world flows",
  "Growing backend depth with Go, concurrency, and reliability",
];

const focusCards = [
  {
    label: "Current Positioning",
    title: "iOS Engineer (Swift, SwiftUI, UIKit) -> Growing Backend Engineer (Go)",
    description:
      "Strong mobile product experience with increasing backend focus around reliability, APIs, and system behavior.",
  },
  {
    label: "Engineering Priorities",
    title: "Architecture, async flows, networking, and maintainability",
    description:
      "I optimize for codebases that stay understandable under product growth, integration work, and long-lived feature evolution.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36">
      <div
        className="absolute left-[-8%] top-[18%] h-[26rem] w-[26rem] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 68%)" }}
      />
      <div
        className="absolute right-[-10%] top-[10%] h-[22rem] w-[22rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.24), transparent 65%)" }}
      />

      <div className="container relative z-10 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <span className="section-label">Albert Ganiev</span>
            <p className="mb-5 max-w-3xl text-sm font-medium uppercase tracking-[0.22em] text-text-secondary">
              iOS Engineer (Swift, SwiftUI, UIKit) {"->"} Growing Backend Engineer (Go)
            </p>
            <h1 className="headline-tight mb-7 max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
              Building scalable mobile products and reliable backend services
            </h1>
            <p className="mb-10 max-w-3xl text-lg leading-8 text-text-secondary md:text-xl">
              I design maintainable applications with a focus on architecture, async workflows,
              networking, and real-world product logic.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://github.com/AlbertinhoDev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="premium-panel px-4 py-4 text-sm leading-6 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:pl-8">
            {focusCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 + index * 0.12, ease: "easeOut" }}
                className="premium-panel-strong card-hover p-6 md:p-7"
              >
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
                  {card.label}
                </p>
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-foreground">
                  {card.title}
                </h2>
                <p className="text-sm leading-7 text-text-secondary md:text-base">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
