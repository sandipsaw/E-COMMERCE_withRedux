import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = ({product}) => {

    const {title,price,description,id,image,category}=product
  return (


        <Link className='w-65 m-4' to={`/singleproduct/${id}`} > 
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        
        {/* Price */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ₹{price}
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
            </Link>  


  )
}

export default ProductCart