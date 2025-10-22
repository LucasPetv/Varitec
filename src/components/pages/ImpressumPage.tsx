import logoVaritec from '@/assets/logo_varitec.jpg'

export default function ImpressumPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <img src={logoVaritec} alt="Varitec Logo" className="mx-auto mb-6 w-32 h-auto rounded-lg shadow-md" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-6">
              Varitec Kfz-Werkstatt GmbH<br />
              Turnstraße 32/1<br />
              75228 Ispringen
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Vertreten durch</h3>
            <p className="mb-6">
              Geschäftsführer: Michael Schneider
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Kontakt</h3>
            <p className="mb-6">
              Telefon: +49 7231 8002999<br />
              E-Mail: info@varitec.de
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Registereintrag</h3>
            <p className="mb-6">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Umsatzsteuer-ID</h3>
            <p className="mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Berufsbezeichnung</h3>
            <p className="mb-6">
              Kfz-Meisterbetrieb<br />
              Handwerkskammer Musterstadt<br />
              Meisterbrief-Nr.: 123456
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Zuständige Aufsichtsbehörde</h3>
            <p className="mb-6">
              Handwerkskammer Pforzheim<br />
              Turnstraße 32/1<br />
              75228 Ispringen
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p className="mb-6">
              Michael Schneider<br />
              Turnstraße 32/1<br />
              75228 Ispringen
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">EU-Streitschlichtung</h3>
            <p className="mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://ec.europa.eu/consumers/odr
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
            <p className="mb-6">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Haftung für Inhalte</h3>
            <p className="mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Haftung für Links</h3>
            <p className="mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Urheberrecht</h3>
            <p className="mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
