import Hero from "@/components/Hero";
import AboutBarbers from "@/components/AboutBarbers";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="barbers">
        <AboutBarbers />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;