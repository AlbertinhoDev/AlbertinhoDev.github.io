const Footer = () => {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-text-tertiary">© {new Date().getFullYear()} Albert Ganiev</p>
        <p className="text-xs uppercase tracking-[0.22em] text-text-tertiary">
          Mobile architecture / backend progression
        </p>
      </div>
    </footer>
  );
};

export default Footer;
