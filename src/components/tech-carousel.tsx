"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPython,
  SiNestjs,
  SiDotnet
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FaAws } from "react-icons/fa"

export function TechCarousel() {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws , color: "#FF9900" },
    { name: "C# .NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ]

  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="py-8 overflow-hidden bg-secondary/30 border-y border-border/30">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll">
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 px-6"
              >
                <div className="group flex flex-col items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-border hover:scale-105 hover:shadow-lg cursor-default">
                  <div
                    className="p-3 rounded-lg bg-secondary/50 transition-all duration-300 group-hover:scale-110"
                    style={{
                      '--hover-color': tech.color
                    } as React.CSSProperties}
                  >
                    <IconComponent
                      className="w-8 h-8 text-muted-foreground transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-foreground">
                    {tech.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
