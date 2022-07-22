import styles from './BottomLine.module.scss'
import logo from '../../../assets/images/logo.png'
import { FC } from 'react'
import Select from '../HeaderSelect'

const title = [
  { name: 'Квартиры на сутки', iconMap: true, href: '/', src: 'Квартиры на сутки в' },
  { name: 'Коттеджы и сауны', iconMap: false, href: '/', src: 'Коттеджи и усадьбы в' },
  { name: 'Бани и сауны', iconMap: false, href: '/', src: 'Бани и сауны в' },
  { name: 'Авто напрокат', iconMap: false, href: '/', src: 'Авто напрокат в' },
]
const BottomLine: FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <img className={styles.logo} src={logo} alt="logo" />
        {title.map((item) => (
          <div key={item.name}>
            <Select title={item} />
          </div>
        ))}
        <button className={styles.add__button}>+ Разместить объявление</button>
      </ul>
    </nav>
  )
}

export default BottomLine