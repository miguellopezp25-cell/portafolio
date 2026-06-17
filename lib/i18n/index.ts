import type { Lang, Translations } from "./types";
import { es } from "./es";
import { en } from "./en";

export type { Lang, Translations };
export const translations: Record<Lang, Translations> = { es, en };
export const defaultLang: Lang = "es";
