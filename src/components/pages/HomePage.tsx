import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  CalendarCheck, 
  Phone, 
  Wrench, 
  CarSimple, 
  Tire, 
  Star,
  CheckCircle
} from '@phosphor-icons/react'
import { Review } from '@/types'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface HomePageProps {
  onNavigate: (page: Page) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Michael Schmidt',
      rating: 5,
      text: 'Sehr kompetente Beratung und faire Preise. Die Inspektion wurde schnell und gründlich durchgeführt. Immer wieder gerne!',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Sarah Weber',
      rating: 5,
      text: 'Super freundliches Team! TÜV ohne Probleme bestanden. Die Online-Terminbuchung ist super praktisch.',
      date: '2024-01-10'
    },
    {
      id: '3',
      name: 'Thomas Müller',
      rating: 5,
      text: 'Beste Werkstatt in der Region. Ehrliche Beratung und top Service. Fühle mich hier sehr gut aufgehoben.',
      date: '2024-01-05'
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: 'Zertifizierte Qualität',
      description: 'TÜV- und DEKRA-Partner mit modernster Technik'
    },
    {
      icon: CheckCircle,
      title: 'Faire Preise',
      description: 'Transparente Kostenvoranschläge ohne versteckte Kosten'
    },
    {
      icon: CheckCircle,
      title: 'Schneller Service',
      description: 'Kurze Wartezeiten durch effiziente Terminplanung'
    },
    {
      icon: CheckCircle,
      title: 'Erfahrenes Team',
      description: 'Kompetente Mechaniker mit jahrelanger Erfahrung'
    }
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Deine Kfz-Werkstatt für Qualität und Service
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              Von TÜV über Inspektion bis Reifenservice – bei Varitec bist du in den besten Händen. 
              Buche jetzt deinen Termin online und erlebe erstklassigen Service!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg"
                onClick={() => onNavigate('tuv-termin')}
              >
                <CalendarCheck size={24} weight="bold" />
                TÜV-Termin vereinbaren
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => onNavigate('kontakt')}
              >
                <Phone size={24} weight="bold" />
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unsere Top-Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('tuv-termin')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CalendarCheck size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">TÜV & HU/AU</h3>
                <p className="text-muted-foreground">
                  Schnelle und zuverlässige Hauptuntersuchung mit direkter Terminbuchung online.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('leistungen')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inspektion & Wartung</h3>
                <p className="text-muted-foreground">
                  Regelmäßige Wartung nach Herstellervorgaben für maximale Lebensdauer deines Fahrzeugs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('reifenservice')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Tire size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reifenservice</h3>
                <p className="text-muted-foreground">
                  Reifenwechsel, Einlagerung und Verkauf aller Top-Marken zu fairen Preisen.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('leistungen')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CarSimple size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reparaturen</h3>
                <p className="text-muted-foreground">
                  Von Bremsen über Auspuff bis zur Unfallinstandsetzung – wir reparieren alles fachgerecht.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('leistungen')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ölwechsel</h3>
                <p className="text-muted-foreground">
                  Schneller Ölwechsel mit hochwertigen Ölen für optimalen Motorschutz.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('kontakt')}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone size={28} className="text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beratung</h3>
                <p className="text-muted-foreground">
                  Persönliche Beratung zu allen Fragen rund um dein Fahrzeug – kompetent und ehrlich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Warum Varitec?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. 
            Das macht uns zur ersten Wahl für dein Fahrzeug.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon size={32} className="text-accent" weight="bold" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Überzeuge dich selbst von der Qualität unseres Services durch echte Kundenbewertungen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={20} weight="fill" className="text-accent" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">&quot;{review.text}&quot;</p>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für deinen Werkstatttermin?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Buche jetzt deinen TÜV-Termin online oder kontaktiere uns für eine persönliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => onNavigate('tuv-termin')}
            >
              <CalendarCheck size={24} weight="bold" />
              Online buchen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              onClick={() => window.location.href = 'tel:+49123456789'}
            >
              <Phone size={24} weight="bold" />
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
