export type LangKeyTypes = 'en' | 'zh'

export interface LangDescTypes {
  name: string
  code: LangKeyTypes
}

export interface LangSectionTypes {
  section: string
  dicts: any
}

export interface LangConfigTypes {
  desc: LangDescTypes
  translation: any
}
