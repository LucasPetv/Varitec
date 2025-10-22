import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tire, CheckCircle, CalendarCheck } from '@phosphor-icons/react'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface ReifenservicePageProps {
  onNavigate: (page: Page) => void
}

export default function ReifenservicePage({ onNavigate }: ReifenservicePageProps) {
  const brands = [
    'Continental',
    'Michelin',
    'Bridgestone',
    'Goodyear',
    'Pirelli',
    'Dunlop',
    'Hankook',
    'Nokian'
  ]

  const services = [
    {
      title: 'Reifenwechsel',
      description: 'Professioneller Wechsel von Sommer- auf Winterreifen und umgekehrt',
      price: 'ab 29,90 €'
    },
    {
      title: 'Reifenmontage',
      description: 'Montage neuer Reifen auf deine Felgen inklusive Auswuchten',
      price: 'ab 49,90 €'
    },
    {
      title: 'Reifenverkauf',
      description: 'Große Auswahl an Markenreifen zu fairen Preisen',
      price: 'auf Anfrage'
    }
  ]

  const features = [
    'Kostenloser Reifencheck',
    'Profiltiefenmessung',
    'Luftdruckkontrolle',
    'RDKS-Service (Reifendruckkontrollsystem)',
    'Felgen-Reparatur',
    'Reifenentsorgung'
  ]

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <Tire size={64} weight="bold" className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Reifenservice
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Von der Beratung über den Verkauf
            bei uns bekommst du den kompletten Reifenservice aus einer Hand.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unsere Reifenservices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-accent font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Premium-Marken zu fairen Preisen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-background rounded-lg p-4 text-center font-semibold hover:shadow-md transition-shadow"
              >
                {brand}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Wir führen alle namhaften Reifenhersteller und beraten dich kompetent bei der Wahl 
            der richtigen Reifen für dein Fahrzeug und deine Anforderungen.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Zusätzliche Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rund um deine Reifen bieten wir dir weitere praktische Leistungen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={24} className="text-accent flex-shrink-0" weight="bold" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zeit für neue Reifen?
              </h2>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                Vereinbare jetzt einen Termin für Reifenwechsel, Beratung oder TÜV-Prüfung. 
                Wir freuen uns auf dich!
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={() => onNavigate('tuv-termin')}
              >
                <CalendarCheck size={24} weight="bold" />
                Termin vereinbaren
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
