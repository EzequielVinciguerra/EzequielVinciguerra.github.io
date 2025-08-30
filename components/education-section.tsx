import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/data"

export function EducationSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Educación</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">{education.degree}</h3>
              <p className="text-primary font-medium">{education.institution}</p>
              <p className="text-sm text-muted-foreground">{education.status}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
