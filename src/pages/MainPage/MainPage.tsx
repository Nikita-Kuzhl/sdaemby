import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import Map from './components/Map/Map'
import News from './components/News/NewsMain'
import Options from './components/Options/Options'
import Presentation from './components/Presentation/Presentation'
import Rent from './components/Rent/Rent'

const MainPage = () => {
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

export default MainPage
