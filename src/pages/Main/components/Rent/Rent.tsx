import CircleGroupIcon from '../../../../components/icons/CircleGroupIcon'
import Carousel from './components/Carousel/Carousel'
import RentHeader from './components/RentHeader/RentHeader'
import styles from './Rent.module.scss'
const Rent = () => {
  return (
    <>
      <CircleGroupIcon style={styles.circle_group} color="#FFD54F" />
      <div className={styles.bg} />
      <section className={styles.container}>
        <RentHeader />
        <Carousel />
      </section>
    </>
  )
}

export default Rent
