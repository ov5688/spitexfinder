import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
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
          <h1 className="text-3xl font-bold tracking-tighter mb-6">Impressum</h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäss Obligationenrecht</h2>
            <p>
              <strong>Firma:</strong> SpitexFinder GmbH
              <br />
              <strong>Adresse:</strong> Musterstrasse 123
              <br />
              <strong>PLZ/Ort:</strong> 8000 Zürich
              <br />
              <strong>Land:</strong> Schweiz
              <br />
              <br />
              <strong>Telefon:</strong> +41 44 123 45 67
              <br />
              <strong>E-Mail:</strong> info@spitexfinder.ch
              <br />
              <strong>Website:</strong> www.spitexfinder.ch
              <br />
              <br />
              <strong>UID:</strong> CHE-123.456.789
              <br />
              <strong>Handelsregisternummer:</strong> CH-123.4.567.890-1
              <br />
              <strong>Mehrwertsteuernummer:</strong> CHE-123.456.789 MWST
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Vertretungsberechtigte Person</h2>
            <p>Dr. Anna Müller, Geschäftsführerin</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
              Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p>
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
              oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung
              oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p>
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
              gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
              Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
              jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website
              gehören ausschliesslich der Firma SpitexFinder GmbH oder den speziell genannten Rechtsinhabern. Für die
              Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus
              einzuholen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Datenschutz</h2>
            <p>
              Basierend auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen
              des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
              Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten
              werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
            </p>
            <p>
              Weitere Informationen zum Datenschutz finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
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
