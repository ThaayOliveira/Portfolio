"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type { ReactNode } from "react"

import {
  translations,
  type Language,
} from "@/i18n/translations"

type Translation = (typeof translations)[Language]

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "portfolio-language",
    ) as Language | null

    if (
      savedLanguage === "pt" ||
      savedLanguage === "en"
    ) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)

    localStorage.setItem(
      "portfolio-language",
      newLanguage,
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    )
  }

  return context
}