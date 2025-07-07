
import React from "react";
import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";

const ContactItem = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white p-3 rounded-lg shadow-md text-comunicar-lavender">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-medium text-lg text-gray-800">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800" id="agendar">Agenda tu primera consulta</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
              placeholder="+56 9 1234 5678"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
            placeholder="tu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700">
            Servicio
          </label>
          <select
            id="service"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
          >
            <option value="">Selecciona un servicio</option>
            <option value="fono">Fonoaudiología</option>
            <option value="to">Terapia Ocupacional</option>
            <option value="psico">Psicología Infantil</option>
            <option value="evaluacion">Evaluación General</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
            Mensaje (opcional)
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
            placeholder="Cuéntanos brevemente sobre tu hijo/a"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <Calendar size={18} />
          Agendar ahora
        </button>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-comunicar-lavender/20 rounded-full blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Estamos cerca de ti</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-comunicar-lavender/10 p-8 rounded-2xl shadow-lg mb-8">
              <div className="space-y-6">
                <ContactItem icon={MapPin} title="Dirección">
                  <p>Av. Los Alerces 1234, Ñuñoa</p>
                </ContactItem>
                
                <ContactItem icon={Clock} title="Horario de atención">
                  <p>Lunes a viernes, 9:00 a 18:00 hrs</p>
                </ContactItem>
                
                <ContactItem icon={Phone} title="Teléfono">
                  <p>WhatsApp: +56 9 1234 5678</p>
                </ContactItem>
                
                <ContactItem icon={Mail} title="Email">
                  <p>comunicarmascl@gmail.com</p>
                </ContactItem>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13316.204567160524!2d-70.60982565!3d-33.45756115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6752fa41c3%3A0xb6ab29eeb602af99!2zw5F1w7FvYSwgUmVnacOzbiBNZXRyb3BvbGl0YW5h!5e0!3m2!1ses!2scl!4v1681739456304!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
