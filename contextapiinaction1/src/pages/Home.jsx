import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home'>
      <h1>This is home page.</h1>
      <button onClick={()=>{
        navigate('/products')
      }}>Explore courses</button>
    </div>
  )
}

export default Home
