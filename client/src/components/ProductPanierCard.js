import React from 'react'

const ProductPanierCard = ({product}) => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around"}}>
      <h3>{product.name}</h3>
      <img  width="30%" src={product.poster} alt='productImg'/>
      <h4>{product.price}</h4>
    </div>
  )
}

export default ProductPanierCard
