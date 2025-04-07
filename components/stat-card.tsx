import { CardContainer } from "@/components/ui/card-container"

interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <CardContainer variant="default" padding="md" className="text-center">
      <div className="text-3xl font-bold text-pro-blue dark:text-pro-gold mb-2">{value}</div>
      <p className="text-pro-charcoal/70 dark:text-pro-cream/70 text-sm">{label}</p>
    </CardContainer>
  )
}

