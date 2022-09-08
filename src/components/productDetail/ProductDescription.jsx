import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({productInfo}) => {
    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
      if(counter -1 >= 1){
          setCounter(counter - 1)
      }
    }

    const handleAddCart = () => {
      const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      const obj = {
        id: productInfo.id,
        quantity: counter  
      }
      
      axios.post(url, obj, getConfig() )
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
    <section className='product-info'>
      <h2 className='product-info__name'>{productInfo?.title}</h2>
      <p className='product-info__description'>
      {productInfo?.description}
      </p>
      <div className='product-info__body'>
        <article className='product-info__price'>
          <h4 className='product-info__price-label'>Price</h4>
          <span className='product-info__price-value'>{productInfo?.price}</span>
        </article>
        <article className='product-info__quantity'>
          <h4 className='product-info__quantity-label'>
            Quantity
          </h4>
          <div className='Product-info__quantity--values'>
            <button onClick={handleMinus} className='Product-info__quantity__btn-minus'onClick={handleMinus}>
                -
            </button>
            <div>{counter}</div>
            <button onClick={handlePlus} className='Product-info__quantity__btn-plus' onClick={handlePlus}>
                +
            </button>
          </div>
        </article>
      </div>
      {/* <div className='Product-info__footer'> */}
        <button onClick={handleAddCart} className='Product-info-btn' >Add to cart <i className='bx bx-cart-add Product-info-icon'></i></button>
        
      {/* </div> */}
    </section>
  )
}

export default ProductDescription