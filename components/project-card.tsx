"use client"
import { useState } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { CardContainer } from "@/components/ui/card-container"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  link: string
  isDetailed?: boolean
  details?: React.ReactNode
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  link,
  isDetailed = false,
  details,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

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
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <div className="text-white">
            <div className="text-sm font-medium text-pro-gold mb-2">{category}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 text-sm font-medium text-pro-blue dark:text-pro-gold">{category}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-pro-charcoal/80 dark:text-pro-cream/80 leading-relaxed flex-grow">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={link}
            className="inline-flex items-center text-sm font-medium text-pro-blue dark:text-pro-gold hover:text-pro-blue/80 dark:hover:text-pro-gold/80"
            target="_blank"
          >
            View Project
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>

          {isDetailed && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1",
                showDetails
                  ? "bg-pro-gold/20 text-pro-blue dark:text-pro-gold"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-pro-gold/20 hover:text-pro-blue dark:hover:text-pro-gold",
              )}
            >
              {showDetails ? (
                <>
                  Hide Details
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show Details
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>

        <AnimatePresence>
          {isDetailed && showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">{details}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CardContainer>
  )
}

