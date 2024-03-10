import { useAccount } from 'wagmi'

import { DEFAULT_CHAIN_ID } from '@/config'
import { tokens } from '@/config/tokens'
import { AddressType, TokenConfigTypes, TokenTypes } from '@/types/base'

export const useCurrChainID = (): number => {
  const { chainId } = useAccount()
  return chainId ?? DEFAULT_CHAIN_ID
}

export const useTokens = (): TokenTypes[] => {
  const chainId = useCurrChainID()
  return tokens.map((token: TokenConfigTypes) => ({
    ...token,
    // @ts-ignore
    address: token.address[chainId]
  }))
}

export const useToken = (keywords: string | AddressType, type?: 'address' | 'name' | 'symbol') => {
  const tokens = useTokens()
  const token = tokens.find((token: TokenTypes) => token[type ?? 'address'] === keywords)
  return token
}
