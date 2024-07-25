
import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { BsFillTagFill, BsLightningFill,BsFillCartCheckFill } from "react-icons/bs";
import { AiFillHeart,AiOutlineShoppingCart } from "react-icons/ai";
import "../Design.scss"
import { useDispatch, useSelector } from "react-redux";
import { uparr, uparray, upcart, updet } from "../Reducer";
import { useNavigate, useSearchParams } from "react-router-dom";


export const Prodetails=()=>{

    const store=useSelector(
        ({imman})=>imman
    )

    const dispatch=useDispatch()
    const [pro,setpro]=useState()
    const [arr,setarr]=useState([])
    const [param]=useSearchParams()
    let d=(parseInt(param.get("id")))


    const det=()=>{
       store.array.filter((val)=>{
            let y=val.products
            for(var j=0;j<y.length;j++){  
                let z=y[j].id 
                // console.log(y) 
                if( z == d){
                    dispatch(updet([y[j]]))
                }
            }
       })
    }


    useEffect(det,[store.array])
    const nav=useNavigate()
       
const addcart=(val,ind)=>{
    
            let y=store.array.map((a,b)=>{
                return {...a,products:a.products.map((m,n)=>{
                    return m.id==val.id ? {...m,Iscart:!val.Iscart}:m
                })}
            })
            dispatch(uparray(y))
            det()
          
}

const krishna=()=>{
    var aa=[]
        var a=[...store.array]
        a.map((v,i)=>{
            var b=store.array[i].products
            b.filter((val,ind)=>{
                var c=store.array[i].products[ind] 
                        
                      if(c.Iscart===true){
                        
                          aa[aa.length]=c
                                
                      }
            })
        })
        setarr(aa)
        dispatch(upcart(aa))

    }

    useEffect(krishna,[store.array])


const fav=(val,ind)=>{
    let y=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return m.id===val.id ? {...m,Isfav:!val.Isfav}:m
        })}
    })
    dispatch(uparray(y))
    det()
    console.log(y)
}

const shop=(s,r)=>{
    let y=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return s.id===m.id ? {...m,Isdet:!a.Isdet}:m
        })}
    })
    dispatch(uparray(y))
    nav(`/buynow?id=${s.id}`)
    
}
    
    return(
        <Container maxWidth="xl">
             <Box sx={{width:"100%",margin:"20px 0px",display:"flex", flexWrap:{xs:"wrap",sm:"",md:"nowrap",lg:"nowrap"},justifyContent:"space-between",alignItems:""}}>

                {store.details.map((a,b)=>{
                    return(
                        <>
                           <Box sx={{width:{xs:"100%",sm:"100%",lg:"40%"},padding:"40px 40px",position:"relative"}}>
                    <Box sx={{boxShadow:"8px 8px 8px white",padding:{xs:"",sm:"80px 80px",md:"60px 60px",lg:"40px 10px"}}}>
                        <Typography component="img" variant="img"
                         src={a.img}
                         sx={{width:"100%",padding:"20px 10px",height:"400px" }}
                        >
                        </Typography>
                        <Typography component="i" variant="i" sx={{position:"absolute",position: "absolute",fontSize: "28px",top: "14px",    right: "36px", backgroundColor:"whitesmoke",boxShadow:"5px 5px 5px white",color:a.Isfav ? "red":"#8080806b", padding: "10px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center",cursor:"pointer"}}onClick={()=>fav(a,b)}>
                            <AiFillHeart/>
                        </Typography>


                        <Box sx={{position:"absolute",top:"10px",left:"10px",fontSize:"30px",display:{xs:"block",sm:"none",lg:"none"},cursor:"pointer"}} onClick={()=>addcart(a,b)}>
                        
                            {a.Iscart ? <i>< BsFillCartCheckFill/></i> :<i><AiOutlineShoppingCart/></i>}
                        </Box>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:{xs:"center",sm:"space-between",md:"space-between",lg:"sapce-between"},alignItems:"center",margin:"30px 0px",flexWrap:{xs:"wrap",lg:"nowrap"},cursor:"pointer"}} >
                       <Box sx={{display:{xs:"none",sm:"flex",lg:"flex"},justifyContent:"center",alignItems:"center",margin:{xs:"10px 0px"}}} className="btn" onClick={()=>addcart(a,b)}>
                          <Box sx={{marginTop:"2px",fontSize:"30px"}}>
                                 {a.Iscart ? <i>< BsFillCartCheckFill/></i> :<i><AiOutlineShoppingCart/></i>}
                          </Box>
                           
                           <Box>
                                <button variant="submit" >
                                {a.Iscart ? "Remove to cart" :"Add To Cart "} 
                                </button>
                           </Box>
                       </Box>


                       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} className="btn1">
                            <i><BsLightningFill/></i>
                            <button variant="submit" onClick={()=>shop(a,b)}>
                                BUY NOW
                            </button>
                       </Box>
                    </Box>
                </Box>

                <Box sx={{width:{lg:"60%",xs:"100%"}}}>
                     <Box>
                        <Typography component="p" variant="p" sx={{fontSize:{xs:"12px",sm:"20px",lg:"22px"},margin:{lg:"5px",xs:"10px 0px"}}}>
                           {a.name}
                        </Typography>
                     </Box>

                     <Box sx={{display:{xs:"block",sm:"flex",lg:"flex"},justifyContent:{xs:"",sm:"space-between",lg:"start"},alignItems:"center"}}>
                        <Typography component="span" variant="span" sx={{color:"#2874F0",margin:"20px 0px",fontWeight:"600",fontSize:{xs:"12px",sm:"20px",lg:"22px"}}}>
                             Be The First Reviewed Of This Product
                        </Typography>
                        <Typography component="img" variant="img" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" sx={{width:{xs:"40%",sm:"20%",md:"20%",lg:"10%"},margin:{lg:"0px 20px",xs:"10px 0px"},display:{xs:"none",sm:"block",lg:"block"}}}>
                        </Typography>
                     </Box>

                     <Box sx={{display:{xs:"block",sm:"flex",lg:"flex"},justifyContent:"start",alignItems:"center"}}>
                        <Typography component="h3" variant="h3" sx={{fontWeight:"500",fontSize:"28px"}}>{a.pricestr}</Typography>
                        <Typography component="p" variant="p" sx={{textDecoration:"line-through",margin:{xs:"10px 0px",sm:"0px 15px",lg:"0px 20px"}}}>{a.delprice}</Typography>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Typography component="p" variant="p" sx={{color:"green",fontWeight:"600",fontSize:"20px"}}>12 % Off      
                            </Typography>
                        </Box>
                     </Box>

                     <Box sx={{margin:"10px 0px"}}>
                        <Typography component="" variant="p" sx={{fontWeight:"600",FontSize:"10px"}}>
                            Available Offers
                        </Typography>
                     </Box>

                     <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"5px 0px"}}>
                            <Typography component="i" variant="i" sx={{fontSize:"22px",color:"green"}}><BsFillTagFill/></Typography>
                            <Typography component="p" variant="p" sx={{fontSize:"14px",margin:"0px 0px 10px 10px"}}><b>Bank OfferFlat</b> ₹200 off on HDFC Bank  Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000 <span sx={{color:"#2874F0"}}className="sathi">T & C</span></Typography>
                        </Box>
                     </Box>

                     <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"5px 0px"}}>
                            <Typography component="i" variant="i" sx={{fontSize:"22px",color:"green"}}><BsFillTagFill/></Typography>
                            <Typography component="p" variant="p" sx={{fontSize:"14px",margin:"0px 0px 10px 10px"}}><b>Bank OfferFlat</b> ₹200 off on HDFC Bank  Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000 <span sx={{color:"#2874F0"}}className="sathi">T & C</span></Typography>
                        </Box>
                     </Box>

                     <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"5px 0px"}}>
                            <Typography component="i" variant="i" sx={{fontSize:"22px",color:"green"}}><BsFillTagFill/></Typography>
                            <Typography component="p" variant="p" sx={{fontSize:"14px",margin:"0px 0px 10px 10px"}}><b>Bank OfferFlat</b> ₹200 off on HDFC Bank  Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000 <span sx={{color:"#2874F0"}}className="sathi">T & C</span></Typography>
                        </Box>
                     </Box>

                     <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"5px 0px"}}>
                            <Typography component="i" variant="i" sx={{fontSize:"22px",color:"green"}}><BsFillTagFill/></Typography>
                            <Typography component="p" variant="p" sx={{fontSize:"14px",margin:"0px 0px 10px 10px"}}><b>Bank OfferFlat</b> ₹200 off on HDFC Bank  Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000 <span className="sathi">T & C</span></Typography>
                        </Box>
                     </Box>

                     <Box>
                        <Typography sx={{color:"#2874F0",fontWeight:"600"}} component="p" variant="p">View 20 More Offers</Typography>
                     </Box>

                     <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"10px 0px"}}>
                        <Typography variant="h6" component="h6" sx={{fontWeight:"600",margin:"0px 15px 0px 0px"}}> SONY</Typography>
                        <Typography variant="p" component="p" sx={{}}>2 More Years Warranty <span className="sathi">Know More</span></Typography>
                     </Box>
                </Box>
                        </>
                    )
                })}
            
                        
                       
                

                
             </Box>
        </Container>
    )
}