import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { asyncregisterusers } from '../store/userAction'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
const Register = () => {

const navigate = useNavigate();
  const dispatch = useDispatch()
  const {register ,handleSubmit , reset} = useForm()
  
  const submitHandler = (user)=>{
    console.log(user);
    user.id=nanoid()
    user.isAdmin=false;
    dispatch(asyncregisterusers(user))
    navigate('/login')
    reset()
    window.location.reload();
    
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center flex-col p-10 w-[500px] h-[500px] gap-10 border  m-10'>
      

    <input {...register('image')} className='outline-none border-b text-3xl' type='url' placeholder='image url'/>

      <input {...register('username')} className='outline-none border-b text-3xl' type='text' placeholder='userName'/>
      <input {...register('Email')} className='outline-none border-b text-3xl' type='text' placeholder='Email'/>
      <input {...register('password')} className='outline-none border-b text-3xl' type='password' placeholder='Password'/>
      <button className='border bg-blue-400 w-[200px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>Register</button>

      <Link to={"/login"} className='flex gap-4 mx-auto text-2xl' >
      <p>don't have an account</p>
      <span className='text-blue-400'>Login</span>
      </Link>
    </form>
  )
}

export default Register