"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CTASection() {
  const [isMounted, setIsMounted] = useState(false);

  // Vermeidung von Hydration-Fehlern durch clientseitiges Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/universe3.jpg"
            alt="XENOS Galaxy"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80 backdrop-filter backdrop-blur-sm" />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-8">
            Transformieren Sie Ihr Unternehmen mit innovativen AI-Lösungen und maßgeschneiderter Software. Wir unterstützen Sie bei jedem Schritt Ihrer digitalen Reise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all shadow-lg">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                  <path d="M2 20h20" />
                  <path d="M14 12v.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Beratung</h3>
              <p className="text-white/80">
                Erhalten Sie eine kostenlose Erstberatung zu Ihren IT-Herausforderungen.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all shadow-lg">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sicherheit</h3>
              <p className="text-white/80">
                Ihre Daten sind bei uns sicher – wir setzen auf höchste Sicherheitsstandards.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all shadow-lg">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-white/80">
                Bleiben Sie der Konkurrenz mit zukunftsweisenden Technologien einen Schritt voraus.
              </p>
            </div>
          </div>
          
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Link href="#contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 