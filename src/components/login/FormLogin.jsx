import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
const FormLogin = () => {
  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const submit = (data) => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(url, data)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token',res.data.data.token)
            navigate('/')
        })
        .catch(err => console.log(err))


    // reset({
    //     email:'',
    //     password: ''
    // })
  }
  
  return (
    <form onSubmit={(handleSubmit(submit))} className='form-login'>
        <h2 className='form-login__title'> Welcome! enter your mail and password to continue</h2>
        <div className='form-login__email'> 
            <label className='form-login__label'htmlFor="email">Email</label>
            <input className='form-login__input' {...register('email')} type="email" id='email'/>
        </div>
        <div className='form-login__password'>
            <label className='form-login__label' htmlFor="password">Password</label>
            <input className='form-login__input' {...register('password')} type="password" id='password'/>
        </div>
        <button className='form-login__btn'>Login</button>
        <div className='form-login__footer'>
          <p className='fl-footer__description'>Don't have an account? </p>
          <Link to='/signup' className='fl-footer__sign-up'>Sing Up</Link>
        </div>
    </form>
  )
}

export default FormLogin