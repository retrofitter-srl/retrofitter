const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-border/10 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-mono text-[10px] font-bold text-accent-foreground">RF</span>
          </div>
          <span className="text-sm text-surface-dark-foreground">
            © {new Date().getFullYear()} Retrofitter S.R.L.
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          Automatización Industrial · Argentina
        </div>
      </div>
    </footer>
  );
};

export default Footer;
