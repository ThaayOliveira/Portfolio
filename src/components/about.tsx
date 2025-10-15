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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Thayanne, a Full Stack Developer passionate about creating innovative solutions for the web. My journey in web development started back in 2022, when I decided to build my first website. 
                Since then, I’ve been continuously working and improving my skills by learning and mastering new technologies.
              </p>
              <p>
                My main focus these days is building accessible products to meet the demand of customers who are satisfied with my work.
              </p>
              <p>
                Always seeking to improve and move forward with technologies.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Java",
                  "PHP",
                  "C",
                  "C++",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "SQL",
                  "Firebase",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
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

