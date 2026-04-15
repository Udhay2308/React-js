<<<<<<< HEAD
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='app'>
     <Navbar />
     <Sections />
     <Footer />
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/products' element = {<Products />} />
      <Route path = '/Products/:productid' element = {<ProductDetails />} />
      </Routes>
>>>>>>> f4fbe26 (first commit)
    </div>
  )
}

export default App
