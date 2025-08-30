import { Card } from "@/components/ui/card"
import { personalInfo } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{personalInfo.about}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-card border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years of experience</div>
                </div>
              </Card>
              
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center">
              <img
                src="/Selfie.jpg"
                alt="Ezequiel Vinciguerra"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
