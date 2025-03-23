"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Vermeidung von Hydration-Fehlern durch clientseitiges Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/image1.jpg"
            alt="XENOS Galaxy Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-filter backdrop-blur-sm" />
        </div>
      )}
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            XENOS – <span className="text-primary">eXtended</span> Enterprise & Neural Operating Systems
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Revolutionieren Sie Ihr Business mit intelligenter, skalierbarer AI-Unternehmenssoftware.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              <Link href="#solutions">Unsere Lösungen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              <Link href="#contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="text-white font-medium">Innovative KI-Lösungen</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
              <span className="text-white font-medium">Maßgeschneiderte Software</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M2 22h20" />
                <path d="M10 4v18" />
                <path d="M14 4v18" />
                <path d="m2 14 20-10" />
                <path d="m2 10 20 10" />
              </svg>
              <span className="text-white font-medium">Skalierbare Lösungen</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Down Arrow Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-primary hover:text-primary/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 