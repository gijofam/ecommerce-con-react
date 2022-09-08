import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const FormSingUp = () => {
  const [userSingUp, setUserSingUp] = useState()
  const {register, handleSubmit, reset} = useForm()

// users prueba 
//   const obj = {
  //     firstName: 'jonathan',
  //     lastName: 'fasabi',
  //     email: 'jonthan3@academlo.com',
  //     password: 'jon123',
  //     phone: '9391560650',
  //     role: 'admin',
  //   }

  const submit = (data) => {
   data.role = 'admin'
//    console.log(data);
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }
  
  return (
    <form onSubmit={handleSubmit(submit)} className='form__sign-up'>
      <h2 className='form__sign-up__title'>Sign Up</h2>
        <div className='form__sign-up__email'> 
            <label className='form__sign-up__label'htmlFor="email">Email</label>
            <input className='form__sign-up__input' {...register('email')} type="email" id='email'/>
        </div>
        <div className='form__sign-up__firstname'> 
            <label className='form__sign-up__label'htmlFor="firstName">First Name</label>
            <input className='form__sign-up__input' {...register('firstName')} type="text" id='firstName'/>
        </div>
        <div className='form__sign-up__lastname'> 
            <label className='form__sign-up__label'htmlFor="lastName">Last Name</label>
            <input className='form__sign-up__input' {...register('lastName')} type="text" id='lastName'/>
        </div>
        <div className='form__sign-up__password'>
            <label className='form__sign-up__label' htmlFor="password">Password</label>
            <input className='form__sign-up__input' {...register('password')} type="password" id='password'/>
        </div>
        <div className='form__sign-up__phone'> 
            <label className='form__sign-up__label'htmlFor="phone">Phone</label>
            <input className='form__sign-up__input' {...register('phone')} type="text" id='phone'/>
        </div>
        {/* <div className='form__sign-up__role'> 
            <label className='form__sign-up__label'htmlFor="role">Role</label>
            <input className='form__sign-up__input' {...register('role')} type="email" id='role'/>
        </div> */}
        <button className='form__sign-up__btn'>Sign up</button>
        <div className='form__sign-up__footer'>
          <p className='fs-footer__description'>Don't have an account? </p>
          <Link to='/login' className='fs-footer__sign-up'>Log in</Link>
          {/* <Link to='/login' className='fs-footer__sign-up'>Log in</Link> */}
        </div>
    </form>
  )
}

export default FormSingUp