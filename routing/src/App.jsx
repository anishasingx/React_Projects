import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/shop" element={<Shop/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/about" element={<About/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/register"element={<Register />}  />
        

      </Routes>
      <Footer />
    
    </BrowserRouter>
  )
}

export default App
