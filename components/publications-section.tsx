"use client"

import { CardContainer } from "@/components/ui/card-container"
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'

export default function PublicationsSection() {
  const publications = [
    {
      title: "The Impact of Flipped Classrooms Combined with Differential Chat Robots on Programming Learning",
      authors: "Kuo, Y.-C., Hsu, P.-H., et al.",
      journal: "Under submission",
      year: "2024",
      link: "#",
    },
    {
      title: "Effects of distance peers on live streaming learning and self-regulated learning",
      authors: "Kuo, Y.-C., Hsu, P.-H., et al.",
      journal: "Under submission",
      year: "2024",
      link: "#",
    },
    {
      title: "AI-Powered Chatbot for Personalized Medication and Health Monitoring in Elderly Care",
      authors: "Hsu, P.-H.",
      journal: "The Ministry of Science and Technology, Taiwan",
      year: "2021",
      link: "#",
    },
    {
      title: "Post-Capture Fruit Classification and Sugar Content Prediction Using Convolutional Neural Networks",
      authors: "Hsu, P.-H., Chuang, B.-Y., Chen, T.-Y., & Huang, Z.-H.",
      journal: "Proceedings of the International ICT Innovative Services Conference, Taiwan",
      year: "2021",
      link: "#",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {publications.map((pub, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <CardContainer variant="outlined" padding="lg" className="border-teal/30 border-2">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{pub.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">{pub.authors}</p>
            <p className="text-blue dark:text-blue">
              {pub.journal}, {pub.year}
            </p>
            <a
              href={pub.link}
              className="inline-flex items-center text-sm font-medium text-teal hover:underline mt-3"
              target="_blank"
              rel="noreferrer"
            >
              View Publication <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  )
}

