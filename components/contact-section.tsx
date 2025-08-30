"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll contact you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Talk!</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                I'm always open to new opportunities and interesting collaborations. If you have a project in mind or
                simply want to connect, don't hesitate to contact me.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 bg-card border-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-primary hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm" disabled>
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" disabled>
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-border min-h-[120px]"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
