"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Erweiterte Liste mit 20 Testimonials
const allTestimonials = [
  {
    name: "Maria Müller",
    location: "Zürich",
    text: "SpitexFinder hat mir in einer schwierigen Zeit sehr geholfen. Innerhalb kürzester Zeit hatte ich mehrere passende Angebote.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "blue",
  },
  {
    name: "Thomas Huber",
    location: "Winterthur",
    text: "Nach dem Krankenhausaufenthalt meines Vaters brauchten wir schnell professionelle Hilfe. Sehr empfehlenswert!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "green",
  },
  {
    name: "Anna Schmid",
    location: "Uster",
    text: "Die Vermittlung war unkompliziert und schnell. Die vermittelte Spitex ist genau das, was wir gesucht haben.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "purple",
  },
  {
    name: "Peter Keller",
    location: "Dübendorf",
    text: "Bereits am nächsten Tag nach meiner Anfrage hatte ich drei passende Angebote. Perfekt für unsere Bedürfnisse.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "amber",
  },
  {
    name: "Sandra Weber",
    location: "Kloten",
    text: "SpitexFinder hat uns den Prozess erheblich erleichtert und uns geholfen, einen zuverlässigen Dienst zu finden.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "rose",
  },
  {
    name: "Markus Bauer",
    location: "Wetzikon",
    text: "Die Beratung war kompetent und einfühlsam. Wir haben einen qualitativ hochwertigen Dienst gefunden.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "teal",
  },
  {
    name: "Julia Fischer",
    location: "Dietikon",
    text: "SpitexFinder hat uns nicht nur einen passenden Dienst vermittelt, sondern auch bei allen Formalitäten unterstützt.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "blue",
  },
  {
    name: "Michael Schneider",
    location: "Bülach",
    text: "Die vermittelte Spitex kümmert sich hervorragend um meine Mutter. Der gesamte Prozess war unkompliziert.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "green",
  },
  {
    name: "Laura Wagner",
    location: "Adliswil",
    text: "Die Plattform ist benutzerfreundlich und die Beratung kompetent. Innerhalb kürzester Zeit hatten wir die perfekte Lösung.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "purple",
  },
  {
    name: "Stefan Meier",
    location: "Horgen",
    text: "SpitexFinder hat uns verschiedene Optionen aufgezeigt und uns bei der Entscheidungsfindung unterstützt.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "amber",
  },
  {
    name: "Nicole Brunner",
    location: "Regensdorf",
    text: "Die Spitex, die uns vermittelt wurde, ist ein echter Glücksfall. Das Personal ist freundlich und kompetent.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "rose",
  },
  {
    name: "Daniel Koch",
    location: "Schlieren",
    text: "SpitexFinder hat mir geholfen, einen Dienst zu finden, der genau auf meine Bedürfnisse zugeschnitten ist.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "teal",
  },
  {
    name: "Claudia Hofmann",
    location: "Wädenswil",
    text: "Besonders gut fand ich, dass wir mehrere Angebote erhielten und vergleichen konnten, bevor wir uns entschieden haben.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "blue",
  },
  {
    name: "Andreas Lehmann",
    location: "Urdorf",
    text: "Die vermittelte Spitex ist zuverlässig und das Personal sehr einfühlsam im Umgang mit meiner dementen Mutter.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "green",
  },
  {
    name: "Sabine Zimmermann",
    location: "Opfikon",
    text: "Der Service ist kostenlos und die Beratung sehr kompetent. Wir haben schnell eine passende Spitex gefunden.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "purple",
  },
  {
    name: "Reto Huber",
    location: "Illnau-Effretikon",
    text: "Die Kommunikation war von Anfang an klar und transparent. Wir konnten eine fundierte Entscheidung treffen.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "amber",
  },
  {
    name: "Monika Frei",
    location: "Volketswil",
    text: "SpitexFinder hat uns innerhalb eines Tages mehrere passende Angebote vermittelt. Wir sind sehr zufrieden.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "rose",
  },
  {
    name: "Christian Maier",
    location: "Thalwil",
    text: "Die Beratung war sehr individuell und auf unsere spezifischen Bedürfnisse zugeschnitten.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
    color: "teal",
  },
  {
    name: "Petra Schmid",
    location: "Wallisellen",
    text: "SpitexFinder hat uns auch bei Fragen zur Finanzierung und Abrechnung mit der Krankenkasse beraten.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "blue",
  },
  {
    name: "Martin Berger",
    location: "Stäfa",
    text: "Wir haben schnell eine passende Spitex gefunden, die sich hervorragend um meinen Vater kümmert.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "green",
  },
]

// Farbzuordnungen für die verschiedenen Kategorien
const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    accent: "bg-blue-100",
    text: "text-blue-800",
    hover: "group-hover:bg-blue-100",
    stars: "text-blue-500 fill-blue-500",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "bg-green-100",
    text: "text-green-800",
    hover: "group-hover:bg-green-100",
    stars: "text-green-500 fill-green-500",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "bg-purple-100",
    text: "text-purple-800",
    hover: "group-hover:bg-purple-100",
    stars: "text-purple-500 fill-purple-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "bg-amber-100",
    text: "text-amber-800",
    hover: "group-hover:bg-amber-100",
    stars: "text-amber-500 fill-amber-500",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    accent: "bg-rose-100",
    text: "text-rose-800",
    hover: "group-hover:bg-rose-100",
    stars: "text-rose-500 fill-rose-500",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    accent: "bg-teal-100",
    text: "text-teal-800",
    hover: "group-hover:bg-teal-100",
    stars: "text-teal-500 fill-teal-500",
  },
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const testimonialsPerPage = 6 // Mehr Testimonials pro Seite
  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage)

  // Automatische Rotation
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 5000) // Alle 5 Sekunden rotieren

    return () => clearInterval(interval)
  }, [autoplay, totalPages])

  // Navigation
  const goToNext = useCallback(() => {
    setAutoplay(false) // Autoplay stoppen, wenn manuell navigiert wird
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const goToPrev = useCallback(() => {
    setAutoplay(false) // Autoplay stoppen, wenn manuell navigiert wird
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Aktuelle Testimonials berechnen
  const currentTestimonials = allTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  return (
    <div className="relative max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
          onClick={goToPrev}
          aria-label="Vorherige Testimonials"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
          onClick={goToNext}
          aria-label="Nächste Testimonials"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {currentTestimonials.map((testimonial, index) => {
              const colors = colorMap[testimonial.color]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className={`${colors.bg} rounded-lg p-3 shadow-sm h-full transition-all duration-300 hover:shadow-md ${colors.hover} border ${colors.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={`/images/testimonials/${testimonial.name.toLowerCase().replace(" ", "-")}.jpg`}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                          width="32"
                          height="32"
                          onError={(e) => {
                            // Fallback auf Initialen, wenn das Bild nicht geladen werden kann
                            e.currentTarget.style.display = "none"
                            e.currentTarget.parentElement.classList.add(colors.accent)
                            e.currentTarget.parentElement.innerHTML = `<span class="font-bold text-sm ${colors.text}">${testimonial.name.charAt(0)}</span>`
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-sm truncate">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < testimonial.rating ? colors.stars : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className={`text-xs line-clamp-3 italic ${colors.text}`}>{testimonial.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentPage === index ? "bg-blue-500 w-3" : "bg-gray-300 hover:bg-blue-300"
            }`}
            onClick={() => {
              setAutoplay(false)
              setCurrentPage(index)
            }}
            aria-label={`Gehe zu Seite ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
