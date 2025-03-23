"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = ["hero", "about", "solutions", "references", "contact"];

  // Funktion zum expliziten Setzen der aktiven Sektion beim Klicken
  const handleNavClick = useCallback((section: string) => {
    setActiveSection(section);
    
    // Optional: Smooth scrolling zum Bereich
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
    
    const scrollPosition = window.scrollY + (window.innerHeight / 4); // Angepasster Offset
    
    // Finde die aktuelle Sektion
    let currentSection = sections[0];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition >= elementTop) {
          currentSection = section;
        }
      }
    }
    
    // Setze die aktive Sektion nur, wenn sie sich ändert
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [sections, activeSection]);

  useEffect(() => {
    // Event-Listener für Scroll-Ereignisse
    window.addEventListener("scroll", handleScroll);
    
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full backdrop-blur-md ${
        isScrolled 
          ? 'bg-card/90 shadow-lg border border-border/40' 
          : 'bg-card/60 border border-border/20'
      }`}
    >
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo2.png" 
              alt="XENOS Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
                className={`px-4 py-2 rounded-full transition-colors hover:bg-accent/80 inline-block ${
                  activeSection === "hero" ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                Home
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
                className={`px-4 py-2 rounded-full transition-colors hover:bg-accent/80 inline-block ${
                  activeSection === "about" ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                Über uns
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#solutions" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("solutions");
                }}
                className={`px-4 py-2 rounded-full transition-colors hover:bg-accent/80 inline-block ${
                  activeSection === "solutions" ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                Lösungen
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#references" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("references");
                }}
                className={`px-4 py-2 rounded-full transition-colors hover:bg-accent/80 inline-block ${
                  activeSection === "references" ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                Referenzen
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className={`px-4 py-2 rounded-full transition-colors hover:bg-accent/80 inline-block ${
                  activeSection === "contact" ? "bg-accent text-accent-foreground" : "text-foreground"
                }`}
              >
                Kontakt
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all px-6">
            <Link href="#contact">Kontakt aufnehmen</Link>
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden rounded-full border-border/50 bg-card hover:bg-accent transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 