import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  CalendarCheck,
  Wrench,
  Tire,
  Gauge,
  Drop,
  Disc,
  FirstAid,
  ClipboardText
} from '@phosphor-icons/react'
import { Service } from '@/types'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface LeistungenPageProps {
  onNavigate: (page: Page) => void
}

export default function LeistungenPage({ onNavigate }: LeistungenPageProps) {
  const services: Service[] = [
    {
      id: 'tuv',
      title: 'TÜV / Hauptuntersuchung',
      description: 'Wir führen die komplette Hauptuntersuchung (HU) und Abgasuntersuchung (AU) durch. Als Partner von TÜV und DEKRA garantieren wir eine professionelle Abwicklung.',
      icon: 'CalendarCheck',
      benefit: 'Schnelle Terminvergabe, keine langen Wartezeiten'
    },
    {
      id: 'hu-au',
      title: 'HU/AU',
      description: 'Gesetzlich vorgeschriebene Untersuchungen für die Verkehrssicherheit deines Fahrzeugs. Wir prüfen alle relevanten Komponenten nach aktuellen Standards.',
      icon: 'ClipboardText',
      benefit: 'Rechtssichere Dokumentation und Plakette direkt vor Ort'
    },
    {
      id: 'reifenservice',
      title: 'Reifenservice',
      description: 'Von der Beratung über den Verkauf bis zur Montage und Einlagerung – wir bieten den kompletten Service rund um deine Reifen mit allen Top-Marken.',
      icon: 'Tire',
      benefit: 'Kostenlose Einlagerung bei Reifenkauf'
    },
    {
      id: 'inspektion',
      title: 'Inspektion',
      description: 'Herstellergerechte Inspektionen nach Wartungsplan. Wir checken alle wichtigen Komponenten und dokumentieren lückenlos für den Werterhalt deines Fahrzeugs.',
      icon: 'Gauge',
      benefit: 'Erhält Herstellergarantie und Wiederverkaufswert'
    },
    {
      id: 'wartung',
      title: 'Wartung & Service',
      description: 'Regelmäßige Wartungsarbeiten wie Filterwechsel, Flüssigkeitsprüfung und -auffüllung sowie kleinere Reparaturen für den zuverlässigen Betrieb.',
      icon: 'Wrench',
      benefit: 'Verhindert teure Folgeschäden durch Früherkennung'
    },
    {
      id: 'bremsen',
      title: 'Bremsenservice',
      description: 'Kontrolle, Wartung und Reparatur der gesamten Bremsanlage. Von Bremsbelägen über Bremsscheiben bis zur Bremsflüssigkeit – Sicherheit hat Priorität.',
      icon: 'Disc',
      benefit: 'Maximale Sicherheit für dich und deine Familie'
    },
    {
      id: 'oelwechsel',
      title: 'Ölwechsel',
      description: 'Professioneller Ölwechsel mit hochwertigen Motorölen nach Herstellervorgabe. Inklusive Ölfilter und Kontrolle aller Flüssigkeitsstände.',
      icon: 'Drop',
      benefit: 'Verlängert die Lebensdauer deines Motors erheblich'
    },
    {
      id: 'unfall',
      title: 'Unfallinstandsetzung',
      description: 'Professionelle Reparatur von Unfallschäden aller Art. Wir arbeiten mit allen Versicherungen zusammen und kümmern uns um die Schadensabwicklung.',
      icon: 'FirstAid',
      benefit: 'Direkte Abrechnung mit deiner Versicherung möglich'
    }
  ]

  const iconMap = {
    CalendarCheck,
    Wrench,
    Tire,
    Gauge,
    Drop,
    Disc,
    FirstAid,
    ClipboardText
  }

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Unsere Leistungen
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Von der gesetzlichen Hauptuntersuchung bis zur Unfallinstandsetzung – 
            bei Varitec bekommst du alle Services rund um dein Fahrzeug aus einer Hand.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent" weight="bold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-sm font-medium text-accent">✓ {service.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nicht das Richtige gefunden?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir bieten noch viele weitere Services an. Kontaktiere uns einfach – 
            wir beraten dich gerne persönlich zu deinem Anliegen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('kontakt')}>
              Jetzt Kontakt aufnehmen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+49123456789'}
            >
              Anrufen: +49 123 456789
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="bg-accent text-accent-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für deinen Termin?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Buche jetzt deinen TÜV-Termin online oder vereinbare einen individuellen Werkstatttermin.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={() => onNavigate('tuv-termin')}
              >
                <CalendarCheck size={24} weight="bold" />
                TÜV-Termin vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
