import styles from './BottomLine.module.scss'
import logo from '../../../assets/images/logo.png'
import { FC } from 'react'
import HeaderSelect from '../HeaderSelect'
import { title } from '../../../constant/Link'

const BottomLine: FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <img className={styles.logo} src={logo} alt='logo' />
        {title.map((item) => (
          <div key={item.name}>
            <HeaderSelect title={item} />
          </div>
        ))}
        <button className={styles.add__button}>+ Разместить объявление</button>
      </ul>
    </nav>
  )
}

export default BottomLine
