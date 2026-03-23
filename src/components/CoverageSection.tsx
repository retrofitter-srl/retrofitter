import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  { province: "Buenos Aires", cities: "CABA, GBA, La Plata, Mar del Plata" },
  { province: "Córdoba", cities: "Capital, Villa María, Río Cuarto" },
  { province: "Santa Fe", cities: "Rosario, Capital, Rafaela, Venado Tuerto" },
  { province: "Entre Ríos", cities: "Paraná, Concordia" },
  { province: "Mendoza", cities: "Capital, San Rafael" },
  { province: "San Luis", cities: "Villa Mercedes, Capital" },
];

const CoverageSection = () => {
  return (
    <section id="cobertura" className="section-padding bg-secondary/50">
      <div className="max-w-[1400px] mx-auto">
        <span className="label-tag">Cobertura</span>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-foreground leading-tight">
              Dónde trabajamos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Operamos en las principales zonas industriales de Argentina con disponibilidad para desplazamiento a planta.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {regions.map((region, i) => (
            <motion.div
              key={region.province}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-start gap-4 p-6 bg-background hover:bg-card transition-colors group"
            >
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">{region.province}</div>
                <div className="text-sm text-muted-foreground mt-1">{region.cities}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
