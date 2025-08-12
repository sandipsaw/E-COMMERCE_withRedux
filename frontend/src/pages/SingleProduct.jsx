import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { asyncUpdateproduct } from '../store/ProductAction'
import { asyncdeleteproduct } from '../store/ProductAction'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const products = useSelector((state) => state.productReducer.Product)
  const users = useSelector((state) => state.userReducer.user)

  const product = products?.find((p) => p.id == id)
  console.log(product);


  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  })
  const productUpdatehandler = (product) => {

    console.log(product);

    // dispatch(asyncregisterusers(product))
    dispatch(asyncUpdateproduct(id, product))





  }

  const Deletehandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
  }

  return (
    product ?
      <div className='flex flex-col ' >
        <div className='flex w-[1000px] items-start p-10 m-25 border'>
          <div className=''>
            <img className='w-[600px]' src={product.image} />
          </div>
          <div className='pl-10 pr-10 pb-10 '>
            <h2 className='text-5xl font-semibold'>{product.title}</h2>
            <p className='text-3xl mt-2 '>{product.description} </p>
            <p className='text-2xl text-green-500 mt-2 font-semibold'>{product.price}Rs</p>
            <div className="flex text-yellow-400 text-2xl">
                        ★★★★☆
                    </div>
                    <p className="text-white-700 text-lg">(4.2 out of 5 based on 128 reviews)</p>
         
          </div>
        </div>
        <div>




          {users && users?.isAdmin && (<form onSubmit={handleSubmit(productUpdatehandler)} className='flex justify-center flex-col p-10 pt-10 w-[700px]  gap-10  m-10'>

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

            <div className='flex flex-row'>
              <button className='border  bg-blue-400 w-[250px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>update Product</button>

            <button onClick={Deletehandler} className='border  bg-blue-400 w-[250px] mx-auto text-3xl p-3 rounded-lg font-semibold hover:scale-105  duration-300 transform-translate'>Delete Product</button>
            </div>


          </form>)}
        </div>

      </div> : "loading.."
  )
}

export default SingleProduct