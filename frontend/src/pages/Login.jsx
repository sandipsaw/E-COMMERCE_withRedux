import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { asyncloginuser } from '../store/userAction'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, reset  } = useForm()

  const submitHandler = (data) => {
    console.log(data);
    data.id=nanoid()
    dispatch(asyncloginuser(data))
    reset()
    navigate('/')
    window.location.reload();
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center flex-col p-10 w-[500px] h-[400px] gap-10 border  m-10'>

      <input {...register('Email')} className='outline-none border-b text-3xl' type='text' placeholder='Email' />
      <input {...register('password')} className='outline-none border-b text-3xl' type='password' placeholder='Password' />
      <button className='border bg-blue-400 w-[200px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>Login</button>

      <Link to={"/register"} className='flex gap-4 mx-auto text-2xl' >
        <p>don't have an account</p>
        <span className='text-blue-400'>Register</span>
      </Link>
    </form>
  )
}

export default Login