"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "Wie funktioniert SpitexFinder?",
      answer:
        "SpitexFinder ist eine Vermittlungsplattform, die Patienten mit passenden Spitex-Diensten im Kanton Zürich verbindet. Sie füllen ein Formular mit Ihren Bedürfnissen aus, und wir suchen nach geeigneten Anbietern. Diese nehmen dann direkt Kontakt mit Ihnen auf, sodass Sie den besten Dienst für Ihre Bedürfnisse auswählen können.",
    },
    {
      question: "Deckt SpitexFinder alle Stadtkreise von Zürich ab?",
      answer:
        "Ja, wir decken alle 12 Stadtkreise von Zürich ab und haben Partner in jedem Bezirk. Wenn Sie in der Stadt Zürich wohnen, können Sie in unserem Formular Ihren genauen Stadtkreis angeben, damit wir einen Spitex-Dienst in Ihrer unmittelbaren Nähe finden können.",
    },
    {
      question: "Ist der Service von SpitexFinder kostenlos?",
      answer:
        "Ja, für Patienten und Angehörige ist unser Vermittlungsservice komplett kostenlos. Wir möchten Ihnen helfen, die bestmögliche Pflege zu finden, ohne zusätzliche Kosten für Sie zu verursachen.",
    },
    {
      question: "Wie schnell erhalte ich Angebote von Spitex-Diensten?",
      answer:
        "In der Regel melden wir uns innerhalb von 24 Stunden bei Ihnen. Bei dringenden Anfragen versuchen wir, noch schneller zu reagieren. Die Kontaktaufnahme durch die Spitex-Dienste erfolgt meist innerhalb von 1-2 Werktagen.",
    },
    {
      question: "In welchen Regionen des Kantons Zürich ist SpitexFinder tätig?",
      answer:
        "SpitexFinder ist im gesamten Kanton Zürich tätig. Wir können in allen Gemeinden und Städten des Kantons eine passende Lösung für Sie finden.",
    },
    {
      question: "Welche Arten von Pflege können vermittelt werden?",
      answer:
        "Wir vermitteln alle Arten von ambulanten Pflegedienstleistungen, darunter medizinische Pflege, Grundpflege, Haushaltshilfe, Mahlzeitendienst, Nachtdienst, Palliative Care und spezialisierte Betreuung wie z.B. für Demenzpatienten.",
    },
    {
      question: "Wie werden die Spitex-Dienste ausgewählt?",
      answer:
        "Wir wählen die Spitex-Dienste basierend auf Ihren individuellen Bedürfnissen, Ihrem Standort und der Verfügbarkeit der Dienste aus. Dabei achten wir besonders auf Qualität und Zuverlässigkeit.",
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-gray-50">{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}
