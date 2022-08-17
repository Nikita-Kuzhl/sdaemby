import { FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { paramAction } from '../../../app/features/param'
import { useOutsideClick } from '../../../app/hooks/useOutsideClick'
import { useGetCityQuery } from '../../../app/service/apartService'
import { city, vowels } from '../../../constant'
import MapIcon from '../../icons/MapIcon'
import styles from './HeaderSelect.module.scss'

interface ITitle {
  name: string
  iconMap: boolean
  href: string
  src: string
}

interface IProps {
  title?: ITitle
}

const HeaderSelect: FC<IProps> = ({ title }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { data, isSuccess, isError } = useGetCityQuery(null)
  const ref = useRef(null)

  useOutsideClick(ref, (e) => setOpen(e), open)

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)} className={styles.title}>
        {title.name}
        {title.iconMap && <MapIcon width={12} height={15} color='#FFD54F' />}
      </button>
      {open && isSuccess && (
        <ul className={styles.list}>
          {data.map((item) => (
            <Link
              to={title.href === '1' ? `/catalog/apart/${item.id}` : '*'}
              className={styles.list__item}
              onClick={() => dispatch(paramAction.clearParam())}
              key={item.id}
            >
              {title.src}{' '}
              {vowels.includes(item.name.slice(-1))
                ? item.name.substring(0, item.name.length - 1).concat('е')
                : item.name.concat('e')}
            </Link>
          ))}
        </ul>
      )}
      {open && isError && (
        <ul className={styles.list}>
          {city.map((item) => (
            <Link
              to={title.href === '1' ? `/catalog/apart${item.id}` : '*'}
              className={styles.list__item}
              key={item.href}
            >
              {title.src} {item.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HeaderSelect
