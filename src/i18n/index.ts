import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { LANGUAGE_CACHE_KEY } from '@/config'
import { languageOptionConfig } from '@/i18n/config'
import { makeLangResources } from '@/i18n/utils'
import { LanguageCodeTypes } from '@/types/i18n'

export const languages = Object.values(languageOptionConfig)

const files = import.meta.glob(['./languages/*.ts'], { eager: true, import: 'default' })
const resources = makeLangResources(files)

export const fallbackLng = (localStorage.getItem(LANGUAGE_CACHE_KEY) ?? 'en') as LanguageCodeTypes

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
