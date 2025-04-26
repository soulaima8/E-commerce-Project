import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateOrder = createAsyncThunk("CreateOrder", async(data , {rejectedWithValue})=>{

try{ 
    const res= await axios.post("/user/createorder", data,{ 
        headers:{
        token:localStorage.getItem("token")
    }})
   
    return res.data

}
catch(error){
    rejectedWithValue(error.response.data.msg)

}
})



    const orderSlice = createSlice({
        name:"order",
        initialState:{
            isLoading: false,
            error: false,
            orders:[]
        },
        reducers:{
        },
        extraReducers:{
            [CreateOrder.pending]:(state)=>{state.isLoading=true},
            [CreateOrder.fulfilled]:(state,action)=>{
                state.error= null
                state.isLoading= false
            }, 
            [CreateOrder.rejected]: (state,action)=>{
                state.error= action.payload.error
               
            },
            
        }


    })

    export default orderSlice.reducer
   
    