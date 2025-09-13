import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: MapPin,
    title: "Endereço",
    info: "Rua das Palmeiras, 123",
    subtitle: "Centro, São Paulo - SP"
  }, {
    icon: Phone,
    title: "Telefone",
    info: "55 87 8156-0908",
    subtitle: "WhatsApp disponível"
  }, {
    icon: Clock,
    title: "Funcionamento",
    info: "Seg - Sex: 9h às 19h",
    subtitle: "Sáb: 9h às 17h"
  }];
  const socialLinks = [{
    icon: Instagram,
    name: "Instagram",
    href: "#",
    color: "hover:text-pink-500"
  }, {
    icon: Facebook,
    name: "Facebook",
    href: "#",
    color: "hover:text-blue-500"
  }];
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            ENTRE EM <span className="text-primary">CONTATO</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Visite nossa barbearia ou entre em contato para mais informações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map(item => {
            const IconComponent = item.icon;
            return <Card key={item.title} className="bg-surface-elevated border-border shadow-card p-6 hover:shadow-dark transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {item.info}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>;
          })}

            {/* Social Media */}
            <Card className="bg-surface-elevated border-border shadow-card p-6">
              <h3 className="font-semibold text-foreground text-lg mb-4 my-0 px-0 py-0 mx-[130px]">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map(social => {
                const IconComponent = social.icon;
                return <Button key={social.name} variant="ghost" size="icon" className={`hover:bg-surface ${social.color} transition-smooth`} asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>;
              })}
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="bg-surface-elevated border-border shadow-card overflow-hidden">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Nossa Localização
                  </h3>
                  <p className="text-muted-foreground">
                    Centro de São Paulo
                  </p>
                  <Button variant="golden" className="mt-4" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero border-border shadow-dark p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Pronto para um novo visual?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende seu horário agora e experimente o melhor em cuidados masculinos
            </p>
            <Button variant="golden" size="lg" className="text-lg px-8 py-6" onClick={() => {
            const bookingSection = document.getElementById('booking');
            bookingSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Agendar Agora
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;