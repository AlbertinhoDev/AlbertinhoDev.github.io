import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionTitle, SectionSubtitle } from "./SectionWrapper";

const contacts = [
  { label: "GitHub", href: "https://github.com/AlbertinhoDev", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/albert-ganiev-b877b6331", icon: Linkedin },
  { label: "Email", href: "mailto:ganiev.albert.len@gmail.com", icon: Mail },
];

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <SectionSubtitle>Open to opportunities, collaborations, and technical conversations.</SectionSubtitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card card-hover text-center"
          >
            <contact.icon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">{contact.label}</span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
