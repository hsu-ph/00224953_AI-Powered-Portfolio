import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  iconSize?: number
  variant?: "default" | "circle"
}

export default function SocialLinks({ className, iconSize = 5, variant = "default" }: SocialLinksProps) {
  const links = [
    {
      icon: <Github className={`h-${iconSize} w-${iconSize}`} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin className={`h-${iconSize} w-${iconSize}`} />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <Mail className={`h-${iconSize} w-${iconSize}`} />,
      href: "mailto:pphan20507@gmail.com",
      label: "Email",
    },
  ]

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={cn(
            "transition-colors",
            variant === "circle"
              ? "p-3 rounded-full bg-pro-charcoal/10 dark:bg-pro-cream/10 hover:bg-pro-charcoal/20 dark:hover:bg-pro-cream/20"
              : "text-pro-charcoal/70 dark:text-pro-cream/70 hover:text-pro-gold dark:hover:text-pro-gold",
          )}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

