import { FC } from 'react'
import styles from './CheckBox.module.scss'

interface IProps {
  active: boolean
}

const CheckBox: FC<IProps> = ({ active }) => {
  return (
    <section
      data-testid='checkbox'
      className={active ? styles.container__active : styles.container}
    >
      <img src='/assets/images/check.svg' />
    </section>
  )
}

export default CheckBox
