import { motion } from "framer-motion";
import heroImg from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Planta de automatización industrial"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-surface-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="label-tag">Automatización Industrial</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Soluciones de control y automatización para la industria
          </h1>
          <p className="text-lg text-surface-dark-foreground leading-relaxed mb-8 max-w-xl">
            Retrofit, integración y puesta en marcha de sistemas PLC, SCADA e instrumentación. 
            Más de 15 años resolviendo problemas reales en plantas industriales.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:opacity-90 transition-opacity"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 border border-surface-dark-foreground/30 text-surface-dark-foreground font-medium text-sm rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Contacto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex gap-12 flex-wrap"
        >
          {[
            { value: "150+", label: "Proyectos ejecutados" },
            { value: "15", label: "Años de experiencia" },
            { value: "6", label: "Provincias" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-surface-dark-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
