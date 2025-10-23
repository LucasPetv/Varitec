import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { toast } from 'sonner'
import { CalendarCheck, CheckCircle } from '@phosphor-icons/react'
import { TUVAppointment } from '@/types'

export default function TUVTerminPage() {
  const [appointments, setAppointments] = useKV<TUVAppointment[]>('tuv-appointments', [])
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [licensePlate, setLicensePlate] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)


  const vehicleTypes = [
    'PKW',
    'Transporter',
    'Wohnmobil',
    'Anhänger'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !time || !vehicleType || !customerName || !email || !licensePlate) {
      toast.error('Bitte fülle alle Pflichtfelder aus')
      return
    }

    setIsSubmitting(true)

    const newAppointment: TUVAppointment = {
      id: Date.now().toString(),
      date: date.toISOString(),
      time,
      vehicleType,
      customerName,
      email,
      phone,
      licensePlate,
    }

    setAppointments((current) => [...(current || []), newAppointment])

    toast.success('Termin erfolgreich gebucht!', {
      description: 'Du erhältst eine Bestätigung per E-Mail.'
    })

    setDate(undefined)
    setTime('')
    setVehicleType('')
    setCustomerName('')
    setEmail('')
    setPhone('')
    setLicensePlate('')
    setIsSubmitting(false)
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <CalendarCheck size={64} weight="bold" className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            TÜV-Termin online buchen
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Buche deinen TÜV-Termin ganz einfach online. Wähle Datum und Uhrzeit, 
            gib deine Fahrzeugdaten ein – fertig!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Terminbuchung</CardTitle>
                  <CardDescription>
                    Fülle das Formular aus und erhalte eine Bestätigung per E-Mail
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="date" className="text-base font-semibold mb-3 block">
                        Wunschdatum *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={date ? date.toISOString().substring(0, 10) : ''}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="time" className="text-base font-semibold">
                        Wunschuhrzeit *
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="vehicleType" className="text-base font-semibold">
                        Fahrzeugtyp *
                      </Label>
                      <Select value={vehicleType} onValueChange={setVehicleType}>
                        <SelectTrigger id="vehicleType" className="mt-2">
                          <SelectValue placeholder="Fahrzeugtyp wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Deine Kontaktdaten</h3>
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="customerName">Name *</Label>
                          <Input
                            id="customerName"
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
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
                          <Label htmlFor="licensePlate">Kennzeichen *</Label>
                          <Input
                            id="licensePlate"
                            type="text"
                            value={licensePlate}
                            onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                            placeholder="PF-AB 1234"
                            className="mt-2"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      <CheckCircle size={24} weight="bold" />
                      {isSubmitting ? 'Wird gebucht...' : 'Termin verbindlich buchen'}
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
                  <CardTitle>Was du wissen solltest</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Terminvergabe</h4>
                    <p className="text-sm text-muted-foreground">
                      Termine sind von Montag bis Freitag verfügbar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dauer</h4>
                    <p className="text-sm text-muted-foreground">
                      Die TÜV-Untersuchung dauert in der Regel 30-60 Minuten.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Fragen?</h4>
                  <p className="text-sm mb-4 opacity-95">
                    Ruf uns einfach an – wir beraten dich gerne!
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => window.location.href = 'tel:+4972318002999'}
                  >
                    +49 7231 8002999
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
