"use client"

import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { useLanguage } from "@/context/LanguageContext"
import type { Project } from "@/data/projects"

type ProjectsListProps = {
  projects: Project[]
}

type ProjectLanguage = "pt" | "en"

export function ProjectsList({
  projects,
}: ProjectsListProps) {
  const { language } = useLanguage()

  const currentLanguage: ProjectLanguage =
    language === "pt" ? "pt" : "en"

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-accent/50 group"
        >
          <div className="relative overflow-hidden aspect-video bg-muted">
            <img
              src={project.image}
              alt={project.title[currentLanguage]}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold">
              {project.title[currentLanguage]}
            </h3>

            <p className="text-muted-foreground">
              {project.description[currentLanguage]}
            </p>

            <div className="flex flex-wrap gap-2 text-black">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}