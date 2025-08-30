import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { skills } from "@/lib/data"

export function SkillsSection() {
  const skillCategories = [
    { title: "Engines & Frameworks", items: skills.engines, icon: "🎮" },
    { title: "Lenguajes de Programación", items: skills.languages, icon: "💻" },
    { title: "Frontend", items: skills.frontend, icon: "🌐" },
    { title: "Herramientas de Diseño", items: skills.tools, icon: "🎨" },
    { title: "Gestión de Proyectos", items: skills.management, icon: "📋" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
