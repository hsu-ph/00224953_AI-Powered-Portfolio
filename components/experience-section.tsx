"use client"

import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Soochow University",
      location: "Taipei, Taiwan",
      period: "Sep 2020 - Dec 2024",
      responsibilities: [
        "Designed and managed analytical dashboards using Power BI and Tableau to communicate KPI trends and support data-driven decision-making across academic and operational units.",
        "Built SQL-based reporting pipelines and Python scripts to automate data workflows, reducing manual workload by 60% and increasing real-time insight availability.",
        "Synthesized complex data into executive-ready reports and collaborated with cross-functional teams to align business questions with data solutions.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Tera ASPer Digital Services Co., Ltd",
      location: "Taipei, Taiwan",
      period: "Jan - Sep 2021",
      responsibilities: [
        "Built an incentive scheme simulation tool for a fictional sales team based on historical performance metrics and future KPIs.",
        "Analyzed trade expenses and sales data to identify top-performing segments and optimize reward distribution.",
        "Designed visual dashboards and reports to monitor progress and support quarterly business reviews.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-pro-charcoal/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Work Experience"
          description="Professional experience in research, data analytics, and software engineering."
        />

        <div className="grid md:grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-pro-gold/10 dark:bg-pro-charcoal p-8 rounded-xl shadow-sm border border-pro-gold/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-pro-gold dark:text-pro-gold">
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-2 md:mt-0">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

