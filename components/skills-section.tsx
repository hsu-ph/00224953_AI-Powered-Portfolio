"use client"

import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
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
          className="text-white"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
      skills: [
        { name: "SQL", level: "Advanced" },
        { name: "Python (Pandas, NumPy)", level: "Advanced" },
        { name: "R", level: "Intermediate" },
        { name: "Excel (PivotTables, VLOOKUP)", level: "Advanced" },
        { name: "VBA", level: "Intermediate" },
      ],
    },
    {
      title: "Data Engineering",
      icon: (
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
          className="text-white"
        >
          <path d="M2 22h20" />
          <path d="M10 6h4v16h-4z" />
          <path d="M2 13h4v9H2z" />
          <path d="M18 10h4v12h-4z" />
          <path d="M10 2h4v4h-4z" />
        </svg>
      ),
      skills: [
        { name: "Airflow", level: "Intermediate" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Azure", level: "Intermediate" },
        { name: "AWS", level: "Basic" },
        { name: "Apache Spark", level: "Intermediate" },
      ],
    },
    {
      title: "Analytics & BI",
      icon: (
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
          className="text-white"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      skills: [
        { name: "Tableau", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Excel (Charts, Macros)", level: "Advanced" },
        { name: "Data Cleaning", level: "Expert" },
        { name: "KPI Monitoring", level: "Advanced" },
      ],
    },
    {
      title: "ML & AI",
      icon: (
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
          className="text-white"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      skills: [
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "PyTorch", level: "Basic" },
        { name: "A/B Testing", level: "Advanced" },
        { name: "Anomaly Detection", level: "Intermediate" },
      ],
    },
  ]

  // Function to get badge color based on skill level
  const getLevelBadgeColor = (level) => {
    switch (level) {
      case "Basic":
        return "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
      case "Intermediate":
        return "bg-pro-gold/20 text-pro-gold"
      case "Advanced":
        return "bg-pro-blue/20 text-pro-blue"
      case "Expert":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
      default:
        return "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-pro-charcoal">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Technical Expertise"
          description="Specialized in data analytics, machine learning, and software development."
        />

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-pro-cream dark:bg-pro-blue/10 p-6 rounded-xl shadow-sm border border-pro-gold/20"
              variants={item}
            >
              <div className="w-12 h-12 bg-pro-blue rounded-lg flex items-center justify-center mb-4">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{category.title}</h3>

              <ul className="space-y-3 text-pro-charcoal/80 dark:text-pro-cream/80">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getLevelBadgeColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pro-blue dark:text-pro-gold">Languages</h3>

            <p className="text-pro-charcoal/80 dark:text-pro-cream/80 mb-6">
              Fluent in English and Mandarin Chinese, with strong technical communication skills for both technical and
              non-technical audiences.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm font-medium">Fluent</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-pro-blue dark:bg-pro-gold h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Mandarin Chinese</span>
                  <span className="text-sm font-medium">Native</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-pro-blue dark:bg-pro-gold h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { value: "3.7/4.0", label: "MS GPA (Top 5%)" },
              { value: "3.9/4.0", label: "BBA GPA (Top 1%)" },
              { value: "2+", label: "Years Experience" },
              { value: "5+", label: "Major Projects" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-pro-blue/10 p-6 rounded-xl shadow-sm border border-pro-gold/20 text-center"
              >
                <div className="text-3xl font-bold text-pro-blue dark:text-pro-gold mb-2">{stat.value}</div>
                <p className="text-pro-charcoal/70 dark:text-pro-cream/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

