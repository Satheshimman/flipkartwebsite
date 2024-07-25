import React, { useEffect, useState } from "react";
import { upsearch } from "../Reducer";
import { Box,Typography,Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


export const Search=()=>{
const dispatch=useDispatch()
const store=useSelector(
    ({imman})=>imman
)

const [arr,setarr]=useState([])
    const getsearch=()=>{
        var aa=[]
        var a=[...store.array]
        a.map((v,i)=>{
            var b=store.array[i].products
            b.filter((val,ind)=>{
                var c=store.array[i].products[ind] 
                        
        
                        
         aa[aa.length]=c
                                
                      
            })
        })
        setarr(aa)
        dispatch(upsearch(aa))
    }

    useEffect(getsearch,[])
   
    return(
        <Container>
                
        </Container>
    )
}