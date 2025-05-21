"use server"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().min(5, {
    message: "Telefonnummer muss mindestens 5 Zeichen lang sein.",
  }),
  plz: z.string().min(4, {
    message: "Bitte geben Sie eine gültige Postleitzahl ein.",
  }),
  city: z.string().min(2, {
    message: "Bitte geben Sie einen gültigen Ort ein.",
  }),
  district: z.string().optional(),
  patientRelation: z.string({
    required_error: "Bitte wählen Sie eine Option aus.",
  }),
  careType: z.array(z.string()).min(1, {
    message: "Bitte wählen Sie mindestens eine Pflegeart aus.",
  }),
  urgency: z.string({
    required_error: "Bitte wählen Sie die Dringlichkeit aus.",
  }),
  additionalInfo: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Sie müssen der Datenschutzerklärung zustimmen." }),
  }),
})

export type FinderFormData = z.infer<typeof formSchema>

// Aktualisierte Server Action, die entweder einen Wert zurückgibt ODER einen Redirect ausführt
export async function submitFinderForm(prevState: any, formData: FormData) {
  // Überprüfen, ob formData ein FormData-Objekt ist
  if (!(formData instanceof FormData)) {
    console.error("Expected FormData but got:", typeof formData)
    return { success: false, errors: { _form: { _errors: ["Ungültiges Formularformat"] } } }
  }

  // Extrahieren der Daten aus dem FormData-Objekt
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    plz: formData.get("plz"),
    city: formData.get("city"),
    district: formData.get("district") || "",
    patientRelation: formData.get("patientRelation"),
    careType: formData.getAll("careType"),
    urgency: formData.get("urgency"),
    additionalInfo: formData.get("additionalInfo") || "",
    consent: formData.get("consent") === "on",
  }

  // Validierung der Daten
  const validationResult = formSchema.safeParse(rawData)

  if (!validationResult.success) {
    // Bei Validierungsfehlern zurück zum Formular mit Fehlermeldungen
    console.error("Validation errors:", validationResult.error.format())
    return { success: false, errors: validationResult.error.format() }
  }

  const data = validationResult.data

  try {
    // In einer realen Anwendung würden wir hier die Daten in einer Datenbank speichern
    // und eine E-Mail an den Antragsteller senden

    // Simulieren einer Verarbeitungszeit
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // E-Mail-Versand simulieren (in einer realen Anwendung würde hier Nodemailer o.ä. verwendet)
    console.log("Sending confirmation email to:", data.email)

    // Erfolgreichen Status zurückgeben mit den Daten
    // Wir geben die Daten zurück, anstatt einen Redirect auszuführen
    return {
      success: true,
      data: data,
      redirect: `/anfrage-bestaetigung?data=${encodeURIComponent(JSON.stringify(data))}`,
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return {
      success: false,
      errors: { _form: { _errors: ["Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."] } },
    }
  }
}
