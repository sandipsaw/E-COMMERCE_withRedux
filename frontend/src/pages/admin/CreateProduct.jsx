import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { asyncCreateproduct } from '../../store/ProductAction'
const CreateProduct = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const createProductHandler = (product) => {
    product.id = nanoid()
    console.log(product);

    // dispatch(asyncregisterusers(product))
        dispatch(asyncCreateproduct(product))
    
        navigate("/products")
    reset()


  }
  return (
    <form onSubmit={handleSubmit(createProductHandler)} className='flex justify-center flex-col p-10 w-[500px] h-[550px] gap-10 border  m-10'>

      <input {...register('title')} className='outline-none border-b text-3xl' type='text' placeholder='Title' />

      <input {...register('price')} className='outline-none border-b text-3xl' type='Number' placeholder='Price' />

  

      

      <input {...register("description")} className='outline-none border-b text-3xl' type="text" placeholder='Description' />

      <select 
      {...register("category")}
      className='outline-none border-b text-3xl' defaultValue="accessories">
              <option value="footwear">Footwear</option>
              <option value="accessories">Accessories</option>
              <option value="electronic">Electronic</option>
              <option value="kitchen">Kitchen</option>
      </select>

      <input {...register('image')} className='outline-none border-b text-3xl' type='url' placeholder='Image url  ' />
      
      <button className='border  bg-blue-400 w-[300px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>Create Product</button>


    </form>
  )
}

export default CreateProduct