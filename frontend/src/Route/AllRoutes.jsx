import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import LandingPage from './LandingPage'
import Login from './Login'
import ProductPage from './ProductPage'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default AllRoutes
