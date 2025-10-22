import logoVaritec from '@/assets/logo_varitec.jpg'

export default function DatenschutzPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <img src={logoVaritec} alt="Varitec Logo" className="mx-auto mb-6 w-32 h-auto rounded-lg shadow-md" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Datenschutz
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Datenerfassung auf dieser Website</h3>
            <h4 className="text-lg font-semibold mb-2 mt-4">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p className="mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h4 className="text-lg font-semibold mb-2 mt-4">Wie erfassen wir Ihre Daten?</h4>
            <p className="mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular oder bei der 
              Terminbuchung eingeben. Andere Daten werden automatisch beim Besuch der Website durch 
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h4 className="text-lg font-semibold mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h4>
            <p className="mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. 
              Daten aus dem Kontaktformular und der Terminbuchung werden ausschließlich zur Bearbeitung 
              Ihrer Anfrage bzw. Ihres Termins verwendet.
            </p>

            <h4 className="text-lg font-semibold mb-2 mt-4">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <p className="mb-6">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
              die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren 
              Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen 
              Adresse an uns wenden.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-12">2. Hosting</h2>
            <p className="mb-6">
              Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. 
              Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern 
              des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, 
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe 
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-12">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Datenschutz</h3>
            <p className="mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-6">
              Varitec Kfz-Werkstatt GmbH<br />
              Turnstraße 32/1<br />
              75228 Ispringen<br />
              Telefon: +49 7231 8002999<br />
              E-Mail: info@varitec.de
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Speicherdauer</h3>
            <p className="mb-6">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder 
              eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern 
              wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen 
              Daten haben.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-12">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Kontaktformular</h3>
            <p className="mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
              wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Online-Terminbuchung</h3>
            <p className="mb-6">
              Bei der Buchung eines Termins über unsere Website erfassen wir die von Ihnen eingegebenen 
              Daten (Name, E-Mail, Telefonnummer, Fahrzeugdaten, Wunschtermin). Diese Daten verwenden 
              wir ausschließlich zur Bearbeitung und Bestätigung Ihres Termins sowie zur Kontaktaufnahme 
              bezüglich Ihres Werkstatttermins.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Cookies</h3>
            <p className="mb-6">
              Unsere Website verwendet grundlegende Cookies, die für die Funktionalität der Website 
              erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und dienen 
              lediglich der technischen Bereitstellung unserer Dienste.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-12">5. Ihre Rechte</h2>
            <p className="mb-6">
              Sie haben das Recht:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
              <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-12">6. Kontakt</h2>
            <p className="mb-6">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
            </p>
            <p className="mb-6">
              E-Mail: datenschutz@varitec.de<br />
              Telefon: +49 7231 8002999
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
