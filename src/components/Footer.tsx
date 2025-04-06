
import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-comunicar-lavender/10 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/public/lovable-uploads/2867f809-d36c-45f2-9dc2-2e47c39908e4.png" 
                alt="Comunicar Más Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-semibold">
                <span className="text-comunicar-lavender">Comunicar</span>{" "}
                <span className="text-comunicar-blue">Más</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Centro especializado en el desarrollo infantil con un enfoque integral basado en el amor, la evidencia y el acompañamiento familiar.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-comunicar-lavender hover:bg-comunicar-lavender/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-comunicar-blue hover:bg-comunicar-blue/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-comunicar-yellow hover:bg-comunicar-yellow/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contacto@comunicarmas.cl"
                className="bg-white p-2 rounded-full shadow-md text-comunicar-pink hover:bg-comunicar-pink/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#enfoque" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Nuestro enfoque
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Av. Los Alerces 1234, Ñuñoa
              </li>
              <li className="text-muted-foreground">
                +56 9 1234 5678
              </li>
              <li>
                <a href="mailto:contacto@comunicarmas.cl" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  contacto@comunicarmas.cl
                </a>
              </li>
              <li className="text-muted-foreground">
                Lun-Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>© {currentYear} Comunicar Más. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
