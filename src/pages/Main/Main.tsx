import DefaultLayout from '../../layouts/DefaultLayout'
import Map from './components/Map'
import News from './components/News'
import Options from './components/Options'
import Presentation from './components/Presentation'
import Rent from './components/Rent'

const Main = () => {
  return (
    <>
      <DefaultLayout>
        <Options />
        <Presentation />
        <Rent />
        <Map />
        <News />
      </DefaultLayout>
    </>
  )
}

export default Main
