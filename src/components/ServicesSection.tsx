import { motion } from "framer-motion";
import { Cpu, Settings, Gauge, Wrench, MonitorDot, Cable } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Programación PLC",
    desc: "Desarrollo y modificación de lógica de control en Siemens, Allen-Bradley, Schneider y otras marcas.",
  },
  {
    icon: MonitorDot,
    title: "Sistemas SCADA / HMI",
    desc: "Diseño e implementación de interfaces de supervisión y paneles operador para monitoreo en tiempo real.",
  },
  {
    icon: Settings,
    title: "Retrofit de Máquinas",
    desc: "Actualización de tableros eléctricos y sistemas de control en equipos existentes sin reemplazar la mecánica.",
  },
  {
    icon: Gauge,
    title: "Instrumentación",
    desc: "Selección, instalación y calibración de sensores, transmisores y actuadores de proceso.",
  },
  {
    icon: Cable,
    title: "Redes Industriales",
    desc: "Configuración de redes Profinet, Profibus, Modbus, EtherNet/IP y comunicación OPC.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Predictivo",
    desc: "Diagnóstico de fallas, análisis de tendencias y soporte técnico para paradas programadas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="label-tag">Servicios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Qué hacemos
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Soluciones técnicas concretas para automatización, control e instrumentación industrial.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 border border-border rounded-sm bg-card hover:border-accent/40 transition-colors"
            >
              <service.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
