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
      className="shadow-md"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-teal/20 p-3 rounded-lg">
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
              className="text-teal"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-bold">{institution}</h3>
            <p className="text-teal">{location}</p>
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
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>{gpa}</span>
          <span>{period}</span>
        </div>
      </div>

      <div>
        <p className="font-medium mb-3">Relevant Coursework:</p>
        <div className="grid grid-cols-2 gap-2">
          {courses.map((course, courseIndex) => (
            <div
              key={courseIndex}
              className={`${
                courseIndex % 3 === 0
                  ? "bg-blue/10 text-blue dark:bg-blue/20"
                  : courseIndex % 3 === 1
                    ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
              } text-xs px-3 py-2.5 rounded-md`}
            >
              {course}
            </div>
          ))}
        </div>
      </div>
    </CardContainer>
  )
}

