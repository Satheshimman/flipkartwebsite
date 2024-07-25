import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { BsCurrencyRupee } from "react-icons/bs";
import { useEffect, useState } from "react";
import { uparr, upcarousel } from "../Reducer";
import { GrPrevious } from "react-icons/gr";
import "./Style.scss"

export const Carousel=()=>{
    const store=useSelector(
        ({imman})=>imman
    )

    
 const [carousel,setcarousel]=useState([])
 const [arr,setarr]=useState([])


console.log(arr)

  const findcarousel1=()=>{
    let d =  store.array.filter((a,b)=>{
      return  a.id<=12 ?a:""
 })

 setcarousel(d)
}

useEffect(findcarousel1,[])


    var settings = {
        dots: false,
        infinite:true,
        speed: 500,
        slidesToShow: 6,
        loop:true,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <GrPrevious />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          }
        ]
      };
  
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            
            onClick={onClick}
          />
        );
      }
      
      function GrPrevious(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            
            onClick={onClick}
          />
        );
      }
     

      const [best ,setbest]=useState([])
      const dispatch=useDispatch()
      const nav=useNavigate()

      const details=(val,ind)=>{
         
        //  dispatch(uparr(val.products))
         nav(`/best?id=${val.id}`)
      }


      
      return (
          <Container maxWidth="xl">
           
                
           
            <Slider {...settings}>
                {carousel.map((val,ind) =>{
                        return( 
                           <Box sx={{margin:"20px 0px"}}>
                              <Box sx={{border:"1px solid #80808045",boxShadow:2,height:{xs:"200px",sm:"210px",lg:"230px"}}}>
                                  <Box sx={{height:"130px",padding:{xs:"15px 20px 5px 20px",sm:"20px 30px 5px 30px",md:"30px 20px 5px 20px",lg:"20px 20px 5px 20px"}}}>
                                      <img src={val.img} style={{width:"100%",height:"130px",cursor:"pointer"}}onClick={()=>details(val,ind)}/>
                                  </Box>

                                  <Box sx={{fontSize:"15px",marginTop:"-15px",textAlign:"center"}}>
                                      <h5>{val.title}</h5>
                                  </Box>

                                  <Box sx={{marginTop:"-15px",textAlign:"center",color:"green"}}>
                                      <h5>From ₹{val.price}</h5>
                                  </Box>

                                  <Box sx={{marginTop:"-15px",textAlign:"center",display:{xs:"none",lg:"block"}}}>
                                      <h5>{val.brands}</h5>
                                  </Box>
                              </Box>
                           </Box>
                            
                        )
                    })
                }
            </Slider>

            
        </Container> 
    )
   
}