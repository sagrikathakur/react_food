import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/home/Cart/Cart'
import PlaceOrder from './pages/home/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      {/* routes */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />

      </Routes>
    </div>
  )
}

export default App