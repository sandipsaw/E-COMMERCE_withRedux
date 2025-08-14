import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.user)
  console.log(user);

  

  return (
    <div className='flex   text-2xl justify-center items-center h-15 font-semibold gap-10  bg-gray-300 '>

      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/' >Home</NavLink>
      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/products' >Products</NavLink>

      {(user && user?.isAdmin ) ? <>
       <NavLink className={(e)=> e.isActive && "text-red-500"} to={"/admin/create-product"} >Create Product</NavLink> 
    
       <NavLink className={(e)=> e.isActive && "text-red-500"} to={"/user-profile"} >settings</NavLink> 
       
       
       </>
       :
       <> 
       {user ? <NavLink className={(e)=> e.isActive && "text-red-500"} to={"/user-profile"} >settings</NavLink> 
       
       :
       <NavLink className={(e)=> e.isActive && "text-red-500"} to='/login' >Login</NavLink>
           }
        </>}
    </div>
  )
}

export default Nav