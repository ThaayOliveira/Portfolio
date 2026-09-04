"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
          className={`space-y-12 transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          {/* Título */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre mim
            </h2>

            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Descrição */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou desenvolvedora Full Stack Sênior, com 5 anos de experiência
                no desenvolvimento de software e foco em Java, C#/.NET,
                Kotlin, Python, Next.js e TypeScript.
              </p>

              <p>
                Atuo no desenvolvimento de aplicações de ponta a ponta,
                participando desde a análise de requisitos e definição da
                arquitetura até a implementação, testes, implantação e
                evolução dos sistemas.
              </p>

              <p>
                Também atuo diretamente com práticas de DevOps, trabalhando
                com Docker, Kubernetes, GitHub Actions e ArgoCD para automação
                de CI/CD, implantação e gerenciamento de aplicações.
              </p>

              <p>
                Contribuo com decisões técnicas, arquitetura, revisão de
                código, definição de boas práticas e resolução de problemas,
                além de colaborar e apoiar a evolução da equipe.
              </p>
            </div>

            {/* Tecnologias */}
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Principais tecnologias e ferramentas com as quais trabalho:
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