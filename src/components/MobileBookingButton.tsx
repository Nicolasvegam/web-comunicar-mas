
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const MobileBookingButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show/hide button based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      // If we're at the top, always show the button
      if (window.scrollY < 200) {
        setIsVisible(true);
        setLastScrollY(window.scrollY);
        return;
      }

      // Hide on scroll down, show on scroll up
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`md:hidden fixed bottom-6 left-0 right-0 z-50 px-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button 
        asChild 
        variant="default" 
        size="lg" 
        className="w-full shadow-lg"
      >
        <a href="#agendar" className="flex items-center justify-center gap-2">
          <Calendar size={18} />
          Agendar Cita
        </a>
      </Button>
    </div>
  );
};

export default MobileBookingButton;
