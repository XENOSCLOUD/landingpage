# XENOS Landingpage

Eine moderne, responsive Landingpage für XENOS, ein deutsches Softwareunternehmen, das sich auf AI-gestützte SaaS-Anwendungen spezialisiert.

## Funktionen

- **Modernes Design:** Minimalistisches, professionelles Design mit Fokus auf Innovation
- **Responsive Layout:** Optimale Darstellung auf allen Geräten (Mobil, Tablet, Desktop)
- **Abschnittsbasiert:** One-Page-Design mit nahtlosem Scrollen zwischen Abschnitten
- **Komponenten-Bibliothek:** Verwendet Shadcn/ui für ein konsistentes UI
- **Kontaktformular:** Vollständig validiertes Formular mit React Hook Form

## Technologie-Stack

- [Next.js](https://nextjs.org/) - React-Framework
- [TypeScript](https://www.typescriptlang.org/) - Typsicheres JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS-Framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI-Komponenten-Bibliothek
- [React Hook Form](https://react-hook-form.com/) - Formularverwaltung
- [Zod](https://github.com/colinhacks/zod) - Schemavalidierung

## Erste Schritte

### Voraussetzungen

- Node.js 16.8.0 oder höher
- npm oder yarn oder pnpm oder bun

### Installation

1. Klonen Sie das Repository:

```bash
git clone <repository-url>
cd landingpage
```

2. Installieren Sie die Abhängigkeiten:

```bash
npm install
# oder
yarn install
# oder
pnpm install
# oder
bun install
```

3. Abhängigkeiten für das Kontaktformular:

```bash
npm install react-hook-form @hookform/resolvers zod
# oder
yarn add react-hook-form @hookform/resolvers zod
# oder
pnpm add react-hook-form @hookform/resolvers zod
# oder
bun add react-hook-form @hookform/resolvers zod
```

### Entwicklung

Starten Sie den Entwicklungsserver:

```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
# oder
bun dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Seite zu sehen.

## Projektstruktur

```
landingpage/
├── app/                  # Next.js App-Router
│   ├── layout.tsx        # Hauptlayout mit Navbar und Footer
│   ├── page.tsx          # Hauptseite, die alle Sektionen zusammenführt
│   └── globals.css       # Globale Stile
├── components/           # React-Komponenten
│   ├── Navbar.tsx        # Navigationsleiste
│   ├── Footer.tsx        # Footer
│   ├── HeroSection.tsx   # Hero-Sektion
│   ├── AboutSection.tsx  # Über-uns-Sektion
│   ├── SolutionsSection.tsx # Lösungen-Sektion
│   ├── ReferencesSection.tsx # Referenzen-Sektion
│   ├── CTASection.tsx    # Call-to-Action-Sektion
│   ├── ContactSection.tsx # Kontakt-Sektion
│   └── ui/               # Shadcn/ui-Komponenten
├── public/               # Statische Assets (Bilder, Favicon, etc.)
└── documentary.md        # Projekt-Dokumentation
```

## Anpassung

### Inhalte ändern

Sie können die Inhalte in den entsprechenden Komponentendateien bearbeiten:

- **Hero-Sektion:** `components/HeroSection.tsx`
- **Über-uns-Sektion:** `components/AboutSection.tsx`
- **Lösungen-Sektion:** `components/SolutionsSection.tsx`
- **Referenzen-Sektion:** `components/ReferencesSection.tsx`
- **Kontakt-Sektion:** `components/ContactSection.tsx`

### Stile anpassen

Die Website verwendet Tailwind CSS für das Styling. Sie können die Designelemente anpassen:

- **Globale Stile:** Bearbeiten Sie `app/globals.css`
- **Komponenten-Stile:** Ändern Sie die Klassen in den entsprechenden Komponenten

## Deployment

Die einfachste Möglichkeit, Ihre Next.js-App zu deployen, ist die [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js) der Entwickler von Next.js.

Weitere Informationen finden Sie in der [Next.js-Deployment-Dokumentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs) - Erfahren Sie mehr über Next.js
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs) - Erfahren Sie mehr über Tailwind CSS
- [Shadcn/ui Dokumentation](https://ui.shadcn.com/) - Erfahren Sie mehr über die UI-Komponenten

## Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz.
