"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

export default function ContactSection() {
  const contactMethods = [
    {
      title: "Email",
      icon: <Mail className="h-8 w-8 text-white" />,
      value: "pphan20507@gmail.com",
      link: "mailto:pphan20507@gmail.com",
      description: "Preferred for professional inquiries",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-8 w-8 text-white" />,
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
      description: "Connect professionally",
    },
    {
      title: "GitHub",
      icon: <Github className="h-8 w-8 text-white" />,
      value: "github.com/yourusername",
      link: "https://github.com/yourusername",
      description: "Check out my code",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-pro-charcoal/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Let's Connect"
          description="I'm always open to discussing new projects, opportunities, and collaborations."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-pro-cream/30 dark:bg-pro-charcoal p-8 rounded-xl shadow-sm border border-pro-gold/20 text-center"
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pro-gold to-pro-blue rounded-full flex items-center justify-center mb-6">
                {method.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <a
                href={method.link}
                className="text-pro-blue dark:text-pro-gold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {method.value}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-gradient-to-r from-pro-gold to-pro-blue hover:from-pro-gold/90 hover:to-pro-blue/90 text-white"
            size="lg"
            onClick={() => (window.location.href = "mailto:pphan20507@gmail.com")}
          >
            Send Me a Message
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

