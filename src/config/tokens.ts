import { zeroAddress } from 'viem'

import { ChainId } from '@/config'
import { TokenConfigTypes } from '@/types/base'

export const ZERO_ADDRESS = zeroAddress

export const ethConfig: TokenConfigTypes = {
  name: 'ETH',
  symbol: 'ETH',
  address: {
    [ChainId.MAINNET]: ZERO_ADDRESS,
    [ChainId.ARBITRUM]: ZERO_ADDRESS
  },
  decimals: 18,
  precision: 4,
  icon: 'symbol/eth.svg'
}

export const tokens: TokenConfigTypes[] = [
  ethConfig,
  {
    name: 'WETH',
    symbol: 'WETH',
    address: {
      [ChainId.MAINNET]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
    },
    decimals: 18,
    precision: 4,
    icon: 'symbol/weth.svg'
  },
  {
    name: 'WBTC',
    symbol: 'WBTC',
    address: {
      [ChainId.MAINNET]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      [ChainId.ARBITRUM]: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f'
    },
    decimals: 8,
    precision: 4,
    icon: 'symbol/wbtc.png'
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    address: {
      [ChainId.MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      [ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
    },
    decimals: 6,
    precision: 2,
    icon: 'symbol/usdc.svg'
  }
]

export default tokens
