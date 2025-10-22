"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Junior Fullstack Developer",
    company: "ZDOC",
    period: "2024 — Present",
    description:
      "I have worked on the development of complete systems using different stacks, such as PHP with Laravel, participating in everything from data modeling to the delivery of complex functionalities. I developed robust solutions with Java (Spring Boot) on the back-end, and with TypeScript, React, and Next.js on the front-end, building modern, responsive, and scalable applications. In addition, I implemented CI/CD pipelines using GitHub Actions to automate testing and deployment processes, and utilized Kubernetes and ArgoCD to manage and automate application deployments, ensuring reliability and scalability in production environments. Additionally, I handled other demands with a focus on data analysis, utilizing Power BI to create interactive dashboards, customized reports, and generate strategic insights to support decision-making. To complement my technical background, I completed courses focused on microdata processing and the R programming language, enhancing my ability to work with large volumes of data and perform statistical analysis.",
    technologies: ["React", "Java", "PostgreSQL", "Javascript", "Docker", "PHP", "Python", "Next.js", "Kubernetes", "Argo", "Power BI", "Github Actions"],
  },
  {
    title: "Front-end Developer",
    company: "TAOS STUDIO",
    period: "2022 — 2023",
    description:
      "Built and maintained websites and landing pages focused on performance and user experience, using React, Next.js, JavaScript, and WordPress with Elementor to create visually appealing and functional interfaces aligned with clients needs and branding.",
    technologies: ["Next.js", "React", "Wordpress Elementor"],
  },
  {
    title: "Front-end Developer",
    company: "Freelancer",
    period: "2022 - 2023",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.",
    technologies: ["React", "Javascript", "Wordpress Elementor"],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-28 px-6 bg-muted/30 scroll-mb-40">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
