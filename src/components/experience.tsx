"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Fullstack Developer",
    company: "ZDOC",
    period: "2024 — Present",
    description:
      "Atuei no desenvolvimento de sistemas completos utilizando diferentes stacks de tecnologia, como PHP com Laravel, participando de todas as etapas — desde a modelagem de dados até a entrega de funcionalidades complexas. Desenvolvi soluções robustas no back-end com Java (Spring Boot) e construí aplicações modernas, responsivas e escaláveis no front-end utilizando TypeScript, React e Next.js. Além disso, implementei pipelines de CI/CD com GitHub Actions para automatizar processos de testes e deploy, e utilizei Kubernetes e ArgoCD para gerenciar e automatizar a implantação de aplicações, garantindo confiabilidade e escalabilidade em ambientes de produção. Também atuei em demandas com foco em análise de dados, utilizando Power BI para criar dashboards interativos, relatórios personalizados e gerar insights estratégicos para apoiar a tomada de decisão. Para complementar minha base técnica, concluí cursos com foco em processamento de microdados e na linguagem R, ampliando minha capacidade de trabalhar com grandes volumes de dados e realizar análises estatísticas.",
    technologies: ["React", "Java", "PostgreSQL", "Javascript", "Docker", "PHP", "Python", "Next.js", "Kubernetes", "Argo", "Power BI", "Github Actions"],
  },
  {
    title: "Front-end Developer",
    company: "TAOS STUDIO",
    period: "2022 — 2023",
    description:
      "Construção e manutenção de sites e landing pages com foco em performance e experiência do usuário, utilizando React, Next.js, JavaScript e WordPress com Elementor para criar interfaces visualmente atraentes, funcionais e alinhadas às necessidades e identidade visual dos clientes.",
    technologies: ["Next.js", "React", "Wordpress Elementor"],
  },
  {
    title: "Front-end Developer",
    company: "Freelancer",
    period: "2022 - 2023",
    description:
      "Desenvolvimento de sites e aplicações web responsivos para diversos clientes. Colaboração com designers para criar implementações ao design, com atenção aos mínimos detalhes.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experiência</h2>
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
