import { LangDescTypes, LangKeyTypes } from '@/types/i18n'

export const langDesc: { [key in LangKeyTypes]: LangDescTypes } = {
  en: {
    name: 'English',
    code: 'en'
  },
  zh: {
    name: '简体中文',
    code: 'zh'
  }
}
