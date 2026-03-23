import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto">
        <span className="label-tag">Contacto</span>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-foreground leading-tight">
              Hablemos de su proyecto
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Consultas técnicas, presupuestos o asesoramiento. Respuesta en menos de 24 horas hábiles.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Nombre</label>
                <input
                  type="text"
                  placeholder="Su nombre"
                  className="w-full px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Empresa</label>
                <input
                  type="text"
                  placeholder="Nombre de empresa"
                  className="w-full px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="email@empresa.com"
                className="w-full px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Asunto</label>
              <input
                type="text"
                placeholder="¿En qué podemos ayudarle?"
                className="w-full px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Mensaje</label>
              <textarea
                rows={5}
                placeholder="Describa brevemente su necesidad..."
                className="w-full px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground border border-border text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button type="submit" className="siemens-btn-primary group">
              Enviar consulta
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary p-8 text-primary-foreground">
              <h3 className="text-lg font-bold mb-6">Información de contacto</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 opacity-70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">Email</div>
                    <div className="text-sm">info@retrofitter.com.ar</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 opacity-70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">Teléfono</div>
                    <div className="text-sm">+54 11 5555-0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0 opacity-70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">Horario</div>
                    <div className="text-sm">Lunes a Viernes, 8:00 - 17:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 opacity-70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">Oficina</div>
                    <div className="text-sm">
                      Parque Industrial Tecnológico<br />
                      Buenos Aires, Argentina
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
