
import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-brand-50 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-xl">
                SF
              </div>
              <span className="text-xl font-display font-semibold">
                <span className="text-brand-500">Sonrisa</span>{" "}
                <span className="text-mintGreen-500">Feliz</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Centro especializado en el desarrollo infantil con un enfoque integral basado en el amor, la evidencia y el acompañamiento familiar.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-brand-500 hover:bg-brand-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-brand-500 hover:bg-brand-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-brand-500 hover:bg-brand-50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contacto@tusonrisa.cl"
                className="bg-white p-2 rounded-full shadow-md text-brand-500 hover:bg-brand-50 transition-colors"
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
                <a href="#inicio" className="text-muted-foreground hover:text-brand-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-muted-foreground hover:text-brand-500 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#enfoque" className="text-muted-foreground hover:text-brand-500 transition-colors">
                  Nuestro enfoque
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-muted-foreground hover:text-brand-500 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-muted-foreground hover:text-brand-500 transition-colors">
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
                <a href="mailto:contacto@tusonrisa.cl" className="text-muted-foreground hover:text-brand-500 transition-colors">
                  contacto@tusonrisa.cl
                </a>
              </li>
              <li className="text-muted-foreground">
                Lun-Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>© {currentYear} Sonrisa Feliz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
