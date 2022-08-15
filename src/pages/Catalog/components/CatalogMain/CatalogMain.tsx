import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { paramAction } from '../../../../app/features/param'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { useGetApartQuery } from '../../../../app/service/apartService'
import Card from '../../../../components/Card'
import FacebookIcon from '../../../../components/icons/FacebookIcon'
import ListIcon from '../../../../components/icons/ListsIcon'
import MapIcon from '../../../../components/icons/MapIcon'
import TelegramIcon from '../../../../components/icons/TelegramIcon'
import TilesIcon from '../../../../components/icons/TilesIcon'
import ViberIcon from '../../../../components/icons/ViberIcon'
import VKIcon from '../../../../components/icons/VKIcon'
import WhatsUpIcon from '../../../../components/icons/WhatsUpIcon'
import ItemList from '../../../../components/ItemList'
import Pagination from '../../../../components/Pagination'
import SelectStyle from '../../../../components/SelectStyle'
import Spinner from '../../../../components/Spinner'
import styles from './CatalogMain.module.scss'

const options = [
  { value: undefined, label: 'По умолчанию' },
  { value: 1, label: 'По возрастанию цены' },
  { value: 2, label: 'По убыванию цены' },
]

const CatalogMain = () => {
  const dispatch = useAppDispatch()
  const { pageApart } = useAppSelector((state) => state.pagination)
  const { area, rooms, priceTo, list, priceFrom, sleepingPlaces, metro, sort, checkbox } =
    useAppSelector((state) => state.param)
  const { id: cityId } = useParams()
  const { data, isSuccess, isError, isFetching } = useGetApartQuery({
    city: Number(cityId),
    page: pageApart,
    limit: list === 'true' ? 3 : 6,
    area: area,
    rooms: rooms,
    priceTo: priceTo,
    priceFrom: priceFrom,
    sleep: sleepingPlaces,
    metro: metro,
    sort: sort,
    checkbox,
  })
  return (
    <section className={styles.container}>
      <div className={styles.action}>
        <Select
          styles={SelectStyle}
          value={options.filter((i) => i.value === sort)[0]}
          className={styles.select}
          onChange={(e: any) => dispatch(paramAction.selectSort(e.value))}
          placeholder={
            <>
              <img src='/assets/images/sort.svg' /> Выберите
            </>
          }
          options={options.map((i) => {
            return i
          })}
        />
        <div className={styles.button__list}>
          <button
            onClick={() => dispatch(paramAction.selectList(true))}
            className={list === 'true' ? styles.button__style__active : styles.button__style}
          >
            <ListIcon color={list === 'true' ? '#664EF9' : '#BDBDBD'} />
            Список
          </button>
          <button
            onClick={() => dispatch(paramAction.selectList(false))}
            className={list !== 'true' ? styles.button__style__active : styles.button__style}
          >
            <TilesIcon color={list !== 'true' ? '#664EF9' : '#BDBDBD'} />
            Плитки
          </button>
          <button className={styles.button__map}>
            <MapIcon color='#664EF9' width={11} height={14} /> Показать на карте
          </button>
        </div>
      </div>
      {isFetching && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isSuccess && !isFetching && (
        <>
          <p className={styles.subtitle}>Найдено {data.totalItems} результата</p>
          <div className={styles.card__list}>
            {data.apartment.map((i) => (
              <div className={styles.card__item} key={i.id}>
                {list === 'true' ? <ItemList item={i} /> : <Card isApartPage={true} item={i} />}
              </div>
            ))}
          </div>

          <div className={styles.paginate__social__container}>
            <Pagination apart={true} currentPage={data.currentPage} totalPages={data.totalPages} />
            <ul className={styles.social__list}>
              <p className={styles.social__title}>Поделиться</p>
              <a className={styles.social__icon} href='https://vk.com/feed'>
                <VKIcon style={styles.icon} width={17} height={10} />
              </a>
              <a className={styles.social__icon} href='https://ru-ru.facebook.com/vibe'>
                <FacebookIcon style={styles.icon} />
              </a>
              <a className={styles.social__icon} href='https://www.viber.com/ru/'>
                <ViberIcon style={styles.icon} width={16.5} height={17.4} />
              </a>
              <a className={styles.social__icon} href='https://web.telegram.org/z/'>
                <TelegramIcon style={styles.icon} />
              </a>
              <a className={styles.social__icon} href='https://www.whatsapp.com/?lang=ru'>
                <WhatsUpIcon style={styles.icon} />
              </a>
            </ul>
          </div>
        </>
      )}
      {isError && <p className={styles.spinner}>Ошибка сервера</p>}
    </section>
  )
}

export default CatalogMain
