const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="font-mono text-[10px] font-bold text-primary-foreground tracking-wider">RF</span>
              </div>
              <span className="font-bold text-white text-sm tracking-tight">RETROFITTER</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Automatización industrial, retrofit y control de procesos en Argentina.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {["Programación PLC", "SCADA / HMI", "Retrofit", "Instrumentación"].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {["Proyectos", "Cobertura", "Contacto"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>info@retrofitter.com.ar</li>
              <li>+54 11 5555-0000</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/30">
            © {new Date().getFullYear()} Retrofitter S.R.L. Todos los derechos reservados.
          </span>
          <span className="text-xs text-white/30">
            Automatización Industrial · Argentina
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
