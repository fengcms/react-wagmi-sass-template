export type LanguageCodeTypes = 'en' | 'zh'

export interface LanguageOptionTypes {
  name: string
  code: LanguageCodeTypes
}

export interface LanguageSectionTypes {
  section: string
  dicts: any
}

export interface LanguageConfigTypes {
  desc: LanguageOptionTypes
  translation: any
}
