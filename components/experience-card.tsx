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
      variant="outlined"
      padding="lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-pro-gold dark:text-pro-gold">
            {company}, {location}
          </p>
        </div>
        <p className="text-pro-charcoal/60 dark:text-pro-cream/60 mt-2 md:mt-0">{period}</p>
      </div>

      <ul className="list-disc pl-5 text-pro-charcoal/80 dark:text-pro-cream/80 space-y-2">
        {responsibilities.map((resp, respIndex) => (
          <li key={respIndex}>{resp}</li>
        ))}
      </ul>
    </CardContainer>
  )
}

