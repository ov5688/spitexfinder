import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AGBPage() {
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
          <h1 className="text-3xl font-bold tracking-tighter mb-6">Allgemeine Geschäftsbedingungen</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen der
              SpitexFinder GmbH und den Nutzern unserer Vermittlungsplattform.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Geltungsbereich</h2>
            <p>
              Diese AGB gelten für sämtliche Dienstleistungen, die von der SpitexFinder GmbH (nachfolgend
              "SpitexFinder") angeboten werden. Mit der Nutzung unserer Dienstleistungen akzeptieren Sie diese AGB.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Leistungsbeschreibung</h2>
            <p>
              SpitexFinder ist eine Vermittlungsplattform, die Patienten und Angehörige mit passenden Spitex-Diensten im
              Kanton Zürich verbindet. Wir vermitteln den Kontakt zwischen Patienten und Spitex-Diensten, sind jedoch
              nicht selbst Erbringer von Pflegeleistungen.
            </p>
            <p>Unsere Dienstleistung umfasst:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Die Entgegennahme von Anfragen von Patienten oder deren Angehörigen</li>
              <li>Die Suche nach geeigneten Spitex-Diensten basierend auf den angegebenen Bedürfnissen</li>
              <li>Die Vermittlung des Kontakts zwischen Patienten und Spitex-Diensten</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Vertragsschluss</h2>
            <p>
              Mit dem Absenden des Anfrageformulars auf unserer Website erteilen Sie uns den Auftrag, für Sie passende
              Spitex-Dienste zu suchen und den Kontakt zu vermitteln. Ein Vertrag über die Erbringung von
              Pflegeleistungen kommt ausschliesslich zwischen Ihnen und dem jeweiligen Spitex-Dienst zustande.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Kosten</h2>
            <p>
              Unsere Vermittlungsdienstleistung ist für Patienten und Angehörige kostenlos. Die Kosten für die
              Vermittlung werden von den Spitex-Diensten getragen, mit denen wir zusammenarbeiten.
            </p>
            <p>
              Die Kosten für die Pflegeleistungen selbst werden vom jeweiligen Spitex-Dienst festgelegt und direkt mit
              Ihnen abgerechnet. Wir übernehmen keine Haftung für die Preisgestaltung der Spitex-Dienste.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Datenschutz</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Informationen zur Erhebung, Verarbeitung und Nutzung
              Ihrer personenbezogenen Daten finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Haftung</h2>
            <p>
              SpitexFinder übernimmt keine Haftung für die Qualität der von den vermittelten Spitex-Diensten erbrachten
              Leistungen. Wir bemühen uns, ausschliesslich qualifizierte und zuverlässige Spitex-Dienste zu vermitteln,
              können jedoch keine Garantie für deren Leistungen übernehmen.
            </p>
            <p>
              Für Schäden, die durch die Inanspruchnahme von Pflegeleistungen entstehen, haftet ausschliesslich der
              jeweilige Spitex-Dienst.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Änderungen der AGB</h2>
            <p>
              Wir behalten uns vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Version wird auf unserer Website
              veröffentlicht. Bei wesentlichen Änderungen werden wir Sie informieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Anwendbares Recht und Gerichtsstand</h2>
            <p>Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz.</p>

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
