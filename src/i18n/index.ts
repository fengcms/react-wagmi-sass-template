import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { LANG_CACHE_KEY } from '@/config'
import { langDesc } from '@/i18n/config'
import { LangConfigTypes } from '@/types/i18n'

export const languages = Object.values(langDesc)

const files = import.meta.glob(['./langs/*.ts'], { eager: true, import: 'default' })
const filesKeys = Object.keys(files)
const resources = filesKeys.reduce((init: any, path) => {
  const {
    desc: { code },
    translation
  } = files[path] as LangConfigTypes
  init[code] = { translation }
  return init
}, {})

export const fallbackLng = localStorage.getItem(LANG_CACHE_KEY) ?? 'en'

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  interpolation: {
    escapeValue: false
  }
} as any)

export default i18n
