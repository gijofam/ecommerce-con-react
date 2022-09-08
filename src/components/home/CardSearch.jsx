import React, { useState } from 'react'

const CardSearch = ({setProductSearch,setOptionCategory}) => {

  const submit = (e) => {
    e.preventDefault()
    setProductSearch(e.target.productSearch.value.trim().toLowerCase())
    e.target.productSearch.value = ''
    setOptionCategory('All')
  }

  return (
       <form onSubmit={submit} className='form__search' action="">
         {/* <div className=''> */}
            <input className='form__input' type="text" name="" id="productSearch" />
            <button className='form__btn'>Search</button>
         {/* </div> */}
       </form>
  )
}

export default CardSearch