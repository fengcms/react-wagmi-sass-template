import { FC } from 'react'

import { useToken, useTokens } from '@/hooks/useToken'

const Balance: FC = () => {
  // console.log(tokens)
  const tokens = useTokens()
  const token = useToken('USDC', 'name')
  console.log(tokens, token)
  return (
    <div>
      <p>Balance</p>
    </div>
  )
}

export default Balance
