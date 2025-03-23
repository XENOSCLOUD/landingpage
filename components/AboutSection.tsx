"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Vermeidung von Hydration-Fehlern durch clientseitiges Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      description: "Zukunftsweisende Technologien zur Gestaltung der digitalen Transformation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 18.5A2 2 0 0 1 4 14h16a4 4 0 1 1 0 8H4" />
          <path d="M12 4v8" />
          <path d="m8 8 4-4 4 4" />
        </svg>
      )
    },
    {
      title: "Exzellenz",
      description: "Höchste Qualität in Software, AI und Nutzererfahrung.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="m6.8 4.5 1 1.7" />
          <path d="m2 10 2 .5" />
          <path d="m2 14 2-.5" />
          <path d="m6.8 18 1-1.7" />
          <path d="M12 18v4" />
          <path d="m17.2 18-1-1.7" />
          <path d="m22 14-2-.5" />
          <path d="m22 10-2 .5" />
          <path d="m17.2 6-1 1.7" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      )
    },
    {
      title: "Transparenz",
      description: "Klare Prozesse, ethische AI und vertrauensvolle Kundenbeziehungen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M20.4 14.5 16 10 4 20" />
        </svg>
      )
    },
    {
      title: "Effizienz",
      description: "Optimierung von Geschäftsprozessen durch smarte Automatisierung.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
      )
    },
    {
      title: "Flexibilität",
      description: "Skalierbare Lösungen, die sich an die Bedürfnisse von Unternehmen jeder Größe anpassen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M10 16v-4" />
          <path d="M14 16v-4" />
          <path d="M10 16H6a4 4 0 0 1-4-4V6" />
          <path d="M10 8H6a4 4 0 0 0-4 4v6" />
          <path d="M14 8h4a4 4 0 0 1 4 4v6" />
          <path d="M14 16h4a4 4 0 0 0 4-4V6" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0f1116] to-card/50 relative overflow-hidden">
      {/* Sternen-Hintergrund */}
      {isMounted && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/universe2.jpg"
            alt="Stars Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Über XENOS</h2>
          <p className="text-xl text-muted-foreground">
            XENOS revolutioniert Unternehmenssoftware durch künstliche Intelligenz und bietet innovative Lösungen für die digitale Transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Unsere Mission</h3>
            <p className="mb-4 text-foreground/90">
              Als deutsches Softwareunternehmen haben wir uns auf die Entwicklung von AI-gestützten SaaS-Anwendungen für den B2B-Markt spezialisiert. Unsere innovativen Lösungen helfen Unternehmen, ihre Prozesse zu digitalisieren, zu automatisieren und effizienter zu gestalten.
            </p>
            <p className="mb-4 text-foreground/90">
              Von der Entwicklung maßgeschneiderter MVPs bis hin zu umfassenden IT-Dienstleistungen bieten wir Ihnen alles, was Sie für Ihre digitale Transformation benötigen. Wir kombinieren modernste Technologie mit bewährten Geschäftspraktiken, um Ergebnisse zu erzielen, die nicht nur technologisch fortschrittlich, sondern auch wirtschaftlich sinnvoll sind.
            </p>
            <p className="text-foreground/90">
              Unsere Expertise in künstlicher Intelligenz ermöglicht es uns, Lösungen zu entwickeln, die weit über herkömmliche Software hinausgehen und echten Mehrwert für Ihr Unternehmen schaffen.
            </p>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-border/50">
            {isMounted && (
              <Image
                src="/office1.jpg"
                alt="XENOS Office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Unsere Kernwerte</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-6 h-full justify-center">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 