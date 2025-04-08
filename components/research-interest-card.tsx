import type { ReactNode } from "react"
import { CardContainer } from "@/components/ui/card-container"

interface ResearchInterestCardProps {
  title: string
  icon: ReactNode
  description: string
}

export default function ResearchInterestCard({ title, icon, description }: ResearchInterestCardProps) {
  return (
    <CardContainer
      variant="default"
      padding="lg"
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ y: -5 }}
      className="shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="bg-teal p-3 rounded-lg shrink-0">{icon}</div>

        <div>
          <h3 className="text-xl font-bold mb-3 text-teal">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </CardContainer>
  )
}

