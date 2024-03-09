import { makeLanguageConfig } from '@/i18n/utils'

const files = import.meta.glob('./en/*.ts', { eager: true, import: 'default' })

const languageConfig = makeLanguageConfig(files, 'en')

export default languageConfig
