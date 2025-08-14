import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncdeleteuser, asynclogoutuser } from '../store/userAction'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { asyncrUpdatetusers } from '../store/userAction'

const UserProfile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector((state) => state.userReducer.user)
    console.log(user);
    
    console.log("userProfile" ,user?.username);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: user?.username,
            Email: user?.Email, 
            password: user?.password,
            id:user?.id
        }
    }
    )
    const updateHandler = (user) => {
        console.log(user);
        
        console.log("id from userprofile",user.id);
        dispatch(asyncrUpdatetusers(user.id ,user))
        // navigate('/login')
        // reset()

    }

    const logoutHandler = () => {
        dispatch(asynclogoutuser())
        navigate('/')
        window.location.reload();window.location.reload();

    }

    const deleteuserHandler = ()=>{
        dispatch(asyncdeleteuser(user.id))
        navigate("/")
        window.location.reload();
    }
    return (
        <div className='flex justify-center items-center'>

            <div className='text-3xl text-green-500 flex border p-5 flex-col'>
                <h1>{user?.username}</h1>
                <h1>{user?.Email}</h1>
                
            </div>



            <form onSubmit={handleSubmit(updateHandler)} className='flex justify-center flex-col p-10 w-[500px] h-[400px] gap-10 border  m-10'>
                <input {...register('username')} className='outline-none border-b text-3xl' type='text' placeholder='userName' />
                <input {...register('Email')} className='outline-none border-b text-3xl' type='text' placeholder='Email' />
                <input {...register('password')} className='outline-none border-b text-3xl' type='password' placeholder='Password' />
                <div className='flex gap-4 '>
                    <button className='border bg-blue-400 w-[150px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>Update</button>


                <button className='border bg-blue-400 w-[150px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate' onClick={logoutHandler}>Logout</button>

                   <button className='border bg-blue-400 w-[150px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate' onClick={deleteuserHandler}>Delete</button> 

                </div>
            </form>
        </div>
    )
}

export default UserProfile