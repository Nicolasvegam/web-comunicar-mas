
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Atienden con reembolso de Isapres?",
    answer:
      "Sí, contamos con profesionales que trabajan con reembolso de Isapres. Al momento de agendar tu cita, consulta sobre las opciones específicas de reembolso disponibles para el especialista asignado.",
  },
  {
    question: "¿Qué edad mínima atienden?",
    answer:
      "Atendemos desde bebés recién nacidos hasta niños de 12 años. Contamos con especialistas en desarrollo temprano y primera infancia, así como profesionales enfocados en niños de edad escolar.",
  },
  {
    question: "¿Puedo tener una orientación antes de agendar?",
    answer:
      "Por supuesto. Ofrecemos una breve consulta de orientación gratuita de 15 minutos (telefónica o virtual) para ayudarte a determinar qué tipo de especialista necesita tu hijo. Puedes solicitarla a través de nuestro formulario de contacto.",
  },
  {
    question: "¿Cómo es la primera evaluación?",
    answer:
      "La primera sesión es una evaluación inicial donde conoceremos a tu hijo y comprenderemos sus necesidades. Incluye una entrevista con los padres para recopilar información y una observación directa del niño. A partir de esta evaluación, diseñaremos un plan de intervención personalizado si es necesario.",
  },
  {
    question: "¿Las terapias son individuales o grupales?",
    answer:
      "Ofrecemos ambas modalidades dependiendo de las necesidades de cada niño. Las terapias individuales permiten un trabajo más focalizado, mientras que las grupales favorecen la socialización y el aprendizaje entre pares. Nuestros especialistas te recomendarán la mejor opción para tu hijo.",
  },
  {
    question: "¿Cuánto duran las sesiones?",
    answer:
      "Las sesiones regulares tienen una duración de 45 minutos a 1 hora, dependiendo de la edad del niño y el tipo de terapia. Las evaluaciones iniciales pueden tomar entre 1 y 2 sesiones para completarse adecuadamente.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-comunicar-lavender/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-comunicar-pink/20 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Preguntas frecuentes</h2>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-4 hover:text-comunicar-lavender font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
