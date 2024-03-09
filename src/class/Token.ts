// import { getAddress } from '@ethersproject/address'
// import { VITE_APP_CHAIN_ID } from '@/config'
import { getAccount } from '@wagmi/core'

import { config } from '@/config/wagmi'
import { AddressRec, AddressType, ChainId, TokenBuildTypes } from '@/types/base'

export const getAddress = (address: AddressRec): AddressType => {
  const account = getAccount(config)
  const chainId = account.chainId ?? ChainId.ARBITRUM
  console.log('chainId', account, chainId)
  // @ts-ignore
  const _address = address[chainId] ?? address[ChainId.ARBITRUM]
  return _address
}

class Token {
  readonly name: string
  readonly symbol: string
  readonly address: AddressType
  readonly decimals: number
  readonly precision: number
  readonly projectLink?: string
  readonly icon: string

  constructor({ name, symbol, address, decimals = 18, precision = 4, projectLink = '', icon = '' }: TokenBuildTypes) {
    this.name = name
    this.symbol = symbol
    this.address = getAddress(address)
    this.decimals = decimals
    this.precision = precision
    this.projectLink = projectLink
    this.icon = icon
  }
}

export default Token
