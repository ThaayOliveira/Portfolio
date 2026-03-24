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
    <section id="about" ref={sectionRef} className="py-32 px-6 scroll-mb-40">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre mim</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou desenvolvedora de software com 5 anos de experiência. Desenvolvedora Full Stack, atualmente cursando Ciência da Computação.
              </p>
              <p>
                Atualmente, meu foco principal é construir produtos acessíveis que atendam às necessidades dos clientes e garantam satisfação com meu trabalho.
              </p>

            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Java",
                  "C# .NET",
                  "PHP Laravel",
                  "C",
                  "C++",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Oracle",
                  "Supabase",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "Kubernetes",
                  "Power BI",
                ].map((tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-accent">▹</span>
                    {tech}
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

