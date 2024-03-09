import { useEffect, useMemo } from 'react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { LANGUAGE_CACHE_KEY } from '@/config'
import { languages } from '@/i18n'
import { LanguageContext } from '@/providers/LanguageProvider'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const { currLanguageCode, changeLanguage } = useContext(LanguageContext)
  const currLanguage = useMemo(() => languages.find((item) => item.code === currLanguageCode), [currLanguageCode])
  useEffect(() => {
    i18n.changeLanguage(currLanguageCode)
    localStorage.setItem(LANGUAGE_CACHE_KEY, currLanguageCode)
  }, [currLanguageCode])
  return { currLanguageCode, currLanguage, changeLanguage }
}

export default useLanguage
