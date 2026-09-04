"use client"

const experiences = [
  {
    title: "Senior Full Stack Developer & DevOps",
    company: "ZDOC",
    period: "2024 — Present",
    description:
      "Atuação no desenvolvimento e evolução de sistemas de ponta a ponta, participando da análise de requisitos, definição de soluções técnicas, arquitetura, desenvolvimento, testes, implantação e manutenção das aplicações. Desenvolvimento de APIs e serviços back-end utilizando Java com Spring Boot, C#/.NET, Kotlin e Python, com implementação de regras de negócio, integrações entre sistemas e persistência de dados. No front-end, desenvolvimento de aplicações modernas e escaláveis utilizando Next.js, React e TypeScript, com foco em arquitetura de componentes, integração com APIs, performance e manutenibilidade. Atuação em DevOps com Docker, Kubernetes, GitHub Actions e ArgoCD, implementando pipelines de CI/CD e automatizando processos de build, testes e deploy. Também contribuo com decisões técnicas, revisão de código, definição de boas práticas, resolução de problemas e evolução das soluções em produção.",
    technologies: [
      "Java",
      "Spring Boot",
      "C# / .NET",
      "Kotlin",
      "Python",
      "Next.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "ArgoCD",
      "PostgreSQL",
    ],
  },
  {
    title: "Pleno Front-end Developer",
    company: "TAOS STUDIO",
    period: "2022 — 2023",
    description:
      "Desenvolvimento e manutenção de sites, landing pages e aplicações web utilizando React, Next.js e JavaScript, com foco em performance, responsividade, acessibilidade e experiência do usuário. Atuação na implementação de interfaces a partir de layouts e protótipos, criação de componentes reutilizáveis e integração das aplicações com diferentes serviços. Também trabalhei com WordPress e Elementor no desenvolvimento de soluções personalizadas de acordo com os requisitos e identidade visual de cada projeto.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "WordPress",
      "Elementor",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Freelancer",
    period: "2022 — 2023",
    description:
      "Desenvolvimento de sites e aplicações web responsivos para diferentes clientes, atuando desde a implementação das interfaces até a entrega das soluções. Colaboração com designers na transformação de layouts em interfaces funcionais e responsivas, com atenção à experiência do usuário, consistência visual e qualidade da implementação.",
    technologies: [
      "React",
      "JavaScript",
      "WordPress",
      "Elementor",
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experiences"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
            Experiência
          </h2>

          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>

              <div className="md:col-span-3 space-y-4">
                <h3 className="text-foreground font-medium">
                  {exp.title}{" "}
                  <span className="text-primary">
                    · {exp.company}
                  </span>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background text-primary border border-primary/20 cursor-default transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
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
    </section>
  )
}