import { FC } from 'react'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header: FC = () => {
  return (
    <div className="c-header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <ConnectButton />
    </div>
  )
}

export default Header
