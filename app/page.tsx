"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Import components
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import SectionContainer from "@/components/section-container"
import SectionTitle from "@/components/section-title"
import { CardContainer } from "@/components/ui/card-container"
import { CustomButton } from "@/components/ui/custom-button"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import SkillCard from "@/components/skill-card"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import ResearchInterestCard from "@/components/research-interest-card"
import ContactMethodCard from "@/components/contact-method-card"
import StatCard from "@/components/stat-card"
import Footer from "@/components/footer"

// Import data
import { skillCategories } from "../data/skills"
import { educationData } from "../data/education"
import { experiences } from "../data/experience"
import { researchInterests } from "../data/research"
import { projects } from "../data/projects"
import { contactMethods } from "../data/contact"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [started, setStarted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handleStart = () => {
    setPageTransition(true)
    setTimeout(() => {
      setStarted(true)
      setPageTransition(false)
    }, 800)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Observer to update active section based on scroll position
  useEffect(() => {
    if (!started) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -100px 0px", threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [started])

  return (
    <AnimatePresence mode="wait">
      {pageTransition ? (
        <motion.div
          key="transition"
          className="fixed inset-0 bg-pro-gold z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      ) : started ? (
        <motion.div
          key="main-content"
          className={cn(
            "min-h-screen",
            darkMode ? "dark bg-pro-charcoal text-pro-cream" : "bg-white text-pro-charcoal",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          <main className="pt-20">
            {/* About Section */}
            <SectionContainer id="about" background="cream">
              <div className="max-w-3xl mx-auto">
                <SectionTitle title="About Me" />
                <CardContainer
                  variant="default"
                  padding="lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-pro-blue dark:text-pro-gold">
                    Data Scientist & Software Engineer
                  </h3>

                  <p className="text-lg text-pro-charcoal/80 dark:text-pro-cream/80 mb-6 leading-relaxed">
                    Information Systems graduate student specializing in data analytics, machine learning, and
                    AI-powered applications. Passionate about solving complex problems with data-driven solutions and
                    creating impactful technology.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <CustomButton onClick={() => scrollToSection("projects")} icon={<ArrowRight className="h-4 w-4" />}>
                      View Projects
                    </CustomButton>

                    <CustomButton variant="outline" onClick={() => window.open("/resume.pdf", "_blank")}>
                      Download Resume
                    </CustomButton>
                  </div>
                </CardContainer>
              </div>
            </SectionContainer>

            {/* Skills Section */}
            <SectionContainer id="skills" background="white">
              <SectionTitle
                title="Technical Expertise"
                description="Specialized in data analytics, machine learning, and software development."
              />

              <motion.div
                className="grid md:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {skillCategories.map((category, index) => (
                  <SkillCard key={index} title={category.title} icon={category.icon} skills={category.skills} />
                ))}
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pro-blue dark:text-pro-gold">Languages</h3>

                  <p className="text-pro-charcoal/80 dark:text-pro-cream/80 mb-6">
                    Fluent in English and Mandarin Chinese, with strong technical communication skills for both
                    technical and non-technical audiences.
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
                    <StatCard key={index} value={stat.value} label={stat.label} />
                  ))}
                </motion.div>
              </div>
            </SectionContainer>

            {/* Education Section */}
            <SectionContainer id="education" background="blue">
              <SectionTitle
                title="Academic Background"
                description="Strong foundation in Information Systems, Computer Science, and Data Analytics."
              />

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {educationData.map((edu, index) => (
                  <EducationCard
                    key={index}
                    institution={edu.institution}
                    location={edu.location}
                    degree={edu.degree}
                    gpa={edu.gpa}
                    period={edu.period}
                    courses={edu.courses}
                    logo={edu.logo}
                  />
                ))}
              </div>
            </SectionContainer>

            {/* Experience Section */}
            <SectionContainer id="experience" background="white">
              <SectionTitle
                title="Work Experience"
                description="Professional experience in research, data analytics, and software engineering."
              />

              <div className="grid md:grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    period={exp.period}
                    responsibilities={exp.responsibilities}
                  />
                ))}
              </div>
            </SectionContainer>

            {/* Research Interests Section */}
            <SectionContainer id="research" background="charcoal">
              <SectionTitle
                title="Research Interests"
                description="Areas where I'm actively exploring, learning, and contributing."
              />

              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.15 }}
                viewport={{ once: true }}
              >
                {researchInterests.map((interest, index) => (
                  <ResearchInterestCard
                    key={index}
                    title={interest.title}
                    icon={interest.icon}
                    description={interest.description}
                  />
                ))}
              </motion.div>
            </SectionContainer>

            {/* Projects Section */}
            <SectionContainer id="projects" background="gold">
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
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    category={project.category}
                    link={project.link}
                    isDetailed={project.isDetailed}
                    details={project.details}
                  />
                ))}
              </motion.div>

              <div className="mt-16 text-center">
                <CustomButton variant="outline" size="lg" icon={<ExternalLink className="h-4 w-4" />}>
                  View All Projects
                </CustomButton>
              </div>
            </SectionContainer>

            {/* Contact Section */}
            <SectionContainer id="contact" background="white">
              <SectionTitle
                title="Let's Connect"
                description="I'm always open to discussing new projects, opportunities, and collaborations."
              />

              <motion.div
                className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
              >
                {contactMethods.map((method, index) => (
                  <ContactMethodCard
                    key={index}
                    title={method.title}
                    icon={method.icon}
                    value={method.value}
                    link={method.link}
                    description={method.description}
                  />
                ))}
              </motion.div>

              <div className="mt-16">
                <ContactForm />
              </div>
            </SectionContainer>
          </main>

          <Footer />
        </motion.div>
      ) : (
        <motion.div
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} onStart={handleStart} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

