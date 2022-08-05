import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import Authorization from './pages/Authorization'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error'
import Main from './pages/Main'
import News from './pages/News'
import NewsList from './pages/NewsList'
import Registration from './pages/Registration'
import './styles/index.scss'
const App = () => {
  const { isAuth } = useAppSelector((state) => state.auth)
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<NewsList />} />
      <Route path='/news/:id' element={<News />} />
      {!isAuth && (
        <>
          <Route path='/signin' element={<Authorization />} />
          <Route path='/signup' element={<Registration />} />
        </>
      )}
      {/* Error */}
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
