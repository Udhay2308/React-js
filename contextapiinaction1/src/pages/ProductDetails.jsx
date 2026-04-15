import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {
    const productdata = useContext(ProductDataContext)
    const {productid} = useParams()
    let selectedproduct = ''
    if(productdata.length > 0){
        selectedproduct = productdata.find((elem)=>elem.id == productid)
    }
  return (
    <div>
      <img src={selectedproduct.image} alt="" />
      <h1>{selectedproduct.title}</h1>
      <h4>${selectedproduct.price}</h4>
    </div>
  )
}

export default ProductDetails
