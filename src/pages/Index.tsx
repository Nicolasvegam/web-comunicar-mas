
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ApproachSection from "@/components/ApproachSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileBookingButton from "@/components/MobileBookingButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SpecialtiesSection />
        <ApproachSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileBookingButton />
    </div>
  );
};

export default Index;
