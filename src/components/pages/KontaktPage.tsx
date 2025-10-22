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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Kontakt & Anfahrt
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Wir sind für dich da! Schreib uns eine Nachricht oder ruf einfach an.
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
                        placeholder="Max Mustermann"
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
                        placeholder="max@example.com"
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
                        placeholder="+49 123 456789"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Deine Nachricht *</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Wie können wir dir helfen?"
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
                        href="tel:+49123456789"
                        className="text-accent hover:underline"
                      >
                        +49 123 456789
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
                        href="mailto:info@varitec.de"
                        className="text-accent hover:underline"
                      >
                        info@varitec.de
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
                        Musterstraße 123<br />
                        12345 Musterstadt
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
                        <p>Montag - Freitag: 08:00 - 18:00</p>
                        <p>Samstag: 09:00 - 13:00</p>
                        <p>Sonntag: Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Anfahrt</h3>
                  <div className="aspect-video bg-background rounded-lg flex items-center justify-center text-muted-foreground mb-4">
                    <MapPin size={48} weight="duotone" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mit dem Auto:</strong> Direkt an der B123, Ausfahrt Musterstadt-Ost. 
                    Kostenlose Parkplätze vor Ort.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Öffentlich:</strong> Buslinien 45 und 67, Haltestelle &quot;Gewerbepark&quot; 
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
