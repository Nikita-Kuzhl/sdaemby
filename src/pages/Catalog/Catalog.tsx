import DefaultLayout from '../../layouts/DefaultLayout'
// import CatalogHeader from './components/CatalogHeader'
import styles from './Catalog.module.scss'
import CatalogHeader from './components/CatalogHeader'
import CatalogMain from './components/CatalogMain'
import CatalogMap from './components/CatalogMap'
import CatalogMenu from './components/CatalogMenu'

const Catalog = () => {
  return (
    <DefaultLayout>
      <main data-testid='catalog page' className={styles.main}>
        <CatalogHeader />
        <CatalogMenu />
        <CatalogMain />
        <CatalogMap />
      </main>
    </DefaultLayout>
  )
}

export default Catalog
