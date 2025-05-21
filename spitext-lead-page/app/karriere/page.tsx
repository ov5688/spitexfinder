import Link from "next/link"
import { ArrowLeft, Heart, Briefcase, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function KarrierePage() {
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
            <Link href="/karriere" className="text-sm font-medium hover:text-primary text-primary">
              Karriere
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#finder-form">Spitex finden</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Karriere bei SpitexFinder
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Werden Sie Teil unseres Teams und helfen Sie uns, Menschen im Kanton Zürich mit der passenden Pflege
                  zu verbinden.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <a href="#jobs">Offene Stellen ansehen</a>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl object-cover">
                  <img
                    alt="Das SpitexFinder Team bei der Arbeit"
                    className="aspect-video object-cover w-full h-full"
                    src="/placeholder.svg?height=720&width=1280&text=Karriere+bei+SpitexFinder"
                    width="1280"
                    height="720"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Warum SpitexFinder?</h2>
              <p className="max-w-[700px] text-gray-500">
                Bei SpitexFinder arbeiten Sie in einem dynamischen Umfeld mit sinnstiftender Tätigkeit und vielen
                Vorteilen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-sky-700" />
                  </div>
                  <CardTitle>Sinnvolle Arbeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Bei uns leisten Sie einen wichtigen Beitrag zur Verbesserung der Pflegesituation im Kanton Zürich
                    und helfen Menschen, länger selbstbestimmt zu leben.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-sky-700" />
                  </div>
                  <CardTitle>Flexible Arbeitszeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Wir bieten flexible Arbeitszeitmodelle und die Möglichkeit, teilweise im Homeoffice zu arbeiten, um
                    Beruf und Privatleben optimal zu vereinbaren.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-sky-700" />
                  </div>
                  <CardTitle>Entwicklungsmöglichkeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Wir fördern Ihre persönliche und berufliche Weiterentwicklung durch regelmäßige Weiterbildungen und
                    interne Aufstiegsmöglichkeiten.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-16 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Offene Stellen</h2>
              <p className="max-w-[700px] text-gray-500">
                Entdecken Sie unsere aktuellen Stellenangebote und werden Sie Teil unseres Teams.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Briefcase className="h-8 w-8 text-sky-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Aktuell keine offenen Stellen</h3>
              <p className="text-gray-500 mb-6">
                Zurzeit haben wir keine freien Stellen zu besetzen. Wir freuen uns jedoch über Ihre Initiativbewerbung,
                wenn Sie Teil unseres Teams werden möchten.
              </p>
              <p className="text-gray-500 mb-8">
                Sie können uns Ihre Unterlagen gerne an <span className="text-sky-600">karriere@spitexfinder.ch</span>{" "}
                senden. Wir melden uns bei Ihnen, sobald eine passende Position verfügbar ist.
              </p>
              <Button variant="outline">Initiativbewerbung senden</Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Unser Bewerbungsprozess</h2>
              <p className="max-w-[700px] text-gray-500">So läuft eine Bewerbung bei SpitexFinder ab:</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Bewerbung</h3>
                <p className="text-gray-500">
                  Senden Sie uns Ihre vollständigen Bewerbungsunterlagen per E-Mail an karriere@spitexfinder.ch
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Erstes Gespräch</h3>
                <p className="text-gray-500">
                  Bei gegenseitigem Interesse laden wir Sie zu einem ersten Kennenlerngespräch ein.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Fachgespräch</h3>
                <p className="text-gray-500">
                  Im zweiten Gespräch geht es um fachliche Details und das Kennenlernen des Teams.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Angebot</h3>
                <p className="text-gray-500">Bei positiver Entscheidung erhalten Sie von uns ein Vertragsangebot.</p>
              </div>
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
        </section>
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
