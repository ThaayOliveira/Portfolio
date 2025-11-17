"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { CircularText } from "@/components/circular-text-hero"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Full Stack Developer"

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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 background-gradient-text-accent">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-12">
          <div
            className={`flex-1 space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <p className="text-accent text-sm font-mono">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">Thayanne Oliveira</h1>
              <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground text-balance">
                {displayedText}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm a Full Stack Developer focused on designing and building scalable, high-performance web applications
              using modern technologies. I work across both front-end and back-end development to deliver complete,
              efficient solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4 pb-4">
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

          <div className="hidden md:flex w-[280px] justify-end">
            <CircularText />
          </div>
        </div>

        <div className="absolute sm:bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
