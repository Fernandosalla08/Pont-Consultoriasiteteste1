import { createContext, useContext, useState } from "react";
import { translations, type Lang, type T } from "./translations";

interface LanguageCtx { lang: Lang; setLang: (l: Lang) => void; t: T }

const LanguageContext = createContext<LanguageCtx>({ lang: "pt", setLang: () => {}, t: translations.pt });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

export const flags: { lang: Lang; flagUrl: string; label: string }[] = [
  { lang: "pt", flagUrl: "https://flagcdn.com/w40/br.png", label: "PT" },
  { lang: "en", flagUrl: "https://flagcdn.com/w40/us.png", label: "EN" },
  { lang: "es", flagUrl: "https://flagcdn.com/w40/es.png", label: "ES" },
  { lang: "de", flagUrl: "https://flagcdn.com/w40/de.png", label: "DE" },
];
