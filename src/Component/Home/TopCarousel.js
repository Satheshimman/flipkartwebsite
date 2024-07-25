import { useSelector } from "react-redux"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from "@mui/material";
import "./Style.scss"


export const TopCarousel=()=>{
    const store=useSelector(
        ({imman})=>imman
    )
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
            // style={{ ...style, display: "block", background: "rgb(187 187 187)",height:"80px",width:"50px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"52%",right:"-5px" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            // style={{ ...style, display:{xs:"none",lg:"none"}, background: "rgb(187 187 187)",height:"80px",width:"50px",alignItems:"center",display:{xs:"none",lg:"none"},justifyContent:"center",zIndex:1,position:"absolute",top:"52%",left:"-5px" }}
            onClick={onClick}
          />
        );
      }


      
      return (
          <Container maxWidth="xl" >
           
                
           
            <Slider {...settings}>
                {store.top.map((val,ind) =>{
                        return(
                            <Box key={ind} sx={{marginTop:"30px",position:"relative"}}>
                                <Box sx={{padding:"8px 8px"}}>
                                    <Typography component="img" variant="img"
                                        src={val.img}
                                        sx={{width:"100%",height:{xs:"100px",sm:"150px",lg:"250px"}}}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                            
                        )
                    })
                }
            </Slider>

            
        </Container> 
    )
   
}