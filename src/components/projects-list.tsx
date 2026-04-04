import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
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
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-black">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}