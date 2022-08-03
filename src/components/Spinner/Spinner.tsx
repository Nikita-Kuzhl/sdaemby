import { GridLoader } from 'react-spinners'
import styles from './Spinner.module.scss'

const Spinner = () => {
  return <GridLoader color="#FFD54F" className={styles.spinner} />
}

export default Spinner
