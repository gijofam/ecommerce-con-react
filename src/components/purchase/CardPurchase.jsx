import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductPurchase from './ProductPurchase'

const CardPurchase = ({purchase}) => {
  
  console.log(purchase)
  return (
    <article className='card-purchase'>
      <h4 className='card-purchase__date'>{purchase.createdAt}</h4>
      <ul className='card-purchase__body'>
        {
          purchase.cart.products.map(product => (
            <ProductPurchase product={product} key={product.id}/>
          ))  
        }
      </ul>
    </article>
  )
}

export default CardPurchase