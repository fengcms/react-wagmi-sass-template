import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { coinbaseWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'
import { createConfig, http } from 'wagmi'
import { arbitrum, goerli, mainnet } from 'wagmi/chains'

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [coinbaseWallet, walletConnectWallet]
    }
  ],
  {
    appName: 'MyDapp',
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
  }
)

export const config = createConfig({
  chains: [mainnet, arbitrum, goerli],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [goerli.id]: http()
  }
})

// export const config = getDefaultConfig({
//   connectors,
//   appName: 'MyDapp',
//   projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
//   chains: [mainnet, polygon, optimism, arbitrum, base, zora],
//   ssr: false
// })
