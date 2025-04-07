import { Mail, Github, Linkedin } from "lucide-react"

export const contactMethods = [
  {
    title: "Email",
    icon: <Mail className="h-8 w-8 text-white" />,
    value: "pphan20507@gmail.com",
    link: "mailto:pphan20507@gmail.com",
    description: "Preferred for professional inquiries",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="h-8 w-8 text-white" />,
    value: "linkedin.com/in/yourprofile",
    link: "https://linkedin.com/in/yourprofile",
    description: "Connect professionally",
  },
  {
    title: "GitHub",
    icon: <Github className="h-8 w-8 text-white" />,
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
    description: "Check out my code",
  },
]

