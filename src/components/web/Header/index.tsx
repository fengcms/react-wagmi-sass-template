import { FC } from 'react'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import ALink from '@@/core/ALink'

const Header: FC = () => {
  return (
    <div className="c-header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <ALink to="/">Home</ALink>
            <ALink to="/about">About</ALink>
          </li>
          <li></li>
        </ul>
      </nav>
      <ConnectButton />
    </div>
  )
}

export default Header
