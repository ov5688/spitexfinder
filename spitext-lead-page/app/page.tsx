"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useInView, useAnimation } from "framer-motion"
import { ArrowRight, CheckCircle, Clock, Heart, Mail, Search, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import FinderForm from "@/components/finder-form"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"

// Dezentere Animation-Varianten
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Komponente für animierte Abschnitte
const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section id={id} ref={ref} initial="hidden" animate={controls} variants={fadeIn} className={className}>
      {children}
    </motion.section>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Dezente Progress-Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="bg-white py-4 px-6 border-b sticky top-0 z-40">
        <div className="container flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-6 w-6 text-rose-600" />
            <span className="text-2xl font-bold">SpitexFinder</span>
          </motion.div>
          <motion.nav
            className="hidden md:flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              So funktioniert's
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Vorteile
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              Erfahrungen
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              FAQ
            </Link>
            <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Über uns
            </Link>
          </motion.nav>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Button asChild className="transition-transform duration-200 hover:scale-105">
              <Link href="#finder-form">Spitex finden</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Finder Form Section */}
        <AnimatedSection id="finder-form" className="py-12 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Finden Sie Ihre passende Spitex im Kanton Zürich
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
                Teilen Sie uns Ihre Bedürfnisse mit, und wir finden für Sie den optimalen Spitex-Dienst in Ihrer Region.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-5 items-start">
              <div className="lg:col-span-3">
                <FinderForm />
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 object-cover">
                  <img
                    alt="Spitex-Pflegefachperson unterstützt eine ältere Patientin bei der Betreuung zu Hause"
                    className="aspect-video object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    src="/images/spitex-care.png"
                    width="1280"
                    height="720"
                  />
                </div>
                <div className="space-y-3 bg-sky-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-bold">Warum SpitexFinder?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Kostenlose Vermittlung für Patienten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Spezialisiert auf den Kanton Zürich</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Schnelle Rückmeldung innerhalb von 24 Stunden</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Persönliche Beratung durch Pflegeexperten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection id="hero" className="py-12 md:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-800">
                  Für den Kanton Zürich
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Die passende Spitex für Ihre Bedürfnisse im Kanton Zürich
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  SpitexFinder verbindet Sie schnell und unkompliziert mit dem passenden Spitex-Dienst in Ihrer Region.
                  Wir decken alle Stadtkreise von Zürich und den gesamten Kanton ab, um Ihnen die bestmögliche Betreuung
                  zu Hause zu ermöglichen.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="transition-transform duration-200 hover:scale-105">
                    <Link href="#how-it-works">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Hero Section */}
              <div className="lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl object-cover">
                  <img
                    alt="Spitex-Pflegefachperson betreut eine ältere Patientin zu Hause"
                    className="aspect-video object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    src="/images/spitex-care.png"
                    width="1280"
                    height="720"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection id="how-it-works" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">So funktioniert's</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In nur wenigen Schritten zur passenden Spitex-Betreuung
                </p>
              </div>
            </div>
            <HowItWorks />
          </div>
        </AnimatedSection>

        {/* Benefits Section - Patient focused */}
        <AnimatedSection id="benefits" className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
                  Ihre Vorteile
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Warum SpitexFinder?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Warum immer mehr Menschen im Kanton Zürich SpitexFinder vertrauen
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Search className="h-5 w-5" />,
                    title: "Einfache Suche",
                    description: "Schnell den passenden Spitex-Dienst in Ihrer Nähe finden.",
                    color: "bg-blue-100 text-blue-700",
                    hoverColor: "group-hover:bg-blue-200",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Geprüfte Qualität",
                    description: "Alle Spitex-Dienste erfüllen hohe Qualitätsstandards.",
                    color: "bg-green-100 text-green-700",
                    hoverColor: "group-hover:bg-green-200",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Zeitersparnis",
                    description: "Keine langwierige Recherche mehr nötig.",
                    color: "bg-amber-100 text-amber-700",
                    hoverColor: "group-hover:bg-amber-200",
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Kostenlos",
                    description: "Unser Service ist komplett kostenlos für Sie.",
                    color: "bg-purple-100 text-purple-700",
                    hoverColor: "group-hover:bg-purple-200",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ),
                    title: "Lokale Expertise",
                    description: "Wir kennen den Kanton Zürich und alle lokalen Angebote.",
                    color: "bg-rose-100 text-rose-700",
                    hoverColor: "group-hover:bg-rose-200",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    ),
                    title: "Persönliche Betreuung",
                    description: "Wir begleiten Sie durch den gesamten Prozess.",
                    color: "bg-teal-100 text-teal-700",
                    hoverColor: "group-hover:bg-teal-200",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm h-full transition-all duration-300 hover:shadow-md flex items-start space-x-3 group-hover:bg-gray-50 border border-gray-100">
                      <div
                        className={`${benefit.color} p-2 rounded-full flex-shrink-0 transition-all duration-300 ${benefit.hoverColor} group-hover:scale-110`}
                      >
                        {benefit.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-base">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection id="testimonials" className="py-12 bg-gradient-to-br from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
                  Erfahrungen
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Das sagen unsere Kunden</h2>
                <p className="max-w-[700px] text-gray-500">
                  Erfahrungen von Patienten und Angehörigen aus dem Kanton Zürich
                </p>
              </div>
            </div>
            <Testimonials />
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection id="faq" className="py-16 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Häufige Fragen</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Antworten auf die am häufigsten gestellten Fragen zu SpitexFinder
                </p>
              </div>
            </div>
            <FAQ />
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection id="cta" className="py-16 bg-sky-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Bereit, die passende Spitex zu finden?
              </h2>
              <p className="max-w-[700px] text-sky-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lassen Sie uns Ihnen helfen, die optimale Pflege und Betreuung für Sie oder Ihre Angehörigen im Kanton
                Zürich zu finden.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="mt-4 transition-transform duration-200 hover:scale-105"
              >
                <Link href="#finder-form">
                  Jetzt Spitex finden
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span className="text-xl font-bold">SpitexFinder</span>
              </div>
              <p className="text-slate-300">Die Plattform für die Vermittlung von Spitex-Diensten im Kanton Zürich.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-400" />
                  <p>info@spitexfinder.ch</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <div className="space-y-2 text-slate-300">
                <p>
                  <Link href="/ueber-uns" className="hover:text-sky-400 transition-colors duration-200">
                    Über uns
                  </Link>
                </p>
                <p>
                  <Link href="/blog" className="hover:text-sky-400 transition-colors duration-200">
                    Blog
                  </Link>
                </p>
                <p>
                  <Link href="/karriere" className="hover:text-sky-400 transition-colors duration-200">
                    Karriere
                  </Link>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
              <div className="space-y-2 text-slate-300">
                <p>
                  <Link href="/datenschutz" className="hover:text-sky-400 transition-colors duration-200">
                    Datenschutz
                  </Link>
                </p>
                <p>
                  <Link href="/agb" className="hover:text-sky-400 transition-colors duration-200">
                    AGB
                  </Link>
                </p>
                <p>
                  <Link href="/impressum" className="hover:text-sky-400 transition-colors duration-200">
                    Impressum
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} SpitexFinder. Alle Rechte vorbehalten.</p>
            <p className="text-xs mt-2">
              Wir arbeiten mit ausgewählten Spitex-Diensten im Kanton Zürich zusammen, um Ihnen den bestmöglichen
              Service zu bieten.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
