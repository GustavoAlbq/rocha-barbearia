import rochaImage from "@/assets/barber-rocha.jpg";
import rickImage from "@/assets/barber-rick.jpg";
import { Card } from "@/components/ui/card";

const AboutBarbers = () => {
  const barbers = [
    {
      name: "Rocha",
      image: rochaImage,
      experience: "15+ anos",
      specialty: "Cortes clássicos e modernos",
      description: "Especialista em cortes tradicionais com mais de 15 anos de experiência. Rocha combina técnicas clássicas com tendências modernas."
    },
    {
      name: "Rick", 
      image: rickImage,
      experience: "8+ anos",
      specialty: "Estilos contemporâneos",
      description: "Jovem talento especializado em cortes modernos e estilos urbanos. Rick traz inovação e criatividade para cada corte."
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">BARBEIROS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes dedicados a oferecer o melhor serviço em cada corte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {barbers.map((barber) => (
            <Card key={barber.name} className="bg-surface-elevated border-border shadow-card hover:shadow-dark transition-smooth p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-75 group-hover:opacity-100 transition-smooth" />
                  <img
                    src={barber.image}
                    alt={`Barbeiro ${barber.name}`}
                    className="relative w-32 h-32 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                
                <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {barber.name}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {barber.experience}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-3">
                  {barber.specialty}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {barber.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBarbers;