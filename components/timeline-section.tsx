"use client"

import { motion } from "framer-motion"
import { CardContainer } from "@/components/ui/card-container"
import { Briefcase, GraduationCap, Award, Code } from "lucide-react"

export default function TimelineSection() {
  const timelineEvents = [
    {
      date: "2023 - Present",
      title: "M.S. in Information Systems",
      subtitle: "Northeastern University, Boston",
      description: "Focusing on machine learning, AI, and data science applications in healthcare and education.",
      icon: <GraduationCap className="h-5 w-5 text-white" />,
      iconBg: "bg-teal",
      side: "right",
    },
    {
      date: "2022 - 2023",
      title: "Research Assistant",
      subtitle: "Soochow University",
      description: "Led data analytics projects and developed dashboards for academic performance monitoring.",
      icon: <Briefcase className="h-5 w-5 text-white" />,
      iconBg: "bg-teal",
      side: "left",
    },
    {
      date: "2021 - 2022",
      title: "Software Engineer Intern",
      subtitle: "Tera ASPer Digital Services Co., Ltd",
      description: "Developed an incentive scheme simulation tool and analyzed sales data for optimization.",
      icon: <Code className="h-5 w-5 text-white" />,
      iconBg: "bg-teal",
      side: "right",
    },
    {
      date: "2018 - 2022",
      title: "B.B.A in Computer Science & Information Management",
      subtitle: "Soochow University, Taipei",
      description: "Graduated with top honors (GPA 3.9/4.0) and received academic excellence awards.",
      icon: <GraduationCap className="h-5 w-5 text-white" />,
      iconBg: "bg-teal",
      side: "left",
    },
    {
      date: "2020",
      title: "Academic Excellence Award",
      subtitle: "Soochow University",
      description: "Recognized for outstanding academic performance and research contributions.",
      icon: <Award className="h-5 w-5 text-white" />,
      iconBg: "bg-teal",
      side: "right",
    },
  ]

  return (
    <div className="timeline-container max-w-5xl mx-auto py-10">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${event.side}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="timeline-dot"></div>
          <span className="timeline-date text-teal font-medium">{event.date}</span>

          <div className="timeline-content">
            <CardContainer variant="default" padding="md" className="shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`${event.iconBg} p-2 rounded-full shrink-0`}>{event.icon}</div>

                <div>
                  <h3 className="text-lg font-bold text-teal">{event.title}</h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">{event.subtitle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
            </CardContainer>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

