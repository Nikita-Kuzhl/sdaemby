import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error'
import Main from './pages/Main'
import './styles/index.scss'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Error />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
