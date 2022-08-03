import { FC } from 'react'
import { paginationAction } from '../../app/features/pagination'
import { useAppDispatch } from '../../app/hooks'
import styles from './Pagination.module.scss'

interface IProps {
  currentPage: number
  totalPages: number
}

const Pagination: FC<IProps> = ({ currentPage, totalPages }) => {
  const dispatch = useAppDispatch()
  const mas_pages: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    mas_pages.push(i)
  }
  return (
    <section className={styles.list}>
      {mas_pages.map((i) => (
        <button
          onClick={() => dispatch(paginationAction.selectPage(i))}
          key={i}
          className={currentPage === i ? styles.item__active : styles.item}
        >
          {i}
        </button>
      ))}
    </section>
  )
}

export default Pagination
