import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'

const CardSelectCategory = ({optionCategory, setOptionCategory}) => {
  const [categories, setCategories] = useState()
  
  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(url, getConfig())
      .then(res => setCategories(res.data.data.categories) )
      .catch(err => console.log(err))
  }, [])
  
  // console.log(categories);
  const handleChange = (e) => {
    setOptionCategory(e.target.value)
    // console.log(e.target.value)
  }
  return (
    <select value={optionCategory} className='select-category' onChange={handleChange}>
       <option className='select-category__option'  value='All' >All Category</option> 
      {
        categories?.map(category =>(
          <option value={category.name} key={category.id}>{category.name}</option> 
        ))
      }

      
    </select>
  )
}

export default CardSelectCategory