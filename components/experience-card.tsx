import { CardContainer } from "@/components/ui/card-container"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export default function ExperienceCard({ title, company, location, period, responsibilities }: ExperienceCardProps) {
  return (
    <CardContainer
      variant="default"
      padding="lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="shadow-md"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-teal">{title}</h3>
          <p className="text-teal/80">
            {company}, {location}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{period}</p>
      </div>

      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
        {responsibilities.map((resp, respIndex) => (
          <li key={respIndex}>{resp}</li>
        ))}
      </ul>
    </CardContainer>
  )
}

