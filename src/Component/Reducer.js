import { createSlice } from "@reduxjs/toolkit";
import user from "./Main.json"

export const Slice=createSlice({
    name:"Flipkart",
    initialState:{
        name:"sathesh",
        products1:user.Main_products1,
        fashion:user.fashion,
        top:user.top,
        array:user.Main_products1,
        best:[],
        invalue:(""),
        details:[],
        cart:[],
        search:[],
        buynow:[],
        valuearray:[],
        fav:[],
        result:[],
        list:[],
        price:(""),
        pageTwoFilter:[]
       
    },
    reducers:{
        upPageTwoFilter:(state,action)=>{
          state.pageTwoFilter=action.payload
        },
       uparr:(state,action)=>{
         state.best=action.payload
       },

       upinvalue:(state,action)=>{
         state.invalue=action.payload
       },

       updet:(state,action)=>{
        state.details=action.payload
       },

       upcart:(state,action)=>{
         state.cart=action.payload
       },

       upfav:(state,action)=>{
        state.fav=action.payload
      },

       upcarousel1:(state,action)=>{
        state.carousel1=action.payload
       },

       uparray:(state,action)=>{
         state.array=action.payload
       },
       upsearch:(state,action)=>{
        state.search=action.payload
       },
       upbuynow:(state,action)=>{
        state.buynow=action.payload
       },
       upvaluearray:(state,action)=>{
         state.valuearray=[...state.valuearray,action.payload]
       },

       upresult:(state,action)=>{
        state.result=action.payload
      },
      uplist:(state,action)=>{
        state.list=action.payload
      },
      upprice:(state,action)=>{
        state.list=action.payload
      }
    }
})

export default Slice.reducer
export const {upPageTwoFilter,uparr,updet,upcart,upcarousel1,uparray,upinvalue,upsearch,upbuynow,upvaluearray,upfav,upresult,uplist,upprice}=Slice.actions
