import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const productdata = useContext(ProductDataContext)
    let renderdata = 'Loading...'
    if(productdata.length > 0){
        renderdata = productdata.map(function(elem,idx){
        return <Link target='_blank' className='product' key={idx} to={`/products/${elem.id}`}>
            <div>
                <img src={elem.image} alt="" />
                <h1>{elem.title}</h1>
            </div>
        </Link>
     })
    }
  return (
    <div className='allproducts'>
     {renderdata}
    </div>
  )
}

export default Products
