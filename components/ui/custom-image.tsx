import Image from "next/image"
import { cn } from "@/lib/utils"

interface CustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  objectPosition?: string
  priority?: boolean
  fill?: boolean
}

export function CustomImage({
  src,
  alt,
  width,
  height,
  className,
  objectPosition = "center",
  priority = false,
  fill = false,
}: CustomImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        style={{ objectPosition }}
        priority={priority}
        fill={fill}
      />
    </div>
  )
}

