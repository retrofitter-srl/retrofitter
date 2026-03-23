import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        <span className="label-tag">Contacto</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Hablemos de su proyecto
        </h2>
        <p className="text-surface-dark-foreground max-w-xl mb-12">
          Consultas técnicas, presupuestos o asesoramiento. Respuesta en menos de 24 horas hábiles.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 bg-surface-steel text-primary-foreground placeholder:text-muted-foreground border border-border/10 rounded-sm text-sm focus:outline-none focus:border-accent"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-3 bg-surface-steel text-primary-foreground placeholder:text-muted-foreground border border-border/10 rounded-sm text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-surface-steel text-primary-foreground placeholder:text-muted-foreground border border-border/10 rounded-sm text-sm focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-3 bg-surface-steel text-primary-foreground placeholder:text-muted-foreground border border-border/10 rounded-sm text-sm focus:outline-none focus:border-accent"
            />
            <textarea
              rows={5}
              placeholder="Describa brevemente su necesidad..."
              className="w-full px-4 py-3 bg-surface-steel text-primary-foreground placeholder:text-muted-foreground border border-border/10 rounded-sm text-sm focus:outline-none focus:border-accent resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:opacity-90 transition-opacity"
            >
              Enviar consulta
            </button>
          </form>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-medium text-primary-foreground">Email</div>
                <div className="text-sm text-surface-dark-foreground">info@retrofitter.com.ar</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-medium text-primary-foreground">Teléfono</div>
                <div className="text-sm text-surface-dark-foreground">+54 11 5555-0000</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-medium text-primary-foreground">Horario</div>
                <div className="text-sm text-surface-dark-foreground">Lunes a Viernes, 8:00 - 17:00</div>
              </div>
            </div>

            <div className="mt-8 p-4 border border-border/10 rounded-sm bg-surface-steel/50">
              <div className="font-mono text-xs text-accent uppercase mb-2">Oficina central</div>
              <div className="text-sm text-surface-dark-foreground">
                Parque Industrial Tecnológico<br />
                Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
