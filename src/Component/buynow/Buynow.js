import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { uparray, upbuynow } from "../Reducer";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { MdDone,MdError, MdOutlineError } from "react-icons/md";
import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { TiTick } from "react-icons/ti";




export const Buynow=()=>{

    const store=useSelector(
        ({imman})=>imman
    )
const nav=useNavigate()    
const dispatch=useDispatch()
const [param]=useSearchParams()
let d=parseInt(param.get("id"))
const [arr,setarr]=useState([])

const [open, setOpen] = React.useState(false);
  const handleOpen = (val,id) => {
    let y=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return d===m.id ? {...m,Isdet:false}:m
        })}
    })
    dispatch(uparray(y))
    det()
    setOpen(true)
    
}
  const handleClose = () => setOpen(true);
    const det=()=>{
       
        store.array.filter((val)=>{
            let y=val.products
            for(var j=0;j<y.length;j++){  
                let z=y[j].id 
                // console.log(y) 
                if( z == d){
                    dispatch(upbuynow([y[j]]))
                }
            }
       })
        
    

     }
 
 
     useEffect(det,[store.array])

     const plus=(val,ind)=>{
        let x=store.array.map((a,b)=>{
            return {...a,products:a.products.map((c,d)=>{
                return val.id===c.id ? {...c,quantity:c.quantity+1}:c
            })}
        })
        dispatch(uparray(x))
        det()
     }
const gohome=()=>{
    nav("/")
}
const placeOrder=()=>{
    nav("/success")
}
     const minus=(val,ind)=>{
            if(val.quantity>1){
                let x=store.array.map((a,b)=>{
                    return {...a,products:a.products.map((c,d)=>{
                        return val.id===c.id ? {...c,quantity:c.quantity-1}:c
                    })}
                })
                dispatch(uparray(x))
            }

            else{
                let y=store.array.map((a,b)=>{
                    return {...a,products:a.products.map((c,d)=>{
                        return val.id===c.id ? {...c,Iscart:false}:c
                    })}
                })
                dispatch(uparray(y))
            }
            det()
     }

     const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #80808059',
        boxShadow: 24,
        p: 4,
        borderRadius:"10px",
      };

      const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

      

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => {
      setOpen1(true);
    };
    const handleClose1 = () => {
      setOpen1(false);
    };
    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
            nav("/")
          setOpen(false);
        };
      
        return (
          <React.Fragment sx={{}}>
            <Button onClick={handleOpen} style={{marginLeft:"14px",backgroundColor:"#3B71CA",color:"white"}} >Continue</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width:{xs:"100%",sm:"60%",md:"50%",lg:"50%"},textAlign:"center" }}>
               <h1 style={{fontSize:"45px",color:"green"}}><TiTick/></h1>
                <h2 style={{fontSize:{xs:"15px"}}}>Successfully Placed</h2>
                <Button onClick={handleClose}>Go To Home</Button>
              </Box>
            </Modal>
          </React.Fragment>
        );
      }
    return(
        <Box>
            <Container maxWidth="xl">
              
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
              <Box sx={{width:{xs:"100%",md:"100%",lg:"70%",padding:"0px 15px"}}}>
                <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0px",borderBottom:"1px solid #8080805e",padding:"0px 0px 0px 5px"}}>
                    <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                            <p style={{color:"#2874F0",backgroundColor:"#80808045",padding:"2px 8px",borderRadius:"34px"}}>1</p>
                            <h4 style={{fonweight:"600",margin:"0px 20px",color:"gray"}}>LOGIN</h4>
                            <i style={{fontweight:"600",fontSize:"20px",color:"#2874F0"}}><MdDone/></i>
                        </Box>
                        <Box sx={{marginTop:"-10px"}}>
                            <p>+91 9688202165</p>
                        </Box>
                    </Box>

                    <Box>
                        <button type="submit" style={{outline:"none",border:"1px solid #80808045",padding:"8px 12px",fontSize:"15px",color:"#2874F0",backgroundColor:"white"}}>Change</button>
                    </Box>
                </Box>

                <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0px",borderBottom:"1px solid #8080805e",padding:"0px 0px 0px 5px"}}>
                    <Box>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                             <p style={{color:"#2874F0",backgroundColor:"#80808045",padding:"2px 8px",borderRadius:"34px"}}>2</p>
                             <h4 style={{fonweight:"600",margin:"0px 20px",color:"gray"}}>Delivery Address</h4>
                            <i style={{fontweight:"600",fontSize:"20px",color:"#2874F0"}}><MdDone/></i>
                        </Box>

                        <Box sx={{marginTop:"-10px"}}>
                            <p style={{fontweight:"800",fontSize:"14px"}}>Immanvel <span style={{fontSize:"13px"}}>14-5-39(2) Nesevalar Street Surandai,surandai,TamilNadu-</span>627859</p>
                        </Box>
                    </Box>
                    <Box>
                        <button type="submit" style={{outline:"none",border:"1px solid #80808045",padding:"8px 12px",fontSize:"15px",color:"#2874F0",backgroundColor:"white"}}>Change</button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:"#2874F0",padding:"10px 10px",margin:"10px 0px"}}>
                    <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <span style={{backgroundColor:"white",marginLeft:{xs:"",lg:"7px"},padding:"3px 8px",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",color:"#2874F0",fontWeight:"600"}}>3</span>
                        <span style={{fontWeight:"600",marginLeft:"10px",color:"white"}}>ORDER SUMMARY</span>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        {store.buynow.map((a,b)=>{
                            return(
                                <Box>
                                   <Box sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"start"}}>
                                   <Box sx={{width:{lg:"20%"}}}>
                                        <Box sx={{padding:"0px 10px"}}>
                                        <Box>
                                             <Typography component="img" variant="img" src={a.img} sx={{width:"100%"}}></Typography>
                                        </Box>

                                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0px"}}>
                                            <i style={{border:"1px solid #80808069",padding:"8px 8px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>plus(a,b)}><AiOutlinePlus/></i>

                                            <p style={{border:"1px solid #80808069",padding:"2px 20px"}}>{a.quantity}</p>

                                            <i style={{border:"1px solid #80808069",padding:"8px 8px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>minus(a,b)}><AiOutlineMinus/></i>
                                        </Box>
                                        </Box>

                                    </Box>

                                    <Box sx={{width:{lg:"40%"}}}>
                                        <Box sx={{padding:"0px 0px"}}>
                                        <Box>
                                            <p style={{fontSize:"15px",fontWeight:"600"}}>{a.name}</p>
                                        </Box>

                                        <Box sx={{display:{xs:"flex",lg:"flex"},justifyContent:"start",alignItems:"center",marginTop:"-15px"}}>
                                            <p>Seller:Flipkart Bazzaar</p>

                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"20%",marginLeft:"20px"}}/>
                                        </Box>

                                        <Box sx={{display:{lg:"flex",xs:"flex",justifyContent:"start",alignItems:"center",    marginTop:"-20px"}}}>
                                            <span style={{fontSize:"13px",textDecoration:"line-through",display:{xs:"none",lg:"block"}}}>{a.delprice}</span>

                                            <h4 style={{margin:"0px 10px"}}>₹{a.quantity*a.price}</h4>

                                            <Box  sx={{color:"#388E3C",fontWeight:"600",display:"flex",justifyContent:"start",alignItems:"center"}}>
                                                <p>13% off 2offers appilied</p>
                                            </Box>

                                            
                                        </Box>    

                                            
                                        </Box>
                                    </Box>

                                    <Box sx={{width:{lg:"40%"}}}>
                                        <Box sx={{padding:"0px 5px",display:"flex",justifyContent:"space-between",alignItems:"center",margin:{xs:"5px 0px",lg:"30px 0px"}}}>

                                            <Box>
                                                <img src="https://rukminim2.flixcart.com/www/200/200/promos/10/08/2020/8ed1a6e7-6892-41e9-b208-75f043e1c258.png?q=90" style={{width:"35px"}}/>
                                            </Box>
                                            <Box sx={{marginLeft:"10px"}}>
                                                <p style={{fontSize:"13px",fontWeight:"600"}}>Open Box Delivery Is Eligible for this item. You Will receive a  confirmation for this payment</p>

                                                <a href="#" style={{textDecoration:"none",fontWeight:"600"}}>Know More</a>
                                            </Box>
                                        </Box>
                                    </Box>    
                                   </Box>
                                </Box>
                            )
                        })}

                                         <Box>
                                            <>

                                            
                                              <Button onClick={()=>handleOpen()} style={{fontSize:"17px",fontWeight:"600"}}>Remove</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                       <Box sx={{}}>
                                                            <Box sx={{fontSize:"80px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                <i style={{color:"red"}}><MdOutlineError/></i>
                                                            </Box>

                                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                <h3 style={{}}>Your CheckOut Has No Items</h3>
                                                            </Box>

                                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                <Button style={{backgroundColor:"#2874f0",padding:"10px 15px",fontsize:"17px",fontWeight:"600",color:"white"}} onClick={gohome}>Go To Home</Button>
                                                            </Box>
                                                       </Box>
                                                </Box>
                                            </Modal>
                                            </>
                                        </Box>
                    </Box>
                </Box>


                <Box sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"center",padding:"10px 0px"}}>
                    <p style={{fontWeight:"600",fontSize:"15px"}}>order Confirmation Will be Sent to <span style={{fontWeight:"600",fontSize:"16px"}}>satheshimman18@gmail.com</span></p>

                    <Button type="submit" style={{border:"none",outline:"none",backgroundColor:"#Fb641B",padding:"15px 35px",color:"white",fontWeight:"600"}} onClick={handleOpen1}>Continue</Button>

                     <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style1, width: {xs:"100%",sm:"60%",md:"50%",lg:"50%"} }}>
                            <Box sx={{display:"flex",justifyContent:"start",alignItems:"center",padding:"0px 10px"}}>
                                <Box>
                                    <Box>
                                        
                                        <h2>Your Total amount for the  product is</h2>
                                    </Box>

                                    {store.buynow.map((a,b)=>{
                                        return(
                                            <Box  sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                                <h2 style={{marginTop:"-10px"}}>Price:{a.quantity*a.price}</h2>
                                            </Box>
                                        )
                                    })}

                                    <Box>

                                    </Box>
                                </Box>
                            </Box>
                        <ChildModal />
                        </Box>
                    </Modal>

                    
                </Box>


                <Box>
                <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0px",borderBottom:"1px solid #8080805e",padding:"0px 0px 0px 5px"}}>
                    <Box sx={{padding:"5px 0px"}}>
                        <Box sx={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                            <p style={{color:"#878787",backgroundColor:"#80808045",padding:"2px 8px",borderRadius:"34px"}}>4</p>
                            <h4 style={{fonweight:"600",margin:"0px 20px",color:"gray"}}>PAYMENT OPTIONS</h4>
                        </Box>
                        
                    </Box>

                    
                </Box>
                </Box>

             </Box>


             <Box sx={{width:{xs:"100%",sm:"100%",lg:"30%",padding:"0px 20px"},display:{xs:"none",lg:"block"}}}>
                 <Box>
                     <Box sx={{borderBottom:"1px solid #80808045"}}>
                         <h3 style={{padding:"5px 0px",color:"#878787"}}>PRICE DETAILS</h3>
                     </Box>
                 </Box>

                 <Box>
                    {store.buynow.map((a,b)=>{
                        return  (

                        <Box> 
                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> 
                                <Box>
                                    <p>Price <span>({a.quantity} items)</span></p>
                                </Box>

                                <Box>
                                    <p>₹{a.quantity*a.price}</p>
                                </Box>
                            </Box>

                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #80808045"}}>
                                <p>Delivery Charges</p>

                                <p style={{color:"#388E3C"}}>FREE</p>
                            </Box>

                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #80808045",padding:"5px 0px"}}>
                                <h3>Total Payable</h3>

                                <h3>₹{a.quantity*a.price}</h3>
                            </Box>
                     </Box>
                            
                        )
                    })}


                 </Box>

                 <Box sx={{marginTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box>
                        {/* <i style={{fontSize:"30px"}}><BsShieldFillCheck/></i> */}
                        <img src={"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"} style={{width:"30px"}}/>
                    </Box>

                    <Box sx={{fontSize:"14px",color:"#878787",fontWeight:"600"}}>
                        <p>Safe & Secure Pyaments.Easy Returns 100% Authentic Products </p>
                    </Box>
                 </Box>
                 
             </Box>
              </Box>
                
            </Container>
        </Box>
    )
}