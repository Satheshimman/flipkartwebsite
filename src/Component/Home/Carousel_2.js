import { useSelector } from "react-redux"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { BsCurrencyRupee } from "react-icons/bs";

export const Carousel2=()=>{
    const store=useSelector(
        ({imman})=>imman
    )

    const add=()=>{
     let s=  store.fashion.map((a,b)=>{
          return 
       })
    }
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: false,
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
            // style={{ ...style, display: "block", background: "rgb(187 187 187)",height:"80px",width:"50px",display:"flex",alignItems:"center",justifyContent:"center" ,position:"absolute",top:"52%",right:"-3px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            // style={{ ...style, display: "block", background: "rgb(187 187 187)",height:"80px",width:"50px",alignItems:"center",display:"flex",justifyContent:"center",zIndex:1,position:"absolute",top:"52%",left:"-3px", opacity:{xs:"0",lg:"1"} }}
            onClick={onClick}
          />
        );
      }


      
      return (
          <Container maxWidth="xl" >
           
                
           
            <Slider {...settings}>
                {store.fashion.map((val,ind) =>{
                        return(
                          <Box sx={{margin:"20px 0px"}}>
                          <Box sx={{border:"1px solid #80808045",boxShadow:2,height:{xs:"200px",sm:"210px",lg:"240px"}}}>
                              <Box sx={{height:"130px",padding:{xs:"15px 20px 5px 20px",sm:"20px 30px 5px 30px",md:"30px 20px 5px 20px",lg:"20px 20px 5px 20px"}}}>
                                  <img src={val.img} style={{width:"100%",height:"130px"}}/>
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