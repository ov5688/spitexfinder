"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, CheckCircle, Heart, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FinderFormData } from "../actions/finder-form-actions"

export default function AnfrageBestaetigung() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FinderFormData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const dataProcessed = useRef(false)

  // Wir verwenden einen Ref, um zu verfolgen, ob wir die Daten bereits verarbeitet haben
  // und führen den useEffect nur einmal beim Mounten der Komponente aus
  useEffect(() => {
    // Nur ausführen, wenn die Daten noch nicht verarbeitet wurden
    if (!dataProcessed.current) {
      dataProcessed.current = true

      try {
        const dataParam = searchParams.get("data")
        if (dataParam) {
          const parsedData = JSON.parse(decodeURIComponent(dataParam)) as FinderFormData
          setFormData(parsedData)
        } else {
          setError("Keine Daten gefunden")
        }
      } catch (error) {
        console.error("Error parsing form data:", error)
        setError("Fehler beim Verarbeiten der Daten")
      } finally {
        setLoading(false)
      }
    }
  }, []) // Leere Abhängigkeitsliste, damit der Effect nur beim Mounten ausgeführt wird

  // Mapping für die Anzeige der Beziehung zum Patienten
  const patientRelationMap: Record<string, string> = {
    self: "Für mich selbst",
    parent: "Für Elternteil",
    partner: "Für Partner/in",
    child: "Für Kind",
    other: "Für andere Person",
  }

  // Mapping für die Anzeige der Pflegearten
  const careTypeMap: Record<string, string> = {
    medical: "Medizinische Pflege",
    basic: "Grundpflege",
    household: "Haushaltshilfe",
    meals: "Mahlzeitendienst",
    night: "Nachtdienst",
    palliative: "Palliative Care",
    dementia: "Demenzbetreuung",
    other: "Andere",
  }

  // Mapping für die Anzeige der Dringlichkeit
  const urgencyMap: Record<string, string> = {
    immediate: "Sofort (innerhalb von 1-3 Tagen)",
    soon: "Bald (innerhalb von 1-2 Wochen)",
    planning: "Planung für die Zukunft",
  }

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
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-pulse text-center">
                <p className="text-lg text-gray-500">Laden...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Fehler</h1>
              <p className="text-gray-500 mb-6">{error}</p>
              <Button asChild>
                <Link href="/#finder-form">Neue Anfrage stellen</Link>
              </Button>
            </div>
          ) : formData ? (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter mb-2">Vielen Dank für Ihre Anfrage!</h1>
                <p className="text-gray-500 text-lg">
                  Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
                <p className="text-gray-500 mt-2">
                  Eine Bestätigung wurde an <span className="font-medium">{formData.email}</span> gesendet.
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Ihre Anfrage im Überblick</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Persönliche Daten</h3>
                      <div className="mt-2 space-y-2">
                        <p>
                          <span className="font-medium">Name:</span> {formData.name}
                        </p>
                        <p>
                          <span className="font-medium">E-Mail:</span> {formData.email}
                        </p>
                        <p>
                          <span className="font-medium">Telefon:</span> {formData.phone}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Adresse</h3>
                      <div className="mt-2 space-y-2">
                        <p>
                          <span className="font-medium">PLZ:</span> {formData.plz}
                        </p>
                        <p>
                          <span className="font-medium">Ort:</span> {formData.city}
                        </p>
                        {formData.district && (
                          <p>
                            <span className="font-medium">Stadtkreis:</span> {formData.district}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Angaben zur Pflege</h3>
                    <div className="mt-2 space-y-2">
                      <p>
                        <span className="font-medium">Für wen suchen Sie eine Spitex?</span>{" "}
                        {patientRelationMap[formData.patientRelation] || formData.patientRelation}
                      </p>
                      <div>
                        <span className="font-medium">Gewünschte Pflegeleistungen:</span>
                        <ul className="list-disc pl-5 mt-1">
                          {formData.careType.map((type) => (
                            <li key={type}>{careTypeMap[type] || type}</li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        <span className="font-medium">Dringlichkeit:</span>{" "}
                        {urgencyMap[formData.urgency] || formData.urgency}
                      </p>
                      {formData.additionalInfo && (
                        <div>
                          <span className="font-medium">Zusätzliche Informationen:</span>
                          <p className="mt-1 text-gray-600">{formData.additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-sky-50 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Was passiert als Nächstes?</h3>
                    <p className="text-gray-600 mt-1">
                      Unser Team wird Ihre Anfrage prüfen und passende Spitex-Dienste in Ihrer Region kontaktieren.
                      Diese werden sich dann direkt mit Ihnen in Verbindung setzen, um Ihre spezifischen Bedürfnisse zu
                      besprechen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Zurück zur Startseite
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Keine Anfragedaten gefunden</h1>
              <p className="text-gray-500 mb-6">
                Es wurden keine Daten für Ihre Anfrage gefunden. Bitte versuchen Sie es erneut.
              </p>
              <Button asChild>
                <Link href="/#finder-form">Neue Anfrage stellen</Link>
              </Button>
            </div>
          )}
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
