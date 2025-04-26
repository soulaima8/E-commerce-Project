import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div style={{display:"flex"}}>
      {products.map((product)=> <ProductCard  product={product}/>)}
    </div>
  )
}

export default ProductList
