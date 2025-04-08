"use client"

import { useRouter } from "next/navigation"
import { CustomButton } from "@/components/ui/custom-button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-pro-charcoal">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">Blog post not found</p>
      <CustomButton 
        variant="outline" 
        size="lg" 
        icon={<ArrowLeft className="h-4 w-4" />} 
        iconPosition="left"
        onClick={handleBack}
      >
        Back to Blog
      </CustomButton>
    </div>
  )
}

