import { FC, ReactNode } from 'react'

import { WagmiProvider } from 'wagmi'

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { config } from '@/config/wagmi'

const queryClient = new QueryClient()

const DappProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en"
          theme={darkTheme()}
          appInfo={{
            learnMoreUrl: 'https://ethereum.org/en/learn/'
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default DappProvider
