import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Envelope, Phone, MapPin, Clock } from '@phosphor-icons/react'
import { ContactMessage } from '@/types'
import logoVaritec from '@/assets/logo_varitec.jpg'

export default function KontaktPage() {
  const [messages, setMessages] = useKV<ContactMessage[]>('contact-messages', [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message) {
      toast.error('Bitte fülle alle Pflichtfelder aus')
      return
    }

    setIsSubmitting(true)

    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    }

    setMessages((current) => [...(current || []), newMessage])

    toast.success('Nachricht gesendet!', {
      description: 'Wir melden uns so schnell wie möglich bei dir.'
    })

    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Sie haben Fragen oder möchten einen Termin vereinbaren? Schreiben Sie uns oder rufen Sie an – wir sind gerne für Sie da!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Schreib uns</CardTitle>
                  <CardDescription>
                    Fülle das Formular aus und wir melden uns zeitnah bei dir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=""
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefon (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=""
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Ihre Nachricht *</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Wie können wir ihnen helfen?"
                        rows={6}
                        className="mt-2"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Pflichtfelder
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <a
                        href="tel:+4972318002999"
                        className="text-accent hover:underline"
                      >
                        +49 7231 8002999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Envelope size={24} className="text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-Mail</h4>
                      <a
                        href="mailto:info@varitec-kfz.de"
                        className="text-accent hover:underline"
                      >
                        info@varitec-kfz.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        Turnstraße 32/1<br />
                        75228 Ispringen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Montag - Donnerstag: 07:30 bis 12:00 und 13:00 bis 17:30</p>
                        <p>Freitag: 07:30 bis 12:00 und 13:00 bis 17:00</p>
                        <p>Samstag: Nach Vereinbarung</p>
                        <p>Sonntag: Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Anfahrt</h3>
                  <div className="aspect-video bg-background rounded-lg flex items-center justify-center text-muted-foreground mb-4 overflow-hidden">
                    <iframe
                      title="Google Maps - Varitec Auto Werkstatt"
                      src="https://www.google.com/maps?q=Turnstraße+32/1,+75228+Ispringen&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mit dem Auto:</strong> Turnstraße 32/1 - 75228 Ispringen.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Öffentlich:</strong> Bahn S5, Haltestelle &quot;Ispringen&quot;
                    (3 Minuten Fußweg).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
