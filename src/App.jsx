import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import Purchase from './components/routes/Purchase'
import DetailProduct from './components/routes/DetailProduct'
import Header from './components/shared/Header'
import Login from './components/routes/Login'
import Cart from './components/cart/Cart'
// import FormSingUp from './components/login/FormSingUp'
import SignUp from './components/routes/SignUp'
import ProtectedRoute from './components/routes/ProtectedRoute'
import LogOut from './components/routes/LogOut'

function App() {
   
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='/purchase' element={<Purchase/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route> 
      </Routes>
    </div>
  )
}

export default App
