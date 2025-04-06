
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/80 to-mintGreen-50/80"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-softYellow-100 rounded-full blur-3xl opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Acompañamos el desarrollo de tu hijo con{" "}
            <span className="text-gradient">amor y experiencia</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Fonoaudiología, Terapia Ocupacional y Psicología Infantil desde lactantes hasta los 12 años.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#agendar"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Reserva tu evaluación inicial
            </a>
            <a
              href="#especialidades"
              className="flex items-center gap-2 font-medium hover:text-brand-500 transition-colors mt-4 sm:mt-0"
            >
              Conoce más
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative z-10 animate-float">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Niños jugando y aprendiendo"
              className="rounded-2xl shadow-xl object-cover h-[500px]"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-softYellow-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-mintGreen-200 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#especialidades" className="text-brand-500">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
