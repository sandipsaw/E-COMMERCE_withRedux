import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './userSlice'
import ProductSlice  from './ProductSlice'
import  CartSlice  from './CartSlice'

export const store = configureStore({
  reducer: {
    userReducer :userSlice,
    productReducer :ProductSlice,
    cartReducer :CartSlice
  },
})