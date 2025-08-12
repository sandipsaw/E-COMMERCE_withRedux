import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutuser } from '../store/userAction'
const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.user)
  console.log(user);

  const logOutHandler = () => {
    dispatch(asynclogoutuser())
    navigate('/')
  }

  return (
    <div className='flex   text-2xl justify-center items-center h-15 font-semibold gap-10  bg-gray-300 '>

      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/' >Home</NavLink>
      <NavLink className={(e)=> e.isActive && "text-red-500"} to='/products' >Products</NavLink>

      {(user  && user?.isAdmin ) ? <>
       <NavLink className={(e)=> e.isActive && "text-red-500"} to={"/admin/create-product"} >Create Product</NavLink> 
       <button onClick={logOutHandler}>Log Out</button>
       </>
       :
       <> 
       {user ? <button onClick={logOutHandler}>Log Out</button>
       :
       <NavLink className={(e)=> e.isActive && "text-red-500"} to='/login' >Login</NavLink>
           }
        </>}
        

    </div>
  )
}

export default Nav