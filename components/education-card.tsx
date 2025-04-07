"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CardContainer } from "@/components/ui/card-container"

interface EducationCardProps {
  institution: string
  location: string
  degree: string
  gpa: string
  period: string
  courses: string[]
  logo: string
}

export default function EducationCard({
  institution,
  location,
  degree,
  gpa,
  period,
  courses,
  logo,
}: EducationCardProps) {
  return (
    <CardContainer
      variant="default"
      padding="lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-pro-blue/20 dark:bg-pro-blue/10 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pro-blue dark:text-pro-blue"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-bold">{institution}</h3>
            <p className="text-pro-blue dark:text-pro-blue">{location}</p>
          </div>
        </div>

        <motion.div className="w-16 h-16 shrink-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${institution} logo`}
            width={64}
            height={64}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>

      <div className="mb-4">
        <p className="text-lg font-medium">{degree}</p>
        <div className="flex justify-between text-pro-charcoal/60 dark:text-pro-cream/60">
          <span>{gpa}</span>
          <span>{period}</span>
        </div>
      </div>

      <div>
        <p className="font-medium mb-2">Relevant Coursework:</p>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, courseIndex) => (
            <span
              key={courseIndex}
              className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </CardContainer>
  )
}

