import { langDesc } from '@/i18n/config'
import { LangConfigTypes, LangSectionTypes } from '@/types/i18n'

const files = import.meta.glob('./zh/*.ts', { eager: true, import: 'default' })
const filesKeys = Object.keys(files)
const translation = filesKeys.reduce((init: any, path) => {
  const { section, dicts } = files[path] as LangSectionTypes
  init[section] = dicts
  return init
}, {})

const lang: LangConfigTypes = { desc: langDesc['zh'], translation }
export default lang
