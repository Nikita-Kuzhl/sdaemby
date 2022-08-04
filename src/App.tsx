import { Route, Routes } from 'react-router-dom'
import Authorization from './pages/Authorization'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error'
import Main from './pages/Main'
import News from './pages/News'
import NewsList from './pages/NewsList'
import './styles/index.scss'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<NewsList />} />
      <Route path='/news/:id' element={<News />} />
      <Route path='/signin' element={<Authorization />} />
      {/* Error */}
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
