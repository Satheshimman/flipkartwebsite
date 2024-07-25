import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar,AiFillHeart } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { uparray, upresult } from "../Reducer";
import { useNavigate } from "react-router-dom";



export const Result=()=>{
    const dispatch=useDispatch()
    const nav=useNavigate()
    const store=useSelector(
        ({imman})=>imman
)

const searesult=()=>{
    let a=store.search.filter((val,ind)=>val.proname.toLowerCase().includes(store.invalue)).map((a,b)=>{
        return a
     })
     console.log(a)
     dispatch(upresult(a))
}
useEffect(searesult,[store.array])
const details=(val,i)=>{
    nav(`/prodetails?id=${val.id}`)

}

const guna=(val,ind)=>{
    let x=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return val.id===m.id ? {...m,Isfav:!m.Isfav}:m
        })}
     })
     console.log(val.id)

     dispatch(uparray(x))

     let y=store.result.map((a,b)=>{
        return val.id===a.id ? {...a,Isfav:!a.Isfav}:a
     })
     searesult()
}
    return(
        <Container maxWidth="xl">
            {store.result.length>1 ? 
                 <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-between",alignItems:"end"}}>
                 {store.result.map((a,b)=>{
                       
                     return(
                        <Box sx={{width:{xs:"100%",sm:"45%",md:"30%",lg:"25%"}}} >
                        <Box sx={{padding:"20px 30px",boxShadow:3,margin:"20px 0px"}} className="bestcart">
                            <Box sx={{position:"relative"}} className="best">
                                <Box sx={{ width:"100%",height:"250px",cursor:"pointer"}}>
                                    <img src={a.img} style={{width:"100%",height:"230px",padding:"10px 10px"}}/>
                                </Box>


                                <Box sx={{height:"165px"}}onClick={()=>details(a,b)}>
                                    <Box sx={{}}>
                                        <Box sx={{fontSize:"12px",fontWeight:"600"}}>
                                            <p>{a.name}</p>
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"-4px"}}>
                                            <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",backgroundColor:"green",color:"white",fontWeight:"600",padding:"0px 7px",fontSize:"13px"}}>
                                                <span>{a.rating}</span>
                                                <i style={{marginTop:"4px"}}><AiFillStar/></i>
                                            </Box>

                                            <Box sx={{marginLeft:"80px"}}>
                                                <Typography component="img" variant="img" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" sx={{width:{xs:"40%",sm:"35%",md:"80%",lg:"60%"}}}></Typography>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Box sx={{marginTop:"-7px",fontSize:"15px"}}>
                                                <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                                    <Box sx={{fontWeight:"600"}}>
                                                        <p>{a.pricestr}</p>
                                                    </Box>

                                                    <Box sx={{textDecoration:"line-through",margin:"0px 10px"}}>
                                                        <p>{a.delprice}</p>
                                                    </Box>

                                                    <Box sx={{fontWeight:"600",color:"green"}}>
                                                        <p>50% Off</p>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box sx={{marginTop:"-12px",fontWeight:"600",fontSize:"14px"}}>
                                            <span>Free delivery</span>
                                        </Box>

                                        <Box sx={{color:"green",marginTop:"-12px"}}>
                                            <h5>Big Saving deal</h5>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                     )
                 })}
                
              </Box>
                 : 
                 
                 <div>
                    <div>
                        <div>
                           <Box sx={{width:"100%",height:"80vh"}}>
                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <Box >
                                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <i style={{fontSize:"80px",fontWeight:"700",color:"red",marginTop:"10px"}}><BiErrorCircle/></i>
                                        <h1>Oops</h1>
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <h1>Search Something Else</h1>
                                        </Box>

                                        <Box sx={{display:{xs:"none",sm:"flex",md:"flex",lg:"flex"},justifyContent:"center",alignItems:"center"}}>
                                            <h2>There Is No Product That Matches Your Search</h2>
                                        </Box>
                                    </Box>
                                </Box>
                           </Box>
                        </div>
                    </div>
                </div>
                
                }
        </Container>
    )
}