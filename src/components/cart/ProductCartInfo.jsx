import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, setLoadingProductsCart}) => {
  
  const handleDeleteProduct = () => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(url, getConfig())
        .then(res => setLoadingProductsCart(res.data))
        .catch(err => console.log(err))
  }
 

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <i onClick={handleDeleteProduct} className='cart__trash bx bx-trash'></i>
        <h3 className='cart__brand'>{product.brand}</h3>
        <h4 className='cart__name'>{product.title}</h4>
      </header>
      <div className='cart_body'>
       <span className='cart__quantity'>{product.productsInCart.quantity}</span>
       <footer className='cart__item-footer'>
        <span className='cart__total-label'>
          Price:
        </span>
        <span className='cart__total-number'>
            {product.price}
        </span>
       </footer>
      </div>
    </article>
  )
}

export default ProductCartInfo