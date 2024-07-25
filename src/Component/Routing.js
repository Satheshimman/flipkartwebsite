import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Navbar } from "./Home/Navbar"
import { Best } from "./best/Best"
import { Cart } from "./Cart/Cart"
import { Footer } from "./Home/Footer"
import { Buynow } from "./buynow/Buynow"
import {Prodetails} from "./prodetails/Prodetails"
import { Favourite } from "./Favourites/Favourite"
import { Search } from "./search/Search"
import { Result } from "./search/Result"
export const Routing=()=>{
    return(
        <BrowserRouter>
          <Navbar/>
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/search" element={<Search/>}></Route>
             <Route path="/best" element={<Best/>}></Route>
             <Route path="/prodetails" element={<Prodetails/>}></Route>
             <Route path="/cart" element={<Cart/>}></Route>
             <Route path="/buynow" element={<Buynow/>}></Route>
             <Route path="/favourite" element={<Favourite/>}></Route>
             <Route path="/result" element={<Result/>}></Route>
           </Routes>
           <Footer/>
        </BrowserRouter>
    )
}