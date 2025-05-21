"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="grid gap-8 py-8 md:grid-cols-3">
      {[
        {
          step: 1,
          title: "Anfrage stellen",
          description:
            "Füllen Sie das Formular mit Ihren Bedürfnissen und Anforderungen aus. Je detaillierter Ihre Angaben, desto besser können wir Ihnen helfen.",
          showArrow: true,
        },
        {
          step: 2,
          title: "Wir finden passende Anbieter",
          description:
            "Unser Team sucht nach den am besten geeigneten Spitex-Diensten für Ihre individuellen Bedürfnisse in Ihrer Region im Kanton Zürich.",
          showArrow: true,
        },
        {
          step: 3,
          title: "Kontaktaufnahme",
          description:
            "Wir stellen den Kontakt her und die ausgewählten Spitex-Dienste melden sich bei Ihnen. Sie entscheiden, welcher Anbieter am besten zu Ihnen passt.",
          showArrow: false,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-900 transition-transform duration-300 hover:scale-105">
            <span className="text-xl font-bold">{item.step}</span>
          </div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-500">{item.description}</p>
          {item.showArrow && (
            <div className="hidden md:block mt-4">
              <ArrowRight className="h-6 w-6 text-sky-500" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
