
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Catalina Rojas",
    role: "Psicóloga Infantil",
    experience: "8 años de experiencia",
    specialty: "Especialista en apego y desarrollo emocional temprano.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    bgColor: "bg-softYellow-50",
  },
  {
    id: 2,
    name: "María Fernanda Silva",
    role: "Fonoaudióloga",
    experience: "10 años de experiencia",
    specialty: "Especialista en trastornos del habla y lenguaje en primera infancia.",
    image: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    bgColor: "bg-brand-50",
  },
  {
    id: 3,
    name: "Daniela Morales",
    role: "Terapeuta Ocupacional",
    experience: "6 años de experiencia",
    specialty: "Especialista en integración sensorial y neurodesarrollo.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    bgColor: "bg-mintGreen-50",
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-mintGreen-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Especialistas en el desarrollo infantil</h2>
        <p className="section-subtitle">
          Nuestro equipo de profesionales cuenta con amplia experiencia en el ámbito de la salud infantil
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`rounded-2xl overflow-hidden shadow-lg card-hover ${member.bgColor}`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-600 font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-muted-foreground">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
