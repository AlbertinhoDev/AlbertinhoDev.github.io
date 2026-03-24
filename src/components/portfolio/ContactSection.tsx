import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";

const contacts = [
  {
    label: "Email",
    value: "ganiev.albert.len@gmail.com",
    href: "mailto:ganiev.albert.len@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/albert-ganiev-b877b6331",
    href: "https://www.linkedin.com/in/albert-ganiev-b877b6331",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/AlbertinhoDev",
    href: "https://github.com/AlbertinhoDev",
    icon: Github,
  },
];

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <span className="section-label">Contact</span>
      <SectionTitle>Open to product-focused engineering conversations.</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="premium-panel card-hover flex min-h-[11rem] flex-col justify-between p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-primary">
              <contact.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
                {contact.label}
              </p>
              <p className="text-sm leading-7 text-text-secondary">{contact.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
