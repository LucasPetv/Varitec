import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardText, CheckCircle, CalendarCheck } from '@phosphor-icons/react'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface HUAUPageProps {
  onNavigate: (page: Page) => void
}

export default function HUAUPage({ onNavigate }: HUAUPageProps) {
  const steps = [
    {
      number: '1',
      title: 'Termin vereinbaren',
      description: 'Buche online oder telefonisch deinen Wunschtermin bei uns'
    },
    {
      number: '2',
      title: 'Fahrzeug vorführen',
      description: 'Komm zum vereinbarten Termin mit Fahrzeugschein und letztem Prüfbericht'
    },
    {
      number: '3',
      title: 'Untersuchung durchführen',
      description: 'Unsere Prüfer checken dein Fahrzeug nach allen gesetzlichen Vorgaben'
    },
    {
      number: '4',
      title: 'Plakette erhalten',
      description: 'Bei bestandener Prüfung bekommst du direkt die neue TÜV-Plakette'
    }
  ]

  const benefits = [
    {
      title: 'Zertifizierte Partner',
      description: 'Wir arbeiten mit TÜV, DEKRA und GTÜ zusammen',
      icon: CheckCircle
    },
    {
      title: 'Faire Preise',
      description: 'Transparente Kosten ohne versteckte Gebühren',
      icon: CheckCircle
    },
    {
      title: 'Schnelle Termine',
      description: 'Meist kurzfristige Terminvergabe möglich',
      icon: CheckCircle
    },
    {
      title: 'Alles vor Ort',
      description: 'Mängelbehebung direkt in unserer Werkstatt',
      icon: CheckCircle
    }
  ]

  const checklist = [
    'Beleuchtung und Elektrik',
    'Bremsenanlage',
    'Lenkung und Fahrwerk',
    'Reifen und Räder',
    'Karosserie und Rahmen',
    'Umweltbelastung (Abgase)',
    'Sicherheitseinrichtungen',
    'Kennzeichen und Plaketten'
  ]

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <ClipboardText size={64} weight="bold" className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            HU/AU – Hauptuntersuchung & Abgasuntersuchung
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Die gesetzlich vorgeschriebene Hauptuntersuchung – bei uns schnell, 
            zuverlässig und zu fairen Preisen.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Was ist die Hauptuntersuchung?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Die Hauptuntersuchung (HU), umgangssprachlich TÜV genannt, ist eine gesetzlich 
            vorgeschriebene Untersuchung der Verkehrssicherheit deines Fahrzeugs. Sie muss bei 
            PKW alle zwei Jahre durchgeführt werden.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Was wird geprüft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" weight="bold" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Bei der Abgasuntersuchung (AU) wird zusätzlich überprüft, ob dein Fahrzeug die 
            gesetzlichen Grenzwerte für Abgasemissionen einhält.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Warum HU/AU bei Varitec?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={28} className="text-accent" weight="bold" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wichtige Fristen
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-accent-foreground/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Neuwagen</h4>
                <p className="opacity-95">
                  Erste HU nach 3 Jahren, danach alle 2 Jahre
                </p>
              </div>
              <div className="bg-accent-foreground/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Gebrauchtwagen (PKW)</h4>
                <p className="opacity-95">
                  Alle 2 Jahre – das Datum steht auf der TÜV-Plakette
                </p>
              </div>
              <div className="bg-accent-foreground/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Überziehung</h4>
                <p className="opacity-95">
                  Bei mehr als 2 Monaten Überziehung drohen Bußgelder und Punkte
                </p>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => onNavigate('tuv-termin')}
            >
              <CalendarCheck size={24} weight="bold" />
              Jetzt HU/AU-Termin buchen
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Was passiert bei Mängeln?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Keine Sorge – kleine Mängel sind normal und können meist direkt bei uns behoben werden. 
                  Wir erstellen einen transparenten Kostenvoranschlag und reparieren nur nach deiner Freigabe.
                </p>
                <p className="text-muted-foreground mb-8">
                  Bei erheblichen Mängeln hast du 4 Wochen Zeit für die Nachuntersuchung. 
                  Wir beraten dich ehrlich und fair zu allen notwendigen Reparaturen.
                </p>
                <Button
                  size="lg"
                  onClick={() => onNavigate('kontakt')}
                >
                  Fragen? Jetzt Kontakt aufnehmen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
