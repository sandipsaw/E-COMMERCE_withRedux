import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from './ProductCart';

const Products = () => {

 const productsData=useSelector((state)=> state.productReducer.Product)
console.log(productsData);

    const render = productsData.map((p)=>(
      <ProductCart key={p.id} product={p}/>
    ))


  return productsData.length>0 ?<div className='p-7 pt-10 flex flex-wrap'>{render}</div>: "loading..." 




}

export default Products