import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id: string
  children: ReactNode
  className?: string
  background?: "white" | "cream" | "blue" | "gold" | "charcoal"
}

export default function SectionContainer({ id, children, className, background = "white" }: SectionContainerProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case "white":
        return "bg-white dark:bg-pro-charcoal"
      case "cream":
        return "bg-pro-cream dark:bg-pro-charcoal/90"
      case "blue":
        return "bg-pro-blue/10 dark:bg-pro-blue/20"
      case "gold":
        return "bg-pro-gold/10 dark:bg-pro-gold/20"
      case "charcoal":
        return "bg-pro-charcoal/10 dark:bg-pro-charcoal"
      default:
        return "bg-white dark:bg-pro-charcoal"
    }
  }

  return (
    <section id={id} className={cn("py-20", getBackgroundClasses(), className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

