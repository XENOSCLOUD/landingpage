"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface SolutionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string; // Optional status field
}

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("saas");

  const solutionCategories = [
    {
      id: "saas",
      title: "AI-gestützte SaaS-Produkte",
      items: [
        {
          title: "CallFlow",
          description: "Third-Party-App für CCaaS-Plattformen mit intelligenter Anrufverwaltung und KI-basierter Gesprächsanalyse.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          ),
          status: "Beta"
        },
        {
          title: "Decisely",
          description: "Smart Decision Assistent, der komplexe Entscheidungsfindungsprozesse in Unternehmen automatisiert und optimiert.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              <path d="M12 3a6 6 0 0 1 9 9 9 9 0 0 0-9-9Z" />
              <path d="M12 12v.01" />
            </svg>
          ),
          status: "In Entwicklung"
        },
        {
          title: "Cold Call Bot",
          description: "AI-basierter Vertriebsassistent mit integriertem CRM-System und minutengenauem Abrechnungsmodell.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v8Z" />
              <path d="M11 6V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
            </svg>
          ),
          status: "In Entwicklung"
        }
      ]
    },
    {
      id: "it",
      title: "IT-Dienstleistungen",
      items: [
        {
          title: "Beratung & Consulting",
          description: "Umfassende IT-Strategieberatung mit Schwerpunkt auf KI-Integration und digitale Transformation.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          )
        },
        {
          title: "IT-Support",
          description: "Professioneller IT-Support, Projektmanagement und maßgeschneiderte IT-Strategie für Ihr Unternehmen.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          )
        },
        {
          title: "Cloud Management",
          description: "Umfassendes Cloud/Hosting Management und Cloud Consulting für optimale Skalierbarkeit und Effizienz.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          )
        }
      ]
    },
    {
      id: "mvp",
      title: "MVP-Entwicklung & Scale-Up",
      items: [
        {
          title: "MVP-Strategie",
          description: "Strategische Planung und Entwicklung von Minimum Viable Products mit Fokus auf schnelle Markteinführung.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 10h.01" />
              <path d="M14 10h.01" />
              <path d="M10 14h.01" />
              <path d="M14 14h.01" />
              <path d="M18 10h.01" />
              <path d="M6 10h.01" />
              <path d="M18 14h.01" />
              <path d="M6 14h.01" />
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
          )
        },
        {
          title: "Skalierung",
          description: "Umfassende Unterstützung beim Scale-Up, entweder zur eigenständigen Vermarktung oder zum Verkauf an größere Softwareanbieter.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 21H3" />
              <path d="M3 7h3.5a4 4 0 0 1 4 4v10" />
              <path d="M13 7h7.5" />
              <path d="M17 3l3.5 4L17 11" />
            </svg>
          )
        },
        {
          title: "Prozessoptimierung",
          description: "Entwicklung interner KMU/Enterprise-Tools zur Prozessoptimierung und Digitalisierung von Arbeitsabläufen.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" x2="20" y1="19" y2="19" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#0f1116]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Unsere Lösungen</h2>
          <p className="text-xl text-muted-foreground">
            Wir entwickeln innovative AI-gestützte Software und bieten umfassende IT-Dienstleistungen, die Ihr Unternehmen auf die nächste Stufe heben.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="sm:hidden mb-6">
            <select 
              className="w-full p-3 bg-card/70 border border-border/40 rounded-lg text-foreground"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {solutionCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          
          <TabsList className="hidden sm:inline-flex w-full justify-center gap-2 mb-8">
            {solutionCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="px-6 py-2.5 rounded-lg bg-card/70 border border-border/40 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary hover:bg-card/90 transition-all"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {solutionCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item: SolutionItem, idx) => (
                  <Card key={idx} className="border border-border/50 bg-card/70 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                    <CardHeader>
                      <div className="p-2 w-12 h-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <CardTitle className="flex items-center">
                        {item.title}
                        {item.status && (
                          <span className="ml-2 text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                            {item.status}
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 hover:bg-primary/10">
                        <Link href="#contact">Mehr erfahren</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 p-8 bg-gradient-to-br from-card/90 to-card/60 rounded-xl border border-border/40 backdrop-blur-sm shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Maßgeschneiderte Lösungen</h3>
              <p className="mb-4 text-foreground/90">
                Unsere Expertise liegt in der Entwicklung maßgeschneiderter Softwarelösungen, die genau auf Ihre Anforderungen zugeschnitten sind. Ob Sie eine komplexe Enterprise-Anwendung, eine innovative SaaS-Lösung oder eine interne Prozessoptimierung benötigen – wir setzen Ihre Vision um.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#contact">Beratungsgespräch vereinbaren</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-auto rounded-xl overflow-hidden border border-border/40 shadow-lg">
              <Image
                src="/universe3.jpg"
                alt="XENOS Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 