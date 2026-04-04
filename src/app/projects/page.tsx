import { ProjectsList } from "@/components/projects-list"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-6xl space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold pt-10">
          Projetos
        </h1>

        <ProjectsList projects={projects} />
      </div>
    </main>
  )
}