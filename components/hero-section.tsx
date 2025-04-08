"use client"
import { ArrowRight, ChevronDown, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { CustomButton } from "@/components/ui/custom-button"
import AvatarImage from "@/components/avatar-image"
import SocialLinks from "@/components/social-links"

interface HeroSectionProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  onStart: () => void
}

export default function HeroSection({ darkMode, setDarkMode, onStart }: HeroSectionProps) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        darkMode ? "bg-gray-900 text-white" : "bg-cream text-gray-800",
      )}
    >
      {/* Theme toggle */}
      <div className="absolute top-0 right-0 p-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-white/20"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 max-w-md">
        {/* Profile photo */}
        <div className="mb-8">
          <AvatarImage
            src="/images/profile.jpeg"
            alt="Pei-Han Hsu"
            size={224}
            borderColor={darkMode ? "#1f2937" : "white"}
          />
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Pei-Han <span className="text-teal">Hsu</span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Data Scientist & Software Engineer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CustomButton
            onClick={onStart}
            size="lg"
            className="rounded-full px-8 py-6 bg-teal hover:bg-teal/90 text-white"
            icon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
          >
            Explore My Work
          </CustomButton>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
          <SocialLinks className="mt-10" variant="circle" />
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce opacity-70" />
        </motion.div>
      </div>
    </div>
  )
}

