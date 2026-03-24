import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-white/12 bg-background/78 shadow-[0_18px_48px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            : "border-white/8 bg-background/42 backdrop-blur-md"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-foreground">
            AG
          </span>
          <span className="hidden text-sm font-medium text-text-secondary sm:block">
            Mobile Engineer / Go Transition
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button variant="hero-outline" size="sm" asChild className="hidden md:inline-flex">
          <a href="https://github.com/AlbertinhoDev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
