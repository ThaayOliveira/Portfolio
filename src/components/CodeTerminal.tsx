"use client"

import { useEffect, useState } from "react"

const lines = [
  {
    key: "role",
    value: '"Senior Full Stack Developer"',
  },
  {
    key: "backend",
    value: '["Java", "Spring Boot", "C#/.NET", "Kotlin", "Python"]',
  },
  {
    key: "frontend",
    value: '["Next.js", "TypeScript"]',
  },
  {
    key: "cloud",
    value: '["AWS"]',
  },
  {
    key: "devops",
    value: '["Docker", "Kubernetes", "CI/CD"]',
  },
]

export function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = lines.map((_, index) =>
      setTimeout(() => {
        setVisibleLines(index + 1)
      }, 800 + index * 700),
    )

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="hidden md:flex items-center justify-center">
      <div className="relative w-full max-w-xl">

        <div className="absolute -inset-8 rounded-3xl bg-purple-500/10 blur-[110px]" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl">

          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />

            <span className="ml-3 text-xs text-white/35">
              developer.ts
            </span>
          </div>

          <div className="min-h-[340px] px-6 py-6 font-mono text-sm leading-7">

            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-white">developer</span>{" "}
              <span className="text-white/50">=</span>{" "}
              <span className="text-yellow-300">{"{"}</span>
            </div>

            {lines.map((line, index) => {
              const isVisible = index < visibleLines

              return (
                <div
                  key={line.key}
                  className={`
                    ml-5
                    transition-opacity
                    duration-[1200ms]
                    ease-out
                    ${isVisible ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <span className="text-blue-300">
                    {line.key}
                  </span>

                  <span className="text-white/40">
                    :
                  </span>{" "}

                  <span className="text-green-300/90">
                    {line.value}
                  </span>

                  <span className="text-white/40">
                    ,
                  </span>
                </div>
              )
            })}

            <div className="mt-1">
              <span className="text-yellow-300">
                {"}"}
              </span>

              <span className="ml-2 animate-pulse text-purple-400/70">
                ▋
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-3">
            <div className="flex items-center gap-2 text-xs text-white/35">
              <span className="h-2 w-2 rounded-full bg-green-400/70 animate-pulse" />

              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}