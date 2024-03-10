import { FC } from 'react'

import { useTokens, useUserBalances } from '@/hooks/useToken'

const Balance: FC = () => {
  // console.log(tokens)
  const tokens = useTokens()
  const { balances } = useUserBalances()
  return (
    <div>
      <h3>Tokens</h3>
      <pre>{JSON.stringify(tokens, null, 2)}</pre>
      <br />
      <h3>Balance</h3>
      <pre>{JSON.stringify(balances, null, 2)}</pre>
    </div>
  )
}

export default Balance
