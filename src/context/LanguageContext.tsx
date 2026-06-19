"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { LANGUAGES, getLang, type LangCode } from "@/lib/languages";
import { getTranslations, type Strings } from "@/lib/translations";

interface LanguageContextType {
  lang: LangCode;
  changeLang: (code: LangCode) => void;
  t: Strings;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  changeLang: () => {},
  t: getTranslations("en"),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nm_lang") as LangCode | null;
    if (stored && LANGUAGES.some((l) => l.code === stored)) {
      applyLang(stored);
      setLang(stored);
    }
  }, []);

  function applyLang(code: LangCode) {
    const l = getLang(code);
    document.documentElement.lang = code;
    document.documentElement.dir = l.dir;
  }

  function changeLang(code: LangCode) {
    setLang(code);
    localStorage.setItem("nm_lang", code);
    applyLang(code);
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t: getTranslations(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
