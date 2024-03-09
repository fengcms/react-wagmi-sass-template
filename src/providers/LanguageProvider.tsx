import { FC, ReactNode, createContext, useState } from 'react'

import { fallbackLng } from '@/i18n'
import { LanguageCodeTypes } from '@/types/i18n'

export const LanguageContext = createContext({
  currLanguageCode: fallbackLng,
  changeLanguage: (_: LanguageCodeTypes) => null
})

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currLanguageCode, setCurrLanguageCode] = useState<LanguageCodeTypes>(fallbackLng)
  const changeLanguage = (code: LanguageCodeTypes) => {
    setCurrLanguageCode(code)
    return null
  }

  return <LanguageContext.Provider value={{ currLanguageCode, changeLanguage }}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
