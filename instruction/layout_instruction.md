# Instructions for Creating the XENOS One-Page Website

## 1. Project Overview
- **Objective:** Develop a modern, responsive one-page website for XENOS using Next.js with Shadcn/ui as the Material UI component library.
- **URL:** The website will be accessible at [www.xenoscloud.com](https://www.xenoscloud.com).
- **Layout:** A single-page design with a fixed top navigation (Navbar) that scrolls to different sections on the same page. Use Galaxy and innovative functions. 

## 2. Technology Stack & Setup
- **Framework:** Next.js (with TypeScript)
- **UI Library:** Shadcn/ui
- **Styling:** Tailwind CSS
- **Animations (optional):** Framer Motion (if needed for transitions)

### Project Initialization
1. **images**
  - You will find a bunch of images for the webpage in the /public asset folder. The images are named logo.png is the company logo. then there are image[n].jpg these are abstruct background images for sections like Hero and Co. office[n].jpg are images of office buildings. And universe[n].jpg are images of universe parts like the moon or a galaxy. Use the right images for the right sections of the langingpage.
3. **Configure Tailwind CSS:**
   - Ensure Tailwind CSS is set up according to the Next.js + Shadcn/ui guidelines.
4. **Directory Structure:**
   - Use the following structure:
     - `/app` – Main directory for pages.
     - `/components` – For reusable UI components.
     - `/public` – For static assets.
     - `/styles` – For Tailwind CSS global styles and configuration.

## 3. File & Component Structure

### Global Layout
- **File:** `/app/layout.tsx`
- **Purpose:** Define a global layout that wraps all pages with the Navbar and Footer.
- **Instructions:**
  - Import global Tailwind CSS styles.
  - Include the `<Navbar />` at the top and `<Footer />` at the bottom.
  - Render `{children}` between them.

### Main Page
- **File:** `/app/page.tsx`
- **Purpose:** Assemble the one-page site by rendering all sections sequentially.
- **Instructions:**
  - Import and render each section component in the following order:
    1. `<HeroSection />`
    2. `<AboutSection />`
    3. `<SolutionsSection />`
    4. `<ReferencesSection />`
    5. `<CTASection />`
    6. `<ContactSection />`
  - Ensure each section has a unique HTML `id` attribute for smooth in-page navigation (e.g., `id="hero"`, `id="about"`, etc.).

### Navbar Component
- **File:** `/components/Navbar.tsx`
- **Purpose:** Create a sticky header with navigation links.
- **Instructions:**
  - Use Shadcn/ui components to build the Navbar.
  - Include links that reference the corresponding section IDs (e.g., `<a href="#hero">Home</a>`, `<a href="#about">Über uns</a>`, etc.).
  - Implement smooth scrolling behavior for in-page navigation.
  - Ensure the Navbar is responsive (e.g., mobile hamburger menu).

### Hero Section Component
- **File:** `/components/HeroSection.tsx`
- **Purpose:** Present the main banner with a headline, subheadline, and a CTA button.
- **Instructions:**
  - Use Shadcn/ui components for layout and typography.
  - Include a prominent headline (e.g., "XENOS – eXtended Enterprise & Neural Operating Systems").
  - Add a subheadline (e.g., "Revolutionieren Sie Ihr Business mit intelligenter, skalierbarer AI-Unternehmenssoftware.").
  - Place a CTA button that scrolls to the next logical section.

### About Section Component
- **File:** `/components/AboutSection.tsx`
- **Purpose:** Provide an overview of XENOS, including mission and core values.
- **Instructions:**
  - Add a section header (e.g., "Über XENOS").
  - Include a descriptive paragraph detailing the company’s mission and unique selling propositions.
  - List the core values (Innovation, Exzellenz, Transparenz, Effizienz, Flexibilität) using a clear, styled list.
  - Ensure the section is structured for responsiveness (e.g., two-column layout on desktop, stacked on mobile).

### Solutions Section Component
- **File:** `/components/SolutionsSection.tsx`
- **Purpose:** Showcase the products and services offered.
- **Instructions:**
  - Add a section header (e.g., "Unsere Lösungen").
  - Provide an introductory paragraph that explains the range of offerings.
  - Create subsections/cards for each solution category:
    - **AI-gestützte SaaS-Produkte:** (e.g., CallFlow, Decisely, Cold Call Bot)
    - **IT-Dienstleistungen:** (e.g., Beratung & Consulting, IT-Support, Cloud Management)
    - **MVP-Entwicklung & Scale-Up:** (Kurzbeschreibung der Vorgehensweise)
  - Use Shadcn/ui card or panel components for visual separation.

### References Section Component
- **File:** `/components/ReferencesSection.tsx`
- **Purpose:** Build trust with partner logos and client testimonials.
- **Instructions:**
  - Add a section header (e.g., "Unsere Partner & Referenzen").
  - Include a brief text that highlights the expertise and partnerships.
  - Display partner/client logos in a grid or carousel layout using Shadcn/ui components.

### CTA Section Component
- **File:** `/components/CTASection.tsx`
- **Purpose:** Provide a clear call-to-action.
- **Instructions:**
  - Add a section header (e.g., "Bereit für den nächsten Schritt?").
  - Include a supporting text and a prominent CTA button (e.g., "Kontakt aufnehmen").
  - Ensure the CTA button links to or scrolls to the Contact Section.

### Contact Section Component
- **File:** `/components/ContactSection.tsx`
- **Purpose:** Offer a contact form for inquiries.
- **Instructions:**
  - Add a section header (e.g., "Kontakt").
  - Include an introductory text prompting visitors to get in touch.
  - Build a contact form using Shadcn/ui form components with the following fields:
    - Name
    - E-Mail
    - Betreff
    - Nachricht
    - (Optional: Telefonnummer)
  - Provide a clear submission button.

### Footer Component
- **File:** `/components/Footer.tsx`
- **Purpose:** Display site-wide links and legal information.
- **Instructions:**
  - Include quick links (Home, Über uns, Lösungen, Referenzen, Kontakt).
  - Add legal links (Impressum, Datenschutz, AGB).
  - Incorporate Social Media icons/links.
  - Display a copyright notice.
  - Use a clean, minimal layout consistent with Shadcn/ui.

## 4. Styling & Responsiveness
- **Tailwind CSS:** Use Tailwind for global styling and responsive design.
- **Component Styling:** Leverage Shadcn/ui for component-specific styling.
- **Smooth Scrolling:** Ensure smooth in-page scrolling for navigation links.
- **Responsiveness:** Test and adjust layouts for mobile, tablet, and desktop views.

## 6. Documentation & Comments
- **Code Documentation:** Comment components and logic for maintainability.
- **README.md:** Update with project overview, setup instructions, and deployment details.
