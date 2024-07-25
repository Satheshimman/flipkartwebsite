import React from "react";
import "./Style.scss"
import { Box } from "@mui/material";

export const Footer=()=>{
    return(
        <container maxWidth="xl">


         <Box>
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>

                  <Box sx={{width:{xs:"100%",sm:"100%",md:"50%",lg:"32%"}}}>
                        <Box sx={{padding:"5px 15px"}}>
                           <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/62f485577d8e3f7c.jpg?q=20" style={{width:"100%"}}/>
                        </Box>
                  </Box>

                  <Box sx={{width:{xs:"100%",sm:"100%",md:"50%",lg:"32%"},display:{xs:"block",sm:"block",md:"none",lg:"block"}}}>
                        <Box sx={{padding:"5px 15px"}}>
                           <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/9907748ed3b075f3.jpg?q=20" style={{width:"100%"}}/>
                        </Box>
                  </Box>

                  <Box sx={{width:{xs:"100%",sm:"100%",md:"50%",lg:"32%"}}}>
                        <Box sx={{padding:"5px 15px"}}>
                           <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/66a95f7b8a2de8d0.jpg?q=20" style={{width:"100%"}}/>
                        </Box>
                  </Box>
            </Box>
         </Box>
        
         <div style={{backgroundColor:"black",margin:"10px 0px 0px 0px"}}>
            <div className="footershow"style={{color:"white",display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"start"}}>
               <div style={{width:{xs:"100%",lg:"60%"}}}>
                  <div style={{padding:"20px 10px"}}>
                  <div  className="footerborder"style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"start"}}>
                  <div style={{width:{xs:"100%",sm:"100%",md:"50%",lg:"25%"}}}>
                        <h4 style={{fontWeight:"600",marginLeft:"30px",color:"gray"}}>About</h4>
                        <ul style={{listStyle:"none",cursor:"pointer",fontWeight:"600",fontSize:"14px"}}>
                           <li>Contact Us</li>
                           <li>About Us</li>
                           <li>Carrears</li>
                           <li>Flipkart Stories</li>
                           <li>Press</li>
                           <li>Flipkart Stories</li>
                           <li>Clear Trip</li>
                           <li>Corporate Information</li>
                        </ul>
                  </div>

                  <div style={{width:{xs:"100%",sm:"100%",md:"50%",lg:"25%"}}}>
                        <h4 style={{fontWeight:"600",marginLeft:"30px",color:"gray"}}>Help</h4>
                        <ul style={{listStyle:"none",cursor:"pointer",fontWeight:"600",fontSize:"14px"}}>
                           <li>Payments</li>
                           <li>Shipping</li>
                           <li>Cancellation&Returns</li>
                           <li>FAQ</li>
                           <li>Report Infrigment </li>
                           
                        </ul>
                  </div>

                  <div style={{width:{xs:"100%",sm:"100%",md:"50%",lg:"25%"}}}>
                        <p style={{fontWeight:"600",marginLeft:"30px",color:"gray"}}>ConsumerPolicy</p>
                        <ul style={{listStyle:"none",cursor:"pointer",fontWeight:"600",fontSize:"14px"}}>
                           <li>Cancellation & Returns</li>
                           <li>Terms of Use</li>
                           <li>Security</li>
                           <li>Privacy</li>
                           <li>Site Map </li>
                           <li>Grivience Redrassal</li>
                           <li>EPR Compiliances</li>
                           
                        </ul>
                  </div>

                  <div className="show"style={{width:{xs:"100%",sm:"100%",md:"50%",lg:"25%"}}}>
                        <p style={{fontWeight:"600",marginLeft:"30px",color:"gray"}}>Social</p>
                        <ul style={{listStyle:"none",cursor:"pointer",fontWeight:"600",fontSize:"14px"}}>
                           <li>Facebook</li>
                           <li>Twitter</li>
                           <li>You Tube</li>
                           <li>Instagram</li>
                        </ul>
                  </div>
                  </div>
                  </div>
               </div>

               <div style={{width:{xs:"100%",lg:"40%"}}}>
                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"start"}}>
                        <div style={{width:{xs:"100%",md:"50%",lg:"50%"},fontSize:"14px",padding:"10px 15px"}}>
                           
                              <h4 style={{fontWeight:"600",marginLeft:"-20px",color:"gray"}}>Mail Us</h4>
                                 <p>flipkart Internet Private Limited<br/>Buildings Alyossa,Begonia&<br/>Clove Embassy Tech Village,<br/>Outer Ring Road Devarabeshanagalli Village,<br/>Bengaluru 627859,<br/>Karnataka India</p>
                           
                        </div>

                        <div style={{width:{xs:"100%",md:"50%",lg:"50%"},fontSize:"14px",padding:"10px 15px"}}>
                           
                           <h4 style={{fontWeight:"600",marginLeft:"-20px",color:"gray"}}>Registered office address</h4>
                              <p>flipkart Internet Private Limited<br/>Buildings Alyossa,Begonia&<br/>Clove Embassy Tech Village,<br/>Outer Ring Road Devarabeshanagalli Village,<br/>Bengaluru 627859,<br/>Karnataka India,CIN:12433535HGJDURTC,<br/>Telephone:044-4321043210</p>
                        
                     </div>
                  </div>
               </div>
               
            </div>

            <Box>
               <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:{xs:"start",lg:"center"}}}>
                  <Box sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:"60%"}}}>
                        <Box className="footerborder" sx={{color:"white",display:{xs:"block",lg:"flex"},justifyContent:"space-between",alignItems:"center",padding:"0px 30px"}}>
                              <h5>Became a Seller</h5>
                              <h5>Advertise</h5>
                              <h5>Gift Cards</h5>
                              <h5>Help Centre</h5>
                              <h5>2007-2023 Flipkart.com</h5>
                        </Box>
                  </Box>

                  <Box sx={{width:{xs:"100%",sm:"100%",md:"50%",lg:"40%"}}}>
                     <Box sx={{padding:"0px 30px"}}>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" style={{width:"100%"}}/>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </div>
         
        </container>
    )
}