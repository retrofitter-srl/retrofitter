import { motion } from "framer-motion";
import { Cpu, Settings, Gauge, Wrench, MonitorDot, Cable, ArrowRight } from "lucide-react";

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
      <div className="max-w-[1400px] mx-auto">
        <span className="label-tag">Servicios</span>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-foreground leading-tight">
              Qué hacemos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Soluciones técnicas concretas para automatización, control e instrumentación industrial.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-background p-8 hover:bg-secondary/50 transition-colors cursor-default"
            >
              <service.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.2} />
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Más info <ArrowRight size={14} className="ml-1" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
