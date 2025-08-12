import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Cart:[],
}
export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        loadCart:(state ,action)=>{
            // console.log(action);
            state.Cart = action.payload;
        },
    }  
});

export const {loadCart}=CartSlice.actions;
export default CartSlice.reducer;