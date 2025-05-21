import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 px-6 border-b sticky top-0 z-10">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-600" />
            <Link href="/" className="text-2xl font-bold">
              SpitexFinder
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Startseite
            </Link>
            <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary">
              Über uns
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/karriere" className="text-sm font-medium hover:text-primary">
              Karriere
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#finder-form">Spitex finden</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tighter mb-6">Datenschutzerklärung</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              SpitexFinder GmbH
              <br />
              Musterstrasse 123
              <br />
              8000 Zürich
              <br />
              Schweiz
              <br />
              <br />
              E-Mail: info@spitexfinder.ch
              <br />
              Telefon: +41 44 123 45 67
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Anfrage freiwillig mitteilen.
              Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von
              Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfragen und zur Vermittlung passender Spitex-Dienste.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Weitergabe von Daten</h2>
            <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
              <li>die Weitergabe zur Vermittlung von Spitex-Diensten gemäß Ihrer Anfrage erforderlich ist,</li>
              <li>eine gesetzliche Verpflichtung zur Weitergabe besteht.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
              Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der
              Regel handelt es sich dabei um eine 256-Bit Verschlüsselung. Ob eine einzelne Seite unseres
              Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des
              Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die es ermöglichen, auf dem Endgerät des
              Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern. Sie dienen zum einem der
              Benutzerfreundlichkeit von Webseiten (z.B. Speicherung von Logindaten). Zum anderen dienen sie, um
              statistische Daten der Webseitennutzung zu erfassen und sie zwecks Verbesserung des Angebotes analysieren
              zu können. Die Nutzer können auf den Einsatz der Cookies Einfluss nehmen. Die meisten Browser verfügen
              über eine Option, mit der das Speichern von Cookies eingeschränkt oder komplett verhindert wird.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Auskunft, Löschung, Sperrung</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
              deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
              Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
              können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Änderung unserer Datenschutzbestimmungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
              z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Fragen an den Datenschutzbeauftragten</h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an datenschutz@spitexfinder.ch.
            </p>

            <p className="mt-8 text-sm text-gray-500">Stand: Mai 2023</p>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} SpitexFinder. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/" className="text-slate-300 hover:text-sky-400">
              Startseite
            </Link>
            <Link href="/datenschutz" className="text-slate-300 hover:text-sky-400">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-slate-300 hover:text-sky-400">
              AGB
            </Link>
            <Link href="/impressum" className="text-slate-300 hover:text-sky-400">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
