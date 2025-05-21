import Link from "next/link"
import { ArrowLeft, Calendar, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  // Beispiel-Blog-Einträge
  const blogPosts = [
    {
      id: 1,
      title: "Die Vorteile der ambulanten Pflege zu Hause",
      excerpt:
        "Erfahren Sie, warum immer mehr Menschen die ambulante Pflege zu Hause einer stationären Betreuung vorziehen und welche Vorteile dies bietet.",
      date: "15. Mai 2023",
      author: "Dr. Maria Schmidt",
      category: "Pflegetipps",
      image: "/placeholder.svg?height=200&width=400&text=Ambulante+Pflege",
    },
    {
      id: 2,
      title: "Spitex-Leistungen: Was wird von der Krankenkasse übernommen?",
      excerpt:
        "Ein Überblick über die Spitex-Leistungen, die von den Krankenkassen übernommen werden, und welche Voraussetzungen dafür erfüllt sein müssen.",
      date: "3. April 2023",
      author: "Thomas Weber",
      category: "Finanzierung",
      image: "/placeholder.svg?height=200&width=400&text=Spitex+Leistungen",
    },
    {
      id: 3,
      title: "Demenzbetreuung zu Hause: Tipps für Angehörige",
      excerpt:
        "Praktische Ratschläge und Unterstützungsmöglichkeiten für Angehörige, die Menschen mit Demenz zu Hause betreuen.",
      date: "18. März 2023",
      author: "Lisa Müller",
      category: "Demenzpflege",
      image: "/placeholder.svg?height=200&width=400&text=Demenzbetreuung",
    },
    {
      id: 4,
      title: "Digitalisierung in der Spitex: Chancen und Herausforderungen",
      excerpt:
        "Wie digitale Technologien die ambulante Pflege verändern und welche Vorteile sie für Patienten und Pflegepersonal bieten können.",
      date: "25. Februar 2023",
      author: "Prof. Dr. Michael Keller",
      category: "Innovation",
      image: "/placeholder.svg?height=200&width=400&text=Digitalisierung+Spitex",
    },
    {
      id: 5,
      title: "Palliative Care zu Hause: Würdevoll begleiten",
      excerpt:
        "Informationen zur palliativen Versorgung zu Hause und wie Spitex-Dienste Patienten und Angehörige in dieser schweren Zeit unterstützen können.",
      date: "10. Januar 2023",
      author: "Dr. Sarah Brunner",
      category: "Palliative Care",
      image: "/placeholder.svg?height=200&width=400&text=Palliative+Care",
    },
    {
      id: 6,
      title: "Ernährung im Alter: Tipps für eine ausgewogene Mahlzeitenplanung",
      excerpt:
        "Warum eine ausgewogene Ernährung im Alter besonders wichtig ist und wie Spitex-Dienste bei der Mahlzeitenplanung helfen können.",
      date: "5. Dezember 2022",
      author: "Anna Schmid",
      category: "Ernährung",
      image: "/placeholder.svg?height=200&width=400&text=Ernaehrung+Alter",
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
            <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary">
              Über uns
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary text-primary">
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Blog: Wissenswertes rund um Spitex
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Informative Artikel, Tipps und Neuigkeiten aus der Welt der ambulanten Pflege im Kanton Zürich
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                      <span className="ml-auto bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-gray-500">Von {post.author}</div>
                    <Button variant="ghost" size="sm">
                      Weiterlesen
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline">
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
