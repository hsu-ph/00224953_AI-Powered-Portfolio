"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  activeSection: string
  scrollToSection: (section: string) => void
}

export default function Navbar({ darkMode, setDarkMode, activeSection, scrollToSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState("")

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen("")
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    {
      id: "education",
      label: "Education",
      dropdown: ["education", "research"],
    },
    {
      id: "experience",
      label: "Experience",
      dropdown: ["experience", "projects"],
    },
    { id: "contact", label: "Contact" },
  ]

  const handleDropdownToggle = (e: React.MouseEvent, sectionId: string) => {
    e.stopPropagation()
    setDropdownOpen(dropdownOpen === sectionId ? "" : sectionId)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/95 dark:bg-pro-charcoal/95 shadow-md" : "py-4 bg-white/80 dark:bg-pro-charcoal/80"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-pro-gold h-10 w-10 flex items-center justify-center text-white font-bold rounded-lg">
            PH
          </div>
          <span className="font-bold text-xl hidden md:block">Pei-Han Hsu</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <div key={section.id} className="relative">
              {section.dropdown ? (
                <div className="relative">
                  <button
                    onClick={(e) => handleDropdownToggle(e, section.id)}
                    className={`text-md font-medium capitalize transition-colors flex items-center gap-1 ${
                      section.dropdown.includes(activeSection)
                        ? "text-pro-gold dark:text-pro-gold"
                        : "text-pro-charcoal dark:text-pro-cream hover:text-pro-gold dark:hover:text-pro-gold"
                    }`}
                  >
                    {section.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen === section.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen === section.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white dark:bg-pro-charcoal shadow-lg rounded-md overflow-hidden min-w-[160px] z-50"
                      >
                        {section.id === "education" && (
                          <>
                            <button
                              onClick={() => {
                                scrollToSection("education")
                                setDropdownOpen("")
                              }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-pro-cream dark:hover:bg-pro-blue/20 ${
                                activeSection === "education" ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10" : ""
                              }`}
                            >
                              Academic Background
                            </button>
                            <button
                              onClick={() => {
                                scrollToSection("research")
                                setDropdownOpen("")
                              }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-pro-cream dark:hover:bg-pro-blue/20 ${
                                activeSection === "research" ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10" : ""
                              }`}
                            >
                              Research Interests
                            </button>
                          </>
                        )}

                        {section.id === "experience" && (
                          <>
                            <button
                              onClick={() => {
                                scrollToSection("experience")
                                setDropdownOpen("")
                              }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-pro-cream dark:hover:bg-pro-blue/20 ${
                                activeSection === "experience"
                                  ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10"
                                  : ""
                              }`}
                            >
                              Work Experience
                            </button>
                            <button
                              onClick={() => {
                                scrollToSection("projects")
                                setDropdownOpen("")
                              }}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-pro-cream dark:hover:bg-pro-blue/20 ${
                                activeSection === "projects" ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10" : ""
                              }`}
                            >
                              Projects
                            </button>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-md font-medium capitalize transition-colors ${
                    activeSection === section.id
                      ? "text-pro-gold dark:text-pro-gold"
                      : "text-pro-charcoal dark:text-pro-cream hover:text-pro-gold dark:hover:text-pro-gold"
                  }`}
                >
                  {section.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-pro-cream dark:hover:bg-pro-charcoal/50"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-pro-blue text-pro-blue hover:bg-pro-blue/10"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-pro-charcoal border-t border-pro-cream dark:border-pro-charcoal/50"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <div key={section.id}>
                    {section.dropdown ? (
                      <>
                        <button
                          onClick={(e) => handleDropdownToggle(e, section.id)}
                          className={`flex items-center justify-between w-full py-3 px-2 rounded-md ${
                            section.dropdown.includes(activeSection)
                              ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10"
                              : "hover:bg-pro-cream/30 dark:hover:bg-pro-blue/5"
                          }`}
                        >
                          <span className="font-medium">{section.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${dropdownOpen === section.id ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {dropdownOpen === section.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {section.id === "education" && (
                                <>
                                  <button
                                    onClick={() => {
                                      scrollToSection("education")
                                      setMenuOpen(false)
                                      setDropdownOpen("")
                                    }}
                                    className={`w-full text-left py-2 px-3 rounded-md text-sm ${
                                      activeSection === "education"
                                        ? "text-pro-gold bg-pro-cream/30 dark:bg-pro-blue/5"
                                        : "hover:bg-pro-cream/20 dark:hover:bg-pro-blue/5"
                                    }`}
                                  >
                                    Academic Background
                                  </button>
                                  <button
                                    onClick={() => {
                                      scrollToSection("research")
                                      setMenuOpen(false)
                                      setDropdownOpen("")
                                    }}
                                    className={`w-full text-left py-2 px-3 rounded-md text-sm ${
                                      activeSection === "research"
                                        ? "text-pro-gold bg-pro-cream/30 dark:bg-pro-blue/5"
                                        : "hover:bg-pro-cream/20 dark:hover:bg-pro-blue/5"
                                    }`}
                                  >
                                    Research Interests
                                  </button>
                                </>
                              )}

                              {section.id === "experience" && (
                                <>
                                  <button
                                    onClick={() => {
                                      scrollToSection("experience")
                                      setMenuOpen(false)
                                      setDropdownOpen("")
                                    }}
                                    className={`w-full text-left py-2 px-3 rounded-md text-sm ${
                                      activeSection === "experience"
                                        ? "text-pro-gold bg-pro-cream/30 dark:bg-pro-blue/5"
                                        : "hover:bg-pro-cream/20 dark:hover:bg-pro-blue/5"
                                    }`}
                                  >
                                    Work Experience
                                  </button>
                                  <button
                                    onClick={() => {
                                      scrollToSection("projects")
                                      setMenuOpen(false)
                                      setDropdownOpen("")
                                    }}
                                    className={`w-full text-left py-2 px-3 rounded-md text-sm ${
                                      activeSection === "projects"
                                        ? "text-pro-gold bg-pro-cream/30 dark:bg-pro-blue/5"
                                        : "hover:bg-pro-cream/20 dark:hover:bg-pro-blue/5"
                                    }`}
                                  >
                                    Projects
                                  </button>
                                </>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          scrollToSection(section.id)
                          setMenuOpen(false)
                        }}
                        className={`w-full text-left py-3 px-2 rounded-md ${
                          activeSection === section.id
                            ? "text-pro-gold bg-pro-cream/50 dark:bg-pro-blue/10"
                            : "hover:bg-pro-cream/30 dark:hover:bg-pro-blue/5"
                        }`}
                      >
                        <span className="font-medium">{section.label}</span>
                      </button>
                    )}
                  </div>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-pro-blue text-pro-blue hover:bg-pro-blue/10"
                  onClick={() => {
                    window.open("/resume.pdf", "_blank")
                    setMenuOpen(false)
                  }}
                >
                  Resume
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

