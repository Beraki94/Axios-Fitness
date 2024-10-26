import './App.css'
import { Route, Routes } from 'react-router'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Membership from './pages/membership/Membership'
import Schedule from './pages/schedule/Schedule'

function App() {
  

  return (
 <div className='app__wrapper' >
 <Header />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/membership' element={<Membership />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/notFound' element={<NotFound />}/>
    </Routes>
    <Footer />
 </div>
  )
}

export default App
