"use client"

import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"
import Image from "next/image"

export default function EducationSection() {
  const educationData = [
    {
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "M.S in Information Systems",
      gpa: "3.7/4.0 (Top 5%)",
      period: "Sep 2023 - May 2025",
      courses: ["Machine Learning", "Large Language Models", "Advanced Data Science", "NLP", "Generative AI"],
      logo: "/images/neu-logo.png",
    },
    {
      institution: "Soochow University",
      location: "Taipei, Taiwan",
      degree: "B.B.A in Computer Science & Information Management",
      gpa: "3.9/4.0 (Top 1%)",
      period: "Sep 2018 - Jan 2022",
      courses: ["Data Structures", "Operating Systems", "System Analysis", "Data Mining"],
      logo: "/images/scu-logo.png",
    },
  ]

  return (
    <section id="education" className="py-20 bg-pro-blue/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Academic Background"
          description="Strong foundation in Information Systems, Computer Science, and Data Analytics."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-pro-charcoal p-8 rounded-xl shadow-sm border border-pro-blue/20"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
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
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-pro-blue dark:text-pro-blue">{edu.location}</p>
                  </div>
                </div>

                <motion.div className="w-16 h-16 shrink-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>

              <div className="mb-4">
                <p className="text-lg font-medium">{edu.degree}</p>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>{edu.gpa}</span>
                  <span>{edu.period}</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

