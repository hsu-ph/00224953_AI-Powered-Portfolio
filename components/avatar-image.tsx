"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AvatarImageProps {
  src: string
  alt: string
  size?: number
  className?: string
  animate?: boolean
  borderColor?: string
}

export default function AvatarImage({
  src,
  alt,
  size = 224,
  className,
  animate = true,
  borderColor = "white",
}: AvatarImageProps) {
  const imageStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: `4px solid ${borderColor}`,
    overflow: "hidden",
    position: "relative" as const,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  }

  const imageComponent = (
    <div style={imageStyle} className={cn("relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={size}
        height={size}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        priority
      />
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

