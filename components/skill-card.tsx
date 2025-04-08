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
  colorScheme: "teal" | "blue"
}

export default function SkillCard({ title, icon, skills, colorScheme = "teal" }: SkillCardProps) {
  // Function to get badge color based on skill level
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Basic":
        return "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      case "Intermediate":
        return "bg-blue/20 text-blue dark:bg-blue/30 dark:text-blue"
      case "Advanced":
        return "bg-teal/20 text-teal dark:bg-teal/30 dark:text-teal"
      case "Expert":
        return "bg-purple-200 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      default:
        return "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
    <CardContainer variant="default" padding="md" className="shadow-sm">
      <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">{icon}</div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
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

