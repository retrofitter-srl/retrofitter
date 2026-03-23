import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Retrofit línea de envasado",
    client: "Industria alimenticia — Córdoba",
    scope: "Reemplazo de PLC obsoleto, nuevo tablero eléctrico, HMI táctil y puesta en marcha.",
    tags: ["Siemens S7-1500", "WinCC", "Profinet"],
  },
  {
    title: "SCADA planta de tratamiento de agua",
    client: "Cooperativa de servicios — Santa Fe",
    scope: "Sistema SCADA centralizado para monitoreo de bombas, caudal y niveles en 4 estaciones remotas.",
    tags: ["Allen-Bradley", "FactoryTalk", "Modbus TCP"],
  },
  {
    title: "Automatización de caldera industrial",
    client: "Planta química — Buenos Aires",
    scope: "Control automático de combustión, lazos PID de presión y temperatura, alarmas de seguridad.",
    tags: ["Schneider M340", "Citect", "HART"],
  },
  {
    title: "Migración de red Profibus a Profinet",
    client: "Autopartista — Rosario",
    scope: "Actualización de red de campo en línea de montaje sin parada total de producción.",
    tags: ["Siemens", "TIA Portal", "Profinet"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-surface-dark">
      <div className="max-w-[1400px] mx-auto">
        <span className="label-tag !text-primary">Proyectos</span>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
              Trabajos realizados
            </h2>
            <p className="text-white/50 mt-4 max-w-xl text-lg">
              Algunos ejemplos representativos de proyectos ejecutados en distintas industrias.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group border border-white/10 p-8 bg-surface-steel/40 hover:border-primary/40 transition-all"
            >
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">
                {project.client}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">{project.scope}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
