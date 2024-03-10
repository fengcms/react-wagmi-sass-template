import { FC } from 'react'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

const Home: FC = () => {
  const account = useAccount()
  const { status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2>Home</h2>
        <h3>Account</h3>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>
      <div>
        <h3>Connect</h3>
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default Home
