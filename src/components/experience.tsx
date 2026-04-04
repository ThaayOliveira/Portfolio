"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Fullstack Developer e DevOps",
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
  return (
    <section id="experiences" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
            Experiência
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-4 gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div className="md:col-span-3 space-y-3">
                <h3 className="text-foreground font-medium">
                  {exp.title} ·{" "}
                  <span className="text-primary inline-flex items-center gap-1">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background text-primary border border-primary/20 cursor-default transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
