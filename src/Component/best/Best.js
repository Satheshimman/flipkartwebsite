import React, { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Drawer, FormControl, IconButton, InputLabel, List, MenuItem, Select, Snackbar, Typography } from "@mui/material";
import { AiFillCaretDown,AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { upPageTwoFilter, uparr, uparray, upcarousel1, updet, upsearch } from "../Reducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import MenuIcon from '@mui/icons-material/Menu';
import "../Design.scss"


export const Best=()=>{
    const store=useSelector(
        ({imman})=>imman
    )

  
 const dispatch=useDispatch()
 const nav=useNavigate()
 const [param]=useSearchParams()
 let f= param.get("id") 
 const[ind,setind]=useState( f)
const [sathish,setsathish]=useState(store.best)
const [min,setmin]=useState(0)
const [max,setmax]=useState(0)


 const set=()=>{
    setind(f)
 }
 useEffect(set,[])
 
 const best=()=>{
    
    let y=store.array.map((v)=>{
        if(v.id == f){
            dispatch(uparr(v.products)) 

            //filterd products rendering code
            dispatch(upPageTwoFilter(v.products))
            //

            setarr(v.products)
        }
    })
 }

 useEffect(best,[store.array])
const [arr,setarr]=useState() 

 
    const high=()=>{
        var sathesh=[...store.pageTwoFilter]
        var p=sathesh.sort(function(g,h){
            return h.price-g.price
        })
        dispatch(upPageTwoFilter(p))
    }

    const low=()=>{
        var sathesh=[...store.pageTwoFilter]
        var p=sathesh.sort(function(g,h){
            return g.price-h.price
        })
        dispatch(upPageTwoFilter(p))
    }

    const rating1=()=>{
       var r1=store.best.filter((a,b)=>{
        return a.rating>=4 ? a:""
       })
       dispatch(upPageTwoFilter(r1)) 
    }

   const rating2=()=>{
    var r2=store.best.filter((a,b)=>{
        return a.rating<4 && a.rating>=3 ? a:""
       })
    dispatch(upPageTwoFilter(r2))
   }

    const ascending=()=>{
        var sathesh=[...store.pageTwoFilter]
        var p=sathesh.sort(function(g,h){
            return g.name.localeCompare(h.name)
        })
        dispatch(upPageTwoFilter(p))
    }


    const descending=()=>{
        var sathesh=[...store.pageTwoFilter]
        var p=sathesh.sort(function(g,h){
            return h.name.localeCompare(g.name)
        })
        dispatch(upPageTwoFilter(p))
    }





    const  details=(val,i)=>{
         nav(`/prodetails?id=${val.id}`)
     
    } 

   const guna=(val,i)=>{
     let x=store.array.map((a,b)=>{
        return {...a,products:a.products.map((m,n)=>{
            return val.id==m.id ? {...m,Isfav:!m.Isfav}:m
        })}
     })
     console.log(val.id)

     dispatch(uparray(x))
     best()

   }

  




   const handleChangeMin = (event) => {
    event.preventDefault()
    setmin(event.target.value);
  };




  const handleChangeMax = (event) => {
    event.preventDefault()
    setmax(event.target.value);
  };

  const minmax=()=>{
    if (min>0 && max>0){
       var a= store.best.filter((a,b)=>{
            return a.price>=min && a.price<=max ? a:""
        })
        setarr(a)

        dispatch(upPageTwoFilter(a))

        console.log(min,max)

    }
  }
    
  useEffect(minmax,[min,max])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>   
         <Box sx={{padding:"20px 20px",fontSize:"17px",fontWeight:"600"}}>
            <Box>
                <Typography component="p" variant="p" sx={{borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={ascending}>Popularity</Typography>

                <Typography component="p" variant="p" sx={{borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={descending}>Newest First</Typography>

                <Typography component="p" variant="p" sx={{borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={high}>Price High to Low</Typography>

                <Typography component="p" variant="p" sx={{borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={low}>Price Low to High</Typography>

                <Typography component="i" variant="i" sx={{display:"flex",justifyContent:"start",alignItems:"center",margin:"10px 10px",borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={rating2}><span className="imman">3</span><AiFillStar/><span className="imman">& above</span></Typography>

                <Typography component="i" variant="i" sx={{display:"flex",justifyContent:"start",alignItems:"center",margin:"10px 10px",borderBottom:"1px solid #2370f4",paddingBottom:"15px",margin:"10px 0px"}} onClick={rating1}><span className="imman">4</span><AiFillStar/><span className="imman">& above</span></Typography>
            </Box>
         </Box>
      </List>
      
     
    </Box>
  );  
    return(
        <Container maxWidth="xl">
            <Box>
              <Box>
                 <Box sx={{display:{lg:"none",xs:"flex"},marginLeft:"20px",alignItems:"center"}}>
                    <React.Fragment key={'left'} sx={{width:{sm:"50%"}}}>
                            <Button onClick={toggleDrawer('left', true)}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2,color:"black", display: { xs:"block",lg:"none" } }}
                            >  <MenuIcon />
                            </IconButton>
                            </Button>
                            <Drawer
                            anchor={'left'}
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                            >
                            {list('left')}
                            </Drawer>
                     </React.Fragment>

                     <Typography component="p" variant="p" sx={{fontWeight:"600", fontSize:"20px",marginBottom:"10px"}}>
                        Sort By
                    </Typography>
                 </Box>
              </Box>
               <Box sx={{ display:"flex",justifyContent:"space-between",margin:{lg:"30px 3px "}}}>
                    <Box sx={{width:"20%",display:{lg:"block",xs:"none"}}}>
                    <div style={{}} className="shadow">
                        <Typography component="" variant="p" sx={{fontWeight:"600",fontSize:"25px"}} >Filters</Typography>
                        <Typography component="i" variant="i" sx={{}}></Typography>

                        
                    <Box sx={{margin:{lg:"25px 0px 15px 0px"}}}>
                        <Typography component="" variant="p"  sx={{color:"gray",fontSize:"18px"}}>CATEGORIES</Typography>
                    </Box>

                        <Box>
                            <Typography component="i" variant="i" sx={{}}>

                            </Typography>
                            
                            <Typography component="" variant="p" sx={{fontWeight:"600",borderBottom:"1px solid #80808052",padding:"0px 0px 10px 0px"}}>
                                    Health & Personal Care
                            </Typography>
                        </Box>

                        <Box sx={{margin:"30px 0px"}}>
                        <Typography component="" variant="p" sx={{fontWeight:"600"}}>PRICE</Typography>

                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"30px 0px",cursor:"pointer"}}>
                                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                                    <InputLabel id="demo-select-small-label">Min</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={min}
                                        label="Min"
                                        onChange={handleChangeMin}
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={100}>100</MenuItem>
                                        <MenuItem value={200}>200</MenuItem>
                                        <MenuItem value={300}>300</MenuItem>
                                        <MenuItem value={500}>500</MenuItem>
                                        <MenuItem value={700}>700</MenuItem>
                                        <MenuItem value={900}>900</MenuItem>
                                        <MenuItem value={1000}>1000</MenuItem>
                                        <MenuItem value={2000}>20000</MenuItem>
                                        <MenuItem value={3000}>3000</MenuItem>
                                    </Select>
                                </FormControl>


                            <Typography sx={{fontSize:"17px",fontWeight:"500",margin:"0px 20px"}}>To</Typography>

                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
                            <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                                        <InputLabel id="demo-select-small-label">Max</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={max}
                                            label="Age"
                                            onChange={handleChangeMax}
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1000}>1000</MenuItem>
                                            <MenuItem value={2000}>2000</MenuItem>
                                            <MenuItem value={3000}>3000</MenuItem>
                                            <MenuItem value={4000}>4000</MenuItem>
                                            <MenuItem value={5000}>5000</MenuItem>
                                            <MenuItem value={10000}>10000</MenuItem>
                                            <MenuItem value={20000}>20000</MenuItem>
                                            <MenuItem value={30000}>30000</MenuItem>
                                            <MenuItem value={40000}>40000</MenuItem>
                                            <MenuItem value={50000}>50000</MenuItem>
                                            <MenuItem value={70000}>70000</MenuItem>
                                            <MenuItem value={80000}>80000</MenuItem>
                                            <MenuItem value={100000}>100000</MenuItem>
                                            <MenuItem value={200000}>200000</MenuItem>
                                        </Select>
                             </FormControl>
                            </Box>
                        </Box>
                    </Box>

                        <Box sx={{padding:"5px 0px"}} className="img">
                            <Typography  component="img" variant="img" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" Sx={{}}></Typography>
                        </Box>

                        <Box sx={{margin:"5px 0px"}}>
                            <Typography component="p" variant="p">Delivery In 1 Day</Typography>
                        </Box>

                        


                        <Box sx={{}}>
                            <Typography component="h6" variant="h6"> CUSTOMER RATINGS</Typography>

                            <Box sx={{margin:"10px 0px",cursor:"pointer"}} >
                                <Typography component="i" variant="i" sx={{display:"flex",justifyContent:"start",alignItems:"center",margin:"10px 10px"}} onClick={rating1}><span className="imman">4</span><AiFillStar/><span className="imman">& above</span></Typography>
                            </Box>


                            <Box sx={{margin:"10px 0px",cursor:"pointer"}}>
                                <Typography component="i" variant="i" sx={{display:"flex",justifyContent:"start",alignItems:"center",margin:"10px 10px"}} onClick={rating2}><span className="imman">3</span><AiFillStar/><span className="imman">& above</span></Typography>
                            </Box>
                        </Box>


                        <Box sx={{}}>
                            <Typography component="p" variant="p" sx={{fontWeight:"600",fontSize:"20px", margin:"10px 0px"}} >OFFRES</Typography>

                            <ul className="list">
                                <li>Buy More & Save More</li>
                                <li>No Cost EMI</li>
                                <li>Special Price</li>
                            </ul>
                        </Box>

                        <Box sx={{}}>
                            <Typography component="p" variant="p" sx={{fontWeight:"600",fontSize:"17px", margin:"20px 0px"}} >DISCOUNT</Typography>
                            <Typography component="p" variant="p" sx={{fontWeight:"600",fontSize:"17px", margin:"20px 0px"}} >GST INVOICE AVILABLE</Typography>
                            <Typography component="p" variant="p" sx={{fontWeight:"600",fontSize:"17px", margin:"20px 0px"}} >AVAILABILITY</Typography>

                        </Box>
                    </div>
                    </Box>

                    <Box sx={{width:{lg:"80%",xs:"100%"},padding:"0px 20px"}}>
                         <Box sx={{margin:"0px 0px 30px 0px "}}>
                            <Typography component="p" variant="p" sx={{fontWeight:"600", fontSize:"20px"}}>
                                    Products
                            </Typography>
                         </Box>

                         <Box sx={{display:{lg:"flex",xs:"none"},justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #80808047",padding:"20px 0px"}}>
                            <Typography component="h6" variant="h6" sx={{fontWeight:"600", fontSize:"20px"}}>
                                Sort Buy
                            </Typography>

                            <Typography component="p" variant="p" sx={{fontWeight:"600", fontSize:"16px",cursor:"pointer"}} onClick={ascending}>
                                Popularity
                            </Typography>

                            <Typography component="p" variant="p"  sx={{fontWeight:"600", fontSize:"16px",cursor:"pointer"}} onClick={low}>
                                Price-Low to High
                            </Typography>

                            <Typography component="p" variant="p" sx={{fontWeight:"600", fontSize:"16px",cursor:"pointer"}} onClick={high}>
                                Price-High to Low
                            </Typography>

                            <Typography component="p" variant="p" sx={{fontWeight:"600", fontSize:"16px",cursor:"pointer"}} onClick={descending}>
                                Newest First
                            </Typography>
                         </Box>

                      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"end",margin:"30px 0px"}}>
                            {store.pageTwoFilter.map((a,b)=>{
                                    return(
                                            <Box sx={{width:{xs:"100%",sm:"45%",md:"30%",lg:"30%"}}} >
                                                <Box sx={{padding:"20px 30px",boxShadow:3,margin:"20px 0px"}} className="bestcart">
                                                    <Box sx={{position:"relative"}} className="best">
                                                        <Box sx={{ width:"100%",height:"250px"}}>
                                                            <img src={a.img} style={{width:"100%",height:"230px",padding:"10px 10px"}}/>

                                                            <Box sx={{position:"absolute",top:"23px",right:"2px",cursor:"pointer"}}  onClick={()=>guna(a,b)}>
                                                                <i style={{backgroundColor:"white",padding:"8px 8px",fontSize:"20px",display:"flex",justifyContent:"space-between",color:a.Isfav ? "red":"gray",alignItems:"center",borderRadius:"50%"}}><AiFillHeart/></i>
                                                            </Box>
                                                        </Box>


                                                        <Box sx={{height:"155px",cursor:"pointer"}}onClick={()=>details(a,b)}>
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
                         

                    </Box>
                    
              </Box>

              
           </Box>

           <suggestionCarousel/>
        </Container>
        
    )
}