import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import Authorization from './pages/Authorization'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error'
import Main from './pages/Main'
import News from './pages/News'
import NewsList from './pages/NewsList'
import Registration from './pages/Registration'
import './styles/index.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid='location-display'>{location.pathname}</div>
}

const App = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  return (
    <>
      <Routes>
        {/* Главная страница */}
        <Route path='/' element={<Main />} />
        {/* Страница контакты */}
        <Route path='/contact' element={<Contact />} />
        {/* Страница со списком новостей */}
        <Route path='/news' element={<NewsList />} />
        {/* Страница отдельной новости(статьи) */}
        <Route path='/news/:id' element={<News />} />
        {/* Страница каталога для квартир */}
        <Route path='/catalog/apart/:id' element={<Catalog />} />
        {!isAuth && (
          <>
            {/* Авторизация */}
            <Route path='/signin' element={<Authorization />} />
            {/* Регистрация */}
            <Route path='/signup' element={<Registration />} />
          </>
        )}
        {/* Страница 404 */}
        <Route path='*' element={<Error />} />
      </Routes>
      <LocationDisplay />
    </>
  )
}

export default App
