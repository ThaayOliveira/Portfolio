import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { TechCarousel } from "@/components/tech-carousel"
import ClickSparkWrapper from "@/components/click-spark"

export default function Home() {
  return (
    <ClickSparkWrapper >
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <TechCarousel />
        <Projects />
        <Contact />
      </main>
    </ClickSparkWrapper>
  );
}
