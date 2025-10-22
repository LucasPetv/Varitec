# Planning Guide

Varitec ist eine moderne Kfz-Werkstatt-Website, die Vertrauen schafft und Kunden ermöglicht, Services kennenzulernen und Termine online zu buchen.

**Experience Qualities**:
1. **Vertrauenswürdig** - Die Website vermittelt durch klare Strukturen, professionelle Darstellung und Kundenbewertungen Kompetenz und Zuverlässigkeit
2. **Serviceorientiert** - Einfache Online-Terminbuchung, direkter Kontakt und transparente Informationen zeigen kundenfreundlichen Service
3. **Übersichtlich** - Klare Navigation, große Buttons und strukturierte Inhalte ermöglichen schnelles Finden relevanter Informationen

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-page navigation with different service sections, online booking forms with state management, contact forms, and team presentation requiring organized data structures

## Essential Features

### Navigation & Routing
- **Functionality**: Multi-page navigation between Home, Leistungen, TÜV-Termin, Team, Kontakt, Reifenservice, HU/AU, Impressum, Datenschutz
- **Purpose**: Allow users to explore all services and information efficiently
- **Trigger**: Click on navigation menu items
- **Progression**: User clicks menu item → Page transition with smooth scroll → Content loads → Previous page unmounts
- **Success criteria**: All pages accessible, active state visible, mobile menu collapses properly

### TÜV-Termin Online Booking
- **Functionality**: Form for booking TÜV inspection appointments with date, time, vehicle type selection
- **Purpose**: Reduce phone calls and enable 24/7 appointment booking
- **Trigger**: User clicks "TÜV-Termin vereinbaren" button or navigates to TÜV-Termin page
- **Progression**: User opens form → Selects date from calendar → Chooses time slot → Enters vehicle details → Submits → Sees confirmation message
- **Success criteria**: Form validates required fields, stores bookings in KV store, shows success toast, form resets after submission

### Contact Form
- **Functionality**: Contact form with name, email, message, optional phone number
- **Purpose**: Enable direct communication with the workshop
- **Trigger**: User navigates to Kontakt page and fills form
- **Progression**: User enters contact info → Types message → Submits → Form validates → Success confirmation displayed
- **Success criteria**: Input validation works, required fields enforced, success message shown, form data stored

### Services Overview (Leistungen)
- **Functionality**: Display all workshop services with descriptions and benefits
- **Purpose**: Inform customers about available services and expertise
- **Trigger**: User clicks on Leistungen in navigation
- **Progression**: Page loads → Services displayed in grid/cards → User can read details → CTA buttons lead to specific service pages or booking
- **Success criteria**: All 8 services visible, descriptions clear, responsive layout works on mobile

### Team Presentation
- **Functionality**: Display team members with photos, roles, and descriptions
- **Purpose**: Build trust and personal connection with customers
- **Trigger**: User navigates to Team page
- **Progression**: Page loads → Team members shown with photos → User can read about each person's role and expertise
- **Success criteria**: Professional presentation, images load correctly, responsive on all devices

### Reifenservice Page
- **Functionality**: Dedicated tire service page with brand info, storage options, pricing, and booking
- **Purpose**: Highlight specialized tire services and seasonal storage
- **Trigger**: User clicks Reifenservice in menu or service card
- **Progression**: Page loads → Tire service details displayed → User learns about options → CTA to book appointment
- **Success criteria**: Information clearly organized, pricing transparent, booking flow accessible

### HU/AU Information Page
- **Functionality**: Explains inspection process, deadlines, and Varitec advantages
- **Purpose**: Educate customers about mandatory inspections and ease concerns
- **Trigger**: User navigates to HU/AU page
- **Progression**: Page loads → Process explanation → Benefits highlighted → Partner certifications shown → Booking CTA displayed
- **Success criteria**: Content easy to understand, builds confidence, clear next steps

### Customer Reviews
- **Functionality**: Display customer testimonials on homepage
- **Purpose**: Build social proof and trust
- **Trigger**: Automatically visible on homepage
- **Progression**: User lands on homepage → Scrolls to reviews section → Reads authentic customer experiences
- **Success criteria**: Reviews look authentic, varied experiences shown, star ratings visible

## Edge Case Handling
- **Empty Form Submission** - Display validation errors highlighting required fields before submission allowed
- **Date Selection in Past** - Disable past dates in calendar picker, show helpful message if attempted
- **Mobile Navigation** - Hamburger menu appears below 768px, closes after link selection
- **Slow Image Loading** - Skeleton placeholders shown while team photos and hero images load
- **Form Spam Protection** - Basic honeypot field and client-side validation to reduce spam
- **Missing Team Data** - Graceful fallback with placeholder avatar if photo unavailable
- **Map Loading Failure** - Fallback to text address with helpful directions if Google Maps fails
- **Long Service Descriptions** - Text truncation with "read more" expansion on mobile devices

## Design Direction
The design should feel professional, trustworthy, and technically competent while remaining warm and approachable. It should balance a modern, clean interface with service-oriented friendliness, using clear hierarchies and generous whitespace to avoid overwhelming visitors while highlighting quality craftsmanship.

## Color Selection
Analogous color scheme with cool, professional tones communicating technical expertise, reliability, and cleanliness.

- **Primary Color**: Deep Navy Blue (oklch(0.28 0.06 250)) - Communicates professionalism, technical expertise, and trustworthiness as main brand color for headers and primary CTAs
- **Secondary Colors**: 
  - Steel Gray (oklch(0.45 0.01 250)) - Supporting color for secondary buttons and less prominent UI elements
  - Light Blue Gray (oklch(0.92 0.01 250)) - Subtle backgrounds for sections and cards
- **Accent Color**: Vibrant Blue (oklch(0.55 0.18 250)) - Attention-grabbing highlight for important CTAs, active states, and key information
- **Foreground/Background Pairings**: 
  - Background White (oklch(0.99 0 0)): Navy Blue text (oklch(0.28 0.06 250)) - Ratio 11.2:1 ✓
  - Background Light Gray (oklch(0.92 0.01 250)): Navy Blue text (oklch(0.28 0.06 250)) - Ratio 9.8:1 ✓
  - Primary Navy (oklch(0.28 0.06 250)): White text (oklch(0.99 0 0)) - Ratio 11.2:1 ✓
  - Accent Blue (oklch(0.55 0.18 250)): White text (oklch(0.99 0 0)) - Ratio 4.7:1 ✓
  - Card White (oklch(0.99 0 0)): Dark Gray text (oklch(0.25 0.01 250)) - Ratio 12.5:1 ✓

## Font Selection
Typography should convey modern professionalism with excellent readability, using a clean sans-serif that feels both technical and friendly.

- **Typographic Hierarchy**:
  - H1 (Page Titles): Inter Bold/40px/tight letter spacing/-0.02em
  - H2 (Section Headers): Inter SemiBold/32px/tight letter spacing/-0.01em  
  - H3 (Card Titles): Inter SemiBold/24px/normal letter spacing
  - Body Text: Inter Regular/16px/1.6 line height/normal spacing
  - Small Text (Captions): Inter Regular/14px/1.5 line height
  - Buttons: Inter SemiBold/16px/normal spacing

## Animations
Subtle, purposeful animations enhance the user experience without delaying interactions, focusing on smooth page transitions and responsive feedback that reinforces the workshop's attention to detail.

- **Purposeful Meaning**: Smooth transitions between pages create a cohesive browsing experience, while hover effects on buttons and cards provide immediate tactile feedback
- **Hierarchy of Movement**: 
  - Primary: Page transitions (300ms ease) and form submission confirmations
  - Secondary: Button hover states (150ms) and card lift effects on service offerings
  - Tertiary: Menu open/close animations and scroll-triggered content reveals

## Component Selection
- **Components**: 
  - Navigation: Custom responsive navbar with mobile drawer using Sheet component
  - Hero Section: Custom component with heading, subtext, and dual CTAs using Button
  - Services Grid: Card components for each service with icon, title, description
  - Booking Forms: Form, Input, Label, Calendar (react-day-picker), Select for TÜV appointments
  - Contact Form: Form, Input, Textarea, Button with validation using react-hook-form
  - Team Cards: Card with Avatar component for team member photos
  - Testimonials: Custom cards with star ratings using appropriate icons
  - Footer: Custom component with structured links and contact info
  - Toast notifications: Sonner for form submission feedback
  
- **Customizations**: 
  - Custom hero section with background pattern or image
  - Service cards with custom icon integration from Phosphor Icons (Wrench, CarSimple, Tire, GasPump, etc.)
  - Custom calendar styling for appointment picker matching brand colors
  - Mobile-first navigation with custom drawer implementation
  
- **States**: 
  - Buttons: Default navy, hover with brightness increase, active pressed state, disabled gray
  - Inputs: Default with border, focus with accent blue ring, error with red border, filled state
  - Cards: Default white, hover with subtle shadow lift, clickable with pointer cursor
  - Navigation items: Default gray, hover blue, active with underline indicator
  
- **Icon Selection**: 
  - Wrench (Leistungen/Services)
  - CalendarCheck (TÜV-Termin)
  - Users (Team)
  - Phone (Contact)
  - Tire (Reifenservice)
  - ClipboardText (HU/AU)
  - MapPin (Location)
  - Envelope (Email)
  - Clock (Opening hours)
  
- **Spacing**: 
  - Page padding: px-4 md:px-8 lg:px-16
  - Section spacing: py-16 md:py-24
  - Card padding: p-6
  - Button padding: px-6 py-3
  - Grid gaps: gap-6 md:gap-8
  
- **Mobile**: 
  - Navigation collapses to hamburger menu below 768px
  - Services grid: 1 column mobile, 2 columns tablet, 3 columns desktop
  - Team cards: 1 column mobile, 2 columns tablet, 3-4 columns desktop
  - Forms: Full width on mobile with adjusted spacing
  - Hero text: Reduced font sizes on mobile (H1: 32px, H2: 24px)
  - Touch-friendly button sizes minimum 44x44px
  - Sticky mobile navigation bar for easy access
