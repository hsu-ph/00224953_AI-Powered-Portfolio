import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Pei-Han Hsu",
  description: "Thoughts, stories, and insights from my journey in tech and life.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}

