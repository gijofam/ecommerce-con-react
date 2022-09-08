import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <form action="">
        <input className='header__check' type="checkbox" id="btn-menu" />
        <label id='btn-uniq' className='header__label' htmlFor="btn-menu" >
          <img className='header__icon' src="./public/menu.svg" alt="" />
        </label>
      </form>
      <div>
        <NavLink to='/' className={`${({isActive}) => isActive ? 'active-link' : ''} header__logo`}>
          <h1 className='header__logo-title'>e-commerce</h1>
        </NavLink>
        <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__item'>
                  {/* <NavLink to='/login' className={`${({isActive}) => isActive ? 'active-link' : ''} header__item-content`}> */}
                  <NavLink to={localStorage.getItem('token')? '/logout' : '/login'} className={`${({isActive}) => isActive ? 'active-link' : ''} header__item-content`}>
                    <i className='bx bx-user item__icon' ></i>
                    <h3 className='item__label'>Login</h3>
                  </NavLink>
                </li>
                <li className='header__item'>
                  <NavLink to='/purchase' className={`${({isActive}) => isActive ? 'active-link' : ''} header__item-content`}>
                    <i className='bx bx-purchase-tag-alt item__icon'></i>
                    <h3 className='item__label'>Purchase</h3>
                  </NavLink>
                </li>
                <li className='header__item'>
                  <NavLink to='/cart' className={`${({isActive}) => isActive ? 'active-link' : ''} header__item-content`}>
                    <i className='bx bx-store-alt item__icon' ></i>
                    <h3 className='item__label'>Cart</h3>
                  </NavLink>               
                </li>
              </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header