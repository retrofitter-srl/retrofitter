import { motion } from "framer-motion";

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
    <section id="proyectos" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <span className="label-tag">Proyectos</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Trabajos realizados
        </h2>
        <p className="text-surface-dark-foreground max-w-xl mb-12">
          Algunos ejemplos representativos de proyectos ejecutados en distintas industrias.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border/10 rounded-sm p-6 bg-surface-steel/50"
            >
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase">{project.client}</div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-surface-dark-foreground leading-relaxed mb-4">{project.scope}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded-sm bg-accent/10 text-accent border border-accent/20"
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
