"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portal de Serviços",
    description:
      "Statewide service management system developed to organize and evaluate public services across multiple government agencies and categories. The platform allows centralized control of registered institutions, service types, and performance indicators, enabling data-driven assessments enhanced by Google Analytics integration. Designed with scalability and usability in mind, the system streamlines the monitoring of service quality and supports decision-making processes aimed at improving public management efficiency.",
    image: "/portal-de-servicos.png",
    technologies: ["Next.js", "Java", "PostgreSQL", "Typescript", "Docker", "Kubernetes", "Argo", "Github Actions", "Pyhton"],
    // github: "https://github.com",
    // demo: "https://example.com",
  },
  {
    title: "Locadora",
    description:
      "Collaborative task management application with real-time updates and team workspaces, developed as part of a rental store system designed to manage both new and classic movies and games. The platform includes a shopping cart system for purchasing titles, as well as user account creation and management features, providing a complete experience for browsing, renting, and buying entertainment content.",
    image: "/locadora.png",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "AWS"],
    // github: "https://github.com/ThaayOliveira/projeto-locadora",
    // demo: "vercel",
  },
  {
    title: "Macros - Contador de Calorias",
    description:
      "Mobile application developed with React Native and Firebase, designed to promote health and well-being within the community. The app calculates the Basal Metabolic Rate (BMR), Body Mass Index (BMI), and provides a personalized meal distribution plan, helping users define and track their goals effectively. With an intuitive interface and real-time data storage through Firebase, the project aims to simplify health monitoring and encourage healthier lifestyle habits.",
    image: "/macros-telas.png",
    technologies: ["React native", "Firebase", "Typescript"],
    // github: "https://github.com",
    // demo: "vercel",
  },
  {
    title: "Power BI",
    description:
      "Real-time analytics dashboard designed to track and visualize key business metrics. Developed using Power BI for dynamic data visualization and automated reporting, integrating data from PostgreSQL and Oracle databases through Python scripts for seamless updates and process automation. The user interface and layout were carefully designed in Figma, ensuring a clean, intuitive, and responsive experience for end users.",
    image: "/power-bi.png",
    technologies: ["Power BI", "Oracle", "Python", "Figma"],
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-accent/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
                    {/* <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}