export const LANGUAGES = [
  { code: "en", native: "English",            flag: "🇬🇧", dir: "ltr" },
  { code: "fr", native: "Français",           flag: "🇫🇷", dir: "ltr" },
  { code: "es", native: "Español",            flag: "🇪🇸", dir: "ltr" },
  { code: "pt", native: "Português",          flag: "🇧🇷", dir: "ltr" },
  { code: "de", native: "Deutsch",            flag: "🇩🇪", dir: "ltr" },
  { code: "it", native: "Italiano",           flag: "🇮🇹", dir: "ltr" },
  { code: "ru", native: "Русский",            flag: "🇷🇺", dir: "ltr" },
  { code: "tr", native: "Türkçe",             flag: "🇹🇷", dir: "ltr" },
  { code: "ar", native: "العربية",            flag: "🇸🇦", dir: "rtl" },
  { code: "zh", native: "中文",               flag: "🇨🇳", dir: "ltr" },
  { code: "ja", native: "日本語",             flag: "🇯🇵", dir: "ltr" },
  { code: "ko", native: "한국어",             flag: "🇰🇷", dir: "ltr" },
  { code: "hi", native: "हिन्दी",            flag: "🇮🇳", dir: "ltr" },
  { code: "id", native: "Bahasa Indonesia",   flag: "🇮🇩", dir: "ltr" },
  { code: "sw", native: "Kiswahili",          flag: "🇰🇪", dir: "ltr" },
  { code: "th", native: "ภาษาไทย",           flag: "🇹🇭", dir: "ltr" },
] as const;

export type LangCode = typeof LANGUAGES[number]["code"];

export function getLang(code: LangCode) {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}
