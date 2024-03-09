import { ChangeEvent, FC } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { languages } from '@/i18n'
import { LanguageCodeTypes } from '@/types/i18n'

const SelectLanguage: FC = () => {
  const { currLanguageCode, changeLanguage } = useLanguage()
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as LanguageCodeTypes)
  }
  return (
    <select defaultValue={currLanguageCode} onChange={onChange}>
      {languages.map((item) => (
        <option key={item.code} value={item.code}>
          {item.name}
        </option>
      ))}
    </select>
  )
}
export default SelectLanguage
