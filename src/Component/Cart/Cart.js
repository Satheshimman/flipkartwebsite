import { Container, Typography,Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Design.scss"
import { useDispatch, useSelector } from "react-redux";
import {  uparray, upcart, upprice, uptprice } from "../Reducer";
import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TiTick } from "react-icons/ti";





export const Cart=()=>{
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
                            
                          if(c.Iscart===true){
                            
                              aa[aa.length]=c
                                    
                          }
                })
            })
            setarr(aa)
            dispatch(upcart(aa))
    
        }
    
        useEffect(krishna,[store.array])
    
        
  
    const addtocart=()=>{
      
    }

    useEffect(addtocart,[])

    

    const plus=(val,ind)=>{
        let y=store.array.map((a,b)=>{
            return {...a,products:a.products.map((m,n)=>{
                return m.id==val.id ? {...m,quantity:m.quantity+1}:m
            })}
        })
        dispatch(uparray(y)) 
        krishna()
        total()

    }

  
        const minus=(val,i)=>{
            if(val.quantity>1){
                let y=store.array.map((a,b)=>{
                    return {...a,products:a.products.map((m,n)=>{
                        return m.id==val.id ? {...m,quantity:m.quantity-1}:m
                    })}
                })
                dispatch(uparray(y)) 
                // krishna()
                // total()
            }

            else{
                let x=store.array.map((a,b)=>{
                    return {...a,products:a.products.map((m,n)=>{
                        return m.id==val.id ? {...m,Iscart:false}:m
                    })}
                })
                dispatch(uparray(x)) 
                // krishna()
                // total()
            }
            krishna()
            total()

        }

        const remove=(val,id)=>{
            let y=store.array.map((a,b)=>{
                return {...a,products:a.products.map((m,n)=>{
                    return m.id==val.id ? {...m,Iscart:false}:m
                })}
            })
            dispatch(uparray(y))
            krishna()
            total()
        }
       
 





const total =()=>{
   if(arr.length >=1){
    var tquan=document.getElementById("tquan")
    var tprice=document.getElementById("tprice")
    var ttotal=document.getElementById("ttotal")
   
   var x=arr
   var total=0
   var quantity=0
   for(var i=0; i<x.length; i++){
     var calc= x[i].price*x[i].quantity
     total+=calc
   }

   for(var i=0; i<x.length; i++){
     var quan=x[i].quantity
     quantity+=quan
   }


   console.log(total)
   dispatch(upprice(total))
   console.log(store.price)
   console.log(quantity)
   tquan.innerHTML=((`price(${quantity}items)`)||"")
   tprice.innerHTML=(total||"")
   ttotal.innerHTML=(total||"")
 

   }
}

useEffect(()=>{
    total()
})
const nav=useNavigate()
const gofav=()=>{
    nav("/favourite")
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
}
const handleClose1 = () => {
  setOpen1(false);
};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
        
    };
    const handleClose = () => {
        let y=store.array.map((a,b)=>{
            return {...a,products:a.products.map((m,n)=>{
                return m.Iscart===true ? {...m,Iscart:false}:m
            })}
        })
        dispatch(uparray(y))
        krishna()
        total()
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
        <Container maxWidth="xl">
            <Box sx={{margin:"30px 30px",display:"flex"}}>
                <Box sx={{width:{lg:"65%",xs:"100%"}}}>
                    <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center",fontWeight:"600",padding:"10px  10px  20px 10px",boxShadow:"10px 10px 10px  white"}}>
                        <Box sx={{position:"relative"}}>
                           <Typography component="p" variant="p" sx={{color:"#2874F0",display:"flex"}}> Flipkart{store.value >= 1 ? <Typography component="p" variant="p" sx={{}}>({store.value})</Typography> :""}</Typography>
                           <Box sx={{backgroundColor:"#2874F0",height:"4px",width:"250%",position:"absolute",top:"43px",right:"-56px",display:{lg:"block",xs:"none"}}}></Box>
                        </Box>

                        <Box>
                           <Typography component="p" variant="p"> Grocery</Typography>
                        </Box>
                    </Box>

                    <Box sx={{margin:{lg:"30px 10px",xs:"5px 5px"},display:{xs:"block",sm:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"center"}}>
                        <Box sx={{}}>
                            <Typography component="p" variant="p">Delivererd To <b>Immanvel,627859</b></Typography>

                            <Typography component="span" variant="span" sx={{margin:"15px 0px 0px 0px",display:"inline-block"}}>14-5-39(2) nesevalar street surandai</Typography>
                        </Box>

                        <Box className="sathesh" sx={{margin:{xs:"10px 0px",sm:"10px 0px",lg:"0px"}}}>
                            <button>change</button>
                        </Box>

                    </Box>

                    {store.cart.map((a,b)=>{
                   return (
                     <>
                      <Box sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex"},justifyContent:"space-between",alignItems:"start"}}>
                          <Box sx={{width:{xs:"100%",lg:"25%"},height:"250px"}}>
                              <Box>
                                    <img src={a.img} style={{width:"100%",height:"150px"}}/>    
                              </Box>

                              
                              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0px"}}>
                                            <i style={{border:"1px solid #80808069",padding:"8px 8px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>plus(a,b)}><AiOutlinePlus/></i>

                                            <p style={{border:"1px solid #80808069",padding:"2px 20px"}}>{a.quantity}</p>

                                            <i style={{border:"1px solid #80808069",padding:"8px 8px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>minus(a,b)}><AiOutlineMinus/></i>
                              </Box>
                         </Box>  


                         <Box sx={{width:{xs:"100%",lg:"75%"}}}>
                             <Box sx={{padding:"0px 15px"}}>
                                <Box sx={{margin:"0px"}}>
                                    <p>{a.name}</p>
                                </Box>

                                <Box sx={{display:{xs:"none",lg:"flex"},justifyContent:"space-between",alignItems:"start",marginTop:"-1px"}}>
                                    <Box sx={{width:"60%"}}>
                                        <p style={{marginTop:"-1px"}}>Seller Alias:Proffosional</p>
                                    </Box>

                                    <Box sx={{width:"40%"}}>
                                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"35%"}}/>
                                    </Box>
                                </Box>

                                <Box sx={{display:{xs:"flex",lg:"flex"},justifyContent:"start",alignItems:"start"}}>
                                    <h3 style={{marginTop:"-3px"}}>{a.pricestr}</h3>
                                    <p style={{textDecoration:"line-through",margin:"-1px 20px 0px 20px"}}>{a.delprice}</p>
                                   <Box sx={{display:{xs:"none",lg:"block"}}}>
                                        <p style={{color:"#388E3C",fontWeight:"700",display:{xs:"none",lg:"block"},marginTop:"-1px"}}>12% discount offers appiled</p>
                                   </Box>
                                </Box>
                             </Box> 
                             <Box sx={{fontSize:"20px",fontWeight:"700",padding:"0px 38px 0px 10px",}}>
                               <Box sx={{display:{xs:"flex",sm:"block",lg:"flex"},justifyContent:"space-between",alignItems:"center"}}>
                                    <Box sx={{margin:{xs:"-5px 0px 0px 0px",sm:"-20px 0px 0px 0px",md:"",lg:"16px 0px 40px 0px"},cursor:"pointer"}}>
                                    <p onClick={()=>remove(a,b)}>Remove</p>
                                    </Box>
                                    <Box sx={{display:{xs:"none",sm:"block",md:"block",lg:"block"},margin:{xs:"",sm:"",md:"",lg:"19px 0px 40px 0px"}}}>
                                    <p>Save for Later</p>
                                    </Box>
                               </Box>
                          </Box>
                        </Box>

                              
                      </Box>
                      
                     </>
                   )
               })} 
                   


                    <Box className="chotta" sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>

                       
                       <Box>
                        <button style={{cursor:"pointer"}} onClick={handleOpen1}>Place Order</button>

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
                                        
                                        <h2>Do You Want To Purchase All the products </h2>
                                        <h5>{store.tprice}</h5>
                                    </Box>
                                    <Box>

                                    </Box>
                                </Box>
                            </Box>
                        <ChildModal />
                        </Box>
                    </Modal>
                        </Box> 

                        
                    </Box>
                </Box>

               

                <Box sx={{width:"35%",display:{xs:"none",lg:"block"},padding:"10px 20px"}}>
                    {arr.length >=1 ? <>
                        <Typography component="p" variant="p" sx={{fontSize:"20px", fontWeight:"600"}}>PRICE DETAILS</Typography>

                                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                
                                    <Typography component="p" variant="p" id="tquan" sx={{fontSize:"20px",color:"gray"}}>Price</Typography>
                                

                                
                                    <Typography component="p" variant="p" id="ttotal" sx={{fontSize:"20px",color:"gray"}}></Typography>
                                
                                </Box>


<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"30px 0px"}}>
  
    <Typography component="p" variant="p" sx={{color:"gray"}}>Discount</Typography>
 

 
    <Typography component="p" variant="p" sx={{color:"gray"}}>No discount</Typography>
 
</Box>

<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  
    <Typography component="p" variant="p" sx={{fontSize:"20px",color:"gray"}}>DeliveryCharges</Typography>
 

 
    <Typography component="p" variant="p" sx={{color:"gray"}}>₹0</Typography>
 
</Box>

<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"30px 0px",fontWeight:"600"}}>
  
  <Typography component="p" variant="p" sx={{}}>Total Amount</Typography>



  <Typography component="p" variant="p" id="tprice" sx={{}}></Typography>

</Box>

<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"30px 0px",fontWeight:"600"}}>
  
  <Typography component="p" variant="p" sx={{color:"#388e3c"}}>You will Save the Delivery charges In the Order</Typography>
</Box>
                    </>:""}
                </Box>
            </Box>
        </Container>
    )
            }

        