import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from './ProductCartInfo'

const Cart = () => {

  const [cardProducts, setCardProducts] = useState()
  const [loadingProductsCart, setLoadingProductsCart] = useState()
  
  const [totalPrice, setTotalPrice] = useState()
  
  // const getAllProducts = () => {
  //   const url='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  //   axios.get(url, getConfig())
  //       .then(res => {
  //         setCardProducts(res.data.data.cart.products)
  //         const products = res.data.data.cart.products
  //         const total = products.reduce((acc,cv) => {
  //           return Number(cv.price) * cv.productsInCart.quantity + acc
  //         }, 0)
  //         setTotalPrice(total)
  //       })
  //       .catch(err => console.log(err))
  // }
  
  
  useEffect(() => {
    const url='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(url, getConfig())
        .then(res => {
          setCardProducts(res.data.data.cart.products)
          const products = res.data.data.cart.products
          const total = products.reduce((acc,cv) => {
            return Number(cv.price) * cv.productsInCart.quantity + acc
          }, 0)
          setTotalPrice(total)
        })
        .catch(err => console.log(err))
  }, [loadingProductsCart])
  
  const handleCheckout = () =>{
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
  
    }
    axios.post(url, obj, getConfig())
      .then((res) => {
        setLoadingProductsCart(res.data)
        setTotalPrice(0)  
      })
      .catch(() => {
        setLoadingProductsCart()
      })
      // .finally(() =>setLoadingProductsCart() )
  }
  // console.log(cardProducts[0])
  // console.log(Object.values(cardProducts).length)
  // en esta funcion se calcula el total de los productos en el carrito

  return (
    <section className='cart'>
      <h2 className='cart__title'> Carrito de compras</h2>
        {
          cardProducts?.map(product => (
            <ProductCartInfo key={product.id} product={product} setLoadingProductsCart={setLoadingProductsCart}/>
          ))
        }
      <hr className='cart__hr'/>
      <footer className='cart__footer'>
        <div className='cart__footer-body'>
          <span className='cart__total-global-label'>Total:</span>
          <p className='cart__total-global-value'>{totalPrice}</p>
        </div>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart