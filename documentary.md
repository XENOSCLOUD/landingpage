# XENOS-Landingpage Dokumentation

## Projektübersicht

Die XENOS-Landingpage ist eine moderne, responsive One-Page-Website für XENOS, ein deutsches Softwareunternehmen, das sich auf AI-gestützte SaaS-Anwendungen spezialisiert. Die Website präsentiert das Unternehmen, seine Dienstleistungen und Produkte sowie Referenzen und Kontaktmöglichkeiten.

## Technologien

Die Website wurde mit folgenden Technologien entwickelt:

- **Framework**: Next.js mit TypeScript
- **UI-Bibliothek**: Shadcn/ui (basierend auf Radix UI)
- **Styling**: Tailwind CSS
- **Formulare**: React Hook Form mit Zod-Validierung

## Struktur

Die Landingpage folgt einer One-Page-Design-Struktur mit einem festen Navigationsmenü, das zu verschiedenen Abschnitten auf derselben Seite scrollt. Die Hauptstruktur besteht aus:

### Hauptdateien

- **app/layout.tsx**: Definiert das globale Layout mit Navbar und Footer
- **app/page.tsx**: Hauptseite, die alle Sektionskomponenten zusammenführt
- **app/globals.css**: Globale Stile und TailwindCSS-Konfigurationen

### Komponenten

Die Seite ist modular mit den folgenden Komponenten aufgebaut:

1. **Navbar**: Feste Navigationsleiste mit Links zu allen Abschnitten
2. **HeroSection**: Hauptbanner mit Headline, Subheadline und CTA-Button
3. **AboutSection**: Informationen über XENOS, seine Mission und Kernwerte
4. **SolutionsSection**: Präsentation der Produkte und Dienstleistungen
5. **ReferencesSection**: Partner-Logos und Kundenreferenzen
6. **CTASection**: Call-to-Action mit klarer Handlungsaufforderung
7. **ContactSection**: Kontaktformular und Kontaktinformationen
8. **Footer**: Site-weite Links und rechtliche Informationen

## Funktionalitäten

### Responsive Design

Die Website ist vollständig responsiv und bietet optimale Ansichten für:
- Mobile Geräte (unter 640px)
- Tablets (640px - 1024px)
- Desktop (über 1024px)

### Navigationssystem

- Sticky Header mit Scroll-to-Section-Funktion
- Smooth Scrolling für eine bessere Benutzererfahrung
- Mobile Navigation für kleine Bildschirme

### Kontaktformular

Das Kontaktformular bietet:
- Formularvalidierung mit detaillierten Fehlermeldungen
- Erfolgsmeldung nach dem Absenden
- Optionales Telefonfeld

## UI-Komponenten

Die Website nutzt vorgefertigte Shadcn/ui-Komponenten für ein konsistentes Design:

- Button
- Card
- Form
- Input/Textarea
- Tabs
- Carousel
- Navigation Menu
- und mehr

## Design & Farben

Die Website folgt einem modernen, minimalistischen Design mit einem Fokus auf Galaxie- und Innovationsthemen. Das Farbschema basiert auf den Tailwind-Farben mit Anpassungen für:

- Primärfarbe: Dunkelgrau/Schwarz für ein professionelles Erscheinungsbild
- Akzentfarben: Subtile Blau- und Lilatöne für Technologie- und Innovationsakzente
- Weiße und hellgraue Hintergründe für eine klare Lesbarkeit

## Bilder

Die Website verwendet verschiedene Bildtypen, die im `public`-Verzeichnis gespeichert sind:
- `logo.png`: Das Unternehmenslogo
- `image[n].jpg`: Abstrakte Hintergrundbilder (z.B. für Hero-Sektion)
- `office[n].jpg`: Bilder von Bürogebäuden
- `universe[n].jpg`: Bilder von Galaxien und Himmelskörpern

## Wartung und Erweiterung

### Hinzufügen neuer Abschnitte

1. Erstellen Sie eine neue Komponente unter `/components`
2. Fügen Sie sie in `app/page.tsx` hinzu
3. Bei Bedarf Link in der Navbar ergänzen

### Ändern von Designelementen

- Grundlegende Stile können in `app/globals.css` geändert werden
- Komponentenspezifische Stile sind in den jeweiligen Komponentendateien definiert

### Aktualisieren von Inhalten

- Produkte und Dienstleistungen: Ändern Sie die Arrays in `SolutionsSection.tsx`
- Referenzen und Testimonials: Bearbeiten Sie die Arrays in `ReferencesSection.tsx`

## Bekannte Probleme und Lösungen

- **Formularabhängigkeiten**: Die Kontaktsektion benötigt die Pakete `react-hook-form`, `@hookform/resolvers` und `zod`. Stellen Sie sicher, dass diese installiert sind.
- **Bildoptimierung**: Verwenden Sie stets die Next.js Image-Komponente für optimierte Ladezeiten.

## Zukünftige Verbesserungen

- Implementierung einer mehrsprachigen Unterstützung
- Integration einer Blog-Sektion
- Vollständige Backend-Integration des Kontaktformulars
- Erweiterte Analytics zur Konversionsverfolgung
