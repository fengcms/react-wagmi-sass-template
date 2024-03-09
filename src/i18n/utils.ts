import { Resource } from 'i18next'

import { languageOptionConfig } from '@/i18n/config'
import { LanguageCodeTypes, LanguageConfigTypes, LanguageSectionTypes } from '@/types/i18n'

export const makeLanguageConfig = (files: any, langKey: LanguageCodeTypes): LanguageConfigTypes => {
  const filesKeys = Object.keys(files)
  const translation = filesKeys.reduce((init: any, path) => {
    const { section, dicts } = files[path] as LanguageSectionTypes
    init[section] = dicts
    return init
  }, {})

  return { desc: languageOptionConfig[langKey], translation }
}

export const makeLangResources = (files: any): Resource => {
  const filesKeys = Object.keys(files)
  const resources = filesKeys.reduce((init: any, path) => {
    const {
      desc: { code },
      translation
    } = files[path] as LanguageConfigTypes
    init[code] = { translation }
    return init
  }, {})

  return resources
}
