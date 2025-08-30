import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">EV</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm">
            Copyright © {currentYear} — {personalInfo.name}
          </p>

          <p className="text-muted-foreground text-xs">Hecho con Next.js y desplegado en Vercel</p>
        </div>
      </div>
    </footer>
  )
}
