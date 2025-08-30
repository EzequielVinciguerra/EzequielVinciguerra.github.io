import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"Experience\n"}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                <Card
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  } p-6 bg-card border-border`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">{job.position}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.period}</p>
                    </div>

                    <p className="text-muted-foreground text-pretty">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
