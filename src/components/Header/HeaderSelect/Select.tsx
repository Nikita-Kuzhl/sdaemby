import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { city } from '../../../constant/Link'
import MapIcon from '../../icons/MapIcon'
import styles from './Select.module.scss'
interface IProps {
  title?: any,
}


const Select: FC<IProps> = ({ title }) => {
  const [open, setOpen] = useState(false)

  const rootEl = useRef(null);

  // useEffect(() => {
  //   if (open) {

  //     const onClick = () => setOpen(false);
  //     document.addEventListener('click', onClick);
  //     return () => document.removeEventListener('click', onClick);
  //   }
  // }, []);
  return (
    <>
      <button onClick={() => setOpen(!open)} className={styles.title} >{title.name}{title.iconMap && <MapIcon width={12} height={15} color="#FFD54F" />}</button>
      {open &&
        <ul ref={rootEl} className={styles.list}>
          {city.map((item) => (
            <Link to='/' className={styles.list__item} key={item.href}>{title.src} {item.name}</Link>
          ))}
        </ul>}
    </>
  )
}

export default Select