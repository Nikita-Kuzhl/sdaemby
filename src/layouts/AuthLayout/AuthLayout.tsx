import { FC } from 'react'
import ILayoutProps from '../@types'
import styles from './AuthLayout.module.scss'

const AuthLayout: FC<ILayoutProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>
}

export default AuthLayout
