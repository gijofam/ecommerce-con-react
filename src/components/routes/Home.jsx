import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, setProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import CardSearch from '../home/CardSearch'
import CardSelectCategory from '../home/CardSelectCategory'

const Home = () => {
  
  // estado para saber el valor de la categoria selecionanda
  const [optionCategory, setOptionCategory] = useState()
  // console.log(optionCategory);
  // estado para capturar el lo que se ingresa en el input a buscar
  const [productSearch, setProductSearch] = useState()
  const products = useSelector(state => state.products)
  
  // este estado sirve para realizat un capia de todos los productos que trae la peticion asyn
  const [backupProducts, setBackupProducts] = useState()
  // console.log(productSearch);
  console.log(products);

  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(getAllProduct())
    // console.log(products[0].title.toLowerCase().includes('san'))
    // setBackupProducts(dispatch(getAllProduct()))

    if(productSearch){
      // dispatch(setProducts(products.filter(product => (
      //   product.title.toLowerCase().includes(productSearch) === true
      //   ) )))
      setBackupProducts(products.filter(product => (
          product.title.toLowerCase().includes(productSearch) === true
           ) ))
      }else if(optionCategory && optionCategory !== 'All'){
        // dispatch(setProducts(products.filter(product => (
        //      product.category.name === optionCategory
        //   ) )))
        setBackupProducts(products.filter(product => (
               product.category.name === optionCategory
            ) ))
      }else{
        setBackupProducts(products)
      // dispatch(getAllProduct())
    }

  }, [productSearch, optionCategory])
  
  
  return (
    <div className='contenedor'>
      <div className='contenedor__filter'>
        <div className='contenedor__filter-price'>

        </div>
        <div className='contenedor__filter-category'>
            <CardSelectCategory setOptionCategory={setOptionCategory} optionCategory={optionCategory} />
        </div>
      </div>
        <div className='contenedor__body'>
          <CardSearch setProductSearch={setProductSearch}/>
      
          <div className='card-container'>
            {
              backupProducts?.map(product => (
                <CardHome product={product} key={product.id}/>  
              ))
                
              // dispatch(getAllProduct())

            }
          </div>
        </div>
    </div>
  )
}

export default Home