import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function ReferencesSection() {
  const testimonials = [
    {
      quote: "XENOS hat unsere Erwartungen übertroffen. Die KI-basierte Softwarelösung hat unsere Effizienz um 40% gesteigert.",
      author: "Sandra Müller",
      role: "CTO, TechVision GmbH",
      avatarUrl: "/image2.jpg"
    },
    {
      quote: "Mit der Unterstützung von XENOS konnten wir unsere IT-Prozesse revolutionieren und sind nun bestens für die digitale Zukunft gerüstet.",
      author: "Markus Weber",
      role: "CEO, InnoSoft Solutions",
      avatarUrl: "/image3.jpg"
    },
    {
      quote: "Die MVP-Entwicklung mit XENOS war ein voller Erfolg. In nur drei Monaten hatten wir ein marktreifes Produkt.",
      author: "Julia Schneider",
      role: "Produkt Manager, Startup Innovations",
      avatarUrl: "/office2.jpg"
    },
    {
      quote: "Die Cloud-Management-Services von XENOS haben unsere Infrastrukturkosten um 35% reduziert und gleichzeitig die Performance verbessert.",
      author: "Thomas Becker",
      role: "IT-Leiter, Global Commerce AG",
      avatarUrl: "/universe2.jpg"
    }
  ];

  return (
    <section id="references" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Unsere Partner & Referenzen</h2>
          <p className="text-xl text-muted-foreground">
            Wir arbeiten mit führenden Unternehmen und Innovatoren zusammen, um herausragende Lösungen zu schaffen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-16">
          {/* Platzhalter für Partner-Logos */}
          <div className="flex items-center justify-center h-16 bg-background rounded-md px-4 py-2 hover:shadow-md transition-shadow">
            <div className="text-primary font-bold text-xl">TechVision</div>
          </div>
          <div className="flex items-center justify-center h-16 bg-background rounded-md px-4 py-2 hover:shadow-md transition-shadow">
            <div className="text-primary font-bold text-xl">InnoSoft</div>
          </div>
          <div className="flex items-center justify-center h-16 bg-background rounded-md px-4 py-2 hover:shadow-md transition-shadow">
            <div className="text-primary font-bold text-xl">StartupHub</div>
          </div>
          <div className="flex items-center justify-center h-16 bg-background rounded-md px-4 py-2 hover:shadow-md transition-shadow">
            <div className="text-primary font-bold text-xl">GlobalCom</div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Das sagen unsere Kunden</h3>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="36"
                          viewBox="0 0 45 36"
                          fill="none"
                          className="text-primary/20"
                        >
                          <path
                            d="M13.4 35.2C9.6 35.2 6.53333 33.9333 4.2 31.4C1.93333 28.8 0.8 25.4667 0.8 21.4C0.8 17.1333 1.96667 13.2 4.3 9.6C6.7 5.93333 10.2667 2.86667 15 0.4L19.4 6.6C15.9333 8.46667 13.2667 10.6 11.4 13C9.53333 15.4 8.73333 17.6667 8 19.8C8.93333 19.0667 10.2667 18.7333 12 18.8C14.8 18.9333 17.1333 19.8667 19 21.6C20.8667 23.3333 21.8 25.8 21.8 29C21.8 31.6667 20.8 33.8 18.8 35.4C16.8667 35.2667 15.0667 35.2 13.4 35.2ZM35.2 35.2C31.4 35.2 28.3333 33.9333 26 31.4C23.7333 28.8 22.6 25.4667 22.6 21.4C22.6 17.1333 23.7667 13.2 26.1 9.6C28.5 5.93333 32.0667 2.86667 36.8 0.4L41.2 6.6C37.7333 8.46667 35.0667 10.6 33.2 13C31.3333 15.4 30.5333 17.6667 29.8 19.8C30.7333 19.0667 32.0667 18.7333 33.8 18.8C36.6 18.9333 38.9333 19.8667 40.8 21.6C42.6667 23.3333 43.6 25.8 43.6 29C43.6 31.6667 42.6 33.8 40.6 35.4C38.6667 35.2667 36.8667 35.2 35.2 35.2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatarUrl}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static mx-2 translate-y-0" />
            <CarouselNext className="static mx-2 translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Strategische Partnerschaften</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Wir pflegen strategische Partnerschaften mit führenden Technologieunternehmen wie SAP, Microsoft, Google und AWS, um Ihnen erstklassige Lösungen zu bieten.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex items-center justify-center h-12 bg-transparent">
              <div className="text-xl font-semibold">SAP Partner</div>
            </div>
            <div className="flex items-center justify-center h-12 bg-transparent">
              <div className="text-xl font-semibold">Microsoft Partner</div>
            </div>
            <div className="flex items-center justify-center h-12 bg-transparent">
              <div className="text-xl font-semibold">Google Cloud Partner</div>
            </div>
            <div className="flex items-center justify-center h-12 bg-transparent">
              <div className="text-xl font-semibold">AWS Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 