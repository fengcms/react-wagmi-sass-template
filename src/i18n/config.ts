import { LanguageCodeTypes, LanguageOptionTypes } from '@/types/i18n'

export const languageOptionConfig: { [key in LanguageCodeTypes]: LanguageOptionTypes } = {
  en: {
    name: 'English',
    code: 'en'
  },
  zh: {
    name: '简体中文',
    code: 'zh'
  }
}
