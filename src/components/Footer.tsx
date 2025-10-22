import { Phone, Envelope, MapPin, Clock } from '@phosphor-icons/react'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Varitec</h3>
            <p className="text-sm opacity-90">
              Deine kompetente Kfz-Werkstatt für alle Services rund ums Auto.
              Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Schnelllinks</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavigate('leistungen')}
                className="text-sm opacity-90 hover:opacity-100 text-left transition-opacity"
              >
                Unsere Leistungen
              </button>
              <button
                onClick={() => handleNavigate('tuv-termin')}
                className="text-sm opacity-90 hover:opacity-100 text-left transition-opacity"
              >
                TÜV-Termin buchen
              </button>
              <button
                onClick={() => handleNavigate('reifenservice')}
                className="text-sm opacity-90 hover:opacity-100 text-left transition-opacity"
              >
                Reifenservice
              </button>
              <button
                onClick={() => handleNavigate('team')}
                className="text-sm opacity-90 hover:opacity-100 text-left transition-opacity"
              >
                Unser Team
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+49123456789"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone size={18} />
                +49 123 456789
              </a>
              <a
                href="mailto:info@varitec.de"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Envelope size={18} />
                info@varitec.de
              </a>
              <div className="flex items-start gap-2 text-sm opacity-90">
                <MapPin size={18} className="mt-0.5" />
                <span>
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Öffnungszeiten</h4>
            <div className="flex items-start gap-2 text-sm opacity-90">
              <Clock size={18} className="mt-0.5" />
              <div>
                <p>Mo - Fr: 08:00 - 18:00</p>
                <p>Sa: 09:00 - 13:00</p>
                <p>So: Geschlossen</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Varitec. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleNavigate('impressum')}
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              Impressum
            </button>
            <button
              onClick={() => handleNavigate('datenschutz')}
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
