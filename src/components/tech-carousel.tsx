"use client"

export function TechCarousel() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "◆" },
    { name: "Java", icon: "☕" },
    { name: "PHP", icon: "🐘" },
    { name: "NestJS", icon: "🦅" },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "C# .NET", icon: "🔷" },
    { name: "Python", icon: "🐍" },
  ]

 const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="py-8 overflow-hidden bg-black/40 border-y border-border/50">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll w-[200%]">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8 py-4 mx-4"
            >
              <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-lg font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
