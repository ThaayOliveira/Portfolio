"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12">
          <div
            className={`text-center space-y-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
          </div>

          <Card
            className={`p-8 md:p-12 text-center space-y-8 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I’m currently looking for new challenges and opportunities to grow as a developer. Whether you’d like to discuss a potential project, have a question, or simply wish to connect, feel free to reach out. I’ll be glad to respond as soon as possible.
            </p>

            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <a href="mailto:thayanneoliveira2002@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Say Hello
              </a>
            </Button>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Or find me on</p>
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
            className={`text-center pt-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-muted-foreground">© 2025 Thayanne Oliveira</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
