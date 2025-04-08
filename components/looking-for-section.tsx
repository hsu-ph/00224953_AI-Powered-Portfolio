"use client"
import { Briefcase, Handshake, Search } from "lucide-react"
import { CardContainer } from "@/components/ui/card-container"

export default function LookingForSection() {
  return (
    <CardContainer
      variant="default"
      padding="lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="bg-teal p-3 rounded-lg shrink-0">
          <Search className="h-6 w-6 text-white" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-teal">Open to Opportunities</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm currently looking for Summer 2025 internships in machine learning or AI product development. Open to
            collaborations in educational technology and NLP research.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="bg-teal/20 p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-teal" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Summer 2025 Internships</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-teal/20 p-2 rounded-full">
                <Handshake className="h-5 w-5 text-teal" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">Research Collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

