import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { uparray, upfav } from "../Reducer";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
export const Favourite=()=>{
    const [arr,setarr]=useState([])

    const dispatch=useDispatch()


    const store=useSelector(
        ({imman})=>imman
    )

    const krishna=()=>{
        var aa=[]
        var a=[...store.array]
        a.map((v,i)=>{
            var b=store.array[i].products
            b.filter((val,ind)=>{
                var c=store.array[i].products[ind] 
                        
                      if(c.Isfav===true){
                        
                          aa[aa.length]=c
                                
                      }
            })
        })
        setarr(aa)
        console.log(aa)
        dispatch(upfav(aa))
    
        }
    
        useEffect(krishna,[store.array])

const removeFav=(val,b)=>{
    let x=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return val.id===m.id ? {...m,Isfav:false}:m
        })}
     })

     dispatch(uparray(x))
     krishna()
}
    return(
        <Container>
            <div style={{marginTop:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
                    <Box sx={{width:{lg:"30%"},display:{xs:"none",lg:"block"}}}>
                        <div style={{display:"flex",justifyContent:"start",alignItems:"center",border:"1px solid #80808026",padding:"5px 10px",boxShadow:"10px 10px 10px white"}}>
                            <div style={{marginRight:"20px"}}>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"/>
                            </div>

                            <div style={{fontWeight:"500"}}>
                                <p>Hello</p>
                            </div>
                        </div>

                       <Box sx={{marginTop:"20px"}}>
                                <Box sx={{border:"1px solid #80808026",padding:"5px 10px"}}>
                                   <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                        <Box sx={{width:"20%"}}>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=="/> 
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"80%"}}>
                                            <p style={{fontWeight:"700",fontSize:"18px",color:"#808080b5"}}>MY ORDERS</p>
                                            <i><GrNext/></i>
                                        </Box>
                                   </Box>

                                   <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                       <Box sx={{width:"20%"}}>
                                             <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="/>
                                       </Box>

                                       <Box sx={{width:"80%"}}>
                                          <p style={{fontWeight:"700",color:"#808080b5"}}>ACCOUNT SETTINGS</p>
                                       </Box>
                                   </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center",fontSize:"15px"}}>
                                        <Box>
                                            <p>Page Informatiion</p>
                                            <p>Manage Addresses</p>
                                            <p>PAN Card Information</p>
                                        </Box>
                                        </Box>
                                </Box>

                                <Box>
                                    <Box sx={{border:"1px solid #80808026",padding:"5px 10px"}}>
                                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                            <Box sx={{width:"20%"}}>
                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+"/>
                                            </Box>

                                            <Box sx={{width:"80%",fontWeight:"700",color:"#808080b5"}}>
                                                <p>PAYMENTS</p>
                                            </Box>
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                            <Box>
                                                <p>Gifts UPI</p>
                                                <p>Saved UPI</p>
                                                <p>Saved Cards</p>
                                            </Box>
                                        </Box>    
                                        
                                    </Box>
                                </Box> 


                                 <Box>
                                    <Box sx={{border:"1px solid #80808026",padding:"5px 10px"}}>
                                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                            <Box sx={{width:"20%"}}>
                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4="/>
                                            </Box>

                                            <Box sx={{width:"80%",fontWeight:"700",color:"#808080b5"}}>
                                                <p>MY STAFF</p>
                                            </Box>
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                            <Box>
                                                <p>MY Coupons</p>
                                                <p>My Review & Ratings</p>
                                                <p>All Notifications</p>
                                                <p style={{color:"#2874F0"}}>My Wishlist</p>
                                            </Box>
                                        </Box>    
                                        
                                    </Box>
                                </Box> 

                                      
                       </Box>

                       <Box sx={{marginTop:"20px"}}>
                           <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #80808026",padding:"5px 10px",boxShadow:"10px 10px 10px white"}}>
                              <Box>
                                 <img src=""/>
                              </Box>

                              <Box sx={{fontweight:"700"}}>
                                 <p>LOGOUT</p>
                              </Box>
                           </Box>
                       </Box>
                    </Box>

                    <Box sx={{width:{xs:"100%",lg:"70%"}}}>
                        <Box sx={{padding:"0px 20px"}}>
                            <Box sx={{fontSize:"17px",fontWeight:"700",border:"1px solid #80808026",padding:"5px 10px",boxShadow:"10px 10px 10px white",marginLeft:"10px"}}>
                                <p>My WishList <span>({store.fav.length})</span></p>
                            </Box>

                            <Box sx={{marginTop:"20px"}}>
                                {store.fav.map((a,b)=>{
                                    return(

                                        
                                        <Box sx={{marginLeft:"10px",border:"1px solid #80808026",padding:"5px 10px",boxShadow:"10px 10px 10px white",display:{xs:"block",sm:"block",md:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"start",position:"relative"}}>
                                            <Box sx={{position:"absolute",top:{lg:"5px"},right:{lg:"10px"},fontSize:{xs:"30px",lg:"22px"},color:"#8080808f",cursor:"pointer",display:{xs:"none",sm:"none",lg:"block"}}}>
                                                <i onClick={()=>removeFav(a,b)}><AiFillDelete/></i> 
                                             </Box>
                                            
                                            <Box sx={{width:"100%"}}>
                                                <Box sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"center"}}>
                                                <Box sx={{width:{xs:"100%",sm:"50%",lg:"20%"}}}>
                                                         <img src={a.img} style={{width:"100%"}}/>
                                                </Box>

                                            

                                            <Box sx={{width:{xs:"100%",sm:"50%",lg:"80%"}}}>
                                                <Box sx={{padding:"0px 20px"}}>
                                                    <Box sx={{}}>
                                                        <p style={{marginBottom:"5px"}}>{a.name}</p>
                                                    </Box>

                                                    <Box sx={{margin:"10px 0px",display:"flex", justifyContent:"left",alignItems:"center",}}>
                                                        <Box sx={{backgroundColor:"#388E3C",padding:"1px 4px 2px 6px",display:"flex", alignItems:"center",fontWeight:"600",color:"white",borderRadius:"3px"}}>
                                                            <Typography component="i" variant="i" sx={{margin:"5px 2px 0px 0px"}}><AiFillStar/></Typography>
                                                            <Typography component="span" variant="span" sx={{}}>{a.rating}</Typography>
                                                        </Box>

                                                    

                                                        <Box>
                                                            <Typography component="img" variant="img" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" sx={{width:{xs:"45%",sm:"40%",md:"30%",lg:"20%"},marginLeft:"50px",marginTop:"5px"}}></Typography>
                                                        </Box>
                                                    </Box>


                                                    <Box sx={{display:"flex", justifyContent:"start",alignItems:"center"}}>
                                                            <Box>
                                                                <Typography component="p" variant="p" sx={{fontWeight:"600"}}>{a.pricestr}</Typography>
                                                            </Box>

                                                            <Box>
                                                                <Typography component="p" variant="p" sx={{textDecoration:"line-through",margin:"3px 20px"}}>{a.delprice}</Typography>
                                                            </Box>

                                                            <Box>
                                                                <Typography component="p" variant="p" sx={{fontWeight:"400",color:"#388E3C",display:{xs:"none",sm:"block",md:"block",lg:"block"}}}>20% 0ff </Typography>
                                                            </Box>
                                                     </Box>

                                                     <Box sx={{fontWeight:"700",display:{lg:"none"}}}>
                                                        <p onClick={()=>removeFav(a,b)}>Remove</p>
                                                     </Box>
                                                    </Box>
                                            </Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                        
                                    )
                                })}
                            </Box>


                        </Box>
                    </Box>

                    
                </div>
            </div>
        </Container>
    )
}