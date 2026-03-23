import { useState } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-surface-dark border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-14">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-primary-foreground tracking-wider">RF</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-white text-[15px] tracking-tight">RETROFITTER</span>
              <span className="text-white/50 text-xs ml-1.5 hidden sm:inline">S.R.L.</span>
            </div>
          </a>

          <div className="flex items-center gap-5">
            <button className="text-white/60 hover:text-white transition-colors hidden md:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              className="md:hidden text-white/80"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation links bar */}
      <div className="hidden md:block bg-surface-dark/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto flex items-center px-6 lg:px-10 h-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-white/70 hover:text-white transition-colors font-medium px-5 h-full flex items-center group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-dark border-t border-white/5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-6 py-4 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
            >
              {item.label}
              <ChevronRight size={16} className="text-white/30" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
