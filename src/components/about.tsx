"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)

  const { t } = useLanguage()

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

  const technologyGroups = [
    {
      title: "Backend",
      technologies: [
        "Java",
        "Spring Boot",
        "C# / .NET",
        "Kotlin",
        "Python",
      ],
    },
    {
      title: "Frontend",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "ArgoCD",
      ],
    },
    {
      title: "Databases",
      technologies: [
        "PostgreSQL",
        "Oracle",
      ],
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 scroll-mb-40"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Título */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.about.title}
            </h2>

            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Descrição */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t.about.description}
              </p>

              <p>
                {t.about.description2}
              </p>

              <p>
                {t.about.description3}
              </p>

              <p>
                {t.about.description4}
              </p>
            </div>

            {/* Tecnologias */}
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.technologiesDescription}
              </p>

              <div className="space-y-7">
                {technologyGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-3 text-sm font-semibold text-foreground">
                      {group.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {group.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-accent">▹</span>

                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}