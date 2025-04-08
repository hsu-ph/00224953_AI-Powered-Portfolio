import type { ReactNode } from "react"
import { CardContainer } from "@/components/ui/card-container"

interface ContactMethodCardProps {
  title: string
  icon: ReactNode
  value: string
  link: string
  description: string
}

export default function ContactMethodCard({ title, icon, value, link, description }: ContactMethodCardProps) {
  return (
    <CardContainer
      variant="default"
      padding="lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="text-center shadow-md"
    >
      <div className="w-16 h-16 mx-auto bg-teal rounded-full flex items-center justify-center mb-6">{icon}</div>

      <h3 className="text-xl font-bold mb-2 text-teal">{title}</h3>
      <a href={link} className="text-teal hover:underline" target="_blank" rel="noreferrer">
        {value}
      </a>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </CardContainer>
  )
}

