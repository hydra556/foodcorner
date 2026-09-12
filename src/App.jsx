import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  let [cart,setcart] = useState([])
  return (
    <BrowserRouter>
    
    <Navbar cart={cart} setcart={setcart}/>
        <Routes>
            <Route path='/' element={<Home cart={cart} setcart={setcart}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App