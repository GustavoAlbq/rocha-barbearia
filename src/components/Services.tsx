import { Card } from "@/components/ui/card";
import { Scissors, Zap, Brush, Crown } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      name: "Corte Masculino",
      description: "Cortes modernos e clássicos executados com precisão e estilo",
      price: "R$ 35,00",
      duration: "45 min"
    },
    {
      icon: Zap,
      name: "Barba & Bigode",
      description: "Modelagem profissional com navalha e produtos premium",
      price: "R$ 25,00", 
      duration: "30 min"
    },
    {
      icon: Crown,
      name: "Combo Completo",
      description: "Corte + barba + finalização com produtos de qualidade",
      price: "R$ 55,00",
      duration: "75 min"
    },
    {
      icon: Brush,
      name: "Tratamentos",
      description: "Hidratação capilar e tratamentos especializados",
      price: "R$ 40,00",
      duration: "60 min"
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">SERVIÇOS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de barbearia com qualidade profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.name}
                className="bg-surface-elevated border-border shadow-card hover:shadow-dark transition-smooth p-6 text-center group hover:border-primary/30"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.duration}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            * Preços sujeitos a alteração. Consulte nossos profissionais para serviços personalizados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;