export enum ChainId {
  MAINNET = 1,
  ARBITRUM = 42161
}
export type AddressType = `0x${string}`
export type AccountType = AddressType

export type ChainIdRec = {
  [ChainId.MAINNET]?: string | Record<string, any>
  [ChainId.ARBITRUM]: string | Record<string, any>
}
export interface AddressRec {
  [ChainId.MAINNET]: AddressType
  [ChainId.ARBITRUM]: AddressType
}

export type MultiCallResponse<T> = T | null

export type ContractKeys =
  | 'ACProtocol'
  | 'AllProtocol'
  | 'VaultReader'
  | 'AUMStats'
  | 'VaultFactory'
  | 'RewardTracker'
  | 'UniV3ACL'
  | 'UniV3NonfungiblePosition'
  | 'AaveV3Position'
  | 'GMXTradePosition'
  | 'GMXEarnPosition'

export type TokenKeys = 'USDC' | 'WETH' | 'ETH' | 'WBTC'

export interface TokenBuildTypes {
  name: string
  symbol: string
  address: AddressRec
  decimals: number
  precision: number
  projectLink?: string
  icon?: string
}

export interface TokenConfigTypes {
  name: string
  symbol: string
  decimals: number
  precision: number
  address: AddressType
}
