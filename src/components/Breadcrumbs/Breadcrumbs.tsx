import { FC } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import styles from './Breadcrumbs.module.scss'
import { IBreadcrumbsItem } from './Breadcrumbs.types'
interface IProps {
  link: IBreadcrumbsItem[]
}
const Breadcrumbs: FC<IProps> = ({ link }) => {
  return (
    <ul className={styles.container}>
      <div className={styles.item}>
        <Link to="/" className={styles.item__home}>
          <HomeIcon color="#4E64F9" width={12} height={12} />
        </Link>
        <span />
      </div>
      {link.map((i) =>
        i.src ? (
          <div key={i.name} className={styles.item}>
            <Link className={styles.item__link} to={i.src}>
              {i.name}
            </Link>
            <span />
          </div>
        ) : (
          <p key={i.name} className={styles.item__text}>
            {i.name}
          </p>
        )
      )}
    </ul>
  )
}

export default Breadcrumbs
