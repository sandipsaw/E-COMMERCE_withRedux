import React, { useEffect } from 'react'
// import { asyncgetusers } from './store/userAction';
import { useDispatch, useSelector } from 'react-redux';
import axios from './api/AxiosConfig';
import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { asyncCurrentusers } from './store/userAction';
import { asyncLoadProduct } from './store/ProductAction';
import { asyncloginuser } from './store/userAction';
const App = () => {
  // const getproduct = async () =>{
  //   try{
  //     const res = await axios.get('/products')
  //     console.log(res);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncCurrentusers())
    dispatch(asyncLoadProduct())
    dispatch(asyncloginuser())
  }, [])
  


  return (
    <div>
      <Nav/>
      <MainRoutes/>

    </div>
  )
}

export default App