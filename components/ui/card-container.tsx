"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "framer-motion"

interface CardContainerProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outlined" | "filled"
  padding?: "none" | "sm" | "md" | "lg"
}

export function CardContainer({
  children,
  className,
  variant = "default",
  padding = "md",
  ...motionProps
}: CardContainerProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "default":
        return "bg-white dark:bg-pro-charcoal shadow-md"
      case "outlined":
        return "bg-white dark:bg-pro-charcoal border border-pro-gold/20 dark:border-pro-blue/20"
      case "filled":
        return "bg-pro-cream dark:bg-pro-blue/10"
      default:
        return "bg-white dark:bg-pro-charcoal shadow-md"
    }
  }

  const getPaddingClasses = () => {
    switch (padding) {
      case "none":
        return ""
      case "sm":
        return "p-4"
      case "md":
        return "p-6"
      case "lg":
        return "p-8"
      default:
        return "p-6"
    }
  }

  return (
    <motion.div className={cn("rounded-xl", getVariantClasses(), getPaddingClasses(), className)} {...motionProps}>
      {children}
    </motion.div>
  )
}

