"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (Netlify will handle this in production)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-background border border-border rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-xl font-serif mb-2">Message envoyé avec succès</h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Envoyer un nouveau message</Button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Sujet</Label>
          <Select name="subject">
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez un sujet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="publications">Publications</SelectItem>
              <SelectItem value="conseil-acquisition">Conseil en acquisition</SelectItem>
              <SelectItem value="autre">Autre demande</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={5} required />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  )
}

