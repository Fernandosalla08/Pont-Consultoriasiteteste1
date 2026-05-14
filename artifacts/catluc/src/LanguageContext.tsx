import { createContext, useContext, useState } from "react";
import { translations, type Lang, type T } from "./translations";

interface LanguageCtx { lang: Lang; setLang: (l: Lang) => void; t: T }

const LanguageContext = createContext<LanguageCtx>({ lang: "pt", setLang: () => {}, t: translations.pt });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

export const flags: { lang: Lang; flag: string; label: string }[] = [
  { lang: "pt", flag: "🇧🇷", label: "PT" },
  { lang: "en", flag: "🇺🇸", label: "EN" },
  { lang: "es", flag: "🇪🇸", label: "ES" },
  { lang: "de", flag: "🇩🇪", label: "DE" },
];
