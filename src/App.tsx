import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from '@@/web/Footer'
import Header from '@@/web/Header'

import About from '@/pages/About'
import Balance from '@/pages/Balance'
import Home from '@/pages/Home'

const App: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
