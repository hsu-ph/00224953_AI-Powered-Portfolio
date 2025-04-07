"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfileImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
  animate?: boolean
}

export default function ProfileImage({ src, alt, size = "md", className, animate = true }: ProfileImageProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-24 h-24"
      case "md":
        return "w-48 h-48 md:w-56 md:h-56"
      case "lg":
        return "w-64 h-64 md:w-72 md:h-72"
      default:
        return "w-48 h-48 md:w-56 md:h-56"
    }
  }

  const imageComponent = (
    <div className={cn("relative rounded-full overflow-hidden", getSizeClasses(), className)}>
      <div className="absolute inset-0 rounded-full bg-pro-blue opacity-20"></div>
      <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-pro-charcoal shadow-xl">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={320}
          height={320}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  )

  if (animate) {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {imageComponent}
      </motion.div>
    )
  }

  return imageComponent
}

