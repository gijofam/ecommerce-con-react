import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import CardPurchase from '../purchase/CardPurchase'

const Purchase = () => {
  const [Purchases, setPurchases] = useState()
  
  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(url, getConfig())
      .then(res => setPurchases(res.data.data.purchases) )
      .catch(err => console.log(err))
  }, [])
  
  // console.log(Purchases);
  return (
    <section className='purchase-container'>
      <div className='purchase-container__header'>
        <Link className='purchase-container__header-content' to='/'>
          <h5 className='purchase-container__header-home'>Home</h5>
        </Link>
        <div className='purchase-container__header-circle'></div>
        <h5 className='purchase-container__header-name'>Purchase</h5>
      </div>
      <div className='purchase__container-body'>
        <h2 className='purchase__container-title'>My purchases</h2>
        <div className='purchase__card-container'>
          {
            Purchases?.map(purchase => (
            <CardPurchase purchase={purchase} key={purchase.id}/>))
          }
        </div>
      </div>
    </section>
  )
}

export default Purchase