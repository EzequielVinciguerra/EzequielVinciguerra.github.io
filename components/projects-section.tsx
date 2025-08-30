import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.status === "En desarrollo" ? (
                    <Badge variant="outline" className="text-primary border-primary/50">
                      En desarrollo
                    </Badge>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
