import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
    <section id="cobertura" className="section-padding bg-background grid-pattern">
      <div className="max-w-7xl mx-auto">
        <span className="label-tag">Cobertura</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Dónde trabajamos
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Operamos en las principales zonas industriales de Argentina con disponibilidad para desplazamiento a planta.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region, i) => (
            <motion.div
              key={region.province}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-start gap-3 p-4 border border-border rounded-sm bg-card"
            >
              <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-semibold text-card-foreground">{region.province}</div>
                <div className="text-sm text-muted-foreground">{region.cities}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
