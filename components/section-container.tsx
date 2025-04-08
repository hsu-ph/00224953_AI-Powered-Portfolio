import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id: string
  children: ReactNode
  className?: string
  background?: "cream" | "light-blue"
}

export default function SectionContainer({ id, children, className, background = "cream" }: SectionContainerProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case "cream":
        return "bg-cream dark:bg-gray-900"
      case "light-blue":
        return "bg-blue/10 dark:bg-blue/20"
      default:
        return "bg-cream dark:bg-gray-900"
    }
  }

  return (
    <section id={id} className={cn("py-20", getBackgroundClasses(), className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

