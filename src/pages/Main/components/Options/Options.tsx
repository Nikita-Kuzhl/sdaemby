import { useState } from 'react'
import { title } from '../../../../constant'
import Menu from '../Menu/Menu'
import styles from './Options.module.scss'
const Options = () => {
  const [heading, setHeading] = useState(title[0].name)

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Sdaem.by - у нас живут <span>ваши объявления</span>
      </h1>
      <ul className={styles.list}>
        {title.map((item) => (
          <button
            onClick={() => setHeading(item.name)}
            key={item.src}
            className={`${styles.item} ${heading === item.name ? styles.item__active : null}`}
          >
            {item.name}
          </button>
        ))}
      </ul>
      <Menu heading={heading} />
    </section>
  )
}

export default Options
