"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div
            className={`text-center space-y-3 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Contato
            </h2>

            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />

            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Estou aberta a novos desafios e oportunidades em desenvolvimento
              de software. Entre em contato para conversarmos sobre projetos,
              oportunidades profissionais ou possíveis colaborações.
            </p>
          </div>

          <Card
            className={`p-6 md:p-8 text-center space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Vamos conversar?
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Caso tenha interesse em conhecer meu trabalho ou conversar
                sobre uma oportunidade, ficarei à disposição.
              </p>
            </div>

            <Button
              size="lg"
              asChild
              className="transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:thayanneoliveira2002@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Entrar em contato
              </a>
            </Button>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Conecte-se comigo
              </p>

              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/ThaayOliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/thayanne-oliveira-b3661620a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Card>

          <footer
            className={`text-center pt-2 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Thayanne Oliveira
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}