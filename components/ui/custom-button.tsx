"use client"

import type { ReactNode } from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface CustomButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function CustomButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
}: CustomButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-pro-gold hover:bg-pro-gold/90 text-white"
      case "secondary":
        return "bg-pro-blue hover:bg-pro-blue/90 text-white"
      case "outline":
        return "border-pro-blue text-pro-blue hover:bg-pro-blue/10 border"
      case "ghost":
        return "text-pro-blue hover:bg-pro-blue/10"
      default:
        return "bg-pro-gold hover:bg-pro-gold/90 text-white"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm px-3 py-1"
      case "md":
        return "px-4 py-2"
      case "lg":
        return "text-lg px-6 py-3"
      default:
        return "px-4 py-2"
    }
  }

  return (
    <ShadcnButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        getVariantClasses(),
        getSizeClasses(),
        "rounded-md font-medium transition-colors flex items-center gap-2",
        className,
      )}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </ShadcnButton>
  )
}

