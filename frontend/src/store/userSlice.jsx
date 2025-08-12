import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null,
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state ,action)=>{
            // console.log(action);
            state.user = action.payload;
        },
        removeuser:(state,action)=>{
            state.user = null;
        }
    }  
});

export const {loadUser}=userSlice.actions;
export default userSlice.reducer;