import type { FinderFormData } from "../actions/finder-form-actions"

interface ConfirmationEmailProps {
  data: FinderFormData
}

export function ConfirmationEmail({ data }: ConfirmationEmailProps) {
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
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#f0f9ff", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <h1 style={{ color: "#0369a1", fontSize: "24px", marginBottom: "16px" }}>Bestätigung Ihrer Spitex-Anfrage</h1>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>Sehr geehrte(r) {data.name},</p>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          vielen Dank für Ihre Anfrage bei SpitexFinder. Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24
          Stunden bei Ihnen melden.
        </p>
      </div>

      <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", color: "#0369a1", marginBottom: "16px" }}>Ihre Anfrage im Überblick</h2>

        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "16px", color: "#64748b", marginBottom: "8px" }}>Persönliche Daten</h3>
          <p style={{ margin: "4px 0" }}>
            <strong>Name:</strong> {data.name}
          </p>
          <p style={{ margin: "4px 0" }}>
            <strong>E-Mail:</strong> {data.email}
          </p>
          <p style={{ margin: "4px 0" }}>
            <strong>Telefon:</strong> {data.phone}
          </p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "16px", color: "#64748b", marginBottom: "8px" }}>Adresse</h3>
          <p style={{ margin: "4px 0" }}>
            <strong>PLZ:</strong> {data.plz}
          </p>
          <p style={{ margin: "4px 0" }}>
            <strong>Ort:</strong> {data.city}
          </p>
          {data.district && (
            <p style={{ margin: "4px 0" }}>
              <strong>Stadtkreis:</strong> {data.district}
            </p>
          )}
        </div>

        <div>
          <h3 style={{ fontSize: "16px", color: "#64748b", marginBottom: "8px" }}>Angaben zur Pflege</h3>
          <p style={{ margin: "4px 0" }}>
            <strong>Für wen suchen Sie eine Spitex?</strong>{" "}
            {patientRelationMap[data.patientRelation] || data.patientRelation}
          </p>

          <div style={{ margin: "8px 0" }}>
            <strong>Gewünschte Pflegeleistungen:</strong>
            <ul style={{ paddingLeft: "20px", margin: "4px 0" }}>
              {data.careType.map((type) => (
                <li key={type}>{careTypeMap[type] || type}</li>
              ))}
            </ul>
          </div>

          <p style={{ margin: "4px 0" }}>
            <strong>Dringlichkeit:</strong> {urgencyMap[data.urgency] || data.urgency}
          </p>

          {data.additionalInfo && (
            <div style={{ margin: "8px 0" }}>
              <strong>Zusätzliche Informationen:</strong>
              <p style={{ margin: "4px 0", color: "#4b5563" }}>{data.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "18px", color: "#0369a1", marginBottom: "16px" }}>Was passiert als Nächstes?</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          Unser Team wird Ihre Anfrage prüfen und passende Spitex-Dienste in Ihrer Region kontaktieren. Diese werden
          sich dann direkt mit Ihnen in Verbindung setzen, um Ihre spezifischen Bedürfnisse zu besprechen.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", marginTop: "16px" }}>
          Falls Sie Fragen haben, können Sie uns jederzeit unter{" "}
          <a href="mailto:info@spitexfinder.ch" style={{ color: "#0369a1" }}>
            info@spitexfinder.ch
          </a>{" "}
          kontaktieren.
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          borderTop: "1px solid #e2e8f0",
          fontSize: "14px",
          color: "#64748b",
          textAlign: "center",
        }}
      >
        <p>© {new Date().getFullYear()} SpitexFinder. Alle Rechte vorbehalten.</p>
        <p style={{ marginTop: "8px" }}>SpitexFinder GmbH, Musterstrasse 123, 8000 Zürich, Schweiz</p>
      </div>
    </div>
  )
}
