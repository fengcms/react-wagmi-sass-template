import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import ALink from '@@/core/ALink'
import ConnectButton from '@@/core/Wallet/ConnectButton'
import SelectLanguage from '@@/web/Header/SelectLanguage'

const Header: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="c-header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <ALink to="/">{t('Header.Nav.Home')}</ALink>
            <ALink to="/about">{t('Header.Nav.About')}</ALink>
            <ALink to="/balance">{t('Header.Nav.Balance', 'Balance')}</ALink>
          </li>
          <li></li>
        </ul>
      </nav>
      <SelectLanguage />
      <ConnectButton />
    </div>
  )
}

export default Header
