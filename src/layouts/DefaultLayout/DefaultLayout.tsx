import { FC } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ILayoutProps from '../@types'

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
