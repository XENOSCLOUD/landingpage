"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen lang sein.",
  }),
  company_name: z.string().min(2, {
    message: "Der Firmenname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().optional(),
  interests: z.string().optional(),
  notes: z.string().optional(),
});

const interestOptions = [
  { value: "ai_saas", label: "AI-gestützte SaaS-Lösungen" },
  { value: "mvp_development", label: "MVP-Entwicklung & Scale-Up" },
  { value: "it_services", label: "IT-Dienstleistungen" },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Vermeidung von Hydration-Fehlern durch clientseitiges Mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      company_name: "",
      email: "",
      phone: "",
      interests: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://n8n.xenoscloud.com/webhook/404e9286-1793-4de2-9b3a-d5605acdf3d5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth_key': 'Cek77uzodQynabCvu6kkfrnzzsI02fOURw00yEozhJ0='
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Fehler:', error);
      // Hier könnte man einen Fehlerstatus hinzufügen
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0f1116] relative overflow-hidden">
      {isMounted && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/universe1.jpg"
            alt="Stars Background"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground">
            Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns und wir melden uns umgehend bei Ihnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Kontaktformular</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="mb-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                  </p>
                  <Button 
                    className="mt-6 bg-primary hover:bg-primary/90"
                    onClick={() => setIsSuccess(false)}
                  >
                    Neue Nachricht senden
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="full_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Name" {...field} className="bg-background/50 border-border/50 focus:border-primary/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Firma</FormLabel>
                            <FormControl>
                              <Input placeholder="Name Ihrer Firma" {...field} className="bg-background/50 border-border/50 focus:border-primary/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail</FormLabel>
                          <FormControl>
                            <Input placeholder="ihre.email@beispiel.de" {...field} className="bg-background/50 border-border/50 focus:border-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+49 123 4567890" {...field} className="bg-background/50 border-border/50 focus:border-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interessengebiet (optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary/50">
                                <SelectValue placeholder="Wählen Sie ein Interessengebiet" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {interestOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachricht (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ihre Nachricht an uns" 
                              className="min-h-32 bg-background/50 border-border/50 focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kontaktinformationen</h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie uns direkt - wir freuen uns auf Ihre Anfrage und stehen Ihnen gerne zur Verfügung.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">E-Mail</p>
                    <a href="mailto:noah.kellner@xenoscloud.com" className="text-primary hover:underline">
                      noah.kellner@xenoscloud.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Telefon</p>
                    <a href="tel:+4915128768606" className="text-primary hover:underline">
                      +49 151 28768606
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                <div className="flex items-center gap-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <h4 className="font-bold">Agile Entwicklung</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Schnelle und flexible Lösungen für Ihre individuellen Anforderungen.</p>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                <div className="flex items-center gap-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <h4 className="font-bold">AI-Expertise</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Innovative KI-Lösungen für zukunftsweisende Projekte.</p>
              </Card>
            </div>

            <div className="pt-6">
              <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                <div className="flex items-center gap-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <h4 className="font-bold">Schnelle Reaktionszeit</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfragen.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 