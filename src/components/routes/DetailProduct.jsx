import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import CardHome from '../home/CardHome'
import ProductDescription from '../productDetail/ProductDescription'

const DetailProduct = () => {
  const [productInfo, setProductInfo] = useState()
  const {id} = useParams()
  
  // aqui se almacenara todos los productos que tengan una misma categoria
  const [productForCategory, setProductForCategory] = useState()

  const products = useSelector(state => state.products)
  console.log(products)
  useEffect(() => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(url)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])
  
  // console.log(productInfo);
  return (
    <div className='detail-container'>
      <div className='detail-container__header'>
        <Link className='detail-container__header-content' to='/'>
          <h5 className='detail-container__header-home'>Home</h5>
        </Link>
        <div className='detail-container__header-circle'></div>
        <h5 className='detail-container__header-name'>{productInfo?.title}</h5>
      </div>
      <div className='detail-container__body'>
        {/* aqui comienza el carrusel */}
        <div className='dc__carrusel-container'>
          {/* tarjeta 1 */}
          <div className='dc__item-carrusel' id='itemCarrusel1'>
            <div className='dc__item-carrusel__img-container' id='imagen1'>
              <img className='dc__item-carrusel__img' src={productInfo?.productImgs[0]} alt="" />
            </div>
            <div className='cd__carrusel-arrows'>
              <a className='carrusel__link' href="#itemCarrusel3">
                <i className='bx bx-caret-left carrusel-icon'></i>
              </a>
              <a className='carrusel__link' href="#itemCarrusel2">
                <i className='bx bx-caret-right carrusel-icon'></i>
              </a>
            </div>
          </div>
          {/* tarjeta 2 */}
          <div className='dc__item-carrusel' id='itemCarrusel2'>
            <div className='dc__item-carrusel__img-container' id='imagen2'>
              <img className='dc__item-carrusel__img' src={productInfo?.productImgs[1]} alt="" />
            </div>
            <div className='cd__carrusel-arrows'>
              <a className='carrusel__link' href='#itemCarrusel1'>
                <i className='bx bx-caret-left carrusel-icon'></i>
              </a>
              <a className='carrusel__link' href='#itemCarrusel3'>
                <i className='bx bx-caret-right carrusel-icon'></i>
              </a>
            </div>
          </div>
          {/* tarjeta 3 */}
          <div className='dc__item-carrusel' id='itemCarrusel3'>
            <div className='dc__item-carrusel__img-container' id='imagen3'>
              <img className='dc__item-carrusel__img' src={productInfo?.productImgs[2]} alt="" />
            </div>
            <div className='cd__carrusel-arrows'>
              <a className='carrusel__link' href="#itemCarrusel2">
                <i className='bx bx-caret-left carrusel-icon'></i>
              </a>
              <a className='carrusel__link' href="#itemCarrusel1">
                <i className='bx bx-caret-right carrusel-icon'></i>
              </a>
            </div>
          </div>
        </div>
        {/* <ProductDescription productInfo={productInfo} /> */}
        <ProductDescription productInfo={productInfo} id={id}/>
      </div>
      <div className='dc__body__product-similar'>
        <h5 className='product-similar__description'>Discover similar items</h5>
        <div className='product-similar__card-container'>
          {
            products?.filter(product => (
              product.category.name === productInfo?.category 
              )).map(product => (
                <CardHome product={product} key={product.id}/>
              ))
            // productForCategory.map()
          }
        </div>
      </div>
    </div>
  )
}

export default DetailProduct