import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-border/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-accent-foreground">RF</span>
          </div>
          <span className="font-semibold text-primary-foreground tracking-tight">
            Retrofitter <span className="text-muted-foreground font-normal text-sm">S.R.L.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-surface-dark-foreground hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-surface-dark-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-dark border-t border-border/10 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-surface-dark-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
