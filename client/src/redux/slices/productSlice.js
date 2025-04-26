import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk("Products", async(data , {rejectedWithValue})=>{

try{ 
    const res= await axios.get("/user/getproducts", data)
    return res.data

}
catch(error){
    rejectedWithValue(error.response.data.msg)

}
})



    const productSlice = createSlice({
        name:"product",
        initialState:{
            isLoading: false,
            error: false,
            products:[]
        },
        reducers:{
        },
        extraReducers:{
            [GetProducts.pending]:(state)=>{state.isLoading=true},
            [GetProducts.fulfilled]:(state,action)=>{
                state.products= action.payload.products
                state.error= null
                state.isLoading= false
            }, 
            [GetProducts.rejected]: (state,action)=>{
                state.error= action.payload.error
               
            },
            
        }


    })

    export default productSlice.reducer
   
    