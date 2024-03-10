import { ChainId } from '@/config'

export type AddressType = `0x${string}`

export interface AddressRec {
  [ChainId.MAINNET]: AddressType
  [ChainId.ARBITRUM]: AddressType
}

export interface TokenConfigTypes {
  name: string
  symbol: string
  address: AddressRec
  decimals: number
  precision: number
  projectLink?: string
  icon?: string
}

export interface TokenTypes {
  name: string
  symbol: string
  address: AddressType
  decimals: number
  precision: number
  projectLink?: string
  icon?: string
}
