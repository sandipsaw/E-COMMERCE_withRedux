import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Product:[],
}
export const ProductSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        loadProduct:(state ,action)=>{
            // console.log(action);
            state.Product = action.payload;
        },
    }  
});

export const {loadProduct}=ProductSlice.actions;
export default ProductSlice.reducer;