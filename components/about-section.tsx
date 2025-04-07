"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

interface AboutSectionProps {
  scrollToSection: (section: string) => void
}

export default function AboutSection({ scrollToSection }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-28 bg-pro-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="About Me" />

          <motion.div
            className="bg-white dark:bg-pro-charcoal p-8 rounded-xl shadow-md border border-pro-gold/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-pro-blue dark:text-pro-gold">
              Data Scientist & Software Engineer
            </h3>

            <p className="text-lg text-pro-charcoal/80 dark:text-pro-cream/80 mb-6 leading-relaxed">
              Information Systems graduate student specializing in data analytics, machine learning, and AI-powered
              applications. Passionate about solving complex problems with data-driven solutions and creating impactful
              technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-pro-gold hover:bg-pro-gold/90 text-white"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-pro-blue text-pro-blue hover:bg-pro-blue/10"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

