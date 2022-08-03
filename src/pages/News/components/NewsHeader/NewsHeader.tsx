import { FC, useEffect } from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import FacebookIcon from '../../../../components/icons/FacebookIcon'
import TelegramIcon from '../../../../components/icons/TelegramIcon'
import ViberIcon from '../../../../components/icons/ViberIcon'
import VKIcon from '../../../../components/icons/VKIcon'
import WhatsUpIcon from '../../../../components/icons/WhatsUpIcon'
import styles from './NewsHeader.module.scss'

interface IProps {
  name?: string
  date?: string
}

const NewsHeader: FC<IProps> = ({ name, date }) => {
  return (
    <header className={styles.header}>
      <Breadcrumbs link={[{ name: 'Новости', src: '/news' }, { name: name }]} />
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.container}>
        <p className={styles.date}>
          {date.toLowerCase().substring(0, date.length - 2)}
        </p>
        <div className={styles.social}>
          <p className={styles.share}>Поделиться</p>
          <ul className={styles.list}>
            <a className={styles.icon__block} href="https://vk.com/feed">
              <VKIcon style={styles.icon} width={17} height={10} />
            </a>
            <a
              className={styles.icon__block}
              href="https://ru-ru.facebook.com/vibe"
            >
              <FacebookIcon style={styles.icon} />
            </a>
            <a className={styles.icon__block} href="https://www.viber.com/ru/">
              <ViberIcon style={styles.icon} width={16.5} height={17.4} />
            </a>
            <a
              className={styles.icon__block}
              href="https://web.telegram.org/z/"
            >
              <TelegramIcon style={styles.icon} />
            </a>
            <a
              className={styles.icon__block}
              href="https://www.whatsapp.com/?lang=ru"
            >
              <WhatsUpIcon style={styles.icon} />
            </a>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NewsHeader
