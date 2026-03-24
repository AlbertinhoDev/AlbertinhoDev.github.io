const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-tertiary">
          © {new Date().getFullYear()} Albert Ganiev
        </p>
        <p className="text-xs text-text-tertiary">
          Built with intention.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
