"use client"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { CardContainer } from "@/components/ui/card-container"
import { CustomButton } from "@/components/ui/custom-button"

interface BlogCardProps {
  title: string
  description: string
  date: string
  image: string
  slug: string
}

export default function BlogCard({ title, description, date, image, slug }: BlogCardProps) {
  return (
    <CardContainer
      variant="outlined"
      padding="none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="overflow-hidden h-full flex flex-col"
    >
      <div className="aspect-[16/9] w-full overflow-hidden relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3 text-sm text-pro-charcoal/60 dark:text-pro-cream/60">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>

        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-pro-charcoal/80 dark:text-pro-cream/80 leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        <div className="mt-6">
          <Link href={`/blog/${slug}`} scroll={false}>
            <CustomButton variant="outline" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
              Read More
            </CustomButton>
          </Link>
        </div>
      </div>
    </CardContainer>
  )
}

