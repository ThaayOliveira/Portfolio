"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { CodeTerminal } from "./CodeTerminal"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  const fullText = "Senior Full Stack Developer"

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let index = 0

    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 120)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      className="
        relative
        min-h-[900px]
        md:min-h-screen
        flex
        items-center
        px-6
        pt-24
        pb-20
        overflow-hidden
        background-gradient-text-accent
      "
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          <div
            className={`
              w-full
              md:w-1/2
              space-y-8
              transition-all
              duration-1000
              ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }
            `}
          >
            <div className="space-y-4">
              <p className="text-accent text-sm font-mono">
                Olá, meu nome é
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Thayanne Oliveira
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground text-balance min-h-[48px]">
                {displayedText}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Especialista em desenvolvimento de software com foco em Java, C#/.NET, Kotlin, Python, Next.js e TypeScript. Atuo na construção de soluções escaláveis de ponta a ponta, arquitetura de aplicações, integração de sistemas e automação com práticas de DevOps e CI/CD.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  Ver Projetos
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:text-primary"
                asChild
              >
                <a href="#contact">
                  Contato
                </a>
              </Button>
            </div>

            <div className="flex gap-6 pt-2">
              <a
                href="https://github.com/ThaayOliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/thayanne-oliveira-b3661620a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="mailto:thayanneoliveira2002@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div
            className={`
              hidden
              md:flex
              w-full
              md:w-1/2
              justify-center
              lg:justify-end
              items-center
              relative
              transition-all
              duration-1000
              delay-300
              ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
              }
            `}
          >
            {/* Glow */}
            <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 w-full flex justify-center lg:justify-end">
              <CodeTerminal />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}