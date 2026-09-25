"use client"

import { useLanguage } from "@/context/LanguageContext"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experience.jobs.zdoc.title,
      company: "ZDOC",
      period: t.experience.jobs.zdoc.period,
      description: t.experience.jobs.zdoc.description,
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
      title: t.experience.jobs.taos.title,
      company: "TAOS STUDIO",
      period: t.experience.jobs.taos.period,
      description: t.experience.jobs.taos.description,
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "WordPress",
        "Elementor",
      ],
    },
    {
      title: t.experience.jobs.freelancer.title,
      company: "Freelancer",
      period: t.experience.jobs.freelancer.period,
      description: t.experience.jobs.freelancer.description,
      technologies: [
        "React",
        "JavaScript",
        "WordPress",
        "Elementor",
      ],
    },
  ]

  return (
    <section
      id="experiences"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
            {t.experience.title}
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