"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">{personalInfo.name}</h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold">{personalInfo.title}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("experiencia")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Experience
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contacto")}>
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">📍 {personalInfo.location}</span>
              
              <span className="flex items-center gap-2">
                🌐 {personalInfo.languages.map((lang) => `${lang.name} (${lang.level})`).join(" • ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
