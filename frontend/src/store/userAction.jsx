import axios from '../api/AxiosConfig'
import Login from '../pages/Login';
import {loadUser} from './userSlice';




export const asyncCurrentusers= () => async (dispatch,getState)=>{
     
    try {
        const user =JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
        else console.log("user not logged in!");
    } catch (error) {
        console.log(error);
    }

}


export const asynclogoutuser=() => (dispatch,getState)=>{

    try {
        localStorage.removeItem("user")
        
    } catch (error) {
        console.log(error);  
    }
}
export const asyncdeleteuser=(id) => async(dispatch,getState)=>{

    try {
        
        const res=await axios.delete("/users/" + id);
        localStorage.removeItem("user")
        
    } catch (error) {
        console.log(error);  
    }
}

export const asyncloginuser=(user)=> async (dispatch,getState)=>{

    try {
        const {data}= await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user",JSON.stringify(data[0]))
        console.log(data[0]);
        

    } catch (error) {
        console.log(error);
        
        
    }
}
 
export const asyncrUpdatetusers = (id,user) => async(dispatch,getState)=>{
    try{
        // console.log("id aure user",id,"user",user);
        
        const res = await axios.patch("/users/" +id,user)
        console.log( "updated users" ,res);
        dispatch(loadUser(res.data));

        localStorage.setItem("user",JSON.stringify(res.data))

    }catch(error){
        console.log(error);
    }
}




export const asyncregisterusers = (user) => async (dispatch,getstate) =>{
    try{
        // console.log("current state >>>>",getstate());
        const res = await axios.post('/users',user)
        // console.log(user);
        // console.log(res.data);
        
        
       
        dispatch(loadUser(res.data));
         
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
