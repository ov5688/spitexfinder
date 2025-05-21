import Link from "next/link"
import { ArrowLeft, Heart, CheckCircle, Users, Award, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UeberUnsPage() {
  // Team-Mitglieder
  const teamMembers = [
    {
      name: "Dr. Anna Müller",
      position: "Gründerin & Geschäftsführerin",
      bio: "Ehemalige Pflegefachfrau mit über 15 Jahren Erfahrung im Gesundheitswesen und Doktortitel in Pflegewissenschaften.",
      image: "/placeholder.svg?height=300&width=300&text=Anna+Müller",
    },
    {
      name: "Thomas Weber",
      position: "Leiter Partnerschaften",
      bio: "Verantwortlich für die Zusammenarbeit mit Spitex-Diensten im Kanton Zürich und Qualitätssicherung.",
      image: "/placeholder.svg?height=300&width=300&text=Thomas+Weber",
    },
    {
      name: "Sarah Keller",
      position: "Kundenberatung",
      bio: "Ausgebildete Pflegefachfrau mit Spezialisierung in Geriatrie, berät Patienten und Angehörige.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Keller",
    },
    {
      name: "Michael Brunner",
      position: "Technischer Leiter",
      bio: "Verantwortlich für die digitale Plattform und technische Infrastruktur von SpitexFinder.",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Brunner",
    },
  ]

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
            <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary text-primary">
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
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Über SpitexFinder</h1>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Wir verbinden Patienten mit den passenden Spitex-Diensten im Kanton Zürich und erleichtern den Zugang
                  zu professioneller Pflege zu Hause.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl object-cover">
                  <img
                    alt="Das SpitexFinder Team im Büro"
                    className="aspect-video object-cover w-full h-full"
                    src="/placeholder.svg?height=720&width=1280&text=SpitexFinder+Team"
                    width="1280"
                    height="720"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Unsere Mission</h2>
                <p className="text-gray-500">
                  SpitexFinder wurde 2020 mit einer klaren Mission gegründet: Den Zugang zu qualitativ hochwertiger
                  ambulanter Pflege für alle Menschen im Kanton Zürich zu erleichtern.
                </p>
                <p className="text-gray-500">
                  Wir glauben, dass jeder Mensch das Recht hat, so lange wie möglich selbstbestimmt in den eigenen vier
                  Wänden zu leben. Unsere Plattform hilft dabei, genau die Spitex-Dienste zu finden, die den
                  individuellen Bedürfnissen entsprechen.
                </p>
                <p className="text-gray-500">
                  Was als kleine Initiative begann, hat sich zu einer vertrauenswürdigen Vermittlungsplattform
                  entwickelt, die bereits tausenden Menschen geholfen hat, die richtige Pflege zu finden.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Unsere Werte</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Qualität</h3>
                      <p className="text-gray-500">
                        Wir arbeiten nur mit geprüften Spitex-Diensten zusammen, die unsere hohen Qualitätsstandards
                        erfüllen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5 text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Menschlichkeit</h3>
                      <p className="text-gray-500">
                        Wir sehen den Menschen hinter jeder Anfrage und bieten individuelle, einfühlsame Beratung.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-2 rounded-full mt-1">
                      <Award className="h-5 w-5 text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Transparenz</h3>
                      <p className="text-gray-500">
                        Wir kommunizieren offen und ehrlich über alle Aspekte unserer Vermittlung.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Schnelligkeit</h3>
                      <p className="text-gray-500">
                        Wir wissen, dass Zeit oft ein kritischer Faktor ist, und reagieren daher schnell auf alle
                        Anfragen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Unser Team</h2>
              <p className="max-w-[700px] text-gray-500">
                Lernen Sie die Menschen kennen, die SpitexFinder zu dem gemacht haben, was es heute ist.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sky-600 mb-2">{member.position}</p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Haben Sie Fragen?</h2>
              <p className="max-w-[700px] text-gray-500">
                Unser Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns oder nutzen Sie direkt unseren Service,
                um die passende Spitex zu finden.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Button asChild>
                  <Link href="/#finder-form">Spitex finden</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Zurück zur Startseite
                  </Link>
                </Button>
              </div>
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
