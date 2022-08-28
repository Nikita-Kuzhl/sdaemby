import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { paginationAction } from '../../app/features/pagination'
import { useAppDispatch } from '../../app/hooks'
import styles from './Pagination.module.scss'

interface IProps {
  apart?: boolean
  currentPage: number
  totalPages: number
}

const Pagination: FC<IProps> = ({ apart = false, currentPage, totalPages }) => {
  const dispatch = useAppDispatch()
  const masPages: number[] = []
  for (let i = 0; i <= totalPages; i++) {
    masPages.push(i)
  }
  const handleChange = (nextSelectedPage: number) => {
    if (!apart) dispatch(paginationAction.selectPageNews(nextSelectedPage + 1))
    dispatch(paginationAction.selectPageApart(nextSelectedPage + 1))
  }
  return (
    <ReactPaginate
      pageCount={totalPages}
      className={styles.list}
      pageClassName={styles.item}
      activeClassName={styles.item__active}
      nextLabel={false}
      previousLabel={false}
      pageRangeDisplayed={7}
      onClick={(e) => handleChange(e.nextSelectedPage)}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
