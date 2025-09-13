import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, User, Phone, Mail, Scissors } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const { toast } = useToast();

  const barbers = ["Rocha", "Rick"];
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedBarber || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      toast({
        title: "Erro no agendamento",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Agendamento realizado!",
      description: `Seu horário com ${selectedBarber} foi agendado para ${format(selectedDate, "dd/MM/yyyy", { locale: ptBR })} às ${selectedTime}.`,
    });

    // Reset form
    setSelectedBarber("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section id="booking" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            AGENDE SEU <span className="text-primary">HORÁRIO</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha seu barbeiro preferido e reserve seu horário de forma rápida e fácil
          </p>
        </div>

        <Card className="bg-surface-elevated border-border shadow-dark p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Barber Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Scissors className="w-5 h-5 text-primary" />
                Escolha seu barbeiro *
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {barbers.map((barber) => (
                  <button
                    key={barber}
                    type="button"
                    onClick={() => setSelectedBarber(barber)}
                    className={cn(
                      "p-4 rounded-lg border-2 transition-smooth text-center font-semibold",
                      selectedBarber === barber
                        ? "border-primary bg-primary/10 text-primary shadow-golden"
                        : "border-border bg-surface hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {barber}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Data do agendamento *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Horário *
              </Label>
              <div className="grid grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-3 rounded-lg border transition-smooth text-center font-medium",
                      selectedTime === time
                        ? "border-primary bg-primary/10 text-primary shadow-golden"
                        : "border-border bg-surface hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Nome completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-mail (opcional)
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
                className="h-12"
              />
            </div>

            <Button type="submit" variant="golden" size="lg" className="w-full text-lg py-6">
              Confirmar Agendamento
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;