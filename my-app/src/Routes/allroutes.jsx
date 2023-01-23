import {Routes, Route} from "react-router-dom"




import React from 'react'
import Home from "../pages/Home"
import Productpage from "../pages/Productpage"
import Cart from "../pages/Cart"

const Allroutes = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product" element={<Productpage/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
       </Routes>
    </div>
  )
}

export default Allroutes
