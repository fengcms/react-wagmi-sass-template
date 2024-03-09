import { makeLanguageConfig } from '@/i18n/utils'

const files = import.meta.glob('./zh/*.ts', { eager: true, import: 'default' })

const languageConfig = makeLanguageConfig(files, 'zh')

export default languageConfig
