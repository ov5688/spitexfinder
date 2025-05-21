"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  company: z.string().min(2, {
    message: "Firmenname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().min(5, {
    message: "Telefonnummer muss mindestens 5 Zeichen lang sein.",
  }),
  service: z.string({
    required_error: "Bitte wählen Sie eine Dienstleistung aus.",
  }),
  message: z.string().min(10, {
    message: "Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
})

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Hier würde normalerweise der API-Aufruf stattfinden
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Anfrage gesendet",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Max Mustermann" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firma*</FormLabel>
                  <FormControl>
                    <Input placeholder="Musterfirma GmbH" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail*</FormLabel>
                  <FormControl>
                    <Input placeholder="max@musterfirma.ch" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon*</FormLabel>
                  <FormControl>
                    <Input placeholder="+41 44 123 45 67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gewünschte Dienstleistung*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen Sie eine Dienstleistung" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="werbetexte">Werbetexte</SelectItem>
                    <SelectItem value="website">Website-Inhalte</SelectItem>
                    <SelectItem value="produkt">Produktbeschreibungen</SelectItem>
                    <SelectItem value="berichte">Geschäftsberichte</SelectItem>
                    <SelectItem value="blog">Blog-Artikel</SelectItem>
                    <SelectItem value="uebersetzungen">Übersetzungen</SelectItem>
                    <SelectItem value="andere">Andere</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ihre Nachricht*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Beschreiben Sie Ihr Projekt und Ihre Anforderungen..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Bitte beschreiben Sie Ihr Projekt so detailliert wie möglich.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Mit dem Absenden des Formulars stimmen Sie unserer Datenschutzerklärung zu.
          </p>
        </form>
      </Form>
    </div>
  )
}
