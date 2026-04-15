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
    </div>
  )
}

export default App
