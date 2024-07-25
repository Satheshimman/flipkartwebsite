import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "./Home/Carousel";
import { Carousel2 } from "./Home/Carousel_2";
import { TopCarousel } from "./Home/TopCarousel";
import { Footer } from "./Home/Footer";
import { Show } from "./Home/Show";
import { upsearch } from "./Reducer";

export const Home=()=>{
    const store=useSelector(
        ({imman})=>imman
    )
    const dispatch=useDispatch()


    return(
        <div>
           
           <Show/>
           <TopCarousel/>
           <Carousel/>
           <Carousel2/>
           
          
           
        </div>
    )
}