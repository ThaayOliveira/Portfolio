"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Java",
      "Spring Boot",
      "C# / .NET",
      "Kotlin",
      "Python",
      "Node.js",
      "PHP",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "ArgoCD",
      "Linux",
      "Grafana",
      "Prometheus",
      "Zabbix",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Wrench,
    skills: [
      "PostgreSQL",
      "Oracle",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Git",
      "Power BI",
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
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
    <section id="skills" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>

            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon

              return (
                <Card
                  key={category.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                >
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}