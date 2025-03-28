import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm pt-12 pb-6 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">XENOS</h3>
            <p className="text-muted-foreground text-sm">
              eXtended Enterprise & Neural Operating Systems
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">Lösungen</Link></li>
              <li><Link href="#references" className="text-foreground/70 hover:text-primary transition-colors">Referenzen</Link></li>
              <li><Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Lösungen</h4>
            <ul className="space-y-2">
              <li><Link href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">AI-gestützte SaaS</Link></li>
              <li><Link href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">IT-Dienstleistungen</Link></li>
              <li><Link href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">MVP-Entwicklung</Link></li>
              <li><Link href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">Cloud Management</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-foreground/70 hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-border/50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} XENOS GmbH. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in Deutschland</p>
        </div>
      </div>
    </footer>
  );
} 