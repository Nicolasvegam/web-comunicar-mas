
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Enfoque", href: "#enfoque" },
    { name: "Equipo", href: "#equipo" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-xl">
            SF
          </div>
          <span className="text-xl font-display font-semibold">
            <span className="text-brand-500">Sonrisa</span>{" "}
            <span className="text-mintGreen-500">Feliz</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-brand-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#agendar" className="hidden md:block btn-primary">
          Agendar Cita
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#agendar"
            className="btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
