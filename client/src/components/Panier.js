import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPanierCard from './ProductPanierCard'
import { CreateOrder } from '../redux/slices/orderSlice'

const Panier = () => {
    const {products} = useSelector(state=> state.panier)
    const dispatch= useDispatch()
  return (
    <div>
        {products.map((product)=> <ProductPanierCard product={product}/>)}
        <button onClick={()=>dispatch(CreateOrder({productList:products}))}>Check Out</button>
    </div>
    
  )
}

export default Panier
