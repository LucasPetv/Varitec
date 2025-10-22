import teamImage from '@/assets/team.jpg'
import { Users } from '@phosphor-icons/react'

export default function TeamPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <Users size={64} weight="bold" className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Unser Team
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Kompetenz, Erfahrung und Leidenschaft – das macht unser Team aus.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-center">
          <img src={teamImage} alt="Unser Team" className="mx-auto rounded-lg shadow-lg w-full max-w-2xl" />
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
