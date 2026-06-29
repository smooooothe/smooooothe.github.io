import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import type { Language } from "../data/translations";

// Store the current language preference (default to Russian as primary)
export const languageStore = persistentAtom<Language>("preferred-language", "ru", {
  encode: (value) => value,
  decode: (value) => (value === "en" ? "en" : "ru"),
});

// Toggle between languages
export function toggleLanguage(): void {
  const current = languageStore.get();
  languageStore.set(current === "ru" ? "en" : "ru");
}

// Set language explicitly
export function setLanguage(lang: Language): void {
  languageStore.set(lang);
}
