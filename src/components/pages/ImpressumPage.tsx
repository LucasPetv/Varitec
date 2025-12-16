import logoVaritec from '@/assets/logo_varitec.jpg'

export default function ImpressumPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Varitec Kfz-Werkstatt GmbH</h2>
            <p className="mb-6">
              Turnstraße 32/1<br />
              75228 Ispringen
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Vertreten durch</h3>
            <p className="mb-6">
              Geschäftsführer: David Petervari
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Kontakt</h3>
            <p className="mb-6">
              Telefon: +49 7231 8002999<br />
              E-Mail: info@varitec.de
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Registereintrag</h3>
            <p className="mb-6">
              Registergericht: Amtsgericht Mannheim<br />
              Registernummer: HRB706613
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Umsatzsteuer-ID</h3>
            <p className="mb-6">
              DE264848967
            </p>

            
            <h3 className="text-xl font-bold mb-3 mt-8">EU-Streitschlichtung</h3>
            <p className="mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://ec.europa.eu/consumers/odr
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Haftungsausschluss für fremde Links</h3>
            <p className="mb-6">
              Wir verweisen auf unseren Seiten mit Links zu anderen Seiten im Internet. 
              Wir erklären ausdrücklich, keinerlei Einfluss auf die Gestaltung und die Inhalte der verlinkten Seiten zu haben. 
              Deshalb distanzieren wir uns hiermit von allen Inhalten aller verlinkten Seiten Dritter auf dieser Homepage und machen uns diese Inhalte nicht zu eigen. 
              Für die Inhalte der verlinkten Seiten sind allein die jeweiligen Anbieter verantwortlich.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
