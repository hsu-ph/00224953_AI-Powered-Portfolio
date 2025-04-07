"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SectionTitle from "@/components/section-title"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sleep and Health Prediction System",
      description:
        "A real-time anomaly detection pipeline to simulate fraud monitoring scenarios, enabling timely alerts and risk mitigation strategies.",
      image: "/images/sleep.png",
      category: "Data Science / Machine Learning",
      link: "https://github.com/hsu-ph/Sleep-and-Health-Prediction-System/tree/main",
      isDetailed: true,
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Project Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Developed a real-time anomaly detection pipeline to simulate fraud monitoring scenarios, enabling timely
              alerts and risk mitigation strategies in sensitive environments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full">
                Scala
              </span>
              <span className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full">
                MongoDB Atlas
              </span>
              <span className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full">
                Play Framework
              </span>
              <span className="bg-pro-blue/20 dark:bg-pro-blue/10 text-pro-blue dark:text-pro-blue text-xs px-3 py-1.5 rounded-full">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI-based Health Monitoring and Medication Chatbot",
      description:
        "A personalized compliance-focused chatbot and integrated data tracking system for KPI evaluation for the elderly.",
      image: "/images/elder.jpeg",
      category: "AI / Healthcare",
      link: "https://youtu.be/WhJh8j_OLvY",
      isDetailed: true,
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Project Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Created a personalized compliance-focused chatbot and integrated data tracking system for KPI evaluation.
              Applied LLM reasoning and built user interaction dashboards to support feedback loops and insight
              generation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                Xcode
              </span>
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                Swift
              </span>
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                PyTorch
              </span>
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                TensorFlow
              </span>
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                CoreML
              </span>
              <span className="bg-pro-gold/20 dark:bg-pro-gold/10 text-pro-gold dark:text-pro-gold text-xs px-3 py-1.5 rounded-full">
                LLM
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Fruit Classification and Sugar Content Prediction",
      description:
        "CNN models to classify fruit type and predict sugar content, applying image processing and OCR logic for quality control.",
      image: "/images/fruit.jpeg",
      category: "Computer Vision / Machine Learning",
      link: "https://youtu.be/AbJiwql3T1Q",
      isDetailed: true,
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Project Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Built CNN models to classify fruit type and predict sugar content, applying image processing and OCR logic
              to simulate quality control and data automation use cases in agriculture and supply chain.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pro-charcoal/20 dark:bg-pro-charcoal/10 text-pro-charcoal dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                Python
              </span>
              <span className="bg-pro-charcoal/20 dark:bg-pro-charcoal/10 text-pro-charcoal dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                TensorFlow
              </span>
              <span className="bg-pro-charcoal/20 dark:bg-pro-charcoal/10 text-pro-charcoal dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                PyTorch
              </span>
              <span className="bg-pro-charcoal/20 dark:bg-pro-charcoal/10 text-pro-charcoal dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                OpenCV
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Food Delivery App associated with Food Supplier",
      description:
        "A comprehensive food delivery platform connecting customers with local food suppliers, featuring real-time order tracking and inventory management.",
      image: "/images/food-delivery.webp",
      category: "Mobile Development / E-commerce",
      link: "https://github.com/peihan-11/Food-Delivery-App-associated-with-Food-Supplier",
      isDetailed: true,
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Project Overview</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Developed a full-stack food delivery application that connects customers directly with food suppliers,
              eliminating middlemen and reducing costs. The platform features real-time order tracking, inventory
              management for suppliers, and a streamlined checkout process.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                React Native
              </span>
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                Node.js
              </span>
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                Express
              </span>
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                MongoDB
              </span>
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                Firebase
              </span>
              <span className="bg-pro-cream/30 dark:bg-pro-cream/10 text-pro-charcoal dark:text-pro-cream text-xs px-3 py-1.5 rounded-full">
                Google Maps API
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="projects" className="py-20 bg-pro-gold/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          description="A selection of my technical work showcasing expertise in various domains and technologies."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                link={project.link}
                isDetailed={project.isDetailed}
                details={project.details}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-pro-blue text-pro-blue hover:bg-pro-blue/10">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

