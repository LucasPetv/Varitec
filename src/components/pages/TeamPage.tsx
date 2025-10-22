import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Users } from '@phosphor-icons/react'
import { TeamMember } from '@/types'

export default function TeamPage() {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Michael Schneider',
      role: 'Werkstattleiter & Kfz-Meister',
      description: 'Mit über 20 Jahren Erfahrung leitet Michael unser Team und sorgt dafür, dass jedes Fahrzeug in besten Händen ist. Seine Leidenschaft für Autos und sein technisches Know-how machen ihn zum perfekten Ansprechpartner für alle Fragen.'
    },
    {
      id: '2',
      name: 'Sarah Weber',
      role: 'Kfz-Mechatronikerin',
      description: 'Sarah ist unsere Expertin für Elektronik und Diagnose. Sie findet jedes Problem und repariert es präzise. Ihre freundliche Art und ihr Fachwissen schätzen unsere Kunden besonders.'
    },
    {
      id: '3',
      name: 'Thomas Müller',
      role: 'Kfz-Mechaniker',
      description: 'Thomas kümmert sich um alle mechanischen Reparaturen und Wartungsarbeiten. Seine Gründlichkeit und sein Auge fürs Detail garantieren höchste Qualität bei jeder Arbeit.'
    },
    {
      id: '4',
      name: 'Julia Fischer',
      role: 'Service & Kundenbetreuung',
      description: 'Julia ist deine erste Anlaufstelle bei uns. Sie koordiniert Termine, berät zu Services und sorgt dafür, dass du dich bei uns rundum wohlfühlst. Ihre positive Art macht jeden Werkstattbesuch angenehm.'
    },
    {
      id: '5',
      name: 'Daniel Hoffmann',
      role: 'Reifenspezialist',
      description: 'Daniel kennt sich mit allen Reifenmarken und -typen aus. Er berät dich kompetent bei der Wahl der richtigen Reifen und kümmert sich um Wechsel, Auswuchten und Einlagerung.'
    },
    {
      id: '6',
      name: 'Lisa Becker',
      role: 'Auszubildende Kfz-Mechatronikerin',
      description: 'Lisa ist unsere Nachwuchstalent und lernt mit großer Begeisterung alle Facetten des Kfz-Handwerks. Ihre Neugier und ihr Engagement bringen frischen Wind ins Team.'
    }
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <Users size={64} weight="bold" className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Unser Team
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Lerne die Menschen kennen, die sich um dein Auto kümmern. 
            Kompetenz, Erfahrung und Leidenschaft – das macht unser Team aus.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarFallback className="text-2xl font-semibold bg-accent text-accent-foreground">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Werde Teil unseres Teams
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wir sind immer auf der Suche nach motivierten Fachkräften und Auszubildenden, 
              die unsere Leidenschaft für Autos teilen. Bewirb dich jetzt!
            </p>
            <a
              href="mailto:karriere@varitec.de?subject=Bewerbung"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
