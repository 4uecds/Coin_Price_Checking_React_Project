import React from 'react'
import Navbar from './assets/components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Coin from './assets/pages/Coin/Coin';
import Footer from './assets/components/navbar/Footer/Footer';
const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
