import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Planta de automatización industrial"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
            Soluciones de control y automatización para la industria
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
            Retrofit, integración y puesta en marcha de sistemas PLC, SCADA e instrumentación. 
            Más de 15 años resolviendo problemas reales en plantas industriales.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#servicios" className="siemens-btn-primary group">
              Ver servicios
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="siemens-btn-outline-light">
              Contacto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex gap-16 flex-wrap border-t border-white/15 pt-8"
        >
          {[
            { value: "150+", label: "Proyectos ejecutados" },
            { value: "15", label: "Años de experiencia" },
            { value: "6", label: "Provincias" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
