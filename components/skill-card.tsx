import type { ReactNode } from "react"
import { CardContainer } from "@/components/ui/card-container"

interface Skill {
  name: string
  level: "Basic" | "Intermediate" | "Advanced" | "Expert"
}

interface SkillCardProps {
  title: string
  icon: ReactNode
  skills: Skill[]
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  // Function to get badge color based on skill level
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Basic":
        return "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
      case "Intermediate":
        return "bg-pro-gold/20 text-pro-gold"
      case "Advanced":
        return "bg-pro-blue/20 text-pro-blue"
      case "Expert":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
      default:
        return "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
    }
  }

  return (
    <CardContainer variant="filled" padding="md">
      <div className="w-12 h-12 bg-pro-blue rounded-lg flex items-center justify-center mb-4">{icon}</div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <ul className="space-y-3 text-pro-charcoal/80 dark:text-pro-cream/80">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center justify-between">
            <span>{skill.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getLevelBadgeColor(skill.level)}`}>{skill.level}</span>
          </li>
        ))}
      </ul>
    </CardContainer>
  )
}

