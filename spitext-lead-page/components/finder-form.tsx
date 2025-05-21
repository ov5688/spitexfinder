"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { submitFinderForm } from "@/app/actions/finder-form-actions"

export default function FinderForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDistrictField, setShowDistrictField] = useState(false)
  const [city, setCity] = useState("")
  const [plz, setPlz] = useState("")
  const [selectedCareTypes, setSelectedCareTypes] = useState<string[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  // Initialer State für das Formular
  const initialState = { success: true, errors: {} }
  const [state, formAction] = useActionState(submitFinderForm, initialState)

  // Überwachen der Stadt und PLZ für die Anzeige des Stadtkreis-Feldes
  useEffect(() => {
    const cityValue = city.toLowerCase()
    const isZurichPlz = plz.startsWith("80")
    setShowDistrictField(cityValue === "zürich" || cityValue === "zurich" || isZurichPlz)
  }, [city, plz])

  // Überwachen des Zustands für Redirects
  useEffect(() => {
    if (state.success && state.redirect) {
      router.push(state.redirect)
    }
  }, [state, router])

  // Handler für Checkbox-Änderungen
  const handleCareTypeChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedCareTypes((prev) => [...prev, id])
    } else {
      setSelectedCareTypes((prev) => prev.filter((type) => type !== id))
    }
  }

  // Formular-Submission-Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Die tatsächliche Submission wird vom Browser und der Server Action übernommen
  }

  // Funktion zum Erstellen der FormData aus dem Formular
  const createFormAction = async (formData: FormData) => {
    return formAction(formData)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Ihre Spitex-Anfrage</h3>
      <form ref={formRef} action={createFormAction} onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name*</Label>
            <Input id="name" name="name" placeholder="Vor- und Nachname" required className="mt-1" />
            {state.errors?.name && (
              <p className="text-sm font-medium text-destructive mt-1">{state.errors.name._errors[0]}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">E-Mail*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ihre-email@beispiel.ch"
                required
                className="mt-1"
              />
              {state.errors?.email && (
                <p className="text-sm font-medium text-destructive mt-1">{state.errors.email._errors[0]}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Telefon*</Label>
              <Input id="phone" name="phone" placeholder="+41 44 123 45 67" required className="mt-1" />
              {state.errors?.phone && (
                <p className="text-sm font-medium text-destructive mt-1">{state.errors.phone._errors[0]}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="plz">PLZ*</Label>
              <Input
                id="plz"
                name="plz"
                placeholder="8001"
                required
                className="mt-1"
                value={plz}
                onChange={(e) => setPlz(e.target.value)}
              />
              {state.errors?.plz && (
                <p className="text-sm font-medium text-destructive mt-1">{state.errors.plz._errors[0]}</p>
              )}
            </div>
            <div>
              <Label htmlFor="city">Ort*</Label>
              <Input
                id="city"
                name="city"
                placeholder="Zürich"
                required
                className="mt-1"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {state.errors?.city && (
                <p className="text-sm font-medium text-destructive mt-1">{state.errors.city._errors[0]}</p>
              )}
            </div>
          </div>

          {showDistrictField && (
            <div>
              <Label htmlFor="district">Stadtkreis in Zürich</Label>
              <Select name="district">
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Bitte wählen Sie Ihren Stadtkreis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kreis1">Kreis 1 - Altstadt</SelectItem>
                  <SelectItem value="kreis2">Kreis 2 - Enge, Wollishofen, Leimbach</SelectItem>
                  <SelectItem value="kreis3">Kreis 3 - Wiedikon</SelectItem>
                  <SelectItem value="kreis4">Kreis 4 - Aussersihl</SelectItem>
                  <SelectItem value="kreis5">Kreis 5 - Industriequartier</SelectItem>
                  <SelectItem value="kreis6">Kreis 6 - Unterstrass, Oberstrass</SelectItem>
                  <SelectItem value="kreis7">Kreis 7 - Fluntern, Hottingen, Hirslanden, Witikon</SelectItem>
                  <SelectItem value="kreis8">Kreis 8 - Riesbach</SelectItem>
                  <SelectItem value="kreis9">Kreis 9 - Altstetten, Albisrieden</SelectItem>
                  <SelectItem value="kreis10">Kreis 10 - Höngg, Wipkingen</SelectItem>
                  <SelectItem value="kreis11">Kreis 11 - Affoltern, Oerlikon, Seebach</SelectItem>
                  <SelectItem value="kreis12">Kreis 12 - Schwamendingen</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-1">
                Hilft uns, einen Spitex-Dienst in Ihrer unmittelbaren Nähe zu finden.
              </p>
            </div>
          )}

          <div>
            <Label htmlFor="patientRelation">Für wen suchen Sie eine Spitex?*</Label>
            <Select name="patientRelation" required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Bitte wählen Sie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self">Für mich selbst</SelectItem>
                <SelectItem value="parent">Für Elternteil</SelectItem>
                <SelectItem value="partner">Für Partner/in</SelectItem>
                <SelectItem value="child">Für Kind</SelectItem>
                <SelectItem value="other">Für andere Person</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.patientRelation && (
              <p className="text-sm font-medium text-destructive mt-1">{state.errors.patientRelation._errors[0]}</p>
            )}
          </div>

          <div>
            <div className="mb-2">
              <Label>Welche Art der Pflege wird benötigt?*</Label>
              <p className="text-sm text-muted-foreground">Wählen Sie alle zutreffenden Optionen aus.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "medical", label: "Medizinische Pflege" },
                { id: "basic", label: "Grundpflege" },
                { id: "household", label: "Haushaltshilfe" },
                { id: "meals", label: "Mahlzeitendienst" },
                { id: "night", label: "Nachtdienst" },
                { id: "palliative", label: "Palliative Care" },
                { id: "dementia", label: "Demenzbetreuung" },
                { id: "other", label: "Andere" },
              ].map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`careType-${item.id}`}
                    name="careType"
                    value={item.id}
                    checked={selectedCareTypes.includes(item.id)}
                    onCheckedChange={(checked) => handleCareTypeChange(item.id, checked === true)}
                  />
                  <Label htmlFor={`careType-${item.id}`} className="font-normal">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
            {state.errors?.careType && (
              <p className="text-sm font-medium text-destructive mt-1">{state.errors.careType._errors[0]}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>Wie dringend benötigen Sie die Spitex?*</Label>
            <RadioGroup name="urgency" className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="immediate" id="urgency-immediate" />
                <Label htmlFor="urgency-immediate" className="font-normal">
                  Sofort (innerhalb von 1-3 Tagen)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="soon" id="urgency-soon" />
                <Label htmlFor="urgency-soon" className="font-normal">
                  Bald (innerhalb von 1-2 Wochen)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="planning" id="urgency-planning" />
                <Label htmlFor="urgency-planning" className="font-normal">
                  Planung für die Zukunft
                </Label>
              </div>
            </RadioGroup>
            {state.errors?.urgency && (
              <p className="text-sm font-medium text-destructive mt-1">{state.errors.urgency._errors[0]}</p>
            )}
          </div>

          <div>
            <Label htmlFor="additionalInfo">Zusätzliche Informationen</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Weitere Details zur benötigten Pflege oder besondere Anforderungen..."
              className="min-h-[100px] mt-1"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Optionale Angaben, die uns bei der Vermittlung helfen können.
            </p>
          </div>

          <div className="flex items-start space-x-2 mt-4">
            <Checkbox id="consent" name="consent" />
            <div>
              <Label htmlFor="consent" className="font-normal">
                Ich stimme zu, dass meine Daten gemäß der{" "}
                <Link href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                verarbeitet werden.*
              </Label>
              {state.errors?.consent && (
                <p className="text-sm font-medium text-destructive mt-1">{state.errors.consent._errors[0]}</p>
              )}
            </div>
          </div>
        </div>

        {state.errors?._form && (
          <div className="bg-destructive/10 p-3 rounded-md">
            <p className="text-sm font-medium text-destructive">{state.errors._form._errors[0]}</p>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Spitex-Anfrage senden"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          * Pflichtfelder. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
      </form>
    </div>
  )
}
