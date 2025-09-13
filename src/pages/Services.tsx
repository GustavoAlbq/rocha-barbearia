import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Scissors, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "corte-classico",
      name: "Corte Clássico",
      description: "Corte tradicional masculino com acabamento profissional",
      price: "R$ 25,00",
      duration: "30 min",
      popular: false,
      image: "✂️"
    },
    {
      id: "corte-moderno",
      name: "Corte Moderno",  
      description: "Cortes atuais seguindo as tendências da moda masculina",
      price: "R$ 30,00",
      duration: "35 min",
      popular: true,
      image: "💫"
    },
    {
      id: "corte-degradee",
      name: "Corte Degradê",
      description: "Degradê nas laterais com diferentes alturas e estilos",
      price: "R$ 35,00", 
      duration: "40 min",
      popular: true,
      image: "🔥"
    },
    {
      id: "corte-social",
      name: "Corte Social",
      description: "Corte elegante para ambiente corporativo e eventos",
      price: "R$ 28,00",
      duration: "35 min", 
      popular: false,
      image: "👔"
    },
    {
      id: "corte-criativo",
      name: "Corte Criativo",
      description: "Desenhos e detalhes personalizados no cabelo",
      price: "R$ 45,00",
      duration: "60 min",
      popular: false,
      image: "🎨"
    },
    {
      id: "barba-completa",
      name: "Barba Completa",
      description: "Aparar, modelar e finalizar a barba profissionalmente",
      price: "R$ 20,00",
      duration: "25 min",
      popular: false,
      image: "🧔"
    },
    {
      id: "corte-barba",
      name: "Corte + Barba",
      description: "Combo completo: corte de cabelo + barba modelada",
      price: "R$ 40,00",
      duration: "50 min",
      popular: true,
      image: "✨"
    },
    {
      id: "bigode-cavanhaque",
      name: "Bigode & Cavanhaque",
      description: "Modelagem especializada de bigode e cavanhaque",
      price: "R$ 15,00",
      duration: "20 min",
      popular: false,
      image: "👨"
    }
  ];

  const handleSelectService = (serviceId: string, serviceName: string) => {
    navigate(`/?service=${serviceId}&serviceName=${encodeURIComponent(serviceName)}#booking`);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Button
              variant="ghost"
              onClick={goBack}
              className="mb-6 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              NOSSOS <span className="text-primary">SERVIÇOS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o serviço ideal para você e agende seu horário com nossos barbeiros profissionais
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="bg-surface-elevated border-border shadow-card hover:shadow-dark transition-smooth p-6 relative"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{service.image}</div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="text-primary font-bold text-lg">
                    {service.price}
                  </div>
                </div>

                <Button
                  variant="golden"
                  className="w-full"
                  onClick={() => handleSelectService(service.id, service.name)}
                >
                  <Scissors className="w-4 h-4 mr-2" />
                  Agendar Serviço
                </Button>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-hero border-border shadow-dark p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para serviços personalizados ou dúvidas sobre nossos atendimentos
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Falar Conosco
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;