import { createConfig, http } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  tokenPocketWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, okxWallet, tokenPocketWallet, injectedWallet, coinbaseWallet, walletConnectWallet]
    }
  ],
  {
    appName: 'MyDapp',
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
  }
)

export const config = createConfig({
  chains: [mainnet, arbitrum],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http()
  }
})
