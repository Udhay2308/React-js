import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../api/productapi'

export const ProductDataContext = createContext()

const ProductContext = (props) => {
  const [productdata, setproductdata] = useState([])
  const setdata = async function(){
    const data = await getdata()
    setproductdata(data)
  }
  useEffect(function(){
    setdata()
  },[])
  return (
    <div>
    <ProductDataContext.Provider value = {productdata}>
       {props.children}
    </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
