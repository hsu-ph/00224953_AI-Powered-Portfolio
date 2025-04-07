"use client"

import { BookOpen, Brain, HeartPulse, Globe } from "lucide-react"
import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

export default function ResearchInterestsSection() {
  const researchInterests = [
    {
      title: "Machine Learning and Deep Learning",
      icon: <Brain className="h-6 w-6 text-white" />,
      description:
        "Exploring advanced neural network architectures and optimization techniques for solving complex computational problems. Focused on improving model interpretability and reducing computational requirements.",
    },
    {
      title: "Natural Language Processing (NLP)",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description:
        "Researching semantic understanding, multilingual models, and context-aware text generation. Interested in developing more efficient fine-tuning methods for domain-specific applications.",
    },
    {
      title: "Data-Driven Insights for Education and Healthcare",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      description:
        "Applying data science to improve educational outcomes and healthcare delivery. Developing predictive models for early intervention and personalized learning/treatment plans.",
    },
    {
      title: "AI Applications for Social Good",
      icon: <Globe className="h-6 w-6 text-white" />,
      description:
        "Creating AI solutions that address social challenges and promote equity. Focused on building accessible technology that can scale to underserved communities and regions.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, rotateY: 90 },
    show: { opacity: 1, rotateY: 0, transition: { duration: 0.7 } },
  }

  return (
    <section id="research" className="py-20 bg-pro-charcoal/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Research Interests"
          description="Areas where I'm actively exploring, learning, and contributing."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {researchInterests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-pro-charcoal p-8 rounded-xl shadow-sm border border-pro-blue/20 hover:shadow-md transition-shadow"
              variants={item}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-pro-blue to-pro-gold p-3 rounded-lg shrink-0">
                  {interest.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{interest.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

