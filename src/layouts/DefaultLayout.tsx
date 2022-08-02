import { FC, ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface ILayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
