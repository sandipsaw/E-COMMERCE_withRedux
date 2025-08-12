

import axios from '../api/AxiosConfig'
import {loadProduct} from './ProductSlice';



export const asyncLoadProduct = () => async(dispatch,getstate) =>{
    try{
        const {data} = await axios.get('/products')
         dispatch(loadProduct(data));
    }catch(error){
        console.log(error);
        
    }
}

export const asyncUpdateproduct = (id,product) => async (dispatch,getstate) =>{
    try{
        // console.log("current state >>>>",getstate());
        const res = await axios.patch('/products/' + id,product)
        // console.log(user);
        // console.log(res.data);
        
        dispatch(asyncLoadProduct());
       
        //
         
    }catch(error){
        console.log(error);
    }
}


export const asyncdeleteproduct = (id   ) => async (dispatch,getstate) =>{
    try{
        // console.log("current state >>>>",getstate());
        const res = await axios.delete('/products/' + id)
        // console.log(user);
        // console.log(res.data);
        
        dispatch(asyncLoadProduct());
       
        //
         
    }catch(error){
        console.log(error);
    }
}




export const asyncCreateproduct = (product) => async (dispatch,getstate) =>{
    try{
        // console.log("current state >>>>",getstate());
        const res = await axios.post('/products',product)
        // console.log(user);
        // console.log(res.data);
        
        dispatch(asyncLoadProduct());
       
        //
         
    }catch(error){
        console.log(error);
    }
}


// export const asyncgetusers = async () =>{
//     try{
//         const res = await axios.get('/users')
//         console.log(res);
        
//     }catch(error){
//         console.log(error);
        
//     }
// }
