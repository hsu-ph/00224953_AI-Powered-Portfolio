import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-sunset-amber to-sunset-terracotta h-8 w-8 flex items-center justify-center text-white font-bold rounded-lg">
              PH
            </div>
            <span className="font-bold text-xl">Pei-Han Hsu</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-sunset-amber transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-sunset-amber transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:pphan20507@gmail.com" className="text-slate-300 hover:text-sunset-amber transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Pei-Han Hsu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

