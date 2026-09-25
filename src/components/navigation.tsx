"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useLanguage } from "@/context/LanguageContext"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experiences" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      setIsMobileMenuOpen(false)
      return
    }

    // Se não estiver na home
    if (pathname !== "/") {
      window.location.href = "/" + href
      return
    }

    e.preventDefault()
    setIsMobileMenuOpen(false)

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navHeight = 10
      const extraOffset = 3

      const targetPosition =
        targetElement.offsetTop - navHeight - extraOffset

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleLanguageChange = (newLanguage: "pt" | "en") => {
    setLanguage(newLanguage)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/#"
            className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfólio
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (!item.href.startsWith("#")) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[#e7d8d8d7] hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-[#e7d8d8d7] hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              )
            })}

            {/* Language switcher */}
            <div className="flex items-center gap-1 rounded-full border border-border bg-background/40 p-1">
              <button
                type="button"
                onClick={() => handleLanguageChange("pt")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  language === "pt"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                PT
              </button>

              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  language === "en"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-3 pb-4 flex flex-col gap-4 animate-fade-in bg-background rounded-lg px-4 border border-border">
            
            {navItems.map((item) => {
              if (!item.href.startsWith("#")) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                )
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </a>
              )
            })}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <span className="text-sm text-muted-foreground">
                Language:
              </span>

              <button
                type="button"
                onClick={() => handleLanguageChange("pt")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  language === "pt"
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground"
                }`}
              >
                PT
              </button>

              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  language === "en"
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}