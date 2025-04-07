"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContainer } from "@/components/ui/card-container"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <CardContainer variant="default" padding="lg" className="max-w-md mx-auto">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mb-4">
            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-pro-charcoal dark:text-pro-cream">Message Sent!</h3>
          <p className="text-pro-charcoal/70 dark:text-pro-cream/70">
            Thank you for reaching out. I'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-pro-charcoal/80 dark:text-pro-cream/80">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  className="rounded-lg border-slate-200 dark:border-slate-700 focus:border-pro-gold focus:ring-pro-gold"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-pro-charcoal/80 dark:text-pro-cream/80">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  className="rounded-lg border-slate-200 dark:border-slate-700 focus:border-pro-gold focus:ring-pro-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-pro-charcoal/80 dark:text-pro-cream/80">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="rounded-lg border-slate-200 dark:border-slate-700 focus:border-pro-gold focus:ring-pro-gold"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-pro-charcoal/80 dark:text-pro-cream/80">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Project Inquiry"
                required
                className="rounded-lg border-slate-200 dark:border-slate-700 focus:border-pro-gold focus:ring-pro-gold"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-pro-charcoal/80 dark:text-pro-cream/80">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                required
                className="min-h-[120px] rounded-lg border-slate-200 dark:border-slate-700 focus:border-pro-gold focus:ring-pro-gold"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-pro-gold hover:bg-pro-gold/90 text-white rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Sending...
                <svg
                  className="ml-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-center text-pro-charcoal/60 dark:text-pro-cream/60">
            By submitting this form, you agree to our{" "}
            <Link href="#" className="text-pro-gold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      )}
    </CardContainer>
  )
}

