interface SectionTitleProps {
  title: string
  description?: string
  lightText?: boolean
}

export default function SectionTitle({ title, description, lightText = false }: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 section-title inline-block ${lightText ? "text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`${lightText ? "text-white/80" : "text-slate-600 dark:text-slate-300"} mt-8 max-w-2xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  )
}

