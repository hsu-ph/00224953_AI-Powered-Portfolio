"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, Calendar } from "lucide-react"
import { blogPosts } from "@/data/blog"
import { CustomButton } from "@/components/ui/custom-button"
import { motion } from "framer-motion"
import { notFound, useRouter } from "next/navigation"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Find the blog post with the matching slug
    const foundPost = blogPosts.find((p) => p.slug === params.slug)

    if (foundPost) {
      setPost(foundPost)
    }

    setLoading(false)
  }, [params.slug])

  // If post not found, show 404
  if (!loading && !post) {
    notFound()
  }

  if (loading || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    )
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-pro-charcoal pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <CustomButton
              variant="outline"
              size="sm"
              icon={<ArrowLeft className="h-4 w-4" />}
              iconPosition="left"
              onClick={handleBack}
            >
              Back to Blog
            </CustomButton>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-2 mb-8 text-sm text-pro-charcoal/60 dark:text-pro-cream/60">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>

            {post.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph: string, idx: number) => (
                <p key={idx} className="mb-6 text-pro-charcoal/80 dark:text-pro-cream/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Display additional images if available */}
            {post.images && post.images.length > 1 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.images.map((img: string, idx: number) => (
                    <div key={idx} className="rounded-xl overflow-hidden">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${post.title} - Image ${idx + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

