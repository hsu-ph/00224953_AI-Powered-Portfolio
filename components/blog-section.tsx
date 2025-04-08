"use client"

import { ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { CustomButton } from "@/components/ui/custom-button"
import { motion } from "framer-motion"
import { blogPosts } from "@/data/blog"

export default function BlogSection() {
  return (
    <div>
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {blogPosts.slice(0, 3).map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <BlogCard
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <CustomButton variant="outline" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
          View All Posts
        </CustomButton>
      </div>
    </div>
  )
}

