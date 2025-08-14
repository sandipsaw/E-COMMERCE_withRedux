import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useSelector } from 'react-redux'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import ProductCart from '../pages/ProductCart'
import SingleProduct from '../pages/SingleProduct'
import Logout from '../pages/Logout'
import UserProfile from '../pages/UserProfile'
const MainRoutes = () => {


    const user=useSelector((state)=> state.userReducer.user)


  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/create-product' element={<CreateProduct/>}/>
        <Route path='/admin/update-product' element={<UpdateProduct/>}/>
        <Route path='/productcart' element={<ProductCart/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/user-profile' element={<UserProfile/>}/>


    </Routes>
  )
}

export default MainRoutes